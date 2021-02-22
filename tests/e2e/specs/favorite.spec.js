describe('Favorite feature', () => {
  const setNCardsAsFavorite = (n) => {
    const indexes = Array.from(new Array(n).keys());
    indexes.forEach((index) => {
      cy
        .get('.search-card')
        .eq(index)
        .find('[data-cy=fav-button]')
        .click();
    });
  };

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

  it('should list only characters marked as favorite', () => {
    cy.visit('/');

    setNCardsAsFavorite(5);

    cy
      .get('[data-fav-button]')
      .click();

    cy
      .get('.search-card')
      .should('to.have.length', 5);
  });

  it('should to remove card from favorite list unmarked as favorite', () => {
    cy.visit('/');

    setNCardsAsFavorite(5);

    cy
      .get('[data-fav-button]')
      .click();

    cy
      .get('.search-card')
      .first()
      .find('[data-cy=fav-button]')
      .click();

    cy
      .get('.search-card')
      .should('to.have.length', 4);
  });

  it('should unmarked only favorite options when start a searching', () => {
    cy.visit('/');

    cy
      .get('[data-fav-button]')
      .click();

    cy
      .get('[data-only-favs]')
      .should('to.exist');

    cy
      .get('[data-cy=search-input]')
      .type('Wolverine');

    cy
      .get('[data-all-characters]')
      .should('to.exist');
  });

  it('should to sort desc order', () => {
    cy.visit('/');

    setNCardsAsFavorite(5);

    cy
      .get('[data-cy=card-hero-name]')
      .eq(4)
      .should('to.contain', 'Abomination');

    cy
      .get('[data-fav-button]')
      .click();

    cy
      .get('[data-cy=toggle]')
      .click();

    cy
      .get('[data-cy=card-hero-name]')
      .eq(4)
      .should('to.contain', '3-D Man');
  });
});
