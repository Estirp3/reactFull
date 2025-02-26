//funciones

const saludar = function (nombre){
    return `Hola ${nombre}`
}

const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`
}

const saludar3 = ( nombre ) =>  `Hola, ${nombre}`

const saludar4 = ( nombre ) =>  `Hola, Mundo`


console.log( saludar2('Vejeta') )
console.log( saludar3('Goku'))
console.log( saludar4 )


//// 
const getUser = () =>({
        uid: 'ABC123',
        username: 'El_cabron'
})

console.log( getUser)


//tarea
//1  transformar a una funcion de flecha 
//2 tiene que retornar uin objeto implicito 
//3 pruebas 

//function getUserActivo ( nombre ) {
//    return {
//        uid: 'ABC567',
//        usernmae: nombre
//    }
//}


const usuarioActivo = ( nombre ) =>({
    uid:'ABC567',
    username: nombre
})

console.log( usuarioActivo('Patricio') )