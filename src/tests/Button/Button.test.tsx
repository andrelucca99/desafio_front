import { render, screen } from "@testing-library/react";
import Button from "../../components/Button/index";

describe('Teste componente Button', () => {
  it('Verifica se o componente é renderizado e recebe o texto via props', () => {
    render(<Button text="Acessar Conteúdo" />);

    const btnText = screen.getByRole("button", { name: /Acessar Conteúdo/i });

    expect(btnText).toBeInTheDocument();
  });
});