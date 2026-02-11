import Header from "@/components/Header";
import Image from "next/image";
import foto from "../assets/recursos.png"
import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full p-2">
        <div className="h-[500px] bg-red-400">
          <p>carrosel</p>
        </div>
        <p>campo de input</p>
        <section>
          <h2>Garantia do Melhor Preço Online</h2>

          <Paragraph>
            A certeza de que o preço apresentado na área do cliente será sempre o menor valor para o produto que você precisa.
          </Paragraph>

          <h2>produtos</h2>
        </section>

        <section>
          <h2>Material Técnico</h2>
        </section>

        <section className="w-full p-2">
          <h2 className="text-2xl font-bold">Recursos</h2>
          <div className="flex bg-transparent gap-3 border border-gray-400 rounded-2xl">
            <div className="w-3/4 flex flex-col justify-between p-3">
              <span className="text-sm font-bold text-gray-500">Blog e Vídeos</span>

              <h3 className="text-2xl font-bold">
                Acesse conteúdo técnico também através do nosso blog e em nosso canal de vídeos
              </h3>

              <Paragraph>
                Acompanhe as últimas atualizações do setor, aplicações das soluções em obras, dicas úteis e cases.
              </Paragraph>

              <button className="w-[170px] p-2 bg-[#006E3A] text-white rounded-[8px]">acessar conteúdo</button>
            </div>
            <Image className="rounded-r-2xl" src={foto} alt="Recursos" width={545} height={310} />
          </div>
        </section>

        <section>
          <h2>Agendamento</h2>
        </section>

        <section>
          <h2>Crédito</h2>
        </section>
      </main>
    </>
  );
}

