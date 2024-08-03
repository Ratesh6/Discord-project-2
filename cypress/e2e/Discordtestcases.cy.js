import pom from "../pageobjects/pom"

describe('Login testcases', () => {
    it('TC_DIS_Login_001', () => {
    cy.visit('https://discord.com/login',{failOnStatusCode:false});
      cy.wait(2000);
        const ln=new pom();
          ln.useremail("rateshkj@gmail.com");
          ln.userpassword("Ratesh@123");
          ln.clicksubmit();
          ln.validsucccesfullogin();
    })
      it('TC_DIS_Login_002', () => {
        cy.visit('https://discord.com/login',{failOnStatusCode:false});
        cy.wait(2000);
        const ln=new pom();
        ln.useremail("rateshkj@gmail.com");
        ln.userpassword("123466+");
        ln.clicksubmit();
        cy.wait(2000);
        ln.validatingerrormessage();
      })
      it('TC_DIS_Login_003', () => {
        cy.visit('https://discord.com/login',{failOnStatusCode:false});
        cy.wait(2000);
        const ln=new pom();
        ln.useremail("rateshkj@gmail");
        ln.userpassword("Ratesh@123");
        ln.clicksubmit();
        cy.wait(2000);
        ln.validatingerrormessage2();
      })
      it('TC_DIS_Login_004', () => {
        cy.visit('https://discord.com/login',{failOnStatusCode:false});
        cy.wait(2000);
        const ln=new pom();
        ln.useremail("ratesh@gmail.com");
        ln.userpassword("123456");
        ln.clicksubmit();
        cy.wait(2000);
        ln.validatingerrormessage
      })   
      it('TC_DIS_Login_005', () => {
        cy.visit('https://discord.com/login',{failOnStatusCode:false});
        cy.wait(2000);
        const ln=new pom();
        ln.useremail("        ");
        ln.userpassword("     ");
        ln.clicksubmit();
        cy.wait(2000);
        ln.validatingerrormessage
      })
 })