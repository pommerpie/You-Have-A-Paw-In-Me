const { User } = require ('../models');
const { Pet } = require ('../models')
const {signToken, AuthenticationError} = require ('../utils/auth');
const jwt = require ('jsonwebtoken');

// const signToken = (user) => {
//     const payload = {
//         _id: user._id,
//         email: user.email,
//         username: user.username,
//     };
//     return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'});
// }

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        getPets: async () => {
            try {
                const data = await Pet.find();
                return data;
            } catch (error) {
                console.error('Error fetching pets:', error);
                throw error;
            }
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers