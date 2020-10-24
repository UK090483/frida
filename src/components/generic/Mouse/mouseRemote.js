import MouseClassNames from "./classNames"

let mouseNeeded = false
let mouse

const setMouse = (type, e) => {
  const mouse = window.FridaMouse
  !mouse && (mouse = window.FridaMouse)
  const initMouse = () => {
    mouseNeeded = true
    document.querySelector("body").classList.add("frida_mouse_active")
  }

  if (mouse) {
    switch (type) {
      case "move":
        !mouseNeeded && initMouse()
        mouse.style.left = e.pageX - 15 + "px"
        mouse.style.top = e.pageY - 15 + "px"
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

      default:
        break
    }
  }
}

export { setMouse }
