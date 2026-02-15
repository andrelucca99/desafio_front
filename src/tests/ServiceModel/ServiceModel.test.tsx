import ServiceModel from "@/components/ServiceModel";
import { render, screen } from "@testing-library/react";

import imageTest from "../../assets/credito.png";

describe('Teste componente ServiceModel', () => {
  const mockServiceModel = {
    image: imageTest,
    title: "titulo",
    description: "descrição",
    textButton: "botão",
  };

  it('Deve verificar se os dados do componente são renderizados', () => {
    render(<ServiceModel {...mockServiceModel} />);

    const title = screen.getByText("titulo");
    expect(title).toBeInTheDocument();

    const btn = screen.getByText("botão");
    expect(btn).toBeInTheDocument();

    const description = screen.getByText("descrição");
    expect(description).toBeInTheDocument();

    const img = screen.getByAltText("titulo");
    expect(img).toBeInTheDocument();
  });

  it("Deve verificar se classe 'reverse' está funcionando", () => {
    render(<ServiceModel {...mockServiceModel} className="reverse" />);

    const getSection = screen.getByTestId("test-reverse");
    expect(getSection).toHaveClass("reverse");
  });
});