const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: [{ street: String, suite: String, city: String, zipcode: Number, geo: [{ lat: Number, lng: Number }] }],
    phone: Number,
    website: String,
    company: Object,
}, { timeseries: true }
);

module.exports = mongoose.model('User', Users)
// pierwszy paramert jest w liczbie ppojedyczej 