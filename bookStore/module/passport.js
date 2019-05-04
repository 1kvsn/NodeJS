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
  //the cb parameter above can also be written as done.
  console.log('.........callback function fired this');
  var email = profile.emails[0].value;
  Author.findOne({
    email: email
  }).then((author, err) => {
    if(author) {
      //user found in database
      cb(null, author);
    } else {
      //this is a new user so let's create a new entry for them.
      Author.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        image: profile.photos[0].value
      }, (err, author) => {
        if(err) cb(err);
        //Sends the complete Author object to the serializer.
        cb(null, author);
      })
    }
  });
  }
));

passport.serializeUser((user, done) => {
  //We're sending the user.id in the cookie
  done(null, user._id)
});

//As we've sent the user.id in the cookie, the deSerializer will retrieve just the id from the cookie when the cookie comes back to us from the browser.
passport.deserializeUser((id, done) => {
  Author.findById(id, (err, author) => {
    if(err) done(err);
    done(null, author);
  })
})















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