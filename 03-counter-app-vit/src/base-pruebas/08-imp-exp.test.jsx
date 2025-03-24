import { owners } from '../data/heroes'
import { getHeroeById, getHeroesByOwner } from './08-imp-exp'

describe('Pruebas en 08-imp-exp', () => {
    test('Me debe devolver la posicion y el heroe por id ', () => {
      
        const id = 1
        const heroe = getHeroeById(id)
        console.log(heroe)

        expect(heroe).toEqual({id: 1,name: 'Batman', owner: 'DC' })

    })

    test('Me debe regresar undefine si no existe el id   ', () => {
      
        const id = 100
        const heroe = getHeroeById(id)
        console.log(heroe)

        expect( heroe ).toBeFalsy()

    })
    //Tarea 
    // getHeroesByOwner 
    // debe de retornar un arreglo con los heroes de DC
    // length = 3
    // toEqual al arreglo filtrado

    //debe de retornar un arreglo con los heroes de Marvel
    // length = 2
    test('Me debe regresar el segun el owner ', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        console.log(heroes)
        expect( heroes.length ).toBe(3)
      
    })
    
  
})
