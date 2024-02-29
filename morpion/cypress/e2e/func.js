export function j1Gagne(tour) {
  cy.get("#messages").should("have.text", "Le joueur 1 a gagné !");
  cy.get("#score").should("have.text", "X : " + tour + " - O : 0");
  cy.get("#btn_reset").should("exist").should("not.be.disabled");
}

export function j2Gagne(tour) {
  cy.get("#messages").should("have.text", "Le joueur 2 a gagné !");
  cy.get("#score").should("have.text", "X : 0 - O : " + tour);
  cy.get("#btn_reset").should("exist").should("not.be.disabled");
}

