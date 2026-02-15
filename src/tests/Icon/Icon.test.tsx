import Icon from "@/components/Icon";
import { render, screen } from "@testing-library/react";
import { FaTwitch } from "react-icons/fa";

describe('Teste componente Icon', () => {
  it('Verifica se o componente é renderizado', () => {
    render(<Icon Icon={FaTwitch} />);

    const iconEl = screen.getByTestId("icon");

    expect(iconEl).toBeInTheDocument();
  });
});