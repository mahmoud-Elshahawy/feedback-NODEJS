const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

//Load users Schema in User Constatnt.
const User = mongoose.model('users');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id).then(user => {
        done(null,user)
    });
});

// To specify which strategy will be used and Client Crendentials.
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((existingUser) => {
            if(existingUser){
                // The user already exists.
                done(null, existingUser);
            }
            else{
                // Create Record for new user.
                new User({
                    googleId: profile.id,
                    Name: profile.displayName
                }).save()
                .then(user => done(null,user));
            }
        })
        
    })
);