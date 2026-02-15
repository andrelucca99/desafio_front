import { render, screen } from "@testing-library/react";
import SectionResources from "@/components/SectionResources";

describe('Teste componente SectionResources', () => {
  const mock = {
    title: "Recursos",
    tagTitle: "Blog e Vídeos",
    subTitle: "Acesse conteúdo técnico também através do nosso blog e em nosso canal de vídeos",
    description: "Acompanhe as últimas atualizações do setor, aplicações das soluções em obras, dicas úteis e cases.",
    textButton: "acessar conteúdo",
    imgAlt: "Recursos"
  };

  it('Deve verificar se os dados do componente são renderizados', () => {
    render(<SectionResources />)

    const title = screen.getByText(mock.title);
    expect(title).toBeInTheDocument();

    const tagText = screen.getByText(mock.tagTitle);
    expect(tagText).toBeInTheDocument();

    const subTitle = screen.getByText(mock.subTitle);
    expect(subTitle).toBeInTheDocument();

    const description = screen.getByText(mock.description);
    expect(description).toBeInTheDocument();

    const btn = screen.getByText(mock.textButton);
    expect(btn).toBeInTheDocument();

    const img = screen.getByAltText(mock.imgAlt);
    expect(img).toBeInTheDocument();
  })
})