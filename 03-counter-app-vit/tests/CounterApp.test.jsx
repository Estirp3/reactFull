//Tarea
// Pruebas en el CounterApp

import { fireEvent, render, screen } from "@testing-library/react";
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
    test('Debe mostrar el valor 100', () => {
        render( <CounterApp value={100} />)
        expect( screen.getByText(value)).toBeTruthy();
        expect( screen.getByRole('heading', {level:2}).innerHTML).toContain('100')
    })
    test('debe de incrementar con el btn + 1', () => {
    render( <CounterApp value={10}/>)
    fireEvent.click( screen.getByText('+1') )
    expect(screen.getByText('11') ).toBeTruthy();
    });
    test('debe de decrementar con el btn - 1', () => {
        render( <CounterApp value={10}/>)
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText('9') ).toBeTruthy();
    });
    test('debe de resetear el valor al presionar el btn reset', () => {
        render( <CounterApp value={10}/>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )
        // expect(screen.getByText('10') ).toBeTruthy();
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        expect(screen.getByText('10') ).toBeTruthy();
    });
})