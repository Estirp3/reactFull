// funciones

const saludar = function  ( nombre ){
    return`Hola, ${nombre}`
}
const saludar2 = ( nombre ) => {
    return`Hola, ${nombre}`
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`



console.log( saludar('Goku'))
console.log( saludar2('Vegeta'))
console.log( saludar3('Gohan'))

const getUser = ()=>({
        uid:'123412as',
        username:'El_Darck'
    })
console.log(getUser())


function getUserActivo( nombre ){
    return{
        uid:'asd1234',
        username: nombre
    }
}
const usuarioActivo = getUserActivo('Patricio')
console.log(usuarioActivo)

const getUserActivo2 = ( nombre ) => ({
    uid:'asd1234',
    username: nombre
})
const usuarioActivo2 = getUserActivo2('flecha Loca')
console.log(usuarioActivo2)