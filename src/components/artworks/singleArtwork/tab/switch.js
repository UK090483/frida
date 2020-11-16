import React from "react"
import styled, { keyframes } from "styled-components"
export default function Switch({ items, handleClick, current }) {
  return (
    <Root>
      {items.map(item => {
        return (
          <Button
            key={item.name}
            active={item.name === current}
            onClick={() => {
              handleClick(item.name)
            }}
          >
            {item.label}
          </Button>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;

  button {
    border-width: ${({ theme }) =>
      `${theme.borderWidth} 0 ${theme.borderWidth} 0`};
    &:first-child {
      border-radius: 30px 0 0 30px;
      border-width: ${({ theme }) => `${theme.borderWidth}`};
    }
    &:last-child {
      border-radius: 0 30px 30px 0;
      border-width: ${({ theme }) => `${theme.borderWidth}`};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 400px;
  }
`

const Button = styled.button`
  width: 33.33%;
  font-weight: 700;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.colors.pink} solid
    ${({ theme }) => theme.borderWidth};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.pink : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.pink};
  transition: background-color 0.6s, color 0.6s;
  outline: none;

  /* &:focus {
    border-color: yellow;
  } */
`
