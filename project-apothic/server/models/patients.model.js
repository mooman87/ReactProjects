import {oralsList} from './oralsList';

const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String, 
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
        },
        medication: {
            type: oralsList.name,
            required: [true, 'Medication is required'],
        },
    }
);

PatientSchema.index(
    { email: 1 }, 
    { unique: true,
    partialFilterExpression: {
        email: { $exists: true, $gt: '' },
    },
 }
);

module.exports.Patient = mongoose.model('Patient', PatientSchema);