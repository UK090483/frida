const {
  BRAINTREE_MERCHANT_ID,
  BRAINTREE_PUBLIC_KEY,
  BRAINTREE_PRIVATE_KEY,
} = process.env

const braintree = require("braintree")

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: BRAINTREE_MERCHANT_ID,
  publicKey: BRAINTREE_PUBLIC_KEY,
  privateKey: BRAINTREE_PRIVATE_KEY,
})

exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body)
  const { nonce } = payload

  try {
    const result = await gateway.transaction.sale({
      amount: "10.00",
      paymentMethodNonce: nonce,
      // deviceData: deviceDataFromTheClient,
      options: {
        submitForSettlement: true,
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    }
  } catch (error) {}

  const body = JSON.stringify({
    token: "naaaa",
  })
  return {
    statusCode: 200,
    body,
  }
}
