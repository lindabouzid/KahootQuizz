const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 1664;

require('./models/Quizz');

mongoose.connect('mongodb://localhost/KahootQuizz');

const routes = require('./routes/index')(io);
const quizzRoutes = require('./routes/quizz/index')(io);

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    next();
});

app.use('/', routes);
app.use('/quizz', quizzRoutes);


io.on('connection', socket => {
    console.log('A user connected');
    socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('player join', params =>{
        console.log("params : ",params);
    });    
});

http.listen(port, () => console.log(`App listening at http://127.0.0.1:${port}`));


