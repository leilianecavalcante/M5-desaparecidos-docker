// src/components/ListaCriancas.tsx
import Image from "next/image";
import { FaBirthdayCake, FaCity, FaCalendarAlt } from "react-icons/fa";

interface Crianca {
    id: number;
    nome: string;
    idade: number;
    cidade: string;
    dataDesaparecimento: string; // Corrigido para bater com o JSON
    imagemUrl: string;
}

interface Props {
    criancas: Crianca[];
}

// Next.js serve arquivos da pasta `public` a partir da raiz `/`
const imagensCriancas = [
    "/images/crian1.png",
    "/images/crian2.png.jpg",
    "/images/crian3.png",
];

export default function ListaCriancas({ criancas }: Props) {
    return (
        <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                    Crianças Desaparecidas
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {criancas.map((c, index) => (
                        <div
                            key={c.id}
                            className="bg-card rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl border border-border"
                        >
                            <Image
                                src={imagensCriancas[index % imagensCriancas.length]}
                                alt={c.nome}
                                width={400}
                                height={300}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-primary">
                                    {c.nome}
                                </h3>
                                <div className="flex items-center mb-2 text-card-foreground">
                                    <FaBirthdayCake className="mr-2 text-primary" />
                                    <span>Idade: {c.idade} anos</span>
                                </div>
                                <div className="flex items-center mb-2 text-card-foreground">
                                    <FaCity className="mr-2 text-primary" />
                                    <span>Cidade: {c.cidade}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground text-sm">
                                    <FaCalendarAlt className="mr-2 text-primary" />
                                    <span>
                                        Desde:{" "}
                                        <span className="font-medium">
                                            {c.dataDesaparecimento
                                                ? new Date(c.dataDesaparecimento).toLocaleDateString("pt-BR")
                                                : "Data não informada"}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
