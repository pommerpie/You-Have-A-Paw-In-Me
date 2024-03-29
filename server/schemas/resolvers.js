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
// const User = require ('../models/User');
// const {signToken, AuthenticationError} = require ('../utils/auth');

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
        addUser: async (_, { email, password }) => { // Destructure email and password from args
            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    throw new Error("User already exists");
                }
                console.log("Attempting to create user...");
                const user = await User.create({ email, password }); // Pass email and password to User.create
                console.log("User created successfully:", user);
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                console.error("Error creating user:", error);
                throw new Error("Failed to create user");
            }
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