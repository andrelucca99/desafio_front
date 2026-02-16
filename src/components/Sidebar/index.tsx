"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import ListMenuFooter from "../ListMenuFooter";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbWorld } from "react-icons/tb";

interface ISidebar {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: ISidebar) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-4/5 md:w-2/5 bg-white z-50 shadow-xl
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-between items-center p-4">
          <button
            className="first:ml-auto"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="py-4 px-2">
            <Image src={logo} alt="Escoramento.com" />
          </div>

          <div className="w-full flex justify-between items-center px-2">
            <div className="flex gap-1 items-center text-[#838383] text-[18px]">
              <TbWorld className="w-5 h-5" />
              <p>PT</p>
            </div>
            <div className="flex items-center py-2 px-3 border border-gray-400 rounded-3xl cursor-pointer group hover:border-green-700">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700" />
              <p className="pl-2 text-xs text-gray-700">
                LOJA
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">
          <ListMenuFooter
            title="Equipamentos"
            items={["Locação", "Venda"]}
            className="text-[#838383]"
          />

          <ListMenuFooter
            title="Material Técnico"
            items={["Catálogos", "Blog"]}
            className="text-[#838383]"
          />

          <ListMenuFooter
            title="Sobre"
            items={["Empresa", "Política de Privacidade", "Termos Gerais de Uso"]}
            className="text-[#838383]"
          />

          <ListMenuFooter
            title="App Cliente"
            items={["Orçamentos", "Agendamento Online", "Cadastro"]}
            className="text-[#838383]"
          />

          <ListMenuFooter
            title="Canais de Atendimento"
            items={["Chat com Especialista"]}
            className="text-[#838383]"
          />
        </nav>
      </aside>
    </>
  );
}
