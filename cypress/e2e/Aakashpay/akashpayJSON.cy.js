///<reference types="cypress" />

describe("Visit the site", () => {
  beforeEach("Aakashpay.com", function () {
    cy.visit("https://app.aakashpay.com/");
  });

  it("Login with valid credential", () => {
    cy.fixture("loginaakashpay.json").then((user)=> {
      cy.get("input[type='email']").should("be.visible").type(user.email);
      cy.get("input[type='password']").should("be.visible").type(user.password);
      cy.get("button[type='submit']").should('have.value','Login').click();
    });
  });
});
