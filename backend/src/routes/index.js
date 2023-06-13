const express = require('express');
const router = express();


// Dall-E routes
 router.use('/api/dall-e', require('./dallE'));

// Post routes
router.use('/api/posts', require('./post'));

// general routes
router.get('/api', (req, res) => res.send('API is working!'));

module.exports = router;