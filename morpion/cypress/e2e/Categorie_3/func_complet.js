export function gagneCompletColonne(taille, colonne) {
    const tabCases = [];
    for (let i = 1; i <= taille - 1; i++) {
        tabCases.push(i * 10 + colonne);
        tabCases.push(i * 10 + (colonne === taille ? colonne - 1 : colonne + 1));
    }
    tabCases.push(taille * 10 + colonne);
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}

export function gagneCompletLigne(taille, ligne) {
    const tabCases = [];
    for (let i = 1; i <= taille; i++) {
        if (ligne === 1) {
            if (i === 1) {
                tabCases.push(20 + i);
                tabCases.push(ligne * 10 + i);
            } else {
                tabCases.push(30 + i);
                tabCases.push(ligne * 10 + i);
            }
        } else {
            if (i === 1) {
                tabCases.push(10 + i);
                tabCases.push(ligne * 10 + i);
            } else {
                tabCases.push((ligne === taille ? ligne - 1 : ligne + 1) * 10 + i);
                tabCases.push(ligne * 10 + i);
            }
        }
    }
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}

export function gagneCompletDiagonale(taille, diagonale) {
    const tabCases = [];
    if (diagonale == 1) {
        for (let i = 1; i < taille; i++) {
            tabCases.push(i * 10 + i);
            tabCases.push(i * 10 + i + 1);
        }
        tabCases.push(taille * 10 + taille);
    }
    else {
        for (let i = taille; i >= 1; i--) {
            if (i == taille) {
                tabCases.push(10 + 1 * taille);
            }
            else {
                tabCases.push(i * 10 + i + 1);
            }
            tabCases.push(i * 10 + i);
        }
    }
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}
export function runComplet(taille) {
    const tabCases = [21, 22, 31, 11, 33, 32, 12, 13, 23];
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
    cy.get("#taille").clear().type(String(taille));
    cy.get("#btn_reset").click();
}