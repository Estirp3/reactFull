import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    //Peticion HHTP API
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>

        </>
    )
}
