//  arreglos en js 
// arreglo tamaño definido
//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4,5]

let arreglo2 = [ ...arreglo, 6,7,8,9,10]

                        //callBack
const arreglo3 = arreglo2.map( function(numero){
    return numero * 9
} )

console.log( arreglo )
console.log( arreglo2 )
console.log( arreglo3 )