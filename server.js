const express = require('express');
const app = express();


// env
require('dotenv').config();


// DB
const db = require('./config/db');
db.connect();


// Base URL (/)
const routes = require('./routes')
app.use('/', routes);


app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Resource not found'
    })
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 500,
        message: 'Internal server error'
    })
});


app.listen((process.env.PORT || 5000), () => {
    console.log(`\nServer listening on port: ${process.env.PORT || 5000}`)
});
