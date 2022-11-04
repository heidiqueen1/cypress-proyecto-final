
describe('Validate invalid login', () => {
    before(() => {
        Cypress.env();
    })

    it('Display error message if invalid password', () => {
        cy.visit('/');
        cy.get("[type='email']").type(Cypress.env('email'));
        cy.get("[type='password']").type('Bad#passWord');
        cy.get('[data-cy=login-with-credentials-button]').click();
        cy.contains('Error Logging in: Error');
    })


})