/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('test api response', () => {
    // https://on.cypress.io/type
    const hello: object = { msg: "world" }
    cy.get('pre')
      .should('contain.text', JSON.stringify(hello, null, 2))
  })
})
