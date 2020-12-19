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
  try {
    const response = await gateway.clientToken.generate({})
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: response.clientToken,
      }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body,
    }
  }
}
