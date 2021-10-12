const express = require('express');

const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.index);

router.get('/create', courseController.create);

router.post('/store', courseController.store);

router.get('/:slug', courseController.detail);

module.exports = router;
