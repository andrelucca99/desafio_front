import { ReactNode } from "react";

interface TitleSectionProps {
  children: ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-[34px] p-4 font-bold leading-normal text-[#212121] mt-2">
      {children}
    </h2>
  );
};

export default TitleSection;