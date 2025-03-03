// Variables y Constantes 

const nombre = 'Patricio';
const apellido = 'Calderon'

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

// scope 
if ( true ){
    let valorDado = 6;
    console.log(valorDado)
}

console.log(valorDado)