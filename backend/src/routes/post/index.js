const express = require('express');

// controller
const { postController: {
    getAll,
    create,
} } = require('../../controllers');

// router
const router = express.Router();


// get all posts
router.get('/', getAll);

// createt a post
router.post('/', create);

// testing route
router.get('/', (req, res) => res.send('Post routes is working...'));

module.exports = router;