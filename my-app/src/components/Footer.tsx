import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Rodapé</h2>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Sobre */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre o Projeto</h3>
                        <p className="text-gray-400 text-sm">
                            Plataforma dedicada a dar visibilidade para casos de crianças desaparecidas,
                            ajudando famílias a encontrarem seus entes queridos.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#hero" className="hover:text-white">Início</a></li>
                            <li><a href="#lista" className="hover:text-white">Crianças</a></li>
                            <li><a href="#estatisticas" className="hover:text-white">Estatísticas</a></li>
                            <li><a href="#" className="hover:text-white">Contato</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contato</h3>
                        <p className="text-sm text-gray-400">contato@criancasdesaparecidas.org</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" aria-label="Instagram" className="hover:text-white">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-white">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-white">
                                <FaTwitter size={20} />
                            </a>
                            <a href="mailto:contato@criancasdesaparecidas.org" aria-label="Email" className="hover:text-white">
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Crianças Desaparecidas. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
