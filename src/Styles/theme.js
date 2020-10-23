const breackingpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1224px",
  laptopL: "1440px",
  desktop: "2560px",
}

const theme = {
  colors: {
    black: "#000000",
    green: "#75f9d5",
    red: "#fa464c",
    white: "white",
    pink: "#f5c5d9",
  },
  borderWidth: "3px",
  device: {
    mobileS: `(min-width: ${breackingpoints.mobileS})`,
    mobileM: `(min-width: ${breackingpoints.mobileM})`,
    mobileL: `(min-width: ${breackingpoints.mobileL})`,
    tablet: `(min-width: ${breackingpoints.tablet})`,
    laptop: `(min-width: ${breackingpoints.laptop})`,
    laptopM: `(min-width: ${breackingpoints.laptopM})`,
    laptopL: `(min-width: ${breackingpoints.laptopL})`,
    desktop: `(min-width: ${breackingpoints.desktop})`,
    desktopL: `(min-width: ${breackingpoints.desktop})`,
  },
}
export default theme

function flexUnit(amount, min, max, unit = "vw", prop = "font-size") {
  const minBreakpoint = (min / amount) * 100
  const maxBreakpoint = max ? (max / amount) * 100 : false
  const dimension = unit === "vw" ? "width" : "height"

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }

    ${
      max
        ? `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    `
        : ""
    }

    ${prop}: ${amount}${unit}
  `
}

const fluidFont = (min_font, max_font, min_vp, max_vp) => {
  return `
  font-size: ${min_font}px;
  @media screen and (min-width: ${min_vp}px) {
    font-size: calc(
      ${min_font}px + ${max_font - min_font} *
        ((100vw - ${min_vp}px) / (${max_vp - min_vp}))
    );
  }
  @media screen and (min-width: ${max_vp}px) {
    font-size: ${max_font}px;
  }
  `
}

export { breackingpoints, flexUnit, fluidFont }
