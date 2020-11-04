import React, { useState, useEffect } from "react"

const defaultState = {}

const UiContext = React.createContext(defaultState)

function UiContextProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [items, setItems] = useState(null)
  const [itemCount, setItemCount] = useState(0)

  const eraseItem = id => {
    const nextItems = [...items].filter(_id => id !== _id)
    setItems(nextItems)
  }
  const isOnCard = id => {
    return items && id ? items.find(_id => id === _id) : false
  }
  const openCard = () => {
    setCheckoutOpen(true)
  }
  const addToCart = () => {}
  const setInCart = id => {
    if (items) {
      setItems([...items, id])
    } else {
      setItems([id])
    }
  }

  useEffect(() => {
    const localStorageItems = localStorage.getItem("shopItems")
    if (localStorageItems && !items) {
      setItems(JSON.parse(localStorageItems))
    } else {
      localStorage.setItem("shopItems", JSON.stringify(items))
    }

    const nextItemCount = items ? items.length : 0
    setItemCount(nextItemCount)
  }, [items])

  return (
    <UiContext.Provider
      value={{
        items,
        setInCart,
        openCard,
        itemCount,
        isOnCard,
        eraseItem,
        addToCart,
        checkoutOpen,
        setCheckoutOpen,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export { UiContextProvider }

export default UiContext
