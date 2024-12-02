class ResultsPage {
  selectFirstSUVAndVerify() {
    // Función para procesar elementos visibles y hacer scroll de ser necesario
    const processItems = () => {
      cy.get('[class="ct-flex ct-palette-w-bg-color ct-flex-justify-content-space-between ct-vehicle-block--new-to-online"]')
        .each(($el) => {
          // Verificamos si el elemento contiene el texto "SUV"
          if ($el.text().includes("SUV")) {
            // Aserción: Confirmar que el texto incluye "SUV"
            cy.wrap($el).should('contain.text', 'SUV');
            
            // Si contiene "SUV", buscamos el botón dentro de este elemento
            cy.wrap($el).find('button').last().click();

            // Detener la iteración una vez seleccionado
            return false;
          }
        })
        .then(($list) => {
          // Si no se encuentra un SUV, scroll hacia abajo y verifica de nuevo
          if ($list.length && !$list.toArray().some((el) => el.textContent.includes("SUV"))) {
            cy.scrollTo('bottom'); // Desplázate hacia abajo
            cy.wait(1000); // Espera un momento para que se carguen más elementos
            processItems(); // Llama recursivamente para seguir buscando
          }
        });
    };

    processItems(); // Inicia el procesamiento
  }

  selectRateBasic(){
    cy.get('[data-auto-id="btnBookWithoutInsurance1"]').click()
  }
  selectRatePremium(){
    cy.get('[data-auto-id="btnBookWithInsurance1"]').click()
    
  }
}

export const resultsPage = new ResultsPage();
