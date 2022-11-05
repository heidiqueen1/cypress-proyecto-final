/// <reference types="cypress"/>

describe('Ada School | Login', () => {
    
    beforeEach('Precondition: The user must be in the web page https://ada-school.org', () => {
        cy.visit('');
        cy.url().should('contain', 'ada-school');
    });

    it('Should login with valid credentials', () => {        
        
        // Escribo el email.
        cy.get("input[data-cy='email-login-input']")
            .clear()
            .type('heidi@somossigma.org');
                
        // Escribo la contraseña.
        cy.get("input[data-cy='password-login-input']")
            .clear()
            .type('Cuantix123.');

        // Hago click en el botón Inicia Sesión.    
        cy.get("button[data-cy='login-with-credentials-button']").click();

        // Valido que cambie la URL.   
        cy.url().should('include', 'https://test-learn.ada-school.org/courses');    
    });
});