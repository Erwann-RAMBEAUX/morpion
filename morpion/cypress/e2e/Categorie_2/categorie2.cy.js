import {
  runComplet,
} from "../Categorie_3/func_complet.js";


function matchNul(taille) {
  const tabCases = [];
  for (let i = 1; i <= taille; i++) {
    if (i == taille || i == 1) {
      for (let j = 1; j < taille; j++) {
        tabCases.push(i * 10 + j + 1);
      }
      tabCases.push(i * 10 + 1);
    }
    else {
      for (let j = 1; j <= taille; j++) {
        tabCases.push(i * 10 + j);
      }
    }
  }
  cy.wrap(tabCases).each((index) => {
    cy.get("#" + index).click();
  })
}
describe("Match nul", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
  }),
    it("Match nul 3x3", () => {
      const tabCases = [21, 22, 31, 11, 33, 32, 12, 13, 23];
      cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
      });
      cy.get("#score").should("have.text", "X : 0 - O : 0");
      cy.get("#messages").should("have.text", "Match nul !");
      cy.get("#btn_reset").should("not.be.disabled");
    }),
    it("Match nul 5x5", () => {
      runComplet(5);
      matchNul(5);
      cy.get("#score").should("have.text", "X : 0 - O : 0");
      cy.get("#messages").should("have.text", "Match nul !");
      cy.get("#btn_reset").should("not.be.disabled");
    });
  it("Match nul 8x8", () => {
    runComplet(8);
    matchNul(8);
    cy.get("#score").should("have.text", "X : 0 - O : 0");
    cy.get("#messages").should("have.text", "Match nul !");
    cy.get("#btn_reset").should("not.be.disabled");
  });
});
