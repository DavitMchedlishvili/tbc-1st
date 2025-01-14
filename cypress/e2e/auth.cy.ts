// რეგისტრაციისა და ლოგინის ტესტები (ფეილის ტესტიც)



describe('auth', () => {
  it('Logs in successfully', () => {
    cy.visit("/")

    cy.get('[data-cy="login-logout"]').click();

    cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com");

    cy.get('[data-cy="password-input"]').type("Mchedlishvili23")

  
    cy.get('[data-cy="Login-button"]').click()

    cy.url().should("include", "/myproducts")


    
  })


  it('Logs Out successfully', () => {
    cy.visit("/")

    cy.get('[data-cy="login-logout"]').click();

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



  it('registered failed', () => {
    cy.visit('/')
    
    cy.get('[data-cy="login-logout"]').click();

    cy.get('[data-cy="register-link"]').click()
    
    cy.get('[data-cy="register-email-input"]').type("davit.mchedlishvili.2396@gmail.com")

    cy.get('[data-cy="register-password-input"]').type("Mchedlishvili23")

    cy.get('[data-cy="signup-button"]').click();

    cy.get('[data-cy="register-error"]').should('be.visible')
    .and('not.be.empty');

  })


it('registered successfully', () => {
    cy.visit('/')
    
    cy.get('[data-cy="login-logout"]').click();

    cy.get('[data-cy="register-link"]').click()
    
    // აქ უნდა ჩაიწეროს ახალი იმეილი და პაროლი რომ წარმატებით შესრულდეს ტესტი... 

    cy.get('[data-cy="register-email-input"]').type("sikharulidzekhatiaa@gmail.com")

    cy.get('[data-cy="register-password-input"]').type("123456789M")

    cy.get('[data-cy="signup-button"]').click();

    cy.url().should("include", "/login")

  })


})