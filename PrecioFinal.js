/*Realiza un algoritmo para determinar cuánto pagará finalmente una persona por un artículo, considerando que tiene un descuento de 20%, y debe pagar 15% de IVA (debe mostrar el precio con descuento y el precio final).*/
let precio = 100000
preciodes = (precio-(precio*20/100))
IVA = (precio*15/100)
alert("El valor neto del articulo es " + precio)
alert("El valor con descuento del 20% es " + preciodes + " y el valor del producto + IVA es " + (IVA + preciodes))

