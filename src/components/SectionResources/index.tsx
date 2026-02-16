import Image from "next/image";

import Button from "../Button";
import Paragraph from "../Paragraph";
import TitleSection from "../TitleSection";

import foto from "../../assets/recursos.png";

export default function SectionResources() {
  return (
    <section className="w-full bg-[#F4F6F8] py-2 px-5">
      <TitleSection>Recursos</TitleSection>
      <div className="flex w-full flex-col lg:flex-row bg-transparent gap-3 border border-[#c7c7c7] rounded-2xl">
        <div className="w-full lg:w-3/4 flex flex-col justify-between gap-4 py-8 px-4">
          <span className="text-sm font-bold text-gray-500">Blog e Vídeos</span>

          <h3 className="text-[20px] md:text-3xl font-bold">
            Acesse conteúdo técnico também através do nosso blog e em nosso canal de vídeos
          </h3>

          <Paragraph>
            Acompanhe as últimas atualizações do setor, aplicações das soluções em obras, dicas úteis e cases.
          </Paragraph>

          <Button text="acessar conteúdo" />
        </div>
        <div className="w-full lg:w-[545px]">
          <Image className="h-full sm:rounded-bl-2xl sm:rounded-br-2xl lg:rounded-b-none lg:rounded-r-2xl lg:rounded-br-2xl" src={foto} alt="Recursos" />
        </div>
      </div>
    </section>
  );
}