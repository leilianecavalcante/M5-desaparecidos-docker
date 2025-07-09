// src/components/Estatisticas.tsx

interface EstatisticasProps {
    stats: {
        totalDesaparecidas: number;
        idadeMedia: string;
    };
}

export default function Estatisticas({ stats }: EstatisticasProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center rounded-lg shadow-lg max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-10">Estatísticas</h2>
            <div className="flex flex-col md:flex-row justify-center gap-16 text-lg">
                <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-8 w-full md:w-1/2 shadow-md">
                    <p className="text-7xl font-extrabold">{stats.totalDesaparecidas}</p>
                    <p className="mt-2 font-semibold">Total de crianças desaparecidas</p>
                </div>
                <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-8 w-full md:w-1/2 shadow-md">
                    <p className="text-7xl font-extrabold">{stats.idadeMedia}</p>
                    <p className="mt-2 font-semibold">Idade média</p>
                </div>
            </div>
        </section>
    );
}
