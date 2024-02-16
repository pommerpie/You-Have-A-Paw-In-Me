const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { ApolloServer, gql } = require('@apollo/server');
const bodyParser = require('body-parser');
//const { startStandaloneServer } = require('@apollo/server/standalone');
const {expressMiddleware} = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const { User } = require('./models');
const {GraphQLClient} = require('graphql-request');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;
const apiKey = process.env.API_KEY;
const endpoint = `https://partners.every.org/v0.2/search/pets?apiKey=${apiKey}`;

const client = new GraphQLClient(endpoint);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3009'
}));

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(bodyParser.json());
server.start().then(() => {
    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
      }));
});


//app.use(bodyParser.json());

const startServer = async () => {

    await server.start()

    app.use('/graphql', expressMiddleware(server, {context: authMiddleware}))

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
    
    app.post('/save-card', (req, res) => {
        const { cardNumber, expiry, cvc } = req.body;
        res.status(200).send('Card saved successfully');
    });
    
    db.once('open', () => {     
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    });
};

startServer();

