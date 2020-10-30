import React from "react"
import renderer from "react-test-renderer"
import ArtworkImage from "./artworkImage"
import { cleanup, fireEvent, render } from "@testing-library/react"
import "jest-styled-components"

describe("ArtworkImage ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArtworkImage></ArtworkImage>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
