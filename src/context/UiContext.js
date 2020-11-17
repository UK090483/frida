import React, { useState, useEffect, useRef } from "react"
import { navigate } from "gatsby"
const defaultState = {}

const UiContext = React.createContext(defaultState)

// const getAuthToken = async () => {
//   let token = null
//   await fetch("/.netlify/functions/paypalGetToken", {
//     method: "POST",
//   })
//     .then(async response => {
//       const r = await response.json()

//       console.log(r)
//       // token = r.token
//     })
//     .catch(err => console.log(err))
//   // return response
// }

function UiContextProvider({ children }) {
  const loadingRef = useRef(null)

  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [items, setItems] = useState(null)
  const [itemCount, setItemCount] = useState(0)
  const [clientToken, setClientToken] = useState(null)
  // const [clientAuthToken, setClientAuthToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const [userDataValid, setUserDataValid] = useState(false)

  const requestClientToken = () => {
    if (!clientToken && !loadingRef.current) {
      loadingRef.current = true
      getToken().then(token => {
        loadingRef.current = false
        console.log("requestClientToken ausgeführt")
        setClientToken(token)
      })
    }
  }

  // const requestAuthToken = () => {
  //   if (!clientAuthToken && !loadingRef.current) {
  //     loadingRef.current = true
  //     getAuthToken().then(token => {
  //       loadingRef.current = false
  //       console.log("requestClientToken ausgeführt")
  //       // setClientToken(token)
  //     })
  //   }
  // }

  const eraseItem = id => {
    const nextItems = [...items].filter(_id => id !== _id)
    setItems(nextItems)
  }
  const isOnCard = id => {
    return items && id ? items.find(_id => id === _id) : false
  }
  const openCard = () => {
    navigate("/checkout/", {
      state: {
        modal: true,
      },
    })
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
        // requestAuthToken,
        userDataValid,
        setUserDataValid,
        userData,
        setUserData,
        clientToken,
        requestClientToken,
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

const getToken = async () => {
  let token = null
  await fetch("/.netlify/functions/braintreeGetToken", {
    method: "POST",
    body: JSON.stringify({
      items: "bla",
    }),
  })
    .then(async response => {
      const r = await response.json()
      token = r.token
    })
    .catch(err => console.log(err))
  return token
}
