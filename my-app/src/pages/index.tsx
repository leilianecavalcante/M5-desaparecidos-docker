import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ListaCriancas from "@/components/ListaCriancas";
import Estatisticas from "@/components/Estatisticas";
import Footer from "@/components/Footer";

interface Crianca {
  id: number;
  nome: string;
  idade: number;
  cidade: string;
  dataDesaparecimento: string;
  imagemUrl: string; // Adicionamos o campo para a URL da imagem
}

interface EstatisticasProps {
  totalDesaparecidas: number;
  idadeMedia: string;
}

interface HomeProps {
  criancas: Crianca[];
  stats: EstatisticasProps;
}

export default function HomePage({ criancas, stats }: HomeProps) {
  return (
    <>
      <Head>
        <title>Crianças Desaparecidas</title>
        <meta
          name="description"
          content="Ajude a encontrar crianças desaparecidas no Brasil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="scroll-smooth pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center"
          aria-label="Hero section"
        >
          <Hero />
        </section>

        {/* Lista de Crianças */}
        <section
          id="lista"
          className="bg-white py-16 rounded-lg shadow-lg my-12"
          aria-label="Lista de crianças desaparecidas"
        >
          <ListaCriancas criancas={criancas} />
        </section>

        {/* Estatísticas */}
        <section
          id="estatisticas"
          className="bg-gray-50 py-16 rounded-lg shadow-lg mb-16"
          aria-label="Estatísticas"
        >
          <Estatisticas stats={stats} />
        </section>
      </main>

      <Footer />
    </>
  );
}

// Alteração feita aqui: getServerSideProps para buscar dados em tempo de execução
export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

  const resCriancas = await fetch(`${apiUrl}/criancas`);
  const criancas = await resCriancas.json();

  const resStats = await fetch(`${apiUrl}/criancas/estatisticas/info`);
  const stats = await resStats.json();

  return {
    props: {
      criancas,
      stats,
    },
  };
}
