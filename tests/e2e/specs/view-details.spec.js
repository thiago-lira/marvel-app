describe('Details view', () => {
  it('should to show infos about a character', () => {
    cy.visit('/');

    cy
      .get('[data-cy=card-hero-name]')
      .eq(1)
      .click();

    cy
      .location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/details/1017100');
      });
  });

  it('should to mark a character as favorite', () => {
    cy.visit('/details/1017100');

    cy
      .get('[data-cy=not-fav-icon]')
      .click();

    cy
      .get('[data-cy=fav-icon]')
      .should('to.exist');
  });
});
