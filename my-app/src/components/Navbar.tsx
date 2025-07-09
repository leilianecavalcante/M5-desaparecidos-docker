import React, { useState } from "react";

const navLinks = [
    { title: "Home", id: "hero" },
    { title: "Lista", id: "lista" },
    { title: "Estatísticas", id: "estatisticas" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Fecha o menu mobile após clicar
    };

    const NavLink = ({ title, id }: { title: string; id: string }) => (
        <button
            onClick={() => handleScroll(id)}
            className="relative group py-2 text-gray-700 transition hover:text-blue-600"
        >
            <span>{title}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </button>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1
                    className="font-bold text-xl text-gray-800 cursor-pointer select-none"
                    onClick={() => handleScroll("hero")}
                >
                    Crianças Desaparecidas
                </h1>

                {/* Menu desktop */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NavLink title={link.title} id={link.id} />
                        </li>
                    ))}
                </ul>

                {/* Botão hamburger mobile */}
                <button
                    className="md:hidden focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="w-6 h-6 flex flex-col justify-around">
                        <span
                            className={`block w-full h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[5px]" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Menu mobile com transição */}
            <div
                className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <ul className="flex flex-col items-center space-y-2 p-4">
                    {navLinks.map((link) => (
                        <li key={link.id} className="w-full">
                            <button
                                className="block w-full text-center py-2 text-gray-700 hover:text-blue-600 transition-colors"
                                onClick={() => handleScroll(link.id)}
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
