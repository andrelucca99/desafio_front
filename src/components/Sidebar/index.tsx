"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import ListMenuFooter from "../ListMenuFooter";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
        className={`fixed top-0 left-0 h-full w-4/5 bg-white z-50 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-between items-center p-4 border-b">
          <button
            className="first:ml-auto"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="p-4">
            <Image src={logo} alt="Escoramento.com" priority />
          </div>

          <div className="w-full flex justify-between px-5 items-center">
            <div>
              <p>PT</p>
            </div>
            <div className="flex items-center py-2 px-3 border border-gray-400 rounded-3xl cursor-pointer group hover:border-green-700">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700 group-hover:text-green-700" />
              <p className="pl-2 text-xs text-gray-700 group-hover:text-green-700">
                LOJA
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 p-4 overflow-y-auto h-[calc(100vh-65px)]">
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
        </nav>
      </aside>
    </>
  );
}
