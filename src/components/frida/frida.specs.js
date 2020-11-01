import { mount } from "cypress-react-unit-test"
import Frida from "./frida"

describe("Frida ", () => {
  it("renders Frida", () => {
    mount(Frida)
    cy.get("[data-testid=todo-list]").should("exist")
  })
})
