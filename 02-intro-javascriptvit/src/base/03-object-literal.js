// obsjetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'start',
    edad: 45,
    direcion:{
        ciudad: 'New York',
        zip: 5678912,
        lat: 14.079789,
        lng: 4323.123,
    }
};

//console.log( { persona } )


const persona2 = { ...persona };
persona2.nombre = 'Peter'
console.log(persona)
console.log(persona2)
