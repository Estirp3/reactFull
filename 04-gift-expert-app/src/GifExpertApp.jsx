import {useState} from 'react'

import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    // hooks que mantienen el estado
    const [categories, setCategories] = useState(['One Punch','Dragon Ball Z']);

    const onAddCategory = () =>{
        //Agregar un nuevo estado
        setCategories([...categories,'Valorant'])
        //setcategories(cat =>[...cat,'Valorant'])
    }
    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onAddCategory={ setCategories } />
        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agrear</button> */}
        <ol>
            { categories.map( category =>{
                return <li key={ category }>{ category }</li>
            }) }
            {/* <li>abc</li> */}

        </ol>
          {/* Gift Item */}
    </>
    );
};
