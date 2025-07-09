const criancas = [
    {
        id: 1,
        nome: "David Santos Almeida",
        idade: 8,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        dataDesaparecimento: "2024-01-04",
        fotoUrl: "/crian1.png"  // <-- CORRETO: não usa `/public` na URL!
    },
    {
        id: 2,
        nome: "Felipe Ramos Da Silva",
        idade: 9,
        cidade: "São Paulo",
        estado: "SP",
        dataDesaparecimento: "2024-03-02",
        fotoUrl: "/crian2.png"
    },
    {
        id: 3,
        nome: "Maria Julia da Silva",
        idade: 7,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        dataDesaparecimento: "2023-03-22",
        fotoUrl: "/crian3.png"
    }
];

module.exports = criancas;
