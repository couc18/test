# Plan de Pruebas Manual para Validar las Reglas de Negocio en la Venta de Tickets de Vueling

## Objetivo
Validar que las reglas de negocio definidas para la venta de boletos en el sitio web de Vueling se implementan correctamente y no permiten violaciones.

## Reglas de Negocio
Regla 1:
Los niños menores de 12 años al momento del vuelo deben viajar siempre acompañados por un adulto.

Regla 2:
Los ciudadanos italianos menores de 14 años que viajan desde/hacia Italia deben viajar siempre acompañados por un adulto.

Regla 3:
Los ciudadanos rumanos menores de 18 años que viajan desde/hacia Rumania deben viajar siempre acompañados por un adulto.

Regla 4:
Los menores de 16 años no pueden reservar vuelos con conexiones si viajan sin acompañante.

## Estrategia de Pruebas
* Crear casos de prueba detallados para cada regla.
* Ejecutar pruebas en un entorno controlado donde sea posible modificar las edades, nacionalidades y rutas.
* Usar datos de prueba representativos para cubrir todos los escenarios relevantes.

## Casos de Prueba

Caso de Prueba 1: Niños menores de 12 años deben viajar con un adulto
Precondición: Un niño de 11 años intenta reservar un vuelo.
Pasos:
Iniciar una reserva en el sitio web.
Seleccionar un pasajero de 11 años como único viajero.
Intentar continuar con la reserva.
Resultado esperado:
El sistema muestra un mensaje de error indicando que el pasajero debe viajar acompañado por un adulto.

Caso de Prueba 2: Italianos menores de 14 años viajando desde/hacia Italia deben viajar con un adulto
Precondición: Un pasajero italiano de 13 años selecciona un vuelo entre Roma y Milán.
Pasos:
Configurar la nacionalidad del pasajero como italiana.
Seleccionar un vuelo de ida y vuelta desde/hacia Italia.
Intentar completar la reserva sin agregar un acompañante.
Resultado esperado:
El sistema no permite la reserva y muestra un mensaje de advertencia indicando que el pasajero debe estar acompañado por un adulto.

Caso de Prueba 3: Rumanos menores de 18 años viajando desde/hacia Rumania deben viajar con un adulto
Precondición: Un pasajero rumano de 17 años selecciona un vuelo entre Bucarest y Cluj.
Pasos:
Configurar la nacionalidad del pasajero como rumana.
Seleccionar un vuelo de ida y vuelta desde/hacia Rumania.
Intentar completar la reserva sin agregar un acompañante.
Resultado esperado:
El sistema no permite la reserva y muestra un mensaje indicando que el pasajero debe estar acompañado por un adulto.

Caso de Prueba 4: Menores de 16 años no pueden reservar vuelos con conexiones si viajan solos
Precondición: Un pasajero de 15 años selecciona un vuelo con conexión.
Pasos:
Configurar al pasajero con 15 años de edad.
Seleccionar un vuelo con una escala (ejemplo: Madrid - París con escala en Barcelona).
Intentar completar la reserva sin agregar un acompañante.
Resultado esperado:
El sistema no permite la reserva y muestra un mensaje indicando que los pasajeros menores de 16 años no pueden viajar solos en vuelos con conexión.

## Matriz de Pruebas
Caso de Prueba	Descripción	                                            Datos de Entrada	                    Resultado Esperado	                                 Estado
1	            Niños menores de 12 años acompañados	                 Edad: 11, Sin acompañante	            Mensaje de error: “Debe viajar con un adulto”	
2	            Italianos menores de 14 años acompañados	             Nacionalidad: Italiana, Edad: 13	    Mensaje de error: “Debe viajar con un adulto”	
3	            Rumanos menores de 18 años acompañados	                 Nacionalidad: Rumana, Edad: 17	        Mensaje de error: “Debe viajar con un adulto”	
4	            Menores de 16 años no reservan vuelos con conexión	     Edad: 15, Vuelo con escala	            Mensaje de error: “No se permite la reserva”	

## Criterios de Éxito
Todas las reglas se implementan correctamente y los casos de prueba pasan sin errores.
El sistema impide cualquier violación de las reglas de negocio.