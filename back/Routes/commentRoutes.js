const express = require('express');
const router = express.Router();

const controller = require('../Controllers/commentController');
router.post('/comment', controller.addComment);
router.get('/comment/:id', controller.getComments);

module.exports = router;
