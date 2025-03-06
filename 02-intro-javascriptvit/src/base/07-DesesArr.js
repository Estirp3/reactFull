// Desestructuracion de arreglos
// Asignacion Desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']
//Desestructuracion
const [ , , p3 ] = personajes 
console.log( p3 );

const retornaArrelo = () =>{
    return ['ABC', 123]
}
const [ letras , numeros ] = retornaArrelo();
console.log(letras, numeros);

// tarea
// valor del primero arrelo se debe llamar nombre
// segundo sett nombre
const useState = ( valor ) =>{
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const arr = useState('Goku')
console.log(arr);

const [ nombre, setNombre] = useState('Goku')

console.log(nombre);
setNombre();