const express = require('express');

const router = express.Router();

const formController = require('../app/controllers/FormController');

router.get('/', formController.index);
router.get('/:slug', formController.show);

module.exports = router;
