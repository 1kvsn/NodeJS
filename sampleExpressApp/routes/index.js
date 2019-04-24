var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BookStore' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'BookStore' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'BookStore' });
});

module.exports = router;
