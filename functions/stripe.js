const {
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STORYBLOCK_TOKEN,
} = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)
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
  const uuids = payload.items.join()
  const { price } = await getPrice(uuids)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "eur",
  })

  console.log(paymentIntent)
  const body = JSON.stringify({
    publishableKey: STRIPE_PUBLISHABLE_KEY,
    clientSecret: paymentIntent.client_secret,
    price,
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
    let price = 0
    if (res) {
      res.data.stories.forEach(story => {
        price = price + parseInt(story.content.price)
      })
    }
    return { price }
  } catch (error) {
    return { error: error }
  }
}
