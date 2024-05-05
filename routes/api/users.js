const express = require('express');
const router = express.Router();

const users = require('../../models/user_model');


// post
router.post('/', async (req, res) => {
    try {
        // console.log(req.body);
        const user = new users({
            name: req.body.name,
            email: req.body.email,
            purpose: req.body.purpose,
            program: req.body.program,
            role: req.body.role
        });
        await user.save();
        res.json({
            status: 200,
            message: "Data added successfully"
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
});


// Get users
router.get('/', async (req, res) => {
    try {
        const name = await users.find({}).select('-_id -__v')
        res.json({
            status: 200,
            message: name
        });
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});


module.exports = router;