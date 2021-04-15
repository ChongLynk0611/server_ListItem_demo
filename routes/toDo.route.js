var express = require('express');

var router = express.Router();

var controller = require('../controllers/toDo.controller');

router.get('/', controller.getToDo);
router.post('/finish' , controller.finish);

module.exports = router;