const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
// const cookieSession = require('cookie-session');
const path = require('path');

const api = require('./routes/api');
// const { config, passport, checkLoggedIn } = require("./services/secruity");

const ENV = process.env.NODE_ENV

const app = express();

// app.use(helmet());
app.use(helmet({ crossOriginEmbedderPolicy: false, contentSecurityPolicy: false}));

// app.use(cookieSession({
//     name:'session',
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2 ]
// }))
// app.use(passport.initialize());

// app.use(passport.session());

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'https://studio.apollographql.com']
}));

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, ".." , 'public')));

app.use('/v1',api)

// // this allows spa routing 
// app.get('/*', checkLoggedIn , (req,res) => {
//     res.sendFile(path.join(__dirname,'..','public','index.html'));
// });  

module.exports = app;