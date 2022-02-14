const router = require('express').Router();
const Orals = require('../models/oralsModel');
const Patient = require('../models/patientModel');
const MDO = require('../models/mdoModel');

//get all patients
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    }
    catch (err) {
        res.status(500).send();
}
});

//get specific patient
router.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.json(patient);
    }
    catch (err) {
        res.status(500).send();
    }
});

//add new patient
router.post('/new/patients', async (req, res) => {
    try {
    const {
        name,
        age,
        dob,
        dx,
        address,
        ssn,
        meds,
        allergies,
        notes
    } = req.body;
    
    if (!name || !age || !dob || !dx || !address || !ssn || !meds || !allergies) {
        return res.status(400).json({
            errorMessage : 'Please provide all required fields'
        })
    }

    const newPatient = new Patient({
        name, age, dob, dx, address, ssn, meds, allergies, notes
    });
    const savedPatient = await newPatient.save();
    res.json(savedPatient);
} catch (err) {
    res.status(500).send();
    console.log(err);
}
});

//update patient
router.patch('/patients/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'age', 'dob', 'dx', 'address', 'ssn', 'meds', 'allergies', 'notes'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send({ errorMessage: 'Invalid updates!' });
    }
    
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        updates.forEach((update) => patient[update] = req.body[update]);
        await patient.save();
        res.json(patient);
    }
    catch (err) {
        res.status(500).send();
    }
});

//delete patient
router.delete('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.json(patient);
    }
    catch (err) {
        res.status(500).send();
    }
});

module.exports = router;