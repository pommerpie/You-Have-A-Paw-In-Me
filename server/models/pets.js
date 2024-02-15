const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const petsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
});
const Pet = model(`Pet`, petsSchema);

module.exports = Pet;