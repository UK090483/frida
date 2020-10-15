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

export { breackingpoints }
