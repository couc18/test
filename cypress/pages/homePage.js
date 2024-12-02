class HomePage {

  searchLocation(pickupLocation) {
    cy.get("#pickupLocation").type(pickupLocation);
    cy.get("#item-0-0").click() 
  }

  selectAge(){
    cy.get("#ct-age-btn-1").click();       
          
  }

bttnSearch(){
  cy.get("#ct-button-search").click(); 
  
}
}

export const homePage = new HomePage();