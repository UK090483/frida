import React from "react"

const defaultState = {}

const ThemeContext = React.createContext(defaultState)

function ThemeProvider({ children }) {
  const theme = {
    main: "red",
  }

  return <ThemeContext.Provider theme={theme}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }

export default ThemeContext
