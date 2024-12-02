class DriverInfoPage {
  verifyDriverInfoPageRate(rate) {
    // Verificar que la tarifa seleccionada aparece en la página de información del conductor
    cy.contains('Total').siblings('[class="ct-navigation-header__total-amount"]').should('contain.text', rate);
  }

  verifyDriverInfoPageInsurance(insurance) {
    // Verificar que el seguro seleccionado coincida
    cy.get('[class="ct-block ct-relative ct-padding-large"]').should("contain.text", insurance);
  }
}

export const driverInfoPage = new DriverInfoPage();
