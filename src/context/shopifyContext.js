// import fetch from "isomorphic-fetch"
import React, { useState, useEffect } from "react"
import Client from "shopify-buy"

const StoreContext = React.createContext()

const client = Client.buildClient({
  storefrontAccessToken: "7167264619603fabaa685d01928ab18e",
  domain: `${"meetfrida"}.myshopify.com`,
})

const StoreContextProvider = ({ children }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  let initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    lineItems: [],
  }

  const [store, updateStore] = useState(initialStoreState)
  let isRemoved = false

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== "undefined"
      const existingCheckoutID = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null

      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem("shopify_checkout_id", checkout.id)
        }

        updateStore(prevState => {
          return { ...prevState, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = id => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!isRemoved && !checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null)
        }
      }

      const newCheckout = await createNewCheckout()
      if (!isRemoved) {
        setCheckoutInState(newCheckout)
      }
    }

    initializeCheckout()
  }, [isRemoved, store.client.checkout])

  useEffect(
    () => () => {
      isRemoved = true
    },
    []
  )

  useEffect(() => {
    const lI = store.checkout.lineItems.map(item => {
      return { variantId: item.variant?.id, lineItemId: item.id }
    })

    if (lI.length !== store.lineItems.length) {
      updateStore(prevState => {
        return { ...prevState, lineItems: lI }
      })
    }
  }, [store])

  return (
    <StoreContext.Provider
      value={{
        store,
        addVariantToCart: (variantId, quantity) => {
          if (variantId === "" || !quantity) {
            console.error("Both a size and quantity are required.")
            return
          }

          updateStore(prevState => {
            return { ...prevState, adding: true }
          })

          const { checkout, client } = store

          const checkoutId = checkout.id
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ]

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout, adding: false }
              })
            })
        },
        removeLineItem: (client, checkoutID, lineItemID) => {
          updateStore(prevState => {
            return { ...prevState, adding: true }
          })

          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res, adding: false }
              })
            })
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          updateStore(prevState => {
            return { ...prevState, adding: true }
          })
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ]
          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res, adding: false }
              })
            })
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContextProvider }

export default StoreContext
