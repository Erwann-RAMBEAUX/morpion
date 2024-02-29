import {
  j1Gagne,
  j2Gagne,
} from "../func.js";
import {
  gagneCompletColonne,
  gagneCompletLigne,
  gagneCompletDiagonale,
  runComplet,
} from "./func_complet.js";

describe("Gestion de la victoire en 'complet' 5x5 ", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
    runComplet(5);
  }),
    it("joueur 1 gagne colonne 1", () => {
      gagneCompletColonne(5, 1);
      j1Gagne(1);
    }),
    it("joueur 1 gagne colonne 2", () => {
      gagneCompletColonne(5, 2);
      j1Gagne(1);
    }),
    it("joueur 1 gagne dernière colonne", () => {
      gagneCompletColonne(5, 5);
      j1Gagne(1);
    }),
    it("joueur 2 gagne ligne 1", () => {
      gagneCompletLigne(5, 1);
      j2Gagne(1);
    }),
    it("joueur 2 gagne ligne 2", () => {
      gagneCompletLigne(5, 2);
      j2Gagne(1);
    }),
    it("joueur 2 gagne dernière ligne", () => {
      gagneCompletLigne(5, 5);
      j2Gagne(1);
    }),
    it(("joueur 1 gagne diagonale 1"), () => {
      gagneCompletDiagonale(5, 1);
      j1Gagne(1);
    }),
    it(("joueur 2 gagne diagonale 2"), () => {
      gagneCompletDiagonale(5, 2);
      j2Gagne(1);
    });
});
