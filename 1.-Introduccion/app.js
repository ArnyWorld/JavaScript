
/**************************************
 *  Lección de definición de Variables
 * ************************************/
 
var nombre = 'Arni';
console.log(nombre);

var edad = 24;
var sueldo = 1800.99;

console.log(edad);

var tieneTrabajo = false;
console.log(tieneTrabajo);

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);

var cajas;
/******************************************/
// Conversión de tipos

var nombre, edad, sexo, trabajo;
nombre = 'Arni';
edad = 24;
sexo = 'M';
trabajo = false;

console.log('El nombre es:' + nombre + ', y su edad es:' + edad + ', ¿tiene trabajo? ' + trabajo);

edad = 'VeintiCuatro';
console.log(edad);

/********************************************/
/* * Operadores - Matemáticos (+, -, *, /)
 */

 var edadArni, edadOso, diferenciaEdad, sumaEdades, anioActual, anioOso, anioArni;
 edadArni = 24;
 edadOso = 22;
 anioActual = 2019;

 diferenciaEdad = edadArni - edadOso;
 sumaEdades = edadArni + edadOso;

 anioArni = anioActual - edadArni;
 anioOso = anioActual - edadOso;
console.log(edadArni);
console.log(edadOso);
 console.log(diferenciaEdad);
 console.log(sumaEdades);
 console.log("Año en que nació Arnaldo:" + anioArni);
 console.log("Año en que nació Adalid:" + anioOso);
 console.log(anioActual * 5);
 console.log(anioActual / 2);



 //Operadores Lógicos

var mayorArni = edadArni == edadOso;
console.log(mayorArni);

//Operador typeof
console.log(typeof edadArni);
console.log(typeof edadOso);
console.log(mayorArni);
console.log(typeof 'Arni es mayor que Oso');

//Operadores Unarios Aritméticos
//++ Incremento
//-- Decremento

var edadCarla = 23;
var edadMayra = 21;

//edadCarla++;
console.log(edadCarla++);
console.log(--edadCarla);

//Operadores de asignación
//=
var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //devuelve el residuo de una división.
a %= b;
*/