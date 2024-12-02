import { homePage } from "../pages/homePage";
import { resultsPage } from "../pages/resultPage";
import { driverInfoPage } from "../pages/driverInfoPage";



describe("Car Rental Insurance Selection", () => {
  let testData;


  before(() => {
    cy.fixture("carRentalData").then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    
  
  });

  it("should navigate to Driver Info page with Basic rate", () => {
   // Paso 1: Buscar un coche
    cy.visit(''); 
    homePage.searchLocation(testData.pickupLocation);
    cy.pickUpDate(3);
    cy.returnDate(8);
    homePage.selectAge();
    homePage.bttnSearch();
    cy.wait('@pageRedirect', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    
    // Paso 2: Seleccionar el primer SUV y la tarifa basica
    resultsPage.selectFirstSUVAndVerify();
    resultsPage.selectRateBasic();
     

    // Paso 4: Verificar que la tarifa seleccionada es "Limitada" y verificamos que la pagina del conductor muestra la tarifa seleccionada
    driverInfoPage.verifyDriverInfoPageInsurance(testData.insurance[0]);
    driverInfoPage.verifyDriverInfoPageRate('95,15 €');
  });

  it("should navigate to Driver Info page with Premium rate", () => {
    // Paso 1: Buscar un coche
    homePage.searchLocation(testData.pickupLocation);
    cy.pickUpDate(3);
    cy.returnDate(8);
    homePage.selectAge();
    homePage.bttnSearch();
    cy.wait('@pageRedirect', { timeout: 20000 }).its('response.statusCode').should('eq', 200); 

    // Paso 2: Seleccionar el primer SUV y la tarifa "Premium"
    resultsPage.selectFirstSUVAndVerify();
    resultsPage.selectRatePremium();
     

    // Paso 4: Verificar que la tarifa seleccionada es "Limitada" y verificamos que la pagina del conductor muestra la tarifa seleccionada
    driverInfoPage.verifyDriverInfoPageInsurance(testData.insurance[1]);
    driverInfoPage.verifyDriverInfoPageRate('170,15 €');
  });

  afterEach(() => {
    // Limpiar datos 
    cy.clearCookies();
  });
});