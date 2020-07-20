const sgMail = require('@sendgrid/mail')
// const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env



exports.handler = async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, subject, artistName, artistEmail, artworkName } = payload

    console.log(payload)
    sgMail.setApiKey(SENDGRID_API_KEY)

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        to: email,
        from: SENDGRID_TO_EMAIL,
        subject: subject ? subject : 'Contact Form Submission',

        html: body,
    };

    try {
        await sgMail.send(msg)

        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch (e) {
        return {

            statusCode: e.code,
            body: e.message
        }
    }
};