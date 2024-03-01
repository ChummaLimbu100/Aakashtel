/// <reference types="Cypress" />

describe("Aakashtel Registration page", () => {
  // beforeEach(() => {
  //   cy.visit("https://apps.aakashtel.com/register");
  // });

  it("Automate the registration page", () => {
    //cy.get("#:rb: ").type("Chumma Limbu");
    // cy.get("#:r1:").type("E-signature");
    cy.visit("https://apps.aakashtel.com/register");
    cy.get(
      "MuiInputBase-root .MuiOutlinedInput-root .MuiInputBase-colorPrimary .MuiInputBase-formControl .MuiInputBase-sizeSmall css-3y156w"
    ).type("Chumma limbu");
  });
});
