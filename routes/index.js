const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = function(io) {
    router.get('/show', (req, res, next) => {
        mongoose.model('Quizz').find({}, (err, items) => {
            res.render('showQuizz', { quizzs : items });       
        });
    });

    // router.post('/quizz/create', (req, res, next) => {
    //     mongoose.model('Quizz').find({}, (err, items) => {
    //         res.render('showQuizz', {quizzs : items });       
    //     });
    // });

    router.get('/', (req, res, next) => {
            res.render('index');       
    });

    router.post('/', (req, res, next) => {
        var params = "test"; //Gets data from url

        //Tell server that it is player connection
        // socket.emit('player join', params);
        res.redirect('/vue');
    });

    router.get('/vue', (req, res, next) => {
        res.render('vue');       
});


    router.get('/test', (req, res, next) => {
        res.render('quizz/create');       
    });

    return router;
}