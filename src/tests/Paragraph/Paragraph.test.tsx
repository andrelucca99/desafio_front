import { render, screen } from "@testing-library/react";
import Paragraph from "../../components/Paragraph/index";

describe('Teste componente Paragraph', () => {
  it('Verifica se o componente é renderizado e recebe o texto via props', () => {
    render(
      <Paragraph>A certeza de que o preço apresentado na área do cliente será sempre o menor valor para o produto que você precisa.</Paragraph>
    );

    const paragraphText = screen.getByText("A certeza de que o preço apresentado na área do cliente será sempre o menor valor para o produto que você precisa.");

    expect(paragraphText).toBeInTheDocument();
  });
});