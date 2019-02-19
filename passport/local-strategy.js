const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
module.exports = (passport) => {
    passport.serializeUser((user, next) => {
        next(null, user);
    });
    
    passport.deserializeUser((id, next) => {
        mongoose.model('User').findById(id, (err, item) => {
            if(err)
                next(err, null);
            else
                next(null, item);
        });
    });

    passport.use('local', new LocalStrategy(
        (username, password, next) => {
            mongoose.model('User').findOne({ username }, (err, item) => {
                if(err)
                    return next(err);
                if(!item)
                    return next('User doesn\'t exist');
                if(item.password !== password)
                    return next('Password doesn\'t match');
                
                next(null, item);
            });
        } 
    ));
}