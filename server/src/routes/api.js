const express = require('express');

// Router Imports
const mailRouter = require('./mail/mail.router')

const api = express.Router();

// route to imported Router
api.use('/mail', mailRouter)

module.exports = api;