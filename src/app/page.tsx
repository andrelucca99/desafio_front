import Header from "@/components/Header";
import Image from "next/image";
import foto from "../assets/recursos.png"
import ImgMaterial from "../assets/material.png"
import ImgAgendamento from "../assets/agendamento.png"
import ImgCredito from "../assets/credito.png"
import Paragraph from "@/components/Paragraph";
import TitleSection from "@/components/TitleSection";

import { products } from "../utils/products.json";
import ServiceModel from "@/components/ServiceModel";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-white grid overflow-x-hidden">
        <div className="h-[500px] bg-red-400 col-span-full">
          <p>carrosel</p>
        </div>

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

        <section className="flex flex-col items-start px-5 md:pl-2 pb-12">
          <TitleSection>Estacas Prancha</TitleSection>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-items-center items-center gap-4 mb-5">
            {products?.estacas?.map(({ title, imagem, description, price }) => (
              <Card
                key={title}
                imagem={imagem}
                title={title}
                description={description}
                price={price}
              />
            ))}
          </div>

          <TitleSection>Blindagens de Vala</TitleSection>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-items-center items-center gap-4">
            {products?.blindagem?.map(({ title, imagem, description, price }) => (
              <Card
                key={title}
                imagem={imagem}
                title={title}
                description={description}
                price={price}
              />
            ))}
          </div>
        </section>

        <section className="w-full bg-[#F4F6F8]">
          <TitleSection>Material Técnico</TitleSection>
          <ServiceModel
            image={ImgMaterial}
            title="Catálogos, Manuais de Transporte, Guias de Normas de escavação e Infográfico"
            description="Acesse agora o conteúdo técnico com as especificações, capacidade de carga e dimensões dos equipamentos."
            textButton="ACESSAR CONTEÚDO"
          />
        </section>

        <section className="w-full bg-[#F4F6F8] py-2 px-5">
          <TitleSection>Recursos</TitleSection>
          <div className="flex w-full flex-col sm:flex-row bg-transparent gap-3 border border-gray-400 rounded-2xl">
            <div className="w-full md:w-3/4 flex flex-col justify-between gap-4 py-8 px-4">
              <span className="text-sm font-bold text-gray-500">Blog e Vídeos</span>

              <h3 className="text-[20px] md:text-3xl font-bold">
                Acesse conteúdo técnico também através do nosso blog e em nosso canal de vídeos
              </h3>

              <Paragraph>
                Acompanhe as últimas atualizações do setor, aplicações das soluções em obras, dicas úteis e cases.
              </Paragraph>

              <Button text="ACESSAR CONTEÚDO" />
            </div>
            <Image className="rounded-b-2xl md:rounded-r-2xl" src={foto} alt="Recursos" width={545} height={310} />
          </div>
        </section>

        <section className="w-full bg-[#F4F6F8]">
          <TitleSection>Agendamento</TitleSection>
          <ServiceModel
            image={ImgAgendamento}
            title="Agendamento Online"
            description="Agende a retirada ou devolução do seu equipamento online. Mais fácil, mais rápido."
            textButton="AGENDAR AGORA"
            className="reverse"
          />
        </section>

        <section className="w-full bg-[#F4F6F8] pb-30">
          <TitleSection>Crédito</TitleSection>
          <ServiceModel
            image={ImgCredito}
            title="Análise de Cadastro na Hora"
            description="Analisamos seu cadastro na hora, de forma rápida e objetiva."
            textButton="APROVAR MEU CADASTRO"
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

