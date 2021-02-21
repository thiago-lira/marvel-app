describe('Toggle.vue', () => {
  it('should to change sorting of characters list from A-Z to Z-A', () => {
    cy.visit('/');

    cy
      .get('[data-cy=toggle]')
      .click();

    // TODO: change this
    cy.wait(3000);

    cy
      .get('.search-card')
      .first()
      .get('[data-cy=card-hero-name]')
      .contains('Zzzax');
  });
});
