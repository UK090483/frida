import { useEffect, useRef } from "react"

const noScrollClass = "Frida_no_scroll"
export default function useBodyScrollStop() {
  const bodyRef = useRef()
  useEffect(() => {
    bodyRef.current = document.querySelector("html")
  }, [bodyRef])

  const stopBodyScroll = () => {
    bodyRef.current.classList.add(noScrollClass)
  }

  const enableBodySroll = () => {
    bodyRef.current.classList.remove(noScrollClass)
  }

  return { stopBodyScroll, enableBodySroll }
}
