describe('BikeShop App', () => {
  it('Visits the homepage', () => {
      cy.visit('https://bikeshop-app.netlify.app/');

      
      cy.contains('Bike Shop', { timeout: 10000 }); 
  });
});
