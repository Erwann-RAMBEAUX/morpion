import {
  j1Gagne,
  j2Gagne,
} from "../func.js";
import {
  gagneSimpleColonne,
  gagneSimpleLigne,
  runSimple,
  gagneSimpleDiagonale,
} from "./func_simple.js";


describe("Gestion de la victoire en 'simple' 5x5 ", () => {
  const taille = 8
  beforeEach(() => {
    cy.visit("/morpion.html");
    runSimple(taille);
  }),
    it("joueur 1 gagne colonne 1", () => {
      gagneSimpleColonne(taille, 1, 1);
      j1Gagne(1);
    }),
    it("joueur 1 gagne colonne 3", () => {
      gagneSimpleColonne(taille, 3, 0);
      j1Gagne(1);
    }),
    it("joueur 1 gagne dernière colonne", () => {
      gagneSimpleColonne(taille, taille, 1);
      j1Gagne(1);
    }),
    it("joueur 2 gagne ligne 1", () => {
      gagneSimpleLigne(taille, 1, 0);
      j2Gagne(1);
    }),
    it("joueur 2 gagne ligne 2", () => {
      gagneSimpleLigne(taille, 2, 1);
      j2Gagne(1);
    }),
    it("joueur 2 gagne dernière ligne", () => {
      gagneSimpleLigne(taille, taille, 1);
      j2Gagne(1);
    }),
    it(("joueur 1 gagne diagonale 1"), () => {
      gagneSimpleDiagonale(1, 1, 1);
      j1Gagne(1);
    }),
    it(("joueur 2 gagne diagonale 2"), () => {
      gagneSimpleDiagonale(2, 1, 1);
      j2Gagne(1);
    });
});
