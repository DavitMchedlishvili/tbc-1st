describe('auth', () => {
  it('Logs in successfully', () => {
    cy.visit("/")

    cy.get('[data-cy="login-logout"]').click();

    // Enter email
    cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com");

    cy.get('[data-cy="password-input"]').type("Mchedlishvili23")

  
    cy.get('[data-cy="Login-button"]').click()

    cy.url().should("include", "/myproducts")


    
  })


  it('Logs Out successfully', () => {
    cy.visit("/")

    cy.get('[data-cy="login-logout"]').click();

    // Enter email
    cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com");

    cy.get('[data-cy="password-input"]').type("Mchedlishvili23")

  
    cy.get('[data-cy="Login-button"]').click()

    cy.url().should("include", "/myproducts")

    cy.get('[data-cy="login-logout"]').click();

    cy.url().should("not.include", "/myproducts")




    
  })

  it('Fails to login', () => {
    cy.visit('/')

    cy.get('[data-cy="login-logout"]').click();

    cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com")

    cy.get('[data-cy="password-input"]').type("Mchedlishvili2322")

  
    cy.get('[data-cy="Login-button"]').click()

    cy.get('[data-cy="error-login-message"]').should('be.visible')
      .and('not.be.empty');

    
  })



  


// it('registration', () => {
//     cy.visit('/')

    

    
//   })

  
})