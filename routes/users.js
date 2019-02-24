// http://git.estiam.com/sion.genders/NodeJSExpress

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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


router.get('/logout',(req, res, next) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;