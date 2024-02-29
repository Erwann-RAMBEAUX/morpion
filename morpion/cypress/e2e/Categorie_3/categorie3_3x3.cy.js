import {
  j1Gagne,
  j2Gagne,
} from "../func.js";
import {
  gagneCompletColonne,
  gagneCompletLigne,
  gagneCompletDiagonale,
} from "./func_complet.js";

describe("Gestion de la victoire en 'complet' 3x3", () => {
  beforeEach(() => {
    cy.visit("/morpion.html");
  }),
    it("joueur 1 gagne colonne 1", () => {
      gagneCompletColonne(3, 1);
      j1Gagne(1);
    }),
    it("joueur 1 gagne colonne 2", () => {
      gagneCompletColonne(3, 2);
      j1Gagne(1);
    }),
    it("joueur 1 gagne dernière colonne", () => {
      gagneCompletColonne(3, 3);
      j1Gagne(1);
    }),
    it("joueur 2 gagne ligne 1", () => {
      gagneCompletLigne(3, 1);
      j2Gagne(1);
    }),
    it("joueur 2 gagne ligne 2", () => {
      gagneCompletLigne(3, 2);
      j2Gagne(1);
    }),
    it("joueur 2 gagne dernière ligne", () => {
      gagneCompletLigne(3, 3);
      j2Gagne(1);
    }),
    it(("joueur 1 gagne diagonale 1"), () => {
      gagneCompletDiagonale(3, 1);
      j1Gagne(1);
    }),
    it(("joueur 2 gagne diagonale 2"), () => {
      gagneCompletDiagonale(3, 2);
      j2Gagne(1);
    });
});
