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

describe("Gestion de la victoire en 'complet' 7x7 ", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
    runComplet(7);
  }),
    it("joueur 1 gagne colonne 1", () => {
      gagneCompletColonne(7, 1);
      j1Gagne(1);
    }),
    it("joueur 1 gagne colonne 2", () => {
      gagneCompletColonne(7, 2);
      j1Gagne(1);
    }),
    it("joueur 1 gagne dernière colonne", () => {
      gagneCompletColonne(7, 7);
      j1Gagne(1);
    }),
    it("joueur 2 gagne ligne 1", () => {
      gagneCompletLigne(7, 1);
      j2Gagne(1);
    }),
    it("joueur 2 gagne ligne 2", () => {
      gagneCompletLigne(7, 2);
      j2Gagne(1);
    }),
    it("joueur 2 gagne dernière ligne", () => {
      gagneCompletLigne(7, 7);
      j2Gagne(1);
    }),
    it(("joueur 1 gagne diagonale 1"), () => {
      gagneCompletDiagonale(7, 1);
      j1Gagne(1);
    }),
    it(("joueur 2 gagne diagonale 2"), () => {
      gagneCompletDiagonale(7, 2);
      j2Gagne(1);
    });
});
