const express = require('express');
const router = express.Router();

const users = require('../../models/user_model');


// post
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const name = new users({
            name: req.body.name
        });
        await name.save();
        res.json({
            status: 200,
            message: "Data added successfully"
        });
    } catch(err) {
        return res.status(400).json({
            message: err.message
        })
    }
});

// Get users
router.get('/', (req, res) => {
    try {
        res.json({
            status: 200,
            // message: "Get all user's data",
            message: req.body
        });
        console.log(req.body);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

module.exports = router;
