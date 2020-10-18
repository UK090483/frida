import MouseClassNames from "./classNames"
let mouseNeeded = false
let ListenerItems = []
let mouse
const setMouse = (type, e) => {
  !mouse && (mouse = window.FridaMouse)
  const initMouse = () => {
    mouseNeeded = true
    document.querySelector("body").classList.add("frida_mouse_active")
    getLinks()
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

function getLinks() {
  const links = document.querySelectorAll(".mouse_link")

  links.forEach(link => {
    link.addEventListener("mouseenter", setMouseLinkIn)
    link.addEventListener("mouseleave", setMouseLinkOut)
  })
}

const setMouseDown = () => {
  mouse.classList.add(MouseClassNames.mouseDown)
}
const setMouseUp = () => {
  mouse.classList.remove(MouseClassNames.mouseDown)
}
const setMouseIn = () => {
  mouse.classList.remove(MouseClassNames.mouseOut)
}
const setMouseOut = () => {
  mouse.classList.add(MouseClassNames.mouseOut)
}
const setMouseLinkIn = () => {
  mouse.classList.add(MouseClassNames.linkHover)
}
const setMouseLinkOut = () => {
  mouse.classList.remove(MouseClassNames.linkHover)
}

export { setMouse }
