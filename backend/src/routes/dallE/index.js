const express = require('express');

// controller
const { dallEController: {
    generateImage,
} } = require('../../controllers/index');

// router
const router = express.Router();

// create image
router.post('/', generateImage);

// testing route
router.get('/', (req, res) => res.send('Dall-E routes is working...'));

module.exports = router;