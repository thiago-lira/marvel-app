describe('Search feature', () => {
  it('should show characters when type their names', () => {
    cy.visit('/');

    cy.get('[data-cy=search-input]')
      .type('Hulk');

    cy.get('[data-cy=loader]')
      .should('to.exist');

    cy.wait(5000);

    cy.get('[data-cy=card-hero-name]')
      .first()
      .contains('Hulk');
  });
});
