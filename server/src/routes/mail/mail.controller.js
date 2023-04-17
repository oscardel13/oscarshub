const { sendMail } = require('../../services/mail');

async function httpGetInTouch(req, res){
    const { body } = req
    if (!body.name || !body.email || !body.message){
        return res.status(400).json({error:"missing parameters"})
    }
    const userSubject = "Thanks for getting in touch"
    const userMessage = `This message is to confirm that we have recieved your message and will be contacting you soon.`
    try{
        sendMail(body.email, userSubject, userMessage)
        return res.status(201).json({success: true})
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    httpGetInTouch
}