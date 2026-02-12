"use client"

import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <nav ref={menuRef} className="w-[500px] border-r border-r-gray-400">
      <ul className="flex gap-4 p-2">
        <li className="relative">
          <div
            className="flex items-center justify-between cursor-pointer gap-2"
            onClick={() => toggleMenu("equipamentos")}
          >
            <p className="hover:text-blue-500">Equipamentos</p>
            {openMenu === "equipamentos" ? (
              <ChevronUpIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-gray-700" />
            )}
          </div>
          {openMenu === "equipamentos" && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-300 rounded shadow-lg w-[200px]">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Locação</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Venda</li>
            </ul>
          )}
        </li>

        <li className="relative">
          <div
            className="flex items-center justify-between cursor-pointer gap-2"
            onClick={() => toggleMenu("material-tecnico")}
          >
            <p className="hover:text-blue-500">Material Técnico</p>
            {openMenu === "material-tecnico" ? (
              <ChevronUpIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-gray-700" />
            )}
          </div>
          {openMenu === "material-tecnico" && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-300 rounded shadow-lg w-[200px]">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Catálogos</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Guias</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Manuais</li>
            </ul>
          )}
        </li>

        <li className="relative">
          <div
            className="flex items-center justify-between cursor-pointer gap-2"
            onClick={() => toggleMenu("sobre")}
          >
            <p className="hover:text-blue-500">Sobre</p>
            {openMenu === "sobre" ? (
              <ChevronUpIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-gray-700" />
            )}
          </div>
          {openMenu === "sobre" && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-300 rounded shadow-lg w-[200px]">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Nossa História</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Missão</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Contato</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}