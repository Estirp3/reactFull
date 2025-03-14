import { persona } from "./pruebaBase/component"
// const newMessage = {
//     name:'Patricio',
//     lastName:'Calderon'
// }

const userContext = ({ nombre, edad, clave}) => {
    return {
        Nombre:nombre,
        anios:edad,
        ident:clave
    }
}

//Funtional components
const getResult = (a, b) => a * b
export const FirstApp = () => {

    return (
        <>
        
        <h1>{ userContext(persona).Nombre }</h1>
        {/* <h1>Mi edad :{ userContext(persona).anios }</h1>
        <h1>Mi frace :{ userContext(persona).ident }</h1> */}
        {/* <code>{JSON.stringify(userContext(persona))}</code> */}
        {/* <h2> { getResult(5,8) }</h2> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>Soy un parrafo</p>
        </>
    )
}
