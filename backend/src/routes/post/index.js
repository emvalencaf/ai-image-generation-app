const express = require('express');

// controller


// router
const router = express.Router();


// testing route
router.get('/', (req, res) => res.send('Post routes is working...'));

module.exports = router;