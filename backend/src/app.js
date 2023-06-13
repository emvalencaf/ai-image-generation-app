const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// router

// routes
app.get('/', (req, res) => {
    res.send('Server is running...');
});


module.exports = app;