import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUSer = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    console.log(user);

    expect(testUSer).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Patricio";
    const user = getUsuarioActivo(name)
    
    expect( user ).toEqual({
        uid: "ABC567",
        username: name
    })

  });
});
