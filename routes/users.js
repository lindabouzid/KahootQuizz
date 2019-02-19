// http://git.estiam.com/sion.genders/NodeJSExpress

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
require('../passport/local-strategy')(passport);

router.get('/signup', (req, res, next) => {
    res.render('users/register');
});

router.post('/signup', (req, res, next) => {
    req.body.roles = req.body.roles.split(',');
    mongoose.model('User').create(req.body, (err, item) => {
        res.redirect('/users/login');
    });
});

router.get('/login', (req, res, next) => {
    res.render('users/login');
});

router.post('/login',passport.authenticate('local', { failureRedirect: '/error'}) ,(req, res, next) => {
    res.redirect('/');
});

router.get('/logout',(req, res, next) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;