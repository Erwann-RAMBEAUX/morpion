describe("tests d'intéraction de base", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
  }),
    it("Site url ok", () => {
    }),
    it("Site prêt à jouer", () => {
      cy.get("#score").should("have.text", "X : 0 - O : 0");
      cy.get("#11").should("exist");
      cy.get("#33").should("exist");
      cy.get("#44").should("not.exist");
      cy.get("#btn_reset").should("exist").should("be.disabled");
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
    }),
    it("clic bien géré", () => {
      cy.get("#11").click();
      cy.get("#11").should("have.value", "X");
    }),
    it("alternance joueur ok", () => {
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
      cy.get("#11").click();
      cy.get("#messages").should("have.text", "Joueur 2, à toi de jouer !");
    }),
    it("Case déjà occupée", () => {
      cy.get("#11").click();
      cy.get("#messages").should("have.text", "Joueur 2, à toi de jouer !");
      cy.get("#11").click();
      cy.get("#messages").should("have.text", "Case déjà occupée !");
    }),
    it("Taille impossible", ()=> {
        cy.get("#11").click();
        cy.get("#12").click();
        cy.get("#21").click();
        cy.get("#22").click();
        cy.get("#31").click();
        cy.get("#taille").clear().type("10");
        cy.get("#simple").check();
        cy.get("#btn_reset").click();
        cy.get("#messages").should("have.text", "Taille invalide !");
    }),
    it("Taille avec un +", ()=> {
      cy.get("#11").click();
      cy.get("#12").click();
      cy.get("#21").click();
      cy.get("#22").click();
      cy.get("#31").click();
      cy.get("#taille").clear().type("3+5");
      cy.get("#btn_reset").click();
      cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
      cy.get("#11").click();
    });
});