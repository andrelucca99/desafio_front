import Image from "next/image";
import logoFooter from "../../assets/logo_footer.png";
import imgSuporte from "../../assets/suporte.png";
import ListMenuFooter from "../ListMenuFooter";

export default function Footer() {
  return (
    <footer className="w-full bg-[#006E3A] relative">
      <div className="w-[90%] max-w-[430px] h-auto bg-[#F4F6F8] absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 rounded-[12px] border border-[#006E3A] flex items-center p-4">
        {imgSuporte && (
          <Image
            className="rounded-l-2xl sm:absolute sm:-top-2 sm:-left-0"
            src={imgSuporte}
            alt="Suporte Técnico"
            width={100}
            height={100}
          />
        )}
        <div className="flex flex-col justify-between gap-1 relative sm:pl-25 text-left text-[14px] text-gray-900">
          <p className="text-[10px]">Suporte Técnico</p>
          <p className="font-bold text-[16px] text-black">Precisa de Ajuda para Escolher?</p>
          <p className="w-full flex gap-1">
            <span>Ligue</span>
            <span className="text-[#006E3A] font-bold">0800 033 0327</span>
            <span>Direto com especialista</span>
          </p>
        </div>
      </div>

      <div className="w-full px-10 py-8 mt-25">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 text-white items-start">
          <ListMenuFooter
            title="Equipamentos"
            items={["Locação", "Venda"]}
          />

          <ListMenuFooter
            title="Material Técnico"
            items={["Catálogos", "Blog"]}
          />

          <ListMenuFooter
            title="Sobre"
            items={["Empresa", "Política de Privacidade", "Termos Gerais de Uso"]}
          />

          <ListMenuFooter
            title="App Cliente"
            items={["Orçamentos", "Agendamento Online", "Cadastro"]}
          />

          <ListMenuFooter
            title="Canais de Atendimento"
            items={["Chat com Especialista"]}
          />
        </div>
      </div>
      <div className="absolute top-70 w-full rounded-b-4xl p-5 bg-[#006E3A]">
        icons
      </div>
      <div className="w-full flex items-end justify-between p-10 text-white bg-[#134F2E] mt-15">
        <Image src={logoFooter} alt="" width={180} height={30} />
        <p>Copyright 2026 Escoramento.com - Todos os Direitos Reservados</p>
        <span>Sitemap</span>
      </div>
    </footer>
  );
}
