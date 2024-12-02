// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import dayjs from 'dayjs';

// Crear un comando personalizado para seleccionar una fecha en el calendario
Cypress.Commands.add('pickUpDate', (daysToAdd) => {
  // Calcular la fecha deseada
  const targetDate = dayjs().add(daysToAdd, 'day'); // Sumar días a la fecha actual
  const targetDay = targetDate.format('D'); // Día (número)
  const targetMonthAbbr = targetDate.format('MMM').toUpperCase(); // Mes abreviado 
  const targetYear = targetDate.format('YYYY'); // Año

  // Abrir el calendario 
  cy.get('#pickupDate').click(); 

  // Seleccionar el día 
  cy.contains('[class="ct-datepicker-cell ct-calendar__month__date notranslate    "]', targetDay).click(); 
});

Cypress.Commands.add('returnDate', (daysToAdd) => {
    // Calcular la fecha 
    const targetDate = dayjs().add(daysToAdd, 'day'); // Sumar días a la fecha actual
    const targetDay = targetDate.format('D'); // Día 
    const targetMonthAbbr = targetDate.format('MMM').toUpperCase(); // Mes abreviado 
    const targetYear = targetDate.format('YYYY'); // Año
  
    // Abrir el calendario 
    cy.get('#returnDate').click(); 
  
    // Seleccionar el día 
    cy.contains('[class="ct-datepicker-cell ct-calendar__month__date notranslate    "]', targetDay).click(); 
  });