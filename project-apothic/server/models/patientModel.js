const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dob: String,
    dx: String,
    address: String,
    ssn: String,
    meds: String,
    allergies: String,
    notes: String
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;