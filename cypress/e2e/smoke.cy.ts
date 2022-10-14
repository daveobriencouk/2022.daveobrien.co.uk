describe('smoke tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.intercept('/api/v1/flags/', { fixture: 'flag-note-on.json' }).as('flags')
  })

  it('should allow you to visit home page', () => {
    cy.visitAndCheck('/')

    cy.contains("Ahoy. I'm Dave, and I'm a Frontend Engineer.")
  })

  it('should allow you to visit notes index page', () => {
    cy.visitAndCheck('/')

    cy.wait('@flags')

    cy.findByText('Notes').click().wait(1000)

    cy.location('pathname').should('contain', '/notes').wait(1000)
    cy.contains("Notes from the code face")
  })

  it('should allow you to visit a notes page', () => {
    cy.visitAndCheck('/')

    cy.wait('@flags')

    cy.findByText('Notes').click().wait(1000)

    cy.findByText('My second note').click().wait(1000)
    cy.contains("Hello, world!")
  })
})
