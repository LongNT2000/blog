const express = require('express');

const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.index);

router.get('/create', courseController.create);

router.get('/list', courseController.list);

router.get('/:id/edit', courseController.edit);

router.post('/store', courseController.store);

router.put('/update/:id', courseController.update);

router.patch('/delete/:id', courseController.destroy);

router.get('/trash', courseController.trash);

router.patch('/:id/restore', courseController.restore);

router.delete('/:id/force', courseController.force);

router.get('/:slug', courseController.detail);

module.exports = router;
