describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:9000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('links can be navigated', function () {
    cy.visit('http://localhost:9000')
    cy.contains('ivysaur').click()
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
