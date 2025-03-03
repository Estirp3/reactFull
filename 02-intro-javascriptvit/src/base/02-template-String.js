//Template String 
const nombre = 'Patricio'
const apellido = 'Calderon'

const nombreCompleto = `${nombre} ${apellido}`

console.log( `Mi nombre es ${nombreCompleto}` )

function getSaludo (nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)