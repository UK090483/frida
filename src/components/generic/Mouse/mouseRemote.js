import MouseClassNames from "./classNames"

let mouseNeeded = false

const thandle = throttled(20, (mouse, e) => {
  // console.count("Throtled    MouseMoove")
  mouse.style.left = e.pageX - 15 + "px"
  mouse.style.top = e.pageY - 15 + "px"
})

const setMouse = (type, e) => {
  let mouse = window.FridaMouse
  !mouse && (mouse = window.FridaMouse)
  const initMouse = () => {
    mouseNeeded = true
    document.querySelector("body").classList.add("frida_mouse_active")
  }

  if (mouse) {
    switch (type) {
      case "move":
        !mouseNeeded && initMouse()
        // console.count("MouseMoove")
        thandle(mouse, e)
        // mouse.style.left = e.pageX - 15 + "px"
        // mouse.style.top = e.pageY - 15 + "px"
        break
      case "link":
        e
          ? mouse.classList.add(MouseClassNames.linkHover)
          : mouse.classList.remove(MouseClassNames.linkHover)

        break
      case "color":
        e
          ? mouse.classList.add(MouseClassNames.black)
          : mouse.classList.remove(MouseClassNames.black)
        break

      case "hide":
        e
          ? mouse.classList.add(MouseClassNames.hide)
          : mouse.classList.remove(MouseClassNames.hide)
        break
      case "reset":
        mouse.classList.remove(MouseClassNames.linkHover)
        mouse.classList.remove(MouseClassNames.black)
        mouse.classList.remove(MouseClassNames.hide)
        break

      default:
        break
    }
  }
}

export { setMouse }

function throttled(delay, fn, args) {
  let lastCall = 0
  return function (...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}
