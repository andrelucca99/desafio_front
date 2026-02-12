import Image, { StaticImageData } from "next/image";
import Paragraph from "../Paragraph";
import Button from "../Button";

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
          } transform -translate-x-1/2 -translate-y-1/2 w-[450px] max-h-fit bg-white rounded-2xl py-6 px-8 flex flex-col justify-around gap-6 shadow-lg`}
      >
        <h3 className="text-[28px] font-bold leading-normal text-[##212121]">{title}</h3>
        <Paragraph>{description}</Paragraph>
        <Button text={textButton} />
      </div>
    </section>
  );
}