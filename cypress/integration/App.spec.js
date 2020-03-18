describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("contains Post-It Notes", () => {
    cy.visit("/");
    cy.get("[data-cy=item]").should("contain", "Post-It Notes");
  });

  // it("successfully renders login page", () => {
  //   cy.visit("/");
  //   cy.get("[data-cy=login]").click();
  //   cy.get("[data-cy=loginbutton]").should("contain", "Login");
  // });
});