//Tarea
// Pruebas en el CounterApp

import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

//**
// Test: debe de hacer match con el snapshot ok
// Test: debe de mostrar el valor inicial de 100
// */
describe("Pruebas en el CounterApp", () => {
    const value = 100;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect( container).toMatchSnapshot();
    })
    test(' debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value} />);
        expect( screen.getByText( value )).toBeTruthy();//Existe      
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(value.toString()); // ocupamos el toString() para que se vea que es un numero
    })
    
    
});
