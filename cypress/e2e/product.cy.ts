describe('products creating and buying it', () => {
    
    it('creates product successfully', () => {
      cy.visit('/')

      cy.get('[data-cy="login-logout"]').click();

      cy.get('[data-cy="login-logout"]').click();

      cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com");
  
      cy.get('[data-cy="password-input"]').type("Mchedlishvili23")
  
    
      cy.get('[data-cy="Login-button"]').click()

      cy.url().should("include", "/myproducts")
  
      cy.get('[data-cy="create-product-link"]').click()

      cy.get('[data-cy="product-name-input"]').type("test")

      cy.get('[data-cy="product-price-input"]').type("123321")

      cy.get('[data-cy="product-brand-input"]').type("test brand")

      cy.get('[data-cy="product-category-input"]').type("test category")

      cy.get('[data-cy="product-image-input"]').type("https://b867169.smushcdn.com/867169/wp-content/uploads/2021/07/test.jpg?lossy=0&strip=0&webp=1")

      cy.get('[data-cy="product-description-input"]').type("test description")

      cy.get('[data-cy="create-product-button"]').click();

      

    });

    it('deletes created product', () => {
      cy.visit('/')

      cy.get('[data-cy="login-logout"]').click();

      cy.get('[data-cy="email-input"]').type("davit.mchedlishvili.2396@gmail.com");
  
      cy.get('[data-cy="password-input"]').type("Mchedlishvili23")
  
      cy.get('[data-cy="Login-button"]').click()

      cy.get('[data-cy="myproduct-link"]').click()

      cy.get('button').contains("Delete").click()

    });
  });





  

  
  