describe('Favorite feature', () => {
  it('should set a character as favorite', () => {
    cy.visit('/');

    cy
      .get('[data-cy=fav-button]')
      .first()
      .click();

    cy
      .get('[data-cy=fav-icon]')
      .first()
      .should('to.exist');

    cy
      .get('[data-cy=toast]')
      .should('to.exist');
  });
});
