describe('Первый тест', () => {
   it('Открытие страницы', () => {
       cy.visit('/');

       cy.get('.highlight-card').should('contain', 'main-app app is running!');
       cy.screenshot('test-screen');
   });
});
