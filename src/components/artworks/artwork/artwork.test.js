import React from "react"
import renderer from "react-test-renderer"
import Artwork from "./Artwork"
import { cleanup, fireEvent, render } from "@testing-library/react"
import "jest-styled-components"

describe("Artwork ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Artwork></Artwork>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
