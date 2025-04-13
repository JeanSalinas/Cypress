const login = (() => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    console.log('username:', username);
    console.log('password:', password);


    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()
})

describe('Testing Automation - Orange HRM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    describe('Validation login front', () => {
        it('Validation front', () => {
            cy.get('.orangehrm-login-branding > img').should('be.visible')
            cy.get('.oxd-text--h5').should('contain', 'Login')
            cy.get('.orangehrm-login-logo > img').should('be.visible')
            cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('contain', 'Username')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
            cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('contain', 'Password')
            cy.get('.oxd-button').should('be.visible')
            cy.get('.orangehrm-login-forgot > .oxd-text').should('contain', 'Forgot Your Password?')
            cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('contain', 'OrangeHRM OS 5.7')
            cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').should('contain', '© 2005 - 2025 OrangeHRM, Inc. All rights reserved.')
            cy.get('.orangehrm-login-footer-sm').should('be.visible')
        })
    })
    describe.only('login for .env', () => {
        it('Validate credentials', () => {
            login()
        })
    })
})