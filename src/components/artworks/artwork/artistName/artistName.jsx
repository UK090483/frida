import React from "react"
import Frida from "../../../frida/frida"
import style from "./artistName.module.scss"
import useFitText from "../../../../hooks/useFitText"

export default function artistName({ name }) {
  return (
    <React.Fragment>
      {name.length > 15 ? (
        <WithTextFit name={name} />
      ) : (
        <WithOutTextFit name={name} />
      )}
    </React.Fragment>
  )
}

const WithTextFit = ({ name }) => {
  const { ref } = useFitText()
  return (
    <h5
      ref={ref}
      className={`${style.root} ${name.length > 16 ? style.smaler : ""}`}
    >
      <Frida text={name} textColor="#f5c5d9"></Frida>
    </h5>
  )
}

const WithOutTextFit = ({ name }) => {
  return (
    <h5 className={`${style.root} ${name.length > 16 ? style.smaler : ""}`}>
      <Frida text={name} textColor="#f5c5d9"></Frida>
    </h5>
  )
}
