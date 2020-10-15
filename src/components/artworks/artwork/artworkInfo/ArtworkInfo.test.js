import React from "react"
import renderer from "react-test-renderer"
import ArtworkInfo from "./ArtworkInfo"
import { ThemeProvider } from "styled-components"
const theme = {
  colors: {
    green: "green",
    red: "red",
  },
}
describe("Artwork Info", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ArtworkInfo />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
