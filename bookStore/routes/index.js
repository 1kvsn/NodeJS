var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Store = require('../models/Store');

/* GET home page. */
router.get('/', function(req, res, next) {
  Store.find({}, (err, data) => {
    if(err) next(err);
    res.render('index', {data: data});
  });
});

module.exports = router;
