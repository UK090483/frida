import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Section from "../container/section"
import { GoThumbsup } from "react-icons/go"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [validateError, setValidateError] = useState(false)
  const [state, setstate] = useState("start")
  const [message, setMessage] = useState("")
  const [hp, setHp] = useState("")

  const isMailValid = useCallback(() => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  }, [email])
  useEffect(() => {
    if (validateError && isMailValid()) {
      setValidateError(false)
    }
  }, [email, isMailValid, validateError])

  const handleClick = () => {
    if (!isMailValid()) {
      setValidateError(true)
    } else {
      send()
    }
  }

  const send = () => {
    if (!hp) {
      setstate("load")
      addToMailchimp(email) // listFields are optional if you are only capturing the email address.
        .then(data => {
          if (data.result === "success") {
            setstate("succsess")
          } else {
            setstate("message")
            setMessage(data.msg)
          }
          console.log(data)
        })
        .catch(err => {
          setstate("fail")
          console.log(err)
        })
    }
  }

  return (
    <Section>
      <Root id="newsletter">
        <Collumn>
          <h4>Bleib up to date!</h4>
          <p>
            Jetzt für Fridas Newsletter anmelden und nichts verpassen –
            New,spezielle Angebote, wöchentliche Auktion, Events und vieles
            mehr.
          </p>
        </Collumn>
        <Collumn>
          <InputWrap>
            {state === "start" && (
              <React.Fragment>
                <Input
                  type="text"
                  autocomplete={"email"}
                  placeholder={"Deine Email*"}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                />
                <Submitbutton onClick={handleClick}>Abonieren</Submitbutton>
                <Hp>
                  <label htmlFor="name"></label>
                  <input
                    value={hp}
                    autoComplete="off"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your first Name here"
                    onChange={e => {
                      setHp(e.target.value)
                    }}
                  />
                  <label htmlFor="aname"></label>
                  <input
                    value={hp}
                    autoComplete="off"
                    type="text"
                    id="aname"
                    name="aname"
                    placeholder="Your last Name here"
                    onChange={e => {
                      setHp(e.target.value)
                    }}
                  />
                </Hp>
              </React.Fragment>
            )}
            {state === "load" && <h4>Loading...</h4>}
            {state === "succsess" && (
              <Succsess>
                <GoThumbsup size={60} />
                <p>
                  Vielen Dank! Nur noch die E-Mail bestätigen und du bist dabei!
                  (bestätigungs Mail kann bis zu 12h dauern)
                </p>
              </Succsess>
            )}
            {state === "message" && (
              <Message dangerouslySetInnerHTML={{ __html: message }}></Message>
            )}
          </InputWrap>
          {validateError && (
            <Error> Da stimmt was nicht mit deiner Email Adresse </Error>
          )}
        </Collumn>
      </Root>
    </Section>
  )
}

const Message = styled.div``

const Hp = styled.div`
  height: 0px;
  overflow: hidden;
`

const Root = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.laptop} {
    flex-wrap: nowrap;
  }
`
const Collumn = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
  }
`
const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  padding-left: 20px;
`
const Succsess = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.colors.green};
  }
  p {
    padding-top: 20px;
    width: 100%;
    text-align: center;
  }
`

const Input = styled.input`
  height: 60px;
  width: 100%;
  padding: 0;
  padding-left: 30px;
  display: flex;
  vertical-align: middle;
  border-color: ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.pink};
  border-style: solid;
  border-radius: 30px;
  ::placeholder {
    font-size: 20px;
    transform: translateX(-10px);
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.laptop} {
    width: fit-content;
    border-radius: 30px 0 0 30px;
    margin-bottom: 0;
    padding-left: 30px;
    ::placeholder {
      font-size: 20px;
      transform: translateY(-4px);
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
    }
  }
`

const Submitbutton = styled.button`
  height: 60px;
  padding: 0 20px;
  border-color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  font-size: 20px;
  width: 100%;

  @media ${({ theme }) => theme.device.laptop} {
    width: fit-content;
    border-radius: 0 30px 30px 0;
  }
`

const InputWrap = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.laptop} {
    flex-wrap: nowrap;
    padding-top: 0;
    padding-left: 50px;
  }
`
