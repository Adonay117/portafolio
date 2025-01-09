import { useState, useEffect } from 'react';
import BtnDarkLigth from "../ModeDark/BtnDarkLight";
import HomeIcon from '../Icons/HomeIcon';
import JobIcon from '../Icons/JobIcon';
import ExpIcon from '../Icons/ExpIcon';
import School from '../Icons/School';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop ;
            const sectionHeight = section.clientHeight;
    
            if (window.scrollY + window.innerHeight / 2 >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
    
        setActiveSection(currentSection);
    };
    

    useEffect(() => {
        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleInicioClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className=" animate-rebound sm:sticky sm:top-0 z-50 fixed bottom-0 left-0 right-0">
            <div className="flex justify-center gap-2 pt-3">
                <ul className="flex justify-around  items-center sm:justify-center sm:items-center gap-10 sm:gap-6 bg-[#26282C] text-[#B8BCB7] w-full sm:w-[650px] sm:rounded-full h-14  lg:h-[70px]">
                    
                    {
                        [
                         ['Inicio', '#inicio', <HomeIcon className='w-8'/>, 'inicio'],
                         ['Experiencia', '#experiencia', <ExpIcon className='w-8' />, 'experiencia'],
                         ['Formación', '#formacion', <School className='w-8' />, 'formacion'], 
                         ['Proyectos', '#proyectos', <JobIcon className='w-8' />, 'proyectos'], 
                         ['Contacto', '#contacto', <HomeIcon className='w-8' />, 'contacto']
                        ].map(([title, path, icon, active], index) => (
                            <li
                            key={index}>
                            <a
                                href={path}
                                onClick={title === 'Inicio' ? handleInicioClick : null}
                                className={activeSection === active  ? 'text-white lg:bg-primary py-3 px-4 rounded-full' : 'py-3 px-4'}
                            >
                                <span className="sm:hidden text-[30px]">
                                {icon}
                                </span>
                                <span className="hidden sm:inline">
                                    {title}
                                </span>
                            </a>
                        </li>
                        )
                        )}
                       </ul>
            </div>
        </nav>
    );
}

export default Navbar;


