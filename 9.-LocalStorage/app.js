/*Agregar un elemento al localstorage*/
//localStorage.setItem('nombreUsuario','Arni');
//localStorage.setItem('ubicacion','La Paz');

/*Obtener un elemento del localstorage*/
//console.log(localStorage.getItem('nombreUsuario'));
//console.log(localStorage.getItem('ubicacion'));

/*Borrar elemento del localstorage*/
//localStorage.removeItem('nombreUsuario');

/*Limpiar el localStorage*/
//localStorage.clear();

//////Notación JSON//////
const usuario = {
    nombre:'Arni',
    edad:'24'
}

const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario',usuarioJSON);


const userJSON = localStorage.getItem('usuario');
const usuario2 = JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);







