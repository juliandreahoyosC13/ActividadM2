/*Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).*/
let sueldo = prompt("Ingrese el valor de sueldo")
semana = (sueldo/4)
ahorro = (semana*15/100)
anualidad = (48*ahorro)
alert("Los ahorros anuales son " + anualidad)