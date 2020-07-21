"use strict";
const nodemailer = require("nodemailer");
const { SMTP_USER, SMTP_PASSWORD, SMTP_TO } = process.env


exports.handler = async (event, context, callback) => {


    const payload = JSON.parse(event.body)
    const { email, subject, artistName, artistEmail, artworkName } = payload

    let transporter = nodemailer.createTransport({
        host: "mail.konradullrich.com",
        port: 465,
        secure: true,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        let info = await transporter.sendMail({
            from: 'meetfrida@konradullrich.com', // sender address
            to: SMTP_TO, // list of receivers
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
            statusCode: e.responseCode,
            body: e.response
        }
    }
};
