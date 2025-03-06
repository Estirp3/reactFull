// import
// import { heroes } from './data/heroes';
import  heroes, {owners}  from "../data/heroe";


const getHeroById = (id) =>{
    return heroes.find((heroes) => heroes.id === id)
}

//console.log( getHeroById(3) );

const getHeroByOwner = ( owner ) => heroes.filter((heroes) => heroes.owner === owner)

//console.log(getHeroByOwner('DC'));
export {
    getHeroById as default,
    getHeroByOwner
}