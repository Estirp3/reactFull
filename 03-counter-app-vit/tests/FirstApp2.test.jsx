import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola soy Goku";
  const subTitle = "Soy un subTitulo"
  test("Debe de hacer match con snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('Debe mostrar el mensaje "Hola soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText( title )).toBeTruthy();

    // screen.debug();
  });
  test('Debe mostrar el titulo en un H1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading',{ level:1 }).innerHTML ).toContain( title )
  })
  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp 
      title={title}
      subTitle={subTitle} />
    );
    expect(screen.getAllByText(subTitle).length).toBe(2);// cuandpo existe mas de un elemento
  });
  
});