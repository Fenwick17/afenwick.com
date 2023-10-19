describe('Renders the index page', () => {
  it('static elements are correct', () => {
    const page = cy.visit('/');

    page
      .get('title')
      .should(
        'have.text',
        'Articles on web accessibility and frontend development. — Adam Fenwick'
      );
    page.get('h1').should('have.text', 'Blog');
    page.get('nav').should('have.text', 'HomeContact');
  });

  describe('renders the blog list', () => {
    it('renders articles', () => {
      const page = cy.visit('/');

      page.get('#blogs article').should('be.visible');
    });

    it('article has title as slug', () => {
      const page = cy.visit('/');
      cy.get('[data-cy="blogUrls"]').each((item) => {
        let titleFormatted = item.text().toLowerCase().replace(/ /g, '-');
        expect(item.attr('href')).to.equal(`/blogs/${titleFormatted}`);
      });
    });

    it('navigates to blog post', () => {
      const page = cy.visit('/');

      cy.get('[data-cy="blogUrls"]')
        .first()
        .invoke('attr', 'href')
        .then(($blogSlug) => {
          cy.get('[data-cy="blogUrls"]').first().click();
          cy.location('pathname').should('eq', `${$blogSlug}`);
        });
    });
  });
});
