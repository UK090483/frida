import { useEffect, useState } from "react"

export default function useShop(id) {
  const [itemCount, setItemCount] = useState(1)
  const [onCard, setOnCard] = useState(false)

  const checkonCard = () => {
    const items = Snipcart.store.getState().cart.items.items
    setOnCard(!!items.find(item => id === item.id))
  }
  const eraseItem = () => {
    if (window.Snipcart) {
      const items = Snipcart.store.getState().cart.items.items
      const item = items.find(item => id === item.id)
      window.Snipcart.api.cart.items.remove(item.uniqueId)
      setOnCard(false)
    }
  }
  const openCard = () => {
    if (window.Snipcart) {
      window.Snipcart.api.session.setLanguage("de")
      window.Snipcart.api.theme.cart.open()
    }
  }

  useEffect(() => {
    const unspscribe = window.Snipcart.store.subscribe(() => {
      setItemCount(Snipcart.store.getState().cart.items.count)
      if (id) {
        checkonCard()
      }
    })
    setItemCount(Snipcart.store.getState().cart.items.count)
    if (id) {
      checkonCard()
    }
    return () => {
      unspscribe()
    }
  }, [checkonCard, id])

  return { openCard, itemCount, onCard, eraseItem }
}
