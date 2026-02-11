import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="text-[16px] font-normal leading-normal text-[#000000de]">
      {children}
    </p>
  );
};

export default Paragraph;