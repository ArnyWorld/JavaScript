// let LibroA = {
//     titulo: 'Los elementos de la experiencia de usuario',
//     autor: 'Jesse James Garret',
//     paginas: 220,
//     publicado: true
// }

// let miLibroB = {
//     titulo: 'IoT al alcanze de tus manos',
//     autor: 'Arnaldo Muñoz',
//     paginas: 320,
//     publicado: false
// }

// console.log(LibroA.publicado);
// console.log(`${LibroA.titulo} creado por ${miLibroA.autor}`);
// miLibroA.paginas = 500;
// console.log(LibroA.paginas);

// let getResumen = (libro) => {
//     return {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
//     }
// }

// let libroAResumen = getResumen(LibroA);
// let libroBResumen = getResumen(miLibroB);

// console.log(libroBResumen.resumen);
// console.log(libroBResumen.resumenPaginas);

// console.log(libroAResumen.resumen);
// console.log(libroAResumen.resumenPaginas);

///////Referencia de objetos//////////

// let persona = {
//     nombre: 'Pablo',
//     edad: '30',
//     sueldo: 1200
// }

// let otraPersona = persona;
// otraPersona.sueldo = 2500;
// console.log(otraPersona);

// let cambiarSueldo = (p, monto) => {
//     p.sueldo = p.sueldo + monto;
//     //console.log(p);
// }

// cambiarSueldo(persona, 500);
// console.log(otraPersona);
// console.log(persona);

////////////Métodos//////////////////

// let persona = {
//    nombre: 'Pabluuuuuu',
//    edad: 25,
//    sueldo: 3200,
//    metodoPrueba: function(){
//        //console.log('Escribiendo desde el método Prueba');
//        return 'Resultado desde prueba';
//    },
//    cambiarEdad: function(edad){
//         this.edad = this.edad + edad;
//    }

// }

// let result = persona.metodoPrueba();
// console.log(result);
// persona.cambiarEdad(3);
// console.log(persona.edad);

//////////Objeto String///////////////

// let nombre = ' Arnaldo Muñoz ';
// let clave = '23147munioz.e';

// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(nombre.trim());

// console.log(clave.includes('clave',5));