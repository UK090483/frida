import { useEffect, useState } from "react"

export default function useShop(id) {
  const [itemCount, setItemCount] = useState(null)
  const [onCard, setOnCard] = useState(false)
  const [ready, setReady] = useState(false)

  const eraseItem = () => {
    const items = window.Snipcart.store.getState().cart.items.items
    const item = items.find(item => id === item.id)
    window.Snipcart.api.cart.items.remove(item.uniqueId)
    setOnCard(false)
  }

  const openCard = () => {
    window.Snipcart.api.session.setLanguage("de")
    window.Snipcart.api.theme.cart.open()
  }

  useEffect(() => {
    console.log("useEffect")
    if (window.Snipcart) {
      !ready && setReady(true)
    } else {
      document.addEventListener("snipcart.ready", () => {
        console.log("snipcard ready")
        setReady(true)
      })
    }

    const checkonCard = () => {
      if (ready) {
        const items = window.Snipcart.store.getState().cart.items.items
        setOnCard(items.find(item => id === item.id))
      }
    }

    if (ready && !id) {
      setItemCount(window.Snipcart.store.getState().cart.items.count)
    }

    if (id && ready) {
      checkonCard()
    }
  }, [ready, id])

  return { openCard, itemCount, onCard, eraseItem }
}
