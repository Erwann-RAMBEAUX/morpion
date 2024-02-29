import {
    runSimple,
  } from "../Categorie_5/func_simple.js";
  
/* 
Attention cette fonction ne fonctionne pas pour 7 
et même pour 5 en soi si les diagnoles hors diagonale principale permettait de gagner
*/
function matchNul(taille){ 
    const tabCases = [];
    let decale = false;
    for (let i = 1; i <= taille; i++) {
        if (decale) {
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
        if (i % 2 == 0) {
            decale = !decale;
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
    it("Lancer un match simple 4x4", () => {
        runSimple(4);
        cy.get("#score").should("have.text", "X : 0 - O : 0");
        cy.get("#messages").should("have.text", "Joueur 1, à toi de jouer !");
        cy.get("#btn_reset").should("be.disabled");
    })
      it("Match nul 4x4", () => {
        runSimple(4);
        matchNul(4);
        cy.get("#score").should("have.text", "X : 0 - O : 0");
        cy.get("#messages").should("have.text", "Match nul !");
        cy.get("#btn_reset").should("not.be.disabled");
      });
      it("Match nul 5x5", () => {
        runSimple(5);
        matchNul(5);
        cy.get("#score").should("have.text", "X : 0 - O : 0");
        cy.get("#messages").should("have.text", "Match nul !");
        cy.get("#btn_reset").should("not.be.disabled");
      });
    it("Match nul 8x8", () => {
      runSimple(8);
      matchNul(8);
      cy.get("#score").should("have.text", "X : 0 - O : 0");
      cy.get("#messages").should("have.text", "Match nul !");
      cy.get("#btn_reset").should("not.be.disabled");
    });
  });
  