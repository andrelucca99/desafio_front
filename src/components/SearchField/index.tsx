import { IoIosSearch } from "react-icons/io";

export default function SearchField() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 justify-center items-center mt-10 mb-5 md:my-15 mx-8 mx:0">

      <div className="relative w-full lg:w-[580px]">
        <IoIosSearch className="absolute top-5 left-3 w-5 h-5 text-[#464646]" />
        <input
          className="border-[3px] border-[#C4C4C4] w-full rounded-[3px] px-10 py-4" type="text"
          placeholder="O que você está procurando?" />
      </div>

      <button className="w-full lg:w-26 lg:h-[60px] p-2 bg-[#006E3A] text-white font-medium rounded-[2px] hover:cursor-pointer hover:bg-[#004D28]">
        BUSCAR
      </button>
    </div>
  );
}