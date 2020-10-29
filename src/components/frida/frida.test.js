import React from "react"
import renderer from "react-test-renderer"
import Frida from "./frida"
import "jest-styled-components"

describe("Frida", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Frida />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with props", () => {
    const tree = renderer.create(<Frida text={"test"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
