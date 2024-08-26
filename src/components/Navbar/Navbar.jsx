import { useState, useEffect } from 'react';
import BtnDarkLigth from "../ModeDark/BtnDarkLight";
import HomeIcon from '../Icons/HomeIcon';
import JobIcon from '../Icons/JobIcon';
import ExpIcon from '../Icons/ExpIcon';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = 'inicio'; // Cambia a 'inicio' por defecto

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Ajusta el valor para mejorar la detección
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        handleScroll(); // Verifica la sección activa al cargar la página
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className=" animate-rebound sm:sticky sm:top-0 z-50 fixed bottom-0 left-0 right-0">
            <div className="flex justify-center gap-2 pt-3">
                <ul className="flex justify-center items-center gap-10 sm:gap-6 bg-[#26282C] text-[#B8BCB7] w-full sm:w-[400px] sm:rounded-full h-[50px] sm:h-[55px]">
                    <li>
                        <a
                            href="#inicio"
                            className={activeSection === 'inicio' ? 'text-white sm:bg-gradient-to-r from-indigo-500 to-violet-500 py-2 px-3 rounded-full' : 'py-2 px-3'}
                        >
                            <span className="sm:hidden text-[30px]">
                                <HomeIcon className='w-6' />
                            </span>
                            <span className="hidden sm:inline">
                                Inicio
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experiencia"
                            className={activeSection === 'experiencia' ? 'text-white sm:bg-gradient-to-r from-indigo-500 to-violet-500 py-2 px-3 rounded-full' : 'py-2 px-3'}
                        >
                            <span className="sm:hidden text-[30px]">
                                <ExpIcon className='w-6' />
                            </span>
                            <span className="hidden sm:inline">
                                Experiencia
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#proyectos"
                            className={activeSection === 'proyectos' ? 'text-white sm:bg-gradient-to-r from-indigo-500 to-violet-500 py-2 px-3 rounded-full' : 'py-2 px-3'}
                        >
                            <span className="sm:hidden text-[30px]">
                                <JobIcon className='w-6' />
                            </span>
                            <span className="hidden sm:inline">
                                Proyectos
                            </span>
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href="#contacto"
                            className={activeSection === 'contacto' ? 'text-white sm:bg-gradient-to-r from-indigo-500 to-violet-500 py-2 px-3 rounded-full' : 'py-2 px-3'}
                        >
                            <span className="sm:hidden text-[30px]">
                                <HomeIcon className='w-6' />
                            </span>
                            <span className="hidden sm:inline">
                                Contáctame
                            </span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
