import { useEffect, useState, useContext } from "react"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"

export default function useShop(id) {
  const { state } = useContext(SnipcartContext)
  const { cartQuantity, ready } = state
  const [onCard, setOnCard] = useState(false)

  // const checkonCard = () => {
  //   if (ready) {
  //     const items = window.Snipcart.store.getState().cart.items.items
  //     setOnCard(!!items.find(item => id === item.id))
  //   }
  // }

  const eraseItem = () => {
    if (ready) {
      const items = window.Snipcart.store.getState().cart.items.items
      const item = items.find(item => id === item.id)
      window.Snipcart.api.cart.items.remove(item.uniqueId)
      setOnCard(false)
    }
  }
  const openCard = () => {
    if (ready) {
      window.Snipcart.api.session.setLanguage("de")
      window.Snipcart.api.theme.cart.open()
    }
  }

  useEffect(() => {
    if (ready) {
      if (id) {
        const items = window.Snipcart.store.getState().cart.items.items
        setOnCard(!!items.find(item => id === item.id))

        // checkonCard()
      }
    }
  }, [id, ready])

  return { openCard, cartQuantity, onCard, eraseItem }
}
