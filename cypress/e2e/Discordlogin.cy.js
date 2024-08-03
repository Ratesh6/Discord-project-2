describe('Login testcases discord', () => {
  it('Testcase', () => {
    cy.visit('https://discord.com/login',{failOnStatusCode:false});
    cy.wait(2000);
    cy.get("#uid_7").type('rateshkj@gmail.com');
    cy.get("#uid_9").type('Ratesh@123');
    cy.get('.block_b83a05 > .marginBottom8_f7730b').click();
    cy.get('.title_d10a58').should('have.text','Wait! Are you human?')
  })
})