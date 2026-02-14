import { products } from "../../utils/products.json";
import Card from "../Card";
import TitleSection from "../TitleSection";

export default function SectionProducts() {
  return (
    <section className="flex flex-col items-start px-5 md:pl-2 pb-12">
      <TitleSection>Estacas Prancha</TitleSection>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-items-center items-center gap-4 mb-5">
        {products?.estacas?.map(({ title, imagem, description, price }) => (
          <Card
            key={title}
            imagem={imagem}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>

      <TitleSection>Blindagens de Vala</TitleSection>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-items-center items-center gap-4">
        {products?.blindagem?.map(({ title, imagem, description, price }) => (
          <Card
            key={title}
            imagem={imagem}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </section>
  );
}