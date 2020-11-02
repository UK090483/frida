import React from "react"
import renderer from "react-test-renderer"
import ArtworkName from "./artworkName"
import "jest-styled-components"

describe("ArtworkName ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArtworkName />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
