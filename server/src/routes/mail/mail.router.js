const express = require('express');

const { httpGetInTouch } = require("./mail.controller");

const mailRouter = express.Router();

mailRouter.post('/getintouch', httpGetInTouch)

module.exports = mailRouter;