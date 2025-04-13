//Credentials login
const validCredentials = { 'username': "username", "password": "password" }
const usernameInvalid = { 'username': "user", "password": "password" }
const passwordInvalid = { 'username': "username", "password": "keyInvalid" }


const login = ((credentials) => {
    cy.get('#signin_button').click()
    cy.get('#user_login').type(credentials.username)
    cy.get('#user_password').type(credentials.password)
    cy.get('.btn').click()
})

describe("Test auotmation - Zero Bank", () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    describe('Validation Front Login', () => {
        it('Validation front', () => {
            cy.get('.brand').should('contain', 'Zero Bank')
            cy.get('#searchTerm').should('be.visible')
            cy.get('#signin_button').should('be.visible')
            cy.get('#homeMenu > div > strong').should('be.visible')
            cy.get('#onlineBankingMenu > div > strong').should('be.visible')
            cy.get('#feedback > div > strong').should('be.visible')
            cy.get('.active > .custom > h4').should('contain', 'Online Banking')
            cy.get('.active > img').should('be.visible')
        })
    })//describe front

    describe('Login validation with credentials', () => {
        it('valid credentials', () => {
            login(validCredentials)
        })
        it('invalid credential "username"', () => {
            login(usernameInvalid)
            cy.get('.alert').should('be.visible')
        })
        it('invalid credential "password"', () => {
            login(passwordInvalid)
            cy.get('.alert').should('be.visible')
        })
    })//describe login
    describe.only('Validation of transaction', () => {
        it('Transaction bank', () => {
            login(validCredentials)
            cy.get('#transfer_funds_tab > a').click()
            cy.get('#tf_fromAccountId').select(1)
            cy.get('#tf_toAccountId').select(3)
            cy.get('#tf_amount').type(250)
            cy.get('#tf_description').type('Thanks!')
            cy.get('#btn_submit').click()
            cy.get('#btn_submit').click()
            cy.get('.alert').should('contain', 'You successfully submitted your transaction.')
        })
    })
})//describe principal