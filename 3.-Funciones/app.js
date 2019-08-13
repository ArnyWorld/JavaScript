/*************
 * Funciones
 *  */
/*function bienvenido(){
    return 'Hola Bienvenido a la sección de funciones';
}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
//entradas(argumento), código, salida(return)

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));

//Función que convierte de grados Fahrenheit a Celsius
// 32F = 0C, 68F = 20C.
// C = (F - 32) * 5/9

function convertirFAHaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFAHaCelsius(32);
var tempDos = convertirFAHaCelsius(68);
console.log(tempUno);
console.log(tempDos);
*/
/*
function calcularEdad(anioNacimiemto){
    return 2019 - anioNacimiemto;
}

var edad1 = calcularEdad(1990);
var edad2 = calcularEdad(1995);
var edad3 = calcularEdad(2000);
console.log(edad1);
console.log(edad2);
console.log(edad3);
*/

/********************
 * Funciones como expresiones
 */
//Argumentos Undefined
/*
var nombre; 
var prueba = function(n){
    return 'Hola ' + n;
}
nombre = 'Arni';
console.log(prueba(nombre));

//Argumentos Nulos

var a;
a = null;
var valorNulo = function(a){
    return a;
}
console.log(valorNulo(a));
*/

//Argumentos por default

/*var sumar = function(a = 5, b = 3, c = 3){
    return a + b + c;
}
console.log(sumar());

//Plantillas de cadenas (template string)
var nombre = 'Tylor';
console.log(`El nombre es: ${nombre}`);

var a = 5;
var b = 10;
//console.log('La suma es:' + (a + b));
console.log(`La suma es : ${a + b}`);
*/

