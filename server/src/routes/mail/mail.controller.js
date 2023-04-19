const axios = require('axios');

const { sendMail } = require('../../services/mail');

require("dotenv").config();

async function httpGetInTouch(req, res){
    const { body } = req
    if (!body.name || !body.email || !body.message || !body.token){
        return res.status(400).json({error:"missing parameters"})
    }
    try{
        const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.token}`
        const recaptchaRes = await axios.post(recaptchaURL)
        if (!recaptchaRes.data.success) return res.status(401).json({success: false, error:"Recaptcha success failed to verify if human"})
    
        const respondSubject = "Thanks for getting in touch"
        const respondMessage = `This message is to confirm that we have recieved your message and will be contacting you soon.`
        sendMail(body.email, respondSubject, respondMessage)

        const userSubject = "New Get In Touch Message"
        const userMessage = `Name: ${body.name} \nEmail: ${body.email} \nMessage: ${body.message}`
        sendMail("oscardel413@gmail.com", userSubject, userMessage)
        
        return res.status(202).json({success: true})
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    httpGetInTouch
}