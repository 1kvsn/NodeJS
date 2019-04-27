var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexcontroller');

/* GET home page. */
router.get('/', index_controller.home);

module.exports = router;
