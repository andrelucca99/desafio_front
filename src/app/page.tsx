import ImgCredito from "../assets/credito.png"
import ImgMaterial from "../assets/material.png"
import ImgAgendamento from "../assets/agendamento.png"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import SearchField from "@/components/SearchField";
import TitleSection from "@/components/TitleSection";
import ServiceModel from "@/components/ServiceModel";
import HeroCarousel from "@/components/HeroCarousel";
import SectionProducts from "@/components/SectionProducts";
import SectionResources from "@/components/SectionResources";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col bg-white overflow-x-hidden">
        <HeroCarousel />

        <SearchField />

        <section className="w-full ml-2">
          <TitleSection>Garantia do Melhor Preço Online</TitleSection>

          <div className="px-5 -mt-2">
            <Paragraph>
              A certeza de que o preço apresentado na área do cliente será sempre o menor valor para o produto que você precisa.
            </Paragraph>
          </div>
        </section>

        <SectionProducts />

        <section className="w-full bg-[#F4F6F8]">
          <TitleSection>Material Técnico</TitleSection>
          <ServiceModel
            image={ImgMaterial}
            title="Catálogos, Manuais de Transporte, Guias de Normas de escavação e Infográfico"
            description="Acesse agora o conteúdo técnico com as especificações, capacidade de carga e dimensões dos equipamentos."
            textButton="acessar conteúdo"
          />
        </section>

        <SectionResources />

        <section className="w-full bg-[#F4F6F8]">
          <TitleSection>Agendamento</TitleSection>
          <ServiceModel
            image={ImgAgendamento}
            title="Agendamento Online"
            description="Agende a retirada ou devolução do seu equipamento online. Mais fácil, mais rápido."
            textButton="agendar agora"
            className="reverse"
          />
        </section>

        <section className="w-full bg-[#F4F6F8] pb-30">
          <TitleSection>Crédito</TitleSection>
          <ServiceModel
            image={ImgCredito}
            title="Análise de Cadastro na Hora"
            description="Analisamos seu cadastro na hora, de forma rápida e objetiva."
            textButton="aprovar meu cadastro"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
