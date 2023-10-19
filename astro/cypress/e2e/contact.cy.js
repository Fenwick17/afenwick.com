describe('Contact page', () => {
  it('clicks the contact link in the nav', () => {
    cy.visit('/');
    cy.get('nav a').contains('Contact').click();
    cy.location('pathname').should('eq', '/contact');
    cy.go('back');
  });
});
