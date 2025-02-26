// desestructuracion 
//Asignacion destructurante

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave: 'Iron Man'
}

const { nombre, edad, clave } = persona

// Destructuracion

const userConText = ({ nombre, edad, clave, rango = 'Capitán '}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latitud :{
            lat: 1234,
            lng: -12354,
        }
    }
}

const avenger = userConText(persona);
console.log(avenger.anios)
console.log(avenger.nombreClave)


//Descontruido
const {nombreClave, anios, latitud:{lat, lng}} = userConText( persona )
console.log(nombreClave, anios)
console.log(lat, lng)