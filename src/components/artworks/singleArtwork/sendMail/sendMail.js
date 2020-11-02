import React, { useState, useContext } from "react"
import style from "./sendMail.module.scss"
import UiContext from "../../../../context/UiContext"
import Loading from "../../../../assets/loading.svg"
import Buttons from "./Buttons/buttons"
import Form from "./Form/Form"
import { useForm } from "react-hook-form"

export default function SendMail({ artwork }) {
  const { artworkName, artistName, artistEmail } = artwork
  const { userData, setUserData } = useContext(UiContext)

  const { watch, register, errors, formState, getValues, trigger } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    validateCriteriaMode: "firstErrorDetected",
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
    },
  })
  const { isValid } = formState

  const [buyProces, setBuyProces] = useState(false)
  const [process, setProcess] = useState("buy")

  const submitForm = async () => {
    try {
      const response = await fetch("/.netlify/functions/sendSMTP", {
        method: "POST",
        body: JSON.stringify({
          subject: artworkName + " from " + artistName,
          artistName,
          artworkName,
          artistEmail,
          email: getValues("email"),
          käufername: getValues("name"),
        }),
      })
      if (!response.ok) {
        setProcess("error")
        return
      }
      setProcess("thankyou")
    } catch (e) {
      setProcess("error")
    }
  }

  const handleClick = () => {
    if (!buyProces) {
      setBuyProces(true)
    } else {
      if (isValid) {
        setProcess("loading")
        setUserData({ name: getValues("name"), email: getValues("email") })
        submitForm()
      } else {
        trigger()
      }
    }
  }

  const byProcess = () => (
    <React.Fragment>
      {/* <Form
        show={buyProces}
        register={register}
        errors={errors}
        trigger={trigger}
        watch={watch}
      ></Form> */}
      {/* <Buttons
        buyProces={buyProces}
        setBuyProces={setBuyProces}
        handleClick={handleClick}
      ></Buttons> */}
    </React.Fragment>
  )

  return (
    <div className={`${style.root} ${buyProces ? style.active : 0}`}>
      {process === "buy" && byProcess()}
      {/* {process === "loading" && <Loading className={style.loader}></Loading>}
      {process === "thankyou" && Thanks()}
      {process === "error" && ErrorMsg()} */}
    </div>
  )
}

SendMail.defaultProps = {
  artwork: {
    artworkName: "dfgl",
    artistName: "dkfgjlk",
    artistEmail: "dfghkjdf",
  },
}

const Thanks = () => (
  <React.Fragment>
    <div>
      <h5>
        Gute Wahl{" "}
        <span role="img" aria-label="Smiley">
          🤩
        </span>
        !
      </h5>
      <p>
        Wir melden uns schnellstmöglich bei dir - in der Regel innerhalb von 2
        Tagen.
      </p>
    </div>
  </React.Fragment>
)
const ErrorMsg = () => (
  <React.Fragment>
    <h4>Ups Irgendetwas ging schief</h4>
  </React.Fragment>
)
