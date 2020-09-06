import { useRef, useEffect } from "react"

const useFitText = (min, max) => {
  const ref = useRef(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const isOverflow =
          !!ref.current && ref.current.scrollWidth > ref.current.offsetWidth

        let compStyles = window.getComputedStyle(ref.current)
        if (isOverflow) {
          // const delta =
          //   (ref.current.scrollWidth - ref.current.offsetWidth) * 0.05
          ref.current.style.fontSize =
            compStyles.getPropertyValue("font-size").replace("px", "") -
            1 +
            "px"
          // ref.current.style.color = "red"
          // console.log("--------------------------")
          // console.log(ref.current)
          // console.log(ref.current.scrollWidth)
          // console.log(ref.current.offsetWidth)
          // console.log(delta)
          // console.log(compStyles.getPropertyValue("font-size"))
          window.requestAnimationFrame(function () {
            checkOverflow()
          })
        }
      }
    }

    checkOverflow()
  }, [ref])

  return { ref }
}

export default useFitText
