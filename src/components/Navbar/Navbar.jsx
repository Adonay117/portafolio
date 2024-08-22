import { useState, useEffect } from 'react';
import BtnDarkLigth from "../ModeDark/BtnDarkLight";
import { FaHome } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BsBackpack2Fill, BsFillBriefcaseFill, BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 3) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="sm:sticky sm:top-0 z-50 fixed bottom-0 left-0 right-0">
            <div className="flex justify-center gap-2 pt-3">
                <ul className="flex justify-center transition ease-in duration-500 items-center gap-10 sm:gap-4 bg-[#D9D9D9] dark:bg-[#26282C] dark:text-[#B8BCB7] w-full sm:w-96 sm:rounded-full h-[50px] sm:h-[40px]">
                    <li>
                        <a
                            href="#inicio"
                            className={activeSection === 'inicio' ? 'text-blue-500' : ''}
                        >
                            <span className="sm:hidden text-[30px]">
                            <BsFillHouseFill />
                            </span>
                            <span className="hidden sm:inline">
                              Inicio
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experiencia"
                            className={activeSection === 'experiencia' ? 'text-blue-500' : ''}
                        >
                           <span className="sm:hidden text-[30px]">
                           <BsBackpack2Fill />
                            </span>
                            <span className="hidden sm:inline">
                              Experiencia
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#proyectos"
                            className={activeSection === 'proyectos' ? 'text-blue-500' : ''}
                        >
                            <span className="sm:hidden text-[30px]">
                            <BsFillBriefcaseFill />
                            </span>
                            <span className="hidden sm:inline">
                              Proyectos
                            </span>
                        </a>
                    </li>
                    <li className='text-[30px] sm:text-[20px]'>
                    <BtnDarkLigth />

                    </li>
                </ul>
              
            </div>
        </nav >
    );
}

export default Navbar;
