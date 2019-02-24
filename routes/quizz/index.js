const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (io) => {
    router.get('/create', (req, res, next) => {
        res.render('quizz/create');
    });
    
    router.post('/create', (req, res, next) => {
        const item = req.body;
        console.log('item', item);

        req.body.tested = req.body.tested === 'on' ? true : false;
        mongoose.model('Quizz').create(req.body, { $push: { question: item.questions }}, (err, item) => {
            if(err){
                res.send(err);

            }
            else {
                console.log('test', item.questions);
                // io.sockets.emit('new quizz', `${req.user.username} created a new quizz : ${item.name}`);
                // res.render('showQuizz', {quizzs : items });
                mongoose.model('Quizz').find({}, (err, items) => {
                    res.render('showQuizz', { quizzs : items });       
                });
            }
        });
    });
       
    router.get('/delete/:id', (req, res, next) => {
        mongoose.model('Quizz').findById(req.params.id, (err, item) => {
            res.render('quizz/delete', { quizz: item });
        });
    });
    
    router.post('/delete/:id', (req, res, next) => {
        mongoose.model('Quizz').findByIdAndDelete(req.params.id, (err, item) => {
            if(err)
                res.send(err);
            else
                res.redirect('/show');
        });
    });

    router.get('/view/:id', (req, res, next) => {
        mongoose.model('Quizz').findById(req.params.id, (err, item) => {
            res.render('quizz/view', { quizz: item });
        });
    });

    router.post('/view/:id', (req, res, next) => {
        mongoose.model('Quizz').findByIdAndUpdate(req.params.id, req.body, (err, item) => {
            if(err)
                res.send(err);
            else
                res.redirect('/');
        });
    });

    router.get('/play/:id', (req, res, next) => {
        const gamePin = Math.floor(Math.random()*90000) + 10000; //new pin for game
        mongoose.model('Quizz').findByIdAndUpdate(req.params.id, { $set: { pin: gamePin }}, (err, item) => {
            if(err)
                res.send(err);
            else
                res.render('quizz/play', { quizz: item, pin: gamePin });
        });
    });
    return router;
}