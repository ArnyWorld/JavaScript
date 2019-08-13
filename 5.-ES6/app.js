// //ES5 - Variables
// var nombre5 = 'Arni';
// console.log(nombre5);
// var edad5 = 24;
// nombre5 = 'Adalid';
// console.log(nombre5);

// //ES6 - Variables
// const nombre6 = 'Cayo';
// let edad6 = 24;
// console.log(edad6);
// //nombre6 = 'Carla';
// edad6 = 23;
// console.log(edad6);

//Bloques y alcance de las variables

// {
//     const a = 3;
//     let b = 4;
//     var c = 5
// }
// //console.log(a + b);
// console.log(c);

//Template Strings

//  let nombre = 'Arnaldo';
//  let apellido = 'Muñoz';
// const ciudad = 'La Paz';
// const nacimiento = 1995;
// function calcularEdad(year){
//     return 2019 - year;
// }

//ES5
// console.log(nombre + ' ' + apellido + ', nació en ' + ciudad + ' , y su edad es ' + calcularEdad(nacimiento));
//ES6
// console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`);

//Funciones de cadenas ES6

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5));
// console.log(nombreCompleto.includes('blo '));
// console.log(nombreCompleto.startsWith('Pe'));
// console.log(nombreCompleto.endsWith('uez'));

// Funciones Flecha

// const years = [2000, 2005, 2008, 2012];

// //ES5
// var edad5 = years.map(function(el){
//     return 2019 - el;
// });
// console.log(edad5);

// //ES6
// let edad6 = years.map(el => 2019 - el);
// console.log(edad6);

// edad6 = years.map((el, index) => `Edad ${index + 1}: ${2019 - el}`);
// console.log(edad6);

// edad6 = years.map(
//     (el, index) => {
//         const yearActual = new Date().getFullYear();
//         const edad = yearActual - el;
//         return `Edad ${index + 1}: ${edad}`;
//     }
// );
// console.log(edad6);

// const cuadrado = (num) => num * num;

// console.log(cuadrado(5));

// const personas = [
//     {
//         nombre:'Arni',
//         edad: 24
//     },
//     {
//         nombre:'Lendy',
//         edad:22
//     },
//     {
//         nombre:'Fernando',
//         edad:24
//     },
//     {
//         nombre:'Magui',
//         edad:25
//     }
// ];
// // const menores24 = personas.filter(function(persona){
// //     return persona.edad < 24;
// // });
// const menores24 = personas.filter((persona) => persona.edad < 24);
// console.log(menores24);

//Operador condicional (ternario) ?

// const miEdad = 24;
// let mensaje;
// mensaje = miEdad >= 18 ? 'Ingrese a la discoteca' : 'Usted no puede ingresar';

// if(miEdad >= 18){
//     mensaje = 'Ingrese a la discoteca';
// }else{
//     mensaje = 'Usted no puede ingresar';
// }
// console.log(mensaje);

// let boton = document.getElementById('boton');

// let inicioSesion = true;

// inicioSesion ? boton.innerText = 'Cerrar sesión' : boton.innerText = 'Login';


////////Destructuración - Destrucción - Destructuring/////

//ES5
//var datos = ['Arni', 24];

// var nombre = datos[0];
// var edad = datos[1];

//ES6
// var [nombre, edad] = ['Arni', 25];
// console.log(nombre);
// console.log(edad);

// const persona = {
//     Nombre: 'Lendy',
//     Edad: 22
// }

// const {Nombre, Edad} = persona;
// console.log(Nombre);
// console.log(Edad);

// const {Nombre: n, Edad: e} = persona;
// console.log(n);
// console.log(e);

// const calcMayoriaEdad = (year) => {
//     const edad = new Date().getFullYear() - year;
//     const mayoria = edad >= 18 ? true : false;
//     return [edad, mayoria];
// }
// const [edad2, mayoria] = calcMayoriaEdad(2010);
// console.log(edad2);
// console.log(`Es mayor de edad: ${mayoria}`);

/////////Mapas/////////////

const datos = new Map();

datos.set('nombre', 'Arnaldo');
datos.set('edad', 24);
datos.set(1, 'arni@email.com');
datos.set(2, 'arni@gmail.com');
datos.set('movil',12345678);

// console.log(datos.get('nombre'));
// console.log(datos.get(2));
// console.log(datos.size);

//datos.delete(2);
//datos.clear();

datos.forEach((value,key) => {
    console.log(`${key} : ${value}`);
});