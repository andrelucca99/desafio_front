import Image from "next/image";
// import logoFooter from "../../assets/logo_footer.png";
import imgSuporte from "../../assets/suporte.png";

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

      <div className="w-full px-4 py-8 mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 text-white items-start">
          <ul>
            <li className="font-bold">Equipamentos</li>
            <li>Locação</li>
            <li>Venda</li>
          </ul>
          <ul>
            <li className="font-bold">Material Técnico</li>
            <li>Catálogos</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li className="font-bold">Sobre</li>
            <li>Empresa</li>
            <li>Política de Privacidade</li>
            <li>Termos Gerais de Uso</li>
          </ul>
          <ul>
            <li className="font-bold">App Cliente</li>
            <li>Orçamentos</li>
            <li>Agendamento Online</li>
            <li>Cadastro</li>
          </ul>
          <ul>
            <li className="font-bold">Canais de Atendimento</li>
            <li>Chat com Especialista</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}