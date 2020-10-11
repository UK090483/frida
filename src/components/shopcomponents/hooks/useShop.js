import { useEffect, useState } from "react"

export default function useShop(id) {
  const [itemCount, setItemCount] = useState(null)
  const [onCard, setOnCard] = useState(false)

  const checkonCard = () => {
    const items = Snipcart.store.getState().cart.items.items
    setOnCard(items.find(item => id === item.id))
  }
  const eraseItem = () => {
    const items = Snipcart.store.getState().cart.items.items
    const item = items.find(item => id === item.id)
    window.Snipcart.api.cart.items.remove(item.uniqueId)
    setOnCard(false)
  }
  const openCard = () => {
    window.Snipcart.api.session.setLanguage("de")
    window.Snipcart.api.theme.cart.open()
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
