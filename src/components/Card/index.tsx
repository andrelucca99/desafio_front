import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface ICard {
  imagem: string,
  title: string,
  description: string,
  price: number
}

export default function Card({ imagem, title, description, price }: ICard) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className="max-w-[400px] w-full h-full text-[14px] rounded-lg flex flex-col justify-between items-start transform hover:-translate-y-2 transition duration-300 cursor-pointer">
      {imagem && (
        <Image src={imagem} alt={title} width={545} height={310} className="object-cover rounded-md bg-[#E7E7E7]"
        />
      )}
      <div className="text-[12px] md:text-[14px">
        <span className="block font-bold text-[16px] md:text-lg mt-2 mb-4">{title}</span>
        <p>{description}</p>
        <p className="mt-2">
          A partir de {formattedPrice} por mês
        </p>
      </div>
      <button className="w-full p-2 mt-4 bg-[#006E3A] text-white rounded-md hover:bg-green-800 flex items-center justify-center gap-4 cursor-pointer">
        <ShoppingCartIcon className="w-5 h-5 text-white" />
        <p className="font-bold">VER PREÇOS</p>
      </button>
    </div>
  );
}