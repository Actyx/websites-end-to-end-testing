describe('hello', () => {
  it('open page', () => {
    cy.visit('https://www.actyx.com/');
    cy.contains('Actyx');
  });
});
