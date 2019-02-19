// http://git.estiam.com/sion.genders/NodeJSExpress

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    mongoose.model('Quizz').find({}, (err, items) => {
        res.render('index', { title: "Welcome to the Kahoot Quizz", quizzs : items });       
    });
});

router.get('/goodbye', (req, res, next) => {
    res.render('index', { title: "Goodbye !" });
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

module.exports = router;