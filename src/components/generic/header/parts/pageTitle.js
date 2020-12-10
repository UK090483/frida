import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { setMouse } from "../../Mouse/mouseRemote"
import styled from "styled-components"
import Frida from "../../../frida/frida"
import { fluidFont } from "../../../../Styles/theme"

function PageTitle({ title, color, link, initialColor }) {
  /* eslint-disable react-hooks/exhaustive-deps */
  console.log(initialColor)

  const ref = useRef()
  const observers = useRef([])

  useEffect(() => {
    const observerCallback = (entries, observer, header) => {
      if (entries[0].isIntersecting) {
        // console.log(entries[0].target.dataset.color)

        if (ref.current) {
          ref.current.dataset.color = entries[0].target.dataset.color
        }
      }
    }

    document.querySelectorAll("[data-color]").forEach(i => {
      if (i) {
        const observer = new IntersectionObserver(observerCallback, {
          root: null,
          rootMargin: "0px 0px -95% 0px",
          threshold: 0,
        })
        observer.observe(i)

        observers.current.push(observer)
      }
    })

    return () => {
      observers.current.forEach(observer => {
        observer.disconnect()
      })
    }
  }, [])

  return (
    <React.Fragment>
      {link ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <Root
            data-color={initialColor}
            letterCount={title.length}
            ref={ref}
            onMouseEnter={() => {
              setMouse("link", true)
              setMouse("color", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
              setMouse("color", false)
            }}
          >
            <h1>
              <Frida text={title} textColor={color}></Frida>
            </h1>
          </Root>
        </Link>
      ) : (
        <Root letterCount={title.length}>
          <h1>
            <Frida text={title} textColor={color}></Frida>
          </h1>
        </Root>
      )}
    </React.Fragment>
  )
}

const Root = styled.div`
  text-decoration: none;
  pointer-events: all;
  cursor: none;
  color: ${({ theme }) => theme.colors.black};

  h1 {
    margin: 0;
  }
  h1 {
    ${({ letterCount }) => {
      return fluidFont(31 - letterCount, 45, 320, 1000)
    }}
  }
  &[data-color='default']{
    span {
      span {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }
  &[data-color='pink']{
    span {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  &[data-color='white']{
    span {
      span {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }
  &[data-color='black']{
    span {
      color: ${({ theme }) => theme.colors.white};
      span {
        color: ${({ theme }) => theme.colors.pink};

        &:before{
          border-color:${({ theme }) => theme.colors.white};
        }
      }
    }
  }
  /* &.pageHeader_pink {
    span {
      span {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  } */
`

PageTitle.defaultProps = {
  title: "Frida",
  initialColor: "default",
  link: true,
  checkInter: true,
}

export default PageTitle
