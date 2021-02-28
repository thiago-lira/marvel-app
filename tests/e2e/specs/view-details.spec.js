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
});
