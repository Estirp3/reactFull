import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroById debe retornar heroes por ID', () => {
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })
    test('getHeroById debe retornar undifined', () => {
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toEqual(undefined)
    })

    //Tarea
    // Debe de retornar un arreglo con los heroes de DC
    // lenth === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los heroes de Marvel
    // length === 2
    test('getHeroesByOwner debe retornar DC', () => {
        const owner = 'DC'
        const hero = getHeroesByOwner(owner)
        
        expect( hero.length ).toBe(3)
        expect( hero ).toEqual(heroes.filter( h => h.owner === owner ))
    })
    test('getHeroesByOwner debe retornar Marvel', () => {
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner)
        
        expect( hero.length ).toBe(2)
        expect( hero ).toEqual(heroes.filter( h => h.owner === owner ))
       // expect(hero).toEqual(undefined)
    })
})