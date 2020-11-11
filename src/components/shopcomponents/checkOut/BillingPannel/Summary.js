import React from "react"
import styled from "styled-components"

export default function Summary({ artikel }) {
  const { sum, tax } = getSum(artikel)

  return (
    <Root>
      <List>
        {artikel.map(item => {
          console.log(item)
          return (
            <ListItem>
              <span>{item.artworkName}</span>
              <span>{item.price}€</span>
            </ListItem>
          )
        })}
      </List>
      <Seperator />
      <List>
        <ListItem>
          <span>MwSt(16%):</span>
          <span>{tax}€</span>
        </ListItem>
        <ListItem>
          <span>GESAMTBETRAG: </span> <span>{sum}€</span>
        </ListItem>
      </List>
    </Root>
  )
}

const Seperator = styled.div`
  width: 100%;
  border: black solid 1px;
`

const List = styled.ul`
  width: 100%;

  height: 100%;
  list-style: none;
  padding-left: 0;
`
const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`

const Root = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  border-radius: 5px;
`
const Sum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const getSum = artikel => {
  let sum = 0
  artikel.forEach(element => {
    sum = sum + parseInt(element.price)
  })
  let tax = Math.round(sum * 0.16 * 100) / 100
  return { sum, tax }
}
