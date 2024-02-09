const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { ApolloServer, gql } = require('@apollo/server');
//const { startStandaloneServer } = require('@apollo/server/standalone');
const {expressMiddleware} = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const {GraphQLClient} = require('graphql-request');
require('dotenv').config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
const PORT = process.env.PORT || 3001;
const apiKey = process.env.API_KEY;

const client = new GraphQLClient('https://partners.every.org/v0.2/search/pets?apiKey=');

const query = `query {
    getSomeData {
      field1
      field2
    }
  }`;

client.request(query)
    .then(data => console.log(data))
    .catch(error => console.error(error));

const startApolloServer = async () => {
    await server.start();
    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: async ({ req }) => ({ req }),
        }),
    );
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
        });
    });
};
startApolloServer();

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });