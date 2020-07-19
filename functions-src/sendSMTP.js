"use strict";
const nodemailer = require("nodemailer");
const { SMTP_USER, SMTP_PASSWORD } = process.env
// const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler = async (event, context, callback) => {



    const payload = JSON.parse(event.body)
    const { email, subject, artistName, artistEmail, artworkName } = payload

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.konradullrich.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: SMTP_USER, // generated ethereal user
            pass: SMTP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object



    try {
        let info = await transporter.sendMail({
            from: 'web@konradullrich.com', // sender address
            to: "private@konradullrich.com", // list of receivers
            subject: "Kaufanfrage", // Subject line
            text: `${subject}   von   ${email}`, // plain text body
            html: `<b> Kunxtwerk:${artworkName} <br> Künstler:${artistName} - ${artistEmail}  <br> Käufer: ${email} </b>`,
        });

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