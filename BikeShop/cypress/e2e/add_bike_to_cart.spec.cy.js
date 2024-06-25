describe('Add Bike to Cart', () => {
    it('Adds a bike to the cart', () => {
        cy.visit('https://bikeshop-app.netlify.app/'); 

        
        cy.contains('Add to Cart').first().click();

        
        cy.contains('Added').should('exist');
    });
});
