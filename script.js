// Importing axios
const axios = require('axios');

apiKey = `pk_live_13833518dad40c76d92802bd65308bbf`
// Fetching API
fetch(`https://partners.every.org/v0.2/search/pets?apiKey=${apiKey}`)
    .then(response => {
        // Check if the response status is OK (in the range of 200-299)
        if (response.ok) {
            // Parse the JSON response
            return response.json();
        } else {
            // If response status is not OK, throw an error
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        // Handle the data received from the API
        console.log(data);
    })
    .catch(error => {
        // Handle errors if any
        console.error('Error fetching data:', error);
    });