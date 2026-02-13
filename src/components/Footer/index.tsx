import Image from "next/image";
import logoFooter from "../../assets/logo_footer.png";
import imgSuporte from "../../assets/suporte.png";
import ListMenuFooter from "../ListMenuFooter";
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#134F2E] relative">
      <div className="absolute -top-1 w-full bg-[#006E3A] rounded-b-3xl relative">
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
          <div className="flex flex-col justify-between gap-1 relative sm:pl-25 text-left text-[14px] text-gray-900 text-right md:text-left">
            <p className="text-[10px] first:text-left">Suporte Técnico</p>
            <p className="font-bold text-[16px] text-black">Precisa de Ajuda para Escolher?</p>
            <p className="w-full flex flex-col md:flex-row gap-1">
              <span>Ligue</span>
              <span className="text-[#006E3A] font-bold">0800 033 0327</span>
              <span>Direto com especialista</span>
            </p>
          </div>
        </div>

        <div className="w-full px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 text-white items-start mt-30 md:mt-20">
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
        <div className="w-full px-10 py-5 flex items-center gap-5">
          <FaTwitter className="w-6 h-6 text-white" />
          <FaYoutube className="w-6 h-6 text-white" />
          <FaInstagram className="w-6 h-6 text-white" />
          <FaLinkedin className="w-6 h-6 text-white" />
          <FaTiktok className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:flex-row text-center items-center justify-between py-4 px-10 text-white">
        <Image src={logoFooter} alt="" width={180} height={30} />
        <p className="text-[12px]">Copyright 2026 Escoramento.com - Todos os Direitos Reservados</p>
        <span className="hover:border-b-1 hover:border-white hover:cursor-pointer">Sitemap</span>
      </div>
    </footer>
  );
}
