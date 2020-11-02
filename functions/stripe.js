"use strict"
const { SMTP_USER, SMTP_PASSWORD, SMTP_TO } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)

  console.log(SMTP_USER)
  console.log(payload)

  return {
    statusCode: 200,
    body: "Message sent",
  }
}
