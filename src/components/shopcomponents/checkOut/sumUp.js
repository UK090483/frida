import React, { useEffect } from "react"

export default function CheckOut() {
  // const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!window.SumUpCard) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = `https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js`
      script.async = true
      script.onload = () => {
        // setLoaded(true)

        window.SumUpCard.mount({
          checkoutId: "2ceffb63-cbbe-4227-87cf-0409dd191a98",
          showFooter: false,
          locale: "de-DE",
          onResponse: function (type, body) {
            console.log("Type", type)
            console.log("Body", body)
          },
        })
      }
      script.onerror = () => {
        throw new Error("Paypal SDK could not be loaded.")
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <React.Fragment>
      <div id="sumup-card"></div>
    </React.Fragment>
  )
}
