"use client";

import Image from "next/image";
import { useState } from "react";

import Menu from "../Menu";
import Sidebar from "../Sidebar";
import logo from "../../assets/logo.png";
import {
  ChatBubbleBottomCenterIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed z-50 shadow-sm">
      <div className="flex justify-between px-6 py-2 text-[12px] bg-[#006E3A] text-white font-bold">
        <p>0800 033 0327</p>

        <div className="flex gap-4">
          <p className="cursor-pointer hover:underline">Agendamento</p>
          <p className="cursor-pointer hover:underline">Cadastro</p>
          <p className="cursor-pointer hover:underline">Contato</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-6 h-[80px]">

        <div className="w-[170px] sm:w-[210px]">
          <Image src={logo} alt="Escoramento.com" priority />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Menu />

          <div className="flex items-center gap-5">
            <ChatBubbleBottomCenterIcon className="w-7 h-7 hover:text-blue-500 cursor-pointer" />

            <div className="flex items-center py-2 px-3 border border-gray-400 rounded-3xl cursor-pointer group">
              <ShoppingCartIcon className="w-5 h-5 group-hover:text-blue-500" />
              <p className="pl-2 text-xs group-hover:text-blue-500">
                LOJA
              </p>
            </div>

            <UserCircleIcon className="w-7 h-7 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
          <UserCircleIcon className="w-6 h-6 text-gray-700" />

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
}
