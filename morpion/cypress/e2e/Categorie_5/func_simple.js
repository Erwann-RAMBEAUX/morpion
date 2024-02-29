export function gagneSimpleColonne(taille, colonne, ligne) {
    const tabCases = [];
    for (let i = 1; i <= 2; i++) {
        tabCases.push((i+ligne) * 10 + colonne);
        tabCases.push((i+ligne) * 10 + (colonne === taille ? colonne - 1 : colonne + 1));
    }
    tabCases.push((ligne+3) * 10 + colonne);
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}

export function gagneSimpleLigne(taille, ligne, colonne) {
    const tabCases = [];
    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            tabCases.push(
                (ligne === taille
                    ? ligne - 2
                    : (ligne <= taille - 2 ? ligne + 2 : ligne + 1)) * 10 + i,
            );
            tabCases.push(ligne * 10 + colonne+i);
        } else {
            tabCases.push((ligne === taille ? ligne - 1 : ligne + 1) * 10 + i);
            tabCases.push(ligne * 10 + colonne+i);
        }
    }
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}

export function gagneSimpleDiagonale(diagonale, colonne, ligne) {
    const tabCases = [];
    if (diagonale == 1) {
        for (let i = 0; i < 2; i++) {
            tabCases.push((i+ligne) * 10 + i + colonne);
            tabCases.push((i+ligne) * 10 + i + colonne + 1);
        }
        tabCases.push((ligne+2) * 10 + colonne+2);
    }
    else {
        for (let i = 3; i >= 1; i--) {
            if (i == 3) {
                tabCases.push((ligne + 2) * 10 + colonne + 1);
            }
            else {
                tabCases.push((i+ligne) * 10 + i + colonne + 1);
            }
            tabCases.push((i+ligne) * 10 + i+colonne);
        }
    }
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
}

export function runSimple(taille) {
    const tabCases = [21, 22, 31, 11, 33, 32, 12, 13, 23];
    cy.wrap(tabCases).each((index) => {
        cy.get("#" + index).click();
    });
    cy.get("#taille").clear().type(String(taille));
    cy.get("#simple").check();
    cy.get("#btn_reset").click();
}


