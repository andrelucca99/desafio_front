import Image, { StaticImageData } from "next/image";
import Paragraph from "../Paragraph";

interface IServiceModel {
  image: string | StaticImageData,
  title: string,
  description: string,
  textButton: string,
  className?: string;
}

export default function ServiceModel({ image, title, description, textButton, className }: IServiceModel) {
  const isReversed = className?.includes("reverse");

  return (
    <section className={`flex w-full relative ${className || ""} z-10`}>
      {isReversed ? (
        <>
          <div className="w-1/2 bg-gray-300"></div>
          <div className="w-full">
            <Image src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full">
            <Image src={image} alt={title} />
          </div>
          <div className="w-1/2 bg-gray-300"></div>
        </>
      )}
      <div
        className={`absolute ${isReversed ? "top-1/2 left-1/4" : "top-1/2 left-3/4"
          } transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-white rounded-2xl p-4 flex flex-col justify-between shadow-lg`}
      >
        <h3 className="text-[34px] font-bold leading-normal text-[##212121] mt-2">{title}</h3>
        <Paragraph>{description}</Paragraph>
        <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">
          {textButton}
        </button>
      </div>
    </section>
  );
}