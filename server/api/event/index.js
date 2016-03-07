'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/:shortDate', controller.index);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;
