/*Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.*/
let time = prompt("Ingrese la cantidad de horas que uso el estacionamiento")
precio = 2000
tarifa = (parseFloat(time*precio))
alert("El valor a pagar es " + tarifa)
