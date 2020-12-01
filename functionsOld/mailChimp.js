const axios = require("axios")
var crypto = require("crypto")
const listId = "a56d78dc14"
const apiRoot = `https://us2.api.mailchimp.com/3.0/lists/${listId}/members/`
const { MAILCHIMP_API_KEY } = process.env
const testMail = "private@konradullrich.com"
exports.handler = async (event, context) => {
  try {
    // const email = event.queryStringParameters.email;
    const email = testMail
    if (!email) {
      return {
        statusCode: 500,
        body: "email query paramter required",
      }
    }

    // https://gist.github.com/kitek/1579117
    let emailhash = crypto.createHash("md5").update(email).digest("hex")

    return axios({
      method: "put",
      url: apiRoot + emailhash,
      data: {
        email_address: email,
        status: "subscribed",
        status_if_new: "pending",
      },
      auth: {
        username: "bla",
        password: MAILCHIMP_API_KEY,
      },
    })
      .then(res => {
        console.log(res.data)
        return {
          statusCode: 200,
          body: JSON.stringify(res.data),
        }
      })
      .catch(err => {
        console.log("returning from here", err.response.data.detail)
        return { statusCode: 500, body: JSON.stringify(err.response.data) }
      })
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

// const client = require("@mailchimp/mailchimp_marketing")

// const listId = "16153377fd"
// const { MAILCHIMP_API_KEY } = process.env

// client.setConfig({
//   apiKey: MAILCHIMP_API_KEY,
//   server: "us2",
// })

// async function run() {
//   const response = await client.ping.get()
//   console.log(response)
// }

// const run2 = async () => {
//   const response = await client.lists.setListMember(listId, "subscriber_hash", {
//     email_address: testMail,
//     status_if_new: "pending",
//   })
//   console.log(response)
// }

// const testMail = "web@konradullrich.com"
// exports.handler = async (event, context) => {
//   await run2()
//   console.log(
//     "response----------------------------------------------------------------------"
//   )
//   //   console.log(response)

//   return {
//     statusCode: 200,
//   }
// }
