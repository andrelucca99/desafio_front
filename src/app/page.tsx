import Header from "@/components/Header";
import Image from "next/image";
import foto from "../assets/recursos.png"
import Paragraph from "@/components/Paragraph";
import TitleSection from "@/components/TitleSection";

import { products } from "../utils/products.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full p-2">
        <div className="h-[500px] bg-red-400">
          <p>carrosel</p>
        </div>

        <div className="w-lg flex justify-between gap-2">
          <input className="border border-gray-500 w-full rounded-[8px] p-1" type="text" placeholder="O que você está procurando?" />

          <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">
            Buscar
          </button>
        </div>

        <section>
          <TitleSection>Garantia do Melhor Preço Online</TitleSection>

          <Paragraph>
            A certeza de que o preço apresentado na área do cliente será sempre o menor valor para o produto que você precisa.
          </Paragraph>
        </section>

        <section>
          <TitleSection>Estacas Prancha</TitleSection>

          <div className="flex p-2 justify-between w-full">
            {products.estacas.map(({ title, imagem, description, price }) => (
              <div className="w-[400px] border border-gray-400 text-center p-2" key={title}>
                <Image src={imagem} alt={title} width={545} height={310} />
                <span>{title}</span>
                <p>{description}</p>
                <p>A partir de R$ {price} por mês</p>
                <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">
                  Ver preços
                </button>
              </div>
            ))}
          </div>

          <TitleSection>Blindagens de Vala</TitleSection>

          <div className="flex p-2 justify-between w-full">
            {products.blindagem.map(({ title, imagem, description, price }) => (
              <div className="w-[400px] border border-gray-400 text-center p-2" key={title}>
                <Image src={imagem} alt={title} width={545} height={310} />
                <span>{title}</span>
                <p>{description}</p>
                <p>A partir de R$ {price} por mês</p>
                <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">
                  Ver preços
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <TitleSection>Material Técnico</TitleSection>
        </section>

        <section className="w-full p-2">
          <TitleSection>Recursos</TitleSection>
          <div className="flex bg-transparent gap-3 border border-gray-400 rounded-2xl">
            <div className="w-3/4 flex flex-col justify-between p-3">
              <span className="text-sm font-bold text-gray-500">Blog e Vídeos</span>

              <h3 className="text-2xl font-bold">
                Acesse conteúdo técnico também através do nosso blog e em nosso canal de vídeos
              </h3>

              <Paragraph>
                Acompanhe as últimas atualizações do setor, aplicações das soluções em obras, dicas úteis e cases.
              </Paragraph>

              <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">
                acessar conteúdo
              </button>
            </div>
            <Image className="rounded-r-2xl" src={foto} alt="Recursos" width={545} height={310} />
          </div>
        </section>

        <section>
          <TitleSection>Agendamento</TitleSection>
        </section>

        <section>
          <TitleSection>Crédito</TitleSection>
        </section>
      </main>
    </>
  );
}

