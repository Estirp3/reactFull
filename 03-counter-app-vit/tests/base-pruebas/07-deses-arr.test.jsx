import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
  test("Debe de retornar un string y un numero", () => {
    const [letters, number] = retornaArreglo();

   // expect(letters).toBe('ABC')
    expect(number).toBe(123)
 
    expect(typeof letters).toBe('string')
    expect(typeof number).toBe('number')
    expect(typeof number).toEqual(expect.any(String))
  });
});
