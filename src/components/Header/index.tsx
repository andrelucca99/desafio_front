import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#123456] fixed z-50">
      <div className="flex justify-between pl-6 pr-6 p-1 text-sm font-normal bg-[#006E3A] text-white">
        <p className="">0800 033 0327</p>

        <div className="flex gap-2">
          <p>Agendamento</p>
          <p>Cadastro</p>
          <p>Contato</p>
        </div>
      </div>
      <div className="flex justify-between h-[100px]">

        <Image src={logo} alt="Escoramento.com" />

        <div className="w-[400px] bg-amber-500 flex gap-2">
          <nav className="bg-red-700">
            <ul className="flex">
              <li>Equipamentos</li>
              <li>Material Técnico</li>
              <li>Sobre</li>
            </ul>
          </nav>

          <div className="flex">
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>
        </div>
      </div>
    </header>
  );
}
