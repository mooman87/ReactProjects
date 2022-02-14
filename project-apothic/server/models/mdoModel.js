const mongoose = require('mongoose');

const mdoSchema = new mongoose.Schema({
    name: String,
    phone: String,
    fax: String,
    address: [{
        street: String,
        city: String,
        state: String,
        zip: String
    }],
    npi: String
});

const MDO = mongoose.model('MDO', mdoSchema);
module.exports = MDO;