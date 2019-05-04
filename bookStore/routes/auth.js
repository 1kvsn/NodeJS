var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/github', passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // res.send(req.user); //The logged in user object is coming here with all their information.
    // res.send("You've reached the callback URL"); //This is just to test if the callback URL is working.
    res.redirect('/authors/mybooks');
  });

module.exports = router;