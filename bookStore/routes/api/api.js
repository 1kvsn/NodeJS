var express = require('express')
var router = express.Router();
var bookRouter = require('./book');

router.use('/books', bookRouter);



module.exports = router;