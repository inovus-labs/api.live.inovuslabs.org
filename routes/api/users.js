const express = require('express');
const router = express.Router();


// Get users
router.get('/', (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get all user's data"
        });
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});

module.exports = router;