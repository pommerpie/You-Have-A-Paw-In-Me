const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { ApolloServer } = require('@apollo/server');
//const { startStandaloneServer } = require('@apollo/server/standalone');
const {expressMiddleware} = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/fetch-data', (req, res) => {

    axios.get('https://api.example.com/data')
    .then(response => {
        res.json(response.data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' }); 
    });
});

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