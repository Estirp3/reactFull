// Desestructuracion
// Asignacion Desestructurante
//Objeto literal 
const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
}

//const { nombre, edad, clave } = persona;


//console.log(edad)
//console.log(persona.edad)
//console.log(persona.clave)

const userContext = ( { clave, nombre, edad, rango= 'Lider'  } ) => {
    
    //console.log(edad,nombre, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.34523,
            lng: 15.6543
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona)

console.log( nombreClave, anios )
console.log( lat )