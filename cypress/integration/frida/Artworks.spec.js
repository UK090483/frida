/// <reference types="cypress" />

context("Sites In Menu", () => {
  beforeEach(() => {
    cy.visit("/ausstellung")
    cy.reload()
    cy.viewport("macbook-15")
  })

  it("should have initial items", () => {
    cy.get('[data-testid="artwork-prev"]').should("have.length", 9)
  })
  it("should load Rlements on sroll", () => {
    cy.scrollTo(0, 2200)
      .get('[data-testid="artwork-prev"]')
      .should("have.length", 18)
  })

  it("should open slide", () => {
    cy.get('[data-testid="artwork-slider"]').should("not.be.visible")
    cy.get('[data-testid="artwork-prev"]').first().click()
    cy.get('[data-testid="artwork-slider"]').should("be.visible")
  })
})
