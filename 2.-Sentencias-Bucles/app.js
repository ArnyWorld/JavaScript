/**********************
 * Sentencia if / else
 ********/
 /*
var nombre = 'Arni';
var estadoCivil = 'soltero';
var estaCasado = true;

if (estaCasado){
    //si es verdadera la condición
    console.log(nombre + ' esta casado');
}else {
    //si es falsa la condición
    console.log(nombre + ' esta soltero');
}*/

/**********************
 * Sentencia condicionales
 */
/*
var nombre = 'Cayo';
var edad = 23;

// edad < 12 es un niño.
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60, es un anciano.

if (edad < 12){
    console.log(nombre + ' es un niño.');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
}else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto.');
}else{
    console.log(nombre + ' es un anciano.');
}

/*
/************************
 * Operador ternario
 */
/*
 var nombre = 'David';
 var edad = 16;

 edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' es un adolescente');

 /**********************
  * Sentencia Switch
  */
/*
 var mes = 8;
  switch(mes){
      case 0:
        console.log('Enero');
        break;
      case 1:
        console.log('Febrero');
        break;
      case 2:
        console.log('Marzo');
        break;
      case 3:
        console.log('Abril');
        break;
      case 4:
        console.log('Mayo');
        break;
      case 5:
        console.log('Junio');
        break;
      case 6:
        console.log('Julio');
        break;
      case 7:
        console.log('Agosto');
        break;
      case 8:
        console.log('Septiembre');
        break;
      case 9:
        console.log('Octubre');
        break;
      case 10:
        console.log('Noviembre');
        break;
      case 11:
        console.log('Diciembre');
        break;
      default:
      console.log('Mes no considerado');  
}

/*********************
 * Sentencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 */

/*
//Sentencia For

for (var i = 10;i >= 1;i--){
  console.log(i);
}

//Sentencia While
var i = 0;
while(i >= 1){
  console.log(i);
  i--;
}

//Sentencia do..while
var i = 12;
do{
  console.log(i);
  i++;
}while(i <= 10)
*/

/*******************
 * Valores verdaderos y falsos
 */

 //Valores falsos: undefined, null, 0, ''
 //Valores verdaderos: NOT valores falses

 /*var edad;
 edad = 10;

 if(edad){
   console.log('Variable esta definida');
 }else{
   console.log('Variable no definida');
 }

 //operadores de igualdad
if(edad === '10'){
  console.log('Variable con coersión');
}else{
  console.log('Variable sin coersión');
}
*/
