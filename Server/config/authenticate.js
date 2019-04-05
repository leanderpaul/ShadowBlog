const passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    models = require('../models');

passport.use('local', new localStrategy((username, password, done) => {
    models.userModel.findOne({
        username
    }, (err, user) => {
        if (!user) {
            return done(null, false, {
                message: 'User account does not exist!!!.'
            });
        }
        if (user.password != password) {
            return done(null, false, {
                message: 'Incorrect password.'
            });
        }
        return done(null, user);
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    models.userModel.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;