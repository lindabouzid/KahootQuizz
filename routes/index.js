// http://git.estiam.com/sion.genders/NodeJSExpress

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (io) => {
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
        io.sockets.emit('player join', params);
        res.redirect('/test');
    });


    router.get('/test', (req, res, next) => {
        res.render('quizz/create');       
    });

    // res.json pour envoyer un objet JS en JSON
    // router.get('/api', (req, res,next) => {
    //     res.json({ name: 'ELVIS JUICE'});
    // })

    // router.post('/' , callback); // Requetes type POST
    // router.put('/', callback) // Requetes type PUT
    // router.head('/', callback) // Requetes type HEAD
    // router.delete
    // router.patch
    // router.copy, router.options, router.purge, router.lock, router.unlock, router.propfind,

    return router;
}