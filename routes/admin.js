
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.all('*', (req,res, next) => {
    if(req.user && req.user.roles.includes('admin'))
        next();
    else
        res.status(401).send('You don\'t have access to this ressource');
});

router.get('/hello', (req, res, next) => {
    res.send('Hello Admin');
});

module.exports = router;