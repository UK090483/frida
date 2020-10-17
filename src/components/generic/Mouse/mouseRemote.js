import MouseClassNames from "./classNames"

const setMouse = (type, e) => {
  const mouse = window.FridaMouse

  if (mouse) {
    switch (type) {
      case "move":
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
