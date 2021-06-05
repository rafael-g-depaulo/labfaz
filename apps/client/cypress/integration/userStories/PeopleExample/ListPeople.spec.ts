/// <reference types="cypress" />
import { getStrapiHost } from  "@labfaz/server-conn-info"

context('ListPeople', () => {
  beforeEach(() => {
    cy.intercept('GET', `${getStrapiHost()}/people-examples`, { fixture: 'peopleExampleList' })
    cy.visit('/people-example')
  })

  // https://on.cypress.io/interacting-with-elements

  it('As an unauthenticated user, i want to look at the list of people', () => {
    cy.get('li > pre')
      .should(listItems => {
        expect(listItems, "have 3 people").to.have.length(3)
        expect(listItems[0], "display name").to.contain(`"name": "stud the stub"`)
        expect(listItems[0], "display age").to.contain(`"age": 69`)
      })
  })
})
