describe("pruebas en < DemoCompnen>", () => {
  test("Esta prueba no debe de falla", () => {
    // 1 . Inicialización
    const message1 = "Hola Mundo";

    // 2. Estímulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento
    expect(message1).toBe(message2);
  });
});
