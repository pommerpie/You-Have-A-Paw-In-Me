const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Pet {
        name: String
        description: String
        url: String
        images: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        getPets: [Pet]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

`

module.exports = typeDefs 
