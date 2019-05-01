var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Author = require('../models/Author');

var GitHubStrategy = require('passport-github').Strategy;


passport.use(new GitHubStrategy({
  clientID: "f7d7d13e24017ba4f23a",
  clientSecret: "4d53e6fc1ff6086c0345225d6ae8154402e0eaae",
  callbackURL: "http://localhost:3000/auth/github/callback",
},
function(accessToken, refreshToken, profile, cb) {
  Author.findOne({})
  return console.log(profile);
  
  }
));















// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//     clientID: "628950037805-q548mf7e4jhu3bj41tbg8cn65o635uum.apps.googleusercontent.com",
//     clientSecret: "K4_qbulLsqu8MegDtD4hu47B",
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log(accessToken, refreshToken, profile)
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//        });
//   }
// ));

// passport.serializeUser(function(user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
// 	User.findById(id, function (err, user) {
// 		done(err, user);
// 	});
// });