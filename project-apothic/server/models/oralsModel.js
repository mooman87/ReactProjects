const mongoose = require('mongoose');

const oralsSchema = new mongoose.Schema({
    name: String,
    generic: String,
    strength: String,
    addlStrength: String,
    moreStrength: String,
    fourthStrength: String,
    fifthStrength: String
});

const Orals = mongoose.model('Orals', oralsSchema);
module.exports = Orals;