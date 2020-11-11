import React, { useContext } from "react"
import styled from "styled-components"
import CheckOutContainer from "./container/CheckoutContainer"
import UiContext from "../../../context/UiContext"
import BillingPannel from "./BillingPannel"
import ArtikelList from "./ArtikelList/ArtikelList"
import Payment from "./Payment/Payment"
import Button from "~components/buttons/button"
import { Navi, StyledNavButton, NavAnimationWrp } from "./Navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function CheckOut({ data, closeTo }) {
  const { items } = useContext(UiContext)
  const artworks = data.allFridaArtworks.nodes

  const [state, setState] = React.useState("artikel")
  const activeArtworks = items
    ? artworks.filter(item => {
        return items.includes(item.uuid)
      })
    : []

  const nextStep = nStep => {
    setState(nStep)
  }

  const NavButton = ({ goesTo, name, pos }) => {
    return (
      <StyledNavButton pos={pos}>
        <Button
          type={"clickButton"}
          onClick={() => {
            setState(goesTo)
          }}
          label={name}
        />
      </StyledNavButton>
    )
  }

  return (
    <CheckOutContainer closeTo={closeTo}>
      <AnimationWrp show={state === "artikel"}>
        {/* <div
          style={{ width: "100%", height: 3000, backgroundColor: "red" }}
        ></div> */}
        <ArtikelList
          name={"artikel"}
          artikel={activeArtworks}
          nextStep={() => {
            nextStep("kasse")
          }}
        ></ArtikelList>
      </AnimationWrp>

      <AnimationWrp show={state === "kasse"}>
        <BillingPannel
          name={"kasse"}
          artikel={activeArtworks}
          nextStep={() => {
            nextStep("payment")
          }}
          back={() => {
            nextStep("artikel")
          }}
        />
      </AnimationWrp>

      <AnimationWrp show={state === "payment"}>
        <Payment
          name={"payment"}
          artikel={activeArtworks}
          nextStep={() => {
            nextStep("payment")
          }}
          back={() => {
            nextStep("kasse")
          }}
        />
      </AnimationWrp>

      <Navi>
        <NavAnimationWrp show={state === "artikel"}>
          <NavButton goesTo={"kasse"} name={"zur Kasse"} pos={"right"} />
        </NavAnimationWrp>

        <NavAnimationWrp show={state === "kasse"}>
          <NavButton goesTo={"artikel"} name={"Zurück"} />
          <NavButton goesTo={"payment"} name={"Checkout"} pos={"right"} />
        </NavAnimationWrp>
        <NavAnimationWrp show={state === "payment"}>
          <NavButton goesTo={"kasse"} name={"Zurück"} />
        </NavAnimationWrp>
      </Navi>
    </CheckOutContainer>
  )
}

const AnimationWrp = ({ children, show, name }) => {
  return (
    <AnimatePresence>
      {show && (
        <StyledWrap
          key={name}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
        >
          {children}
        </StyledWrap>
      )}
    </AnimatePresence>
  )
}
const StyledWrap = styled(motion.div)`
  position: absolute;
  width: calc(100vw - 40px);
  width: 100vw;
`
