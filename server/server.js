const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());