import React, { useContext } from "react"
import styled from "styled-components"
import CheckOutContainer from "./container/CheckoutContainer"
import UiContext from "../../../context/UiContext"
// import BillingPannel from "./BillingPannel"
import ArtikelList from "./ArtikelList/ArtikelList"
// import Payment from "./Payment/Payment"
// import Button from "~components/buttons/button"
// import { Navi, StyledNavButton, NavAnimationWrp } from "./Navigation"
import { motion, AnimatePresence } from "framer-motion"

import PPP from "./ppp"

export default function CheckOut({ data, closeTo }) {
  const { items } = useContext(UiContext)
  const artworks = data.allCSanityFridaArtworks.nodes

  // const [state, setState] = React.useState("artikel")
  const activeArtworks = items
    ? artworks.filter(item => {
        return items.includes(item.uuid)
      })
    : []

  // const nextStep = nStep => {
  //   setState(nStep)
  // }

  // const NavButton = ({ goesTo, name, pos, disabled, testid }) => {
  //   return (
  //     <StyledNavButton pos={pos} disabled={disabled}>
  //       <Button
  //         testid={testid}
  //         type={"clickButton"}
  //         onClick={() => {
  //           setState(goesTo)
  //         }}
  //         label={name}
  //       />
  //     </StyledNavButton>
  //   )
  // }

  // return <PPP></PPP>

  return (
    <CheckOutContainer closeTo={closeTo}>
      <AnimationWrp show={true}>
        {/* <div
          style={{ width: "100%", height: 3000, backgroundColor: "red" }}
        ></div> */}

        <Root>
          <Box>
            <ArtikelList
              name={"artikel"}
              artikel={activeArtworks}
              // nextStep={() => {
              //   nextStep("kasse")
              // }}
            ></ArtikelList>
          </Box>
          <Box>
            <PPP></PPP>
            {/* <Form isFormValid={isFormValid} setIsFormValid={setIsFormValid}></Form> */}
          </Box>
        </Root>
      </AnimationWrp>

      {/* <AnimationWrp show={state === "kasse"}>
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
      </AnimationWrp> */}

      {/* <Navi>
        <NavAnimationWrp show={state === "artikel"}>
          <NavButton
            goesTo={"kasse"}
            name={"zur Kasse"}
            pos={"right"}
            testid={"zur-kasse"}
          />
        </NavAnimationWrp>

        <NavAnimationWrp show={state === "kasse"}>
          <NavButton goesTo={"artikel"} name={"Zurück"} />

          <NavButton
            goesTo={"payment"}
            name={"Checkout"}
            pos={"right"}
            disabled={!userDataValid}
            testid={"checkout"}
          />
        </NavAnimationWrp>
        <NavAnimationWrp show={state === "payment"}>
          <NavButton goesTo={"kasse"} name={"Zurück"} />
        </NavAnimationWrp>
      </Navi> */}
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
  width: 100vw;
`

const Root = styled.div`
  width: 100%;
  padding: 0 20px;
  padding-bottom: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    padding: 0 7%;
  }
`
const Box = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
    padding: 0 20px;
  }
`
