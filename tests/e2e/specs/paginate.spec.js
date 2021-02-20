describe('Paginate', () => {
  it('should to go to another page', () => {
    cy.visit('/');

    cy
      .get('[data-cy=card-hero-name]')
      .first()
      .contains('3-D Man');

    cy
      .get('[data-page-button]')
      .last()
      .click();

    cy
      .get('[data-cy=card-hero-name]')
      .first()
      .contains('Banshee');

    cy.location().should((loc) => {
      expect(loc.search).to.eq('?page=5');
    });
  });
});
