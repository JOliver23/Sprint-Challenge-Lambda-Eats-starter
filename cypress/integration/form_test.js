/*global cy*/

describe("test the form inputs and submission", function() {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/pizza")
    });

    it("adds input", function() {
        cy.get('[data-cy=name]')
        .type("Jaxon Oliver")
        .should("have.value", "Jaxon Oliver");

        cy.get('#address')
        .type("3rd st W Lancaster, CA")
        .should("have.value", "3rd st W Lancaster, CA")

        cy.get('#size')
        .select("small")
        .should("have.value", "small")

        cy.get('textarea')
        .type("Extra crispy")
        .should("have.value", "Extra crispy")

        cy.get("form").submit()
    });
})