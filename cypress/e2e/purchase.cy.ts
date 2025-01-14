// describe('Stripe Payment Test', () => {
//     it('should complete the payment successfully', () => {
//       // Mock the Stripe payment API call (adjust the URL and response as necessary)
//       cy.intercept('POST', '/v1/charges', {
//         statusCode: 200,
//         body: {
//           id: 'ch_1Gv7N2LyLsC06m6N6hBvfYPd',
//           status: 'succeeded',
//           amount: 5000,  // $50.00
//           currency: 'usd',
//         },
//       }).as('mockCharge');
  
//       // Visit the page where the Stripe payment form is located
//       cy.visit('/checkout'); // Replace with your checkout URL
  
//       // Fill in the payment details
//       cy.get('input[name="card_number"]').type('4242424242424242');
//       cy.get('input[name="card_expiry"]').type('12/25');
//       cy.get('input[name="card_cvc"]').type('123');
  
//       // Click the "Submit" button to simulate a purchase
//       cy.get('button[type="submit"]').click();
  
//       // Wait for the API request to complete
//       cy.wait('@mockCharge');
  
//       // Assert that the payment was successful
//       cy.get('.payment-status').should('contain', 'Payment Successful');
//     });
//   });
  