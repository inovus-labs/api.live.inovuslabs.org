const express = require('express');
const router = express.Router();


const api = require('./api');


router.use('/api/v1', api);


router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API - Inovus Digital'
    });
});

module.exports = router;