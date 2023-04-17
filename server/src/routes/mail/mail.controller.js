const { sendMail } = require('../../services/mail');

async function httpGetInTouch(req, res){
    const { body } = req
    if (!body.name || !body.email || !body.message){
        return res.status(400).json({error:"missing parameters"})
    }
    try{
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