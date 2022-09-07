// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (login, password) => {
    cy.contains('Log in').click();
    cy.get('#mail').type(login);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
});

Cypress.Commands.add('logout', () => {
    cy.contains('Log out').click();
});

Cypress.Commands.add('addBook', (bookName, author) => {
    cy.get('.d-flex > div > .btn').click();
    cy.get('#title').type(bookName);
    cy.get('#authors').type(author);
    cy.get('[type="submit"]').click();
});

Cypress.Commands.add('addFavoriteBook', (bookName, author) => {
    cy.get('.d-flex > div > .btn').click();
    cy.get('#title').type(bookName);
    cy.get('#authors').type(author);
    cy.get('#favorite').dblclick();
    cy.get('#favorite').should('be.checked');
    cy.get('[type="submit"]').click();
});