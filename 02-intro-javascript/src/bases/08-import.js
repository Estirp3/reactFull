//import { heroes } from './data/heroes'
import { heroes } from './data/heroes';


const getHerosById = (id) => heroes.find( ( heroe ) => heroe.id === id );

console.log( getHerosById(5) )

const getHerosByOwner = ( owner ) => heroes.filter( (heroe)=> heroe.owner === owner )
console.log(getHerosByOwner('DC'));
