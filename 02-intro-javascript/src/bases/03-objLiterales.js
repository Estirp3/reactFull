// Objetos literales
const personas = {
    nombre: 'Tony',
    apellido: 'Starck',
    edad: 45,
    company: 'Strack-Industry',
    direcion: {
        ciudad: 'New york',
        zip: 5545555,
        lat: 14.432123,
        lnh: 13.432,

    }
}



//const persona2 = personas;// no se hace perro

const persona2 = {...personas}//clon de perosanas

persona2.nombre = 'Peter'
console.log( personas )
console.log( persona2 )