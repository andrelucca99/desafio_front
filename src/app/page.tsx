import ImgCredito from "../assets/credito.png"
import ImgMaterial from "../assets/material.png"
import ImgAgendamento from "../assets/agendamento.png"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import TitleSection from "@/components/TitleSection";
import ServiceModel from "@/components/ServiceModel";
import HeroCarousel from "@/components/HeroCarousel";
import SectionProducts from "@/components/SectionProducts";
import SectionResources from "@/components/SectionResources";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-white overflow-x-hidden">
        <HeroCarousel />

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-10 mb-5 md:my-15 mx-8 mx:0">
          <input className="border border-gray-500 w-full sm:w-[580px] rounded-[2px] px-7 py-4" type="text" placeholder="O que você está procurando?" />

          <button className="w-full h-full sm:w-36 sm:auto p-2 bg-[#006E3A] text-white rounded-[2px]">
            BUSCAR
          </button>
        </div>

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
