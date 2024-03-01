///<reference types="Cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://app.aakashpay.com/");
  });

  it("Login page withvalid credentials", () => {
    const ValidUsername = "info@aakashtel.com";
    const ValidPassword = "123456789";
    // cy.log('Valid Username: ${validUsername}');
    // cy.log('Valid Password: ${validPassword}');

    cy.get("input[placeholder='Enter your email']").type("ValidUsername");
    cy.get("input[placeholder='Enter your password']").type("ValidPassword");
    cy.get("button[type='submit']").click();
  });

  //   it("Login with invalid credentials: valid UserName + invalid Password", () => {
  //     const ValidUsername = "info@aakashtel.com";
  //     const ValidPassword = "1234567890000";

  //     cy.get("input[placeholder='Enter your email']").type("ValidUsername");
  //     cy.get("input[placeholder='Enter your password']").type("ValidPassword");
  //     cy.get("button[type='submit']").click();
  //   });
  //   it("Login with invalid credentials: Invalid UserNamde + valid password", () => {
  //     const ValidUsername = "info@aakashtel.com@@@@";
  //     const ValidPassword = "123456789";

  //     cy.get("input[placeholder='Enter your email']").type("ValidUsername");
  //     cy.get("input[placeholder='Enter your password']").type("ValidPassword");
  //     cy.get("input[type='submit']").click();
  //   });
  //   it("Login with invalid credentials: keeping both UserName and Password field empty", () => {
  //     const ValidUsername = "    ";
  //     const ValidPassword = "    ";
  //     cy.get("input[placeholder='Enter your email']").type("ValidUsername");
  //     cy.get("input[placeholder='Enter your password']").type("ValidPassword");
  //     cy.get("input[type=submit]").click();
  //   });
});
