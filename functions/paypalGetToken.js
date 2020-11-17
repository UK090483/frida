var fetch = require("node-fetch")
const authUrl = "https://api-m.sandbox.paypal.com/v1/oauth2/token"

var paypal = require("paypal-rest-sdk")

const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env

const clientIdAndSecret = `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`
const base64 = Buffer.from(clientIdAndSecret).toString("base64")

var create_payment_json = {
  intent: "sale",
  payer: {
    payment_method: "paypal",
  },
  transactions: [
    {
      amount: {
        total: "21.50",
        currency: "EUR",
        details: {
          subtotal: "15.00",
          tax: "2.00",
          shipping: "2.50",
          handling_fee: "1.00",
          shipping_discount: "-1.00",
          insurance: "2.00",
        },
      },

      description: "This is the payment transaction description.",
      custom: "This is a hidden value",
      invoice_number: "unique_invoice_number",

      soft_descriptor: "your order description",
      item_list: {
        items: [
          {
            name: "Item 1",
            description: "add description here",
            quantity: "2",
            price: "10.00",
            sku: "1",
            currency: "EUR",
          },
          {
            name: "Voucher",
            description: "discount on your order",
            quantity: "1",
            price: "-5.00",
            sku: "vouch1",
            currency: "EUR",
          },
        ],
      },
    },
  ],
  note_to_payer: "Contact us for any questions on your order.",
  redirect_urls: {
    return_url: "http://example.com/success",
    cancel_url: "http://example.com/cancel",
  },
}

const promise = () => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        reject(error)
        throw error
      } else {
        console.log("Create Payment Response")
        console.log(payment)

        resolve(payment)
        access_token = payment
      }
    })
  })
}

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_SECRET,
})

exports.handler = async (event, context) => {
  const res = await promise()
  return {
    statusCode: 200,
    body: JSON.stringify({ res }),
  }
}
