import React, { useContext } from "react"
import Slider from "../Slider/slider"

import UserContext from "../userContext/userContext"
import Artworklist from "../Artworklist/ArtworkList"
import Message from "../Message/message"
import Auth from "../Auth/auth"
import Header from "../../header/header"
import Logout from "../Auth/logout"
import UserOptions from "../userOptions/userOptions"
import style from "./userDashbord.module.scss"

export default function user() {
  const context = useContext(UserContext)
  const { user, userOptions } = context

  return (
    <div className={style.root}>
      {!user && <Auth></Auth>}

      {user && (
        <React.Fragment>
          <Header title={userOptions && userOptions.name}>
            <Logout></Logout>
          </Header>
          <UserOptions></UserOptions>

          <Message></Message>
          <Artworklist></Artworklist>
          <Slider></Slider>
        </React.Fragment>
      )}
    </div>
  )
}
