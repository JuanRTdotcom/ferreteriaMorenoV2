
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let User  = require('../models/usuario')

passport.use(new LocalStrategy({
  usernameField: 'username',
  passReqToCallback: true
}, async (req,username, password, done) => {
  // Match Email's User
  const user = await User.findOne({ 'usuario':username,'contrasenia':password});
  if (!user) {
    req.flash('error','Usuario inválido!')
    return done(null, false);
  } else {
    // Match Password's User
    // const match = await user.matchPassword(password);
    // if(match) {
      return done(null, user);
    // } 
    // else {
    //   return done(null, false, { error: 'Incorrect Password.' });
    // }
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});