const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: { lat: String, lng: String }
    },
    phone: String,
    website: String,
    company: {
        name: String,
        catchPaharse: String,
        bs: String,


    }
}, { timestamps: true }
);

module.exports = mongoose.model('User', Users)

// pierwszy paramert jest w liczbie ppojedyczej 