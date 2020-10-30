import React from "react"
import renderer from "react-test-renderer"
import ArtworkContainer from "./artworkContainer"
import { cleanup, fireEvent, render } from "@testing-library/react"
import "jest-styled-components"

jest.mock("../../../generic/Mouse/mouseRemote")

const onClick = jest.fn()
describe("ArtworkContainer ", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ArtworkContainer onClick={onClick}></ArtworkContainer>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onClick", () => {
    const { getByRole, debug } = render(
      <ArtworkContainer onClick={onClick}>
        <h1>bla</h1>
      </ArtworkContainer>
    )

    fireEvent.click(getByRole("button"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
