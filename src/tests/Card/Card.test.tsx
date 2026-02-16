import Card from "@/components/Card";
import { render, screen } from "@testing-library/react";
import imgTest from "../../assets/material.png";

describe('Teste componente Card', () => {
  const mock = {
    imagem: imgTest.src,
    title: "Estacas Pranchas U750",
    description: "Perfis de 750mm de largura, em aço 355 MPa.",
    price: 297
  };

  it('Deve verificar se os dados do Card, são renderizados corretamente', () => {
    render(<Card {...mock} />);

    const title = screen.getByText(mock.title);
    expect(title).toBeInTheDocument();

    const textAltImage = screen.getByAltText(mock.title);
    expect(textAltImage).toBeInTheDocument();

    const description = screen.getByText(mock.description);
    expect(description).toBeInTheDocument();

    const price = screen.getByText(/297/);
    expect(price).toBeInTheDocument();
  });
});
