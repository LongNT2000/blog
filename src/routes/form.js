const express = require('express');

const router = express.Router();

const formController = require('../app/controllers/FormController');

router.use('/', formController.index);
router.use('/:slug', formController.show);

module.exports = router;
