const router = require('express').Router();
const MDO = require('../models/mdoModel');


//get all MDOs
router.get('/mdos', async (req, res) => {
    try {
        const mdo = await MDO.find();
        res.json(mdo);
    }
    catch (err) {
        res.status(500).send();
    }
});

//get specific MDO
router.get('/mdos/:id', async (req, res) => {
    try {
        const mdo = await MDO.findById(req.params.id);
        if (!mdo) {
            return res.status(404).send();
        }
        res.json(mdo);
    }
    catch (err) {
        res.status(500).send();
    }
});

//add new MDO
router.post('/new/mdos', async (req, res) => {
    try {
    const {
        name,
        phone,
        fax,
        address,
        npi
    } = req.body;
    
    if (!name || !phone || !fax || !address || !npi) {
        return res.status(400).json({
            errorMessage : 'Please provide all required fields'
        })
    }

    const newMDO = new MDO({
        name, phone, fax, address, npi
    });
    const savedMDO = await newMDO.save();
    res.json(savedMDO);
} catch (err) {
    res.status(500).send();
    console.log(err);
}
});
//update patient's MDO
router.patch('/mdos/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'phone', 'fax', 'address', 'npi'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).json({
            errorMessage : 'Invalid update'
        })
    }
    try {
        const mdo = await MDO.findById(req.params.id);
        updates.forEach((update) => mdo[update] = req.body[update]);
        await mdo.save();
        if (!mdo) {
            return res.status(404).send();
        }
        res.json(mdo);
    }
    catch (err) {
        res.status(500).send();
    }
});

//delete MDO
router.delete('/mdos/:id', async (req, res) => {
    try {
        const mdo = await MDO.findById(req.params.id);
        if (!mdo) {
            return res.status(404).send();
        }
        await mdo.remove();
        res.json({ message: 'MDO removed' });
    }
    catch (err) {
        res.status(500).send();
    }
});