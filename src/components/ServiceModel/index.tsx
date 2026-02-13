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
    <section
      className={`w-full flex flex-col md:flex-row relative ${className || ""} z-10`}
    >
      {isReversed ? (
        <>
          <div className="w-full md:w-1/2 bg-gray-300 order-3 md:order-1"></div>

          <div className="w-full order-1 md:order-2">
            <Image src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full order-1 md:order-1">
            <Image src={image} alt={title} />
          </div>

          <div className="w-full md:w-1/2 bg-gray-300 order-3 md:order-2"></div>
        </>
      )}

      <div
        className={`absolute ${isReversed
          ? "md:top-1/2 md:left-1/4"
          : "md:top-1/2 md:left-3/4"
          } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[450px] max-h-fit bg-white rounded-2xl py-6 px-8 flex flex-col justify-around gap-6 shadow-lg order-2`}
      >
        <h3 className="text-[20px] sm:text-[28px] font-bold leading-normal text-[#212121]">
          {title}
        </h3>
        <Paragraph>{description}</Paragraph>
        <Button text={textButton} />
      </div>
    </section>
  );
}