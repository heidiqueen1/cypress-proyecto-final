
describe('Validate login with email and password', () => {
    before(() => {
        Cypress.env()
        cy.visit('/')
    })

    it('Should login with valid credentials', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
    })

    it('Confirm that the user is logged in', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/');
        cy.contains('All Courses'); // Login Confirmation
    })

})