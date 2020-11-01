/// <reference types="cypress" />

const testUrl = "http://localhost:8000/"

context("Sites In Menu", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  const CheckSite = name => {
    cy.get('[aria-controls="main-menu"]').click()
    cy.contains(name).click()
  }

  it("HOME Loads", () => {
    cy.get("#navigation_link").should("not.be.visible")
    cy.get('[aria-controls="main-menu"]').click()
    cy.get("#navigation_link").should("be.visible")
  })
  it("AUSSTELLUNG Loads", () => {
    CheckSite("AUSSTELLUNG")
  })
  it("TEILNEHMEN Loads", () => {
    CheckSite("TEILNEHMEN")
  })
  it("UNTERSTÜTZEN Loads", () => {
    CheckSite("UNTERSTÜTZEN")
  })
  it("WER IST FRIDA Loads", () => {
    CheckSite("WER IST FRIDA?")
  })

  it("KONTAKT Loads", () => {
    CheckSite("KONTAKT")
  })
})

context("Other Sites", () => {
  it("cityartweek", () => {
    cy.visit(`/cityartweek/`).contains("PopUpArtFair").should("be.visible")
  })

  it("startnext", () => {
    cy.visit(`/startnext/`).contains("STARTNEXT").should("be.visible")
  })
})

const checkArtworks = async page => {
  const perPage = 100
  cy.request(
    `https://api.storyblok.com/v1/cdn/stories?per_page=${perPage}&page=${page}&starts_with=artwork/&token=QmXGb0pqNrd1fhqnQVLwuwtt`
  ).then(res => {
    res.body.stories.forEach((artwork, index) => {
      cy.request(`${testUrl}${artwork.full_slug}/`).then(res => {
        expect(res.body.indexOf(artwork.content.name)).to.be.greaterThan(0)
      })
      cy.log(artwork.content.name)
      cy.log(index + 1 + (page - 1) * perPage + " / " + res.headers.total)
    })

    const hasMore = (page + 1) * perPage < res.headers.total

    if (hasMore) {
      checkArtworks(page + 1)
    }
  })
}

context.skip("Artwork Sites", () => {
  it("cityartweek", async () => {
    cy.viewport("macbook-15")
    checkArtworks(1)
  })
})
