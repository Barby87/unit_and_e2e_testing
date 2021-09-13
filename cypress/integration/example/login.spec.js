describe("Test login", () => {
  it("Get logged in", () => {
    cy.visit('http://localhost:3000/')
    cy.get("input#email").type("janet.weaver@reqres.in");
    cy.get("input#password").type("1234");
    cy.contains("Submit").click();
    cy.contains("Logged");
  });

  it("Get Error loggin when email is empty", () => {
    cy.visit('http://localhost:3000/')
    cy.get("input#password").type("1234");
    cy.contains("Submit").click();
    cy.contains("Missing email or username");
  });

  it("Get Error loggin when password is empty", () => {
    cy.visit('http://localhost:3000/')
    cy.get("input#email").type("janet.weaver@reqres.in");
    cy.contains("Submit").click();
    cy.contains("Missing password");
  });

  it("Failed login due to username error", () => {
    cy.visit('http://localhost:3000/')
    cy.get("input#email").type("janet@gmail.com");
    cy.get("input#password").type("1234");
    cy.contains("Submit").click();
    cy.contains("user not found");
  });

  it("Failed login when email and password are empty", () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Submit").click();
    cy.contains("Missing email or username");
  });
});
