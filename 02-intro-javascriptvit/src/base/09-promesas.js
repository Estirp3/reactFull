//Promesas
import getHerosById, {getHeroByOwner} from './base/08-imple'


//const promesa = new Promise( (resolve, reject )=>{
//    setTimeout(() => {
        // tarea
        // importar ele
//        const p1 = getHerosById(3);
//|      resolve(p1)
     //reject('No se puede encontrar el heroe')
//|    }, 2000);
//} );// son asincronas

//promesa.then( (heroes) =>{
//    console.log('Heroe', heroes)
//})
//.catch( err => console.warn(err))

const getHerosByIdAsync = (id) =>{
    return new Promise( (resolve, reject )=>{
        setTimeout(() => {
            const p1 = getHerosById(id);
            if(p1 ){
                resolve(p1)
            }else{
                reject('No se puede encontrar el heroe')
            }
        }, 2000);
    } );

}
getHerosByIdAsync(5)
.then( console.log )
.catch( console.warn )

//getHerosByIdAsync(5)
//.then( heroes => console.log('HEROE', heroes))
//.catch(err => console.warn(err))