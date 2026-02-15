import { render, screen } from "@testing-library/react";
import TitleSection from "./index";

describe('Teste componente TitleSection', () => {
  it('Verifica se o componente é renderizado e recebe o texto via props', () => {
    render(
      <TitleSection>Garantia do Melhor Preço Online</TitleSection>
    );

    const titleText = screen.getByText("Garantia do Melhor Preço Online");

    expect(titleText).toBeInTheDocument();
  });
});