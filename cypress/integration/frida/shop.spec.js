/// <reference types="cypress" />

// it("gets the post", () => {
//   cy.visit("index.html")
//   getIframeBody().find("#run-button").should("have.text", "Try it").click()
//   getIframeBody().find("#result").should("include.text", '"delectus aut autem"')
// })

context("Shop", () => {
  beforeEach(() => {
    cy.viewport("macbook-15")
    cy.visit("/ausstellung")
    cy.get('[data-testid="artwork-prev"]:first').click()
    cy.get('[data-testid="add-to-cart-button"]').click()
    cy.get('[data-testid="got-to-cart-button"]').click()
  })

  it("should have initial items", () => {
    cy.get('[data-testid="checkout-button"]').click()

    cy.frameLoaded("#braintree-hosted-field-number")
    cy.iframe("#braintree-hosted-field-number")
      .find("#credit-card-number")
      .type(4111111111111111)
    cy.iframe("#braintree-hosted-field-expirationDate")
      .find('[data-braintree-name="expirationDate"]')
      .type(222)
  })
})

const getIframeDocument = () => {
  return (
    cy
      .get("#braintree-hosted-field-number")
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its("0.contentDocument")
      .should("exist")
  )
}

const getIframeBody = () => {
  // get the document
  return (
    getIframeDocument()
      // automatically retries until body is loaded
      .its("body")
      .should("not.be.undefined")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
  )
}
