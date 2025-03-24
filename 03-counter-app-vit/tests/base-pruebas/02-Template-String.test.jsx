import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar Hola patricio ', () => {
        const name = 'patricio';
        const massage = getSaludo( name )

        expect( massage).toBe(`Hola ${ name}`)
    })
    
  
})
