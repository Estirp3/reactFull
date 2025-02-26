///let a, b, rest;
///[a, b] = [10, 20];

///console.log( `el valor de a es ${a} y el valor de b es ${b}`);
///console.log(a);
///console.log(b);
///[a, b, ...rest] = [10,20,30,40,50]
//console.log(`El valor del arrelo es ${rest}`);
//console.log(rest)

//const foo = ["one", "two", "three"];

//const [yellow,red , green] = foo;
//console.log(yellow); // "one"
//console.log(red); // "two"
//console.log(green); // "three"

/// desutructrante arreglo

const personajes = ['Goku', 'Vegea','Trunks'];
const [,,p3] = personajes;
console.log(p3)

const retornaArreglo = () =>{
    return['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros)

// tarea 
// 1. el primer valor se llamara nombre
// el otros e llamara setnombre
// consola.log 
const USeState = (valor) =>{
    return[valor, ()=>{console.log('Hola mundo')}]
};

const [nombre, setNombre] = USeState('Goku');
console.log(nombre)
setNombre();