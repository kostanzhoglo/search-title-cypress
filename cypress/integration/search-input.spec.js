describe('Search input field', () => {
  beforeEach(() => {
    cy.visit('https://checkout.broadway.com')
  })

  // TSF_02
  it('accepts input', () => {
    const demo = 'the'
    cy.get('.pal.input-sm.form-element')
      .type(demo)
      .should('have.value', demo)
  })

  // TSF_03
  it('finds play with Full Title and Correct Capitalization', () => {
    const play = 'The Play That Goes Wrong'
    cy.get('.pal.input-sm.form-element')
      .type(play)

    cy.get('a.mbs.lh-sm.font-xl.futura.inline-block.ShowsItem__name__3VD2h')
      .should('have.attr', 'href')
      .and('include', "/play-that-goes-wrong/12539/calendar/")
  })

  // TSF_10
  it('reset button resets search input field', () => {
    cy.get('.pal.input-sm.form-element')
      .type('hamle')

    cy.get('.SearchInput__close-icon__2RUuz')
      .as('search-bar')
      .click()

    cy.get('@search-bar')
      .should('have.value', '')

  })



})
