//desetructuración

const avenger = {
    IronMan:{
        nombre: 'Tony',
        edad: 45,
        posicionOrg: 'Primer al Mando'
    },
    capitanAmerica:{
        nombre: 'Roer',
        edad: '?',
        posicionOrg: 'Seundo al Mando'
    }
};

const { IronMan, capitanAmerica } = avenger;

const { nombre , edad, posicion } = IronMan;


console.log(IronMan);
console.log(nombre);