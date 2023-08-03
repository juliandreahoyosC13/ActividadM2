/*Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente.*/
let medida  = prompt("Ingrese la medida que desea pintar em m2")
m2 = 250000
precio = parseFloat(medida)*m2
alert("El presupuesto para pintar la superficie es " + precio)