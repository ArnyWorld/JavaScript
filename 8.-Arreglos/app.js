////////Arreglos en ES6+/////////

const desarrollador = [
    {
        codigo: 1,
        especialidad: 'Angular',
        nombre:'Tylor'
    },
    {
        codigo: 2,
        especialidad: 'Flutter',
        nombre: 'Adalid'         
    },
    {
        codigo: 3,
        especialidad: 'Python',
        nombre:'Ivan'

    }
];

/*Eliminando un elemento del array*/
 console.log(desarrollador.pop());


let des1={
	    codigo: 4,
	    especialidad: 'Diseño',
	    nombre:'Mayra'
} 
/*Adicionando un elemento al array*/
 desarrollador.push(des1);
console.log(desarrollador);

/*Elimina un elemento que se encuentra al inicio*/
 console.log(desarrollador.shift());
console.log(desarrollador);

let des2={
	    codigo: 5,
	    especialidad: 'Bailar',
	    nombre:'Pamela'
} 
/*Añade un elemento al inicio de un arreglo */
 desarrollador.unshift(des2);
console.log(desarrollador);
// console.log(desarrollador);

//desarrollador[0] = des1;
//console.log(desarrollador);
let des3={
	    codigo: 6,
	    especialidad: 'Desarrollo Web',
	    nombre:'Carla'
} 
/*Añade un elemento a la posición que se le asigne*/
//nombreArray.splice(posAdicionar,cantidadElementosEliminar,elementoAdicionar)
 desarrollador.splice(1,0,des3);
 console.log(desarrollador);

/*Recorrido de un array*/
 desarrollador.forEach(function(item, index){
     console.log(index);
     console.log(item);
 });

// for(let i=0;i < ceviche.length;i++){
//     console.log(`Indice ${i}: ${ceviche[i]}`);
// }
/*
/*Buscar elemento en un array*/

const buscarEspecialidad = function(desarrollador, especialidad){
    const index = desarrollador.findIndex(function(ing, index){
        return ing.especialidad === especialidad;
    });
    return index;
}

const filtrarEspecialidad = desarrollador.filter(function(ing, index){
    const especialidad = ing.especialidad.includes('Diseño');
    return especialidad;
});

console.log(filtrarEspecialidad);

//console.log(desarrollador);
/*Ordenar array*/
desarrollador.sort(function(a,b){
    if(a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0;
});

console.log(desarrollador);

 const tecnologias = ['Html', 'css', 'js', 'vue', 'angular'];
 console.log(tecnologias.filter(tec => tecnologias.includes('ang')));

// const index = desarrollador.findIndex(function(ing, index){
//     //console.log(ing);
//     return ing.especialidad === 'bailar';       
// });

//console.log(buscarIngrediente(desarrollador, 'vue'));
//console.log(ceviche[buscarIngrediente(desarrollador, 'vue')]);
