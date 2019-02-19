const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quizz = new Schema({
    name: String,
    question_number: Number,
    subject: String,
    Questions : [{
        question: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
        correct_answer: String
    }]
});

module.exports = mongoose.model('Quizz', Quizz);