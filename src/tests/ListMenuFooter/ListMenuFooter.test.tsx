import { render, screen } from "@testing-library/react";
import ListMenuFooter from "@/components/ListMenuFooter";

describe('Teste componente ListMenuFooter', () => {
  it('Deve renderizar o título', () => {
    render(<ListMenuFooter title="Equipamentos" items={["Locação", "Venda"]} />);

    const title = screen.getByText("Equipamentos");

    expect(title).toBeInTheDocument();
  });

  it('Deve renderizar os itens da lista', () => {
    render(<ListMenuFooter title="Equipamentos" items={["Locação", "Venda"]} />);

    const firstItem = screen.getByText("Locação");
    const secondItem = screen.getByText("Venda");

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });

  it('Deve renderizar uma lista vazia se nenhum item for passado', () => {
    render(<ListMenuFooter title="Equipamentos" items={[]} />);

    const title = screen.getByText("Equipamentos");
    expect(title).toBeInTheDocument();

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});