# Ingles 

Manual Task: Vueling's Ticket Selling Web
For the Vueling's ticket selling web (http://tickets.vueling.com ), the following business rules are defined (NOTE: they do not have to coincide with the actual rules):

Children under 12 years old at the time of the flight must always travel accompanied by an adult.
Italian nationals under 14 years old traveling to/from Italy must always travel accompanied by an adult.
Romanian nationals under 18 years old traveling to/from Romania must always travel accompanied by an adult.
Unaccompanied minors under 16 years old are not allowed to book connecting flights.
Prepare a manual test plan that validates the correct implementation of the previous rules.

Technical Test Statement: Validation of Basic and Premium Rates in Car Rentals
Context
The company has implemented two insurance options for cars: Basic Insurance and Premium Insurance. We need to ensure that users can select either of these rates and successfully proceed to the Driver Information page.

Instructions
Navigate to the website:
URL: https://cars.vueling.com/ 
Search parameters:
Pickup Location: Barcelona Airport
Pickup Date: 3 days after the execution date
Return Date: 5 days after the execution date
Driver’s Age: 40
Select a car:
Choose the first SUV car from the list.
Dynamic Fare Selection: In two independent test cases using it():
Case 1:
Select the Basic Rate.
Ensure navigation to the Driver Information page.
Case 2:
Select the Premium Rate.
Ensure navigation to the Driver Information page.
Final assertion: Verify that the selected rate (Basic or Premium) is correctly reflected on the Driver Information page.
Technical Requirements
Screen resolution: Both tests must run at a resolution of 430 x 932.
Use of Fixtures: Use a JSON file in the fixtures folder containing the following parameters:

{
  "pickupLocation": "Barcelona Airport",
  "driverAge": 40,
  "insurance": ["Basic", "Premium"]
}
Code structure:
Use describe() to group the test cases.
Include the hooks before(), after(), beforeEach(), and afterEach().
Cookie cleanup: Ensure to clear cookies at the start of each test case using cy.clearCookies().
Assertions at each step: Include assertions to validate the following:
Search page loads correctly.
The selected car is an SUV.
The selected rate matches the option (Basic or Premium).
The Driver Information page displays the correct selected rate.

# Español
Tarea Manual: Web de Venta de Tickets de Vueling
Para la web de venta de tickets de Vueling (http://tickets.vueling.com), se definen las siguientes reglas de negocio (NOTA: estas reglas no necesariamente coinciden con las reales):

Los niños menores de 12 años al momento del vuelo deben viajar siempre acompañados por un adulto.
Los ciudadanos italianos menores de 14 años que viajen desde/hacia Italia deben viajar siempre acompañados por un adulto.
Los ciudadanos rumanos menores de 18 años que viajen desde/hacia Rumania deben viajar siempre acompañados por un adulto.
No se permite a menores de 16 años viajar solos en vuelos con conexiones.
Preparar un plan de pruebas manual que valide la correcta implementación de las reglas mencionadas.

Declaración de Prueba Técnica: Validación de Tarifas Básica y Premium en Alquiler de Autos
Contexto
La empresa ha implementado dos opciones de seguro para autos: Seguro Básico y Seguro Premium. Es necesario garantizar que los usuarios puedan seleccionar cualquiera de estas tarifas y proceder exitosamente a la página de Información del Conductor.

Instrucciones
Navegar al sitio web:
URL: https://cars.vueling.com/
Parámetros de búsqueda:
Lugar de recogida: Aeropuerto de Barcelona
Fecha de recogida: 3 días después de la fecha de ejecución
Fecha de devolución: 5 días después de la fecha de ejecución
Edad del conductor: 40 años
Seleccionar un auto:
Escoge el primer SUV de la lista.
Selección dinámica de tarifas: Realiza dos casos de prueba independientes con it():
Caso 1:
Seleccionar la tarifa Básica.
Asegurarse de que se navega correctamente a la página de Información del Conductor.
Caso 2:
Seleccionar la tarifa Premium.
Asegurarse de que se navega correctamente a la página de Información del Conductor.
Aserción final: Verificar que la tarifa seleccionada (Básica o Premium) se refleje correctamente en la página de Información del Conductor.
Requisitos Técnicos
Resolución de pantalla: Ambas pruebas deben ejecutarse con una resolución de 430 x 932.
Uso de fixtures: Utilizar un archivo JSON en la carpeta fixtures con los siguientes parámetros:
json
Copiar código
{
  "pickupLocation": "Aeropuerto de Barcelona",
  "driverAge": 40,
  "insurance": ["Básico", "Premium"]
}
Estructura del código:
Usa describe() para agrupar los casos de prueba.
Incluye los hooks before(), after(), beforeEach() y afterEach().
Limpieza de cookies: Asegurarse de limpiar las cookies al inicio de cada caso de prueba con cy.clearCookies().
Aserciones en cada paso:
La página de búsqueda se carga correctamente.
El auto seleccionado es un SUV.
La tarifa seleccionada coincide con la opción elegida (Básico o Premium).
La página de Información del Conductor muestra correctamente la tarifa seleccionada.