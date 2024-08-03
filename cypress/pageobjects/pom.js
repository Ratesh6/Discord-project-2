class login{
    url(){
        cy.visit('https://discord.com/login',{failOnStatusCode:false});
    }
    useremail(useremail){
        cy.get("#uid_7").type(useremail);
    }
    userpassword(userpassword){
        cy.get("#uid_9").type(userpassword);
    }
     clicksubmit(){
        cy.get('.block_b83a05 > .marginBottom8_f7730b').click();
    }
    validsucccesfullogin(){
        cy.get('.title_d10a58').should('have.text','Wait! Are you human?');
    }
    validatingerrormessage(){
        cy.get('.errorMessage_c46f6a').should('have.text','Login or password is invalid.');
    }
    validatingerrormessage2(){
        cy.get('.errorMessage_c46f6a').should('have.text','-Not a well formed email address');
    }

}
export default login;