import Image from "next/image";
import logo from "../../assets/logo.png";
import Menu from "../Menu";
import { ChatBubbleBottomCenterIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="w-full bg-white fixed z-50">
      <div className="flex justify-between px-6 p-1 text-sm font-normal bg-[#006E3A] text-white">
        <p className="">0800 033 0327</p>

        <div className="flex gap-2">
          <p>Agendamento</p>
          <p>Cadastro</p>
          <p>Contato</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-[100px] px-6">

        <div className="w-[237px] h-[42px]">
          <Image src={logo} alt="Escoramento.com" />
        </div>

        <div className="w-[700px] flex justify-between gap-2 p-2">
          <Menu />

          <div className="flex justify-around items-center w-[200px]">
            <ChatBubbleBottomCenterIcon className="w-7 h-7 text-gray-700 hover:text-blue-500 cursor-pointer" />
            <div className="relative flex items-center w-[90px] py-2 px-2 border border-gray-400 rounded-3xl cursor-pointer group hover:border-blue-500">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700 group-hover:text-blue-500" />
              <p className="w-full pl-2 text-[12px] text-gray-700 group-hover:text-blue-500">LOJA</p>
            </div>
            <p><UserCircleIcon className="w-7 h-7 text-gray-700 cursor-pointer" /></p>
          </div>
        </div>
      </div>
    </header>
  );
}
