// src/components/Hero.tsx
export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white px-6 text-center"
        >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                Juntos Podemos Encontrar Crianças Desaparecidas
            </h1>

            <p className="text-base md:text-lg max-w-3xl mb-8 drop-shadow-sm leading-relaxed">
                No Brasil, milhares de crianças desaparecem todos os anos. A busca rápida e a divulgação de informações podem fazer toda a diferença para reunir famílias.
            </p>

            <p className="text-base md:text-lg max-w-3xl mb-10 drop-shadow-sm leading-relaxed">
                Conheça os casos, compartilhe e seja parte dessa rede de esperança e proteção.
            </p>

            <a
                href="#lista"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
                Ver Lista de Crianças
            </a>
        </section>
    );
}
