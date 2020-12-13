// const { STORYBLOCK_TOKEN, SUMUP_CLIENT_ID, SUMUP_CLIENT_SECRET } = process.env
// var fetch = require("node-fetch")
// const axios = require("axios")
// const StoryblokClient = require("storyblok-js-client")
// const qs = require("querystring")

// const Storyblok = new StoryblokClient({
//   accessToken: STORYBLOCK_TOKEN,
//   cache: {
//     clear: "auto",
//     type: "memory",
//   },
// })

// exports.handler = async (event, context) => {
//   const payload = JSON.parse(event.body)
//   const uuids = payload.items.join()
//   const { price } = await getPrice(uuids)

//   const token = await getToken()
//   console.log(token.data.access_token)
//   const checkOut = await createCheckout(price, token.data.access_token)

//   const body = JSON.stringify({
//     // publishableKey: STRIPE_PUBLISHABLE_KEY,
//     // clientSecret: paymentIntent.client_secret,
//     price,
//   })

//   return {
//     statusCode: 200,
//     body,
//   }
// }

// const getPrice = async uuids => {
//   try {
//     const res = await Storyblok.get("cdn/stories/", {
//       by_uuids: uuids,
//     })
//     let price = 0
//     if (res) {
//       res.data.stories.forEach(story => {
//         price = price + parseInt(story.content.price)
//       })
//     }
//     return { price }
//   } catch (error) {
//     return { error: error }
//   }
// }

// const createCheckout = async (price, token) => {
//   // const requestBody = {
//   //   checkout_reference: "ghjgjh" + Math.round(Math.random() * 1000000),
//   //   amount: 10,
//   //   currency: "EUR",
//   //   description: "Sample one-time payment",
//   //   merchant_code: "MS4MS2QM",
//   // }

//   // const config = {
//   //   headers: {
//   //     Authorization: h,
//   //     "Content-Type": "application/json",
//   //   },
//   // }

//   // return await axios
//   //   .post(
//   //     `https://api.sumup.com/v0.1/checkouts`,
//   //     JSON.stringify(requestBody),
//   //     config
//   //   )
//   //   .then(function (response) {
//   //     console.log(response)
//   //   })
//   //   .catch(function (error) {
//   //     console.log(error)
//   //   })
//   await fetch("https://api.sumup.com/v0.1/checkouts", {
//     method: "POST",
//     body: JSON.stringify({
//       checkout_reference: "ghjgjh" + Math.round(Math.random() * 1000000),
//       amount: 10,
//       currency: "EUR",
//       merchant_code: "MS4MS2QM",
//     }),
//     headers: {
//       Authorization: "Bearer " + token,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then(res => res.json())
//     .then(r => {
//       console.log(r)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// const getToken = async () => {
//   const requestBody = {
//     grant_type: "client_credentials",
//     client_id: SUMUP_CLIENT_ID,
//     client_secret: SUMUP_CLIENT_SECRET,
//   }

//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }

//   return await axios
//     .post(`https://api.sumup.com/token`, qs.stringify(requestBody), config)
//     .then(function (response) {
//       return { data: response.data }
//     })
//     .catch(function (error) {
//       return { error: error }
//     })
// }
