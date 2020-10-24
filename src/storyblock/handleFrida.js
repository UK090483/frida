import React from "react"
import Frida from "../components/frida/frida"
const reactStringReplace = require("react-string-replace")

const HandlFrida = ({ text }) => {
  return (
    <React.Fragment>
      {text &&
        text.split("\n").map((item, key) => {
          return (
            <span key={item}>
              {reactStringReplace(item, "#MeetFrida", (m, i) => (
                <Frida key={i}></Frida>
              ))}
              <br />
            </span>
          )
        })}
    </React.Fragment>
  )
}
export default HandlFrida
