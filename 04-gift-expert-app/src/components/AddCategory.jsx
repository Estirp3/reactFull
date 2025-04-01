import { useState } from "react"


export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInchange = ({ target }) => {
        setInputValue(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault();
        onAddCategory(categories => [inputValue, ...categories])
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                onChange={onInchange}
                value={inputValue} />
        </form>
    )
}
