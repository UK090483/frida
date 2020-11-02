const {
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STORYBLOCK_TOKEN,
} = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)
const axios = require("axios")
const StoryblokClient = require("storyblok-js-client")

const Storyblok = new StoryblokClient({
  accessToken: STORYBLOCK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
})
exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body)

  console.log(payload.items.join())

  const uuids = payload.items.join()

  const { price } = await getPrice(uuids)

  console.log(price)
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 1099,
  //   currency: "dkk",
  // })

  const body = JSON.stringify({
    publishableKey: STRIPE_PUBLISHABLE_KEY,
    clientSecret: "paymentIntent.client_secret",
  })

  return {
    statusCode: 200,
    body,
  }
}

const getPrice = async uuids => {
  try {
    const res = await Storyblok.get("cdn/stories/", {
      by_uuids: uuids,
    })

    console.log(res.data)
    let price = 0
    if (res) {
      res.data.stories.forEach(story => {
        price = price + story.content.price

        console.log(story.content.price)
      })
    }

    return { price: 300 }
  } catch (error) {
    return { error: error }
  }
}
