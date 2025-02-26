//import { heroes } from './data/heroes'
import { heroes } from './data/heroes';


const getHerosById = (id) =>{
    return heroes.find( ( heroe ) => heroe.id === id );
}

console.log( getHerosById(3) )