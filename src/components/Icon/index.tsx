import { ElementType } from "react";

interface IconProps {
  Icon: ElementType;
  bgHover?: string;
}

export default function Icon({
  Icon,
  bgHover = "hover:bg-[#134f2e5c]",
}: IconProps) {
  return (
    <div
      data-testid="icon"
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-transparent ${bgHover} transition-colors duration-300 cursor-pointer`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
  );
}
