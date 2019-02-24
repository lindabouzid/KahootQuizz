const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quizz = new Schema({
    name: String,
    subject: String,
    questions : [{
        question: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
        correct_answer: String
    }],
    pin: Number,
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Quizz', Quizz);