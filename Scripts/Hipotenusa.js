/*Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que: La hipotenusa al cuadrado es igual a la suma de los otros dos lados al
cuadrado (H2 = A2 + B2)*/

/*En un triángulo rectángulo, la hipotenusa es el lado más largo, un lado "opuesto" es el que está frente a un ángulo dado, y un lado "adyacente" está al lado de un ángulo dado. Utilizamos palabras especiales para designar los lados de triángulos rectángulos.*/
let lado1 = prompt("Ingrese la medida de la altura del triangulo")
let lado2 = prompt("Ingrese la medida de la base del triangulo")
let hipotenusa = ((lado1**2)+(lado2**2))
alert("La hipotenusa del triangulo rectangulo es " + hipotenusa)
