import Image from "next/image";
import logoFooter from "../../assets/logo_footer.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#006E3A]">
      <div className="w-[300px] h-[50px] bg-red-300">card</div>
      <div className="w-full">
        <div className="grid grid-cols-5 text-white items-start">
          <ul>
            <li>Equipamentos</li>
            <li>Locação</li>
            <li>Venda</li>
          </ul>
          <ul>
            <li>Material Técnico</li>
            <li>Catálogos</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Sobre</li>
            <li>Empresa</li>
            <li>Política de Privacidade</li>
            <li>Termos Gerais de Uso</li>
          </ul>
          <ul>
            <li>App Cliente</li>
            <li>Orçamentos</li>
            <li>Agendamento Online</li>
            <li>Cadastro</li>
          </ul>
          <ul className="flex flex-col justify-around h-full">
            <li>Canais de Atendimento</li>
            <li>Chat com Especialista</li>
          </ul>
        </div>
        <div className="w-full">redes</div>
      </div>
      <div className="w-full bg-green-900 text-white flex justify-between px-8 py-8">
        <Image src={logoFooter} alt="Escoramento.com" width={200} height={35} />
        <p>Copyright 2026 Escoramento.com - Todos os Direitos Reservados</p>
        <span>Sitemap</span>
      </div>
    </footer>
  );
}
