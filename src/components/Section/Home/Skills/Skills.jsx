import { useState } from "react";
import {
    Figma, PostMan, Tailwind, Js, Vite, Reactjs, Next, TypeScript
} from "../../../Icons/Icons";



const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <h2 className=" animate-slideIn text-white text-opacity-55  font-semibold text-[30px] sm:text-[45px] text-center mb-10 md:mb-[70px]">
                Habilidades
            </h2>
            <div className=' animate-slideIn flex gap-3 flex-wrap justify-center items-center'>
                {[
                    { src: Js, color: '#f0db4f', name: 'Javascript' },
                    { src: TypeScript, color: '#3178C6', name: 'Typescript' },
                    { src: Reactjs, color: '#61DAFB', name: 'React' },
                    { src: Tailwind, color: '#06B6D4', name: 'Tailwind' },
                    { src: Vite, color: '#646CFF', name: 'Vite' },
                    { src: PostMan, color: '#FF6C37', name: 'Postman' },
                    { src: Figma, color: '#F24E1E', name: 'Figma' },
                ].map((icon, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className='group  bg-[#26282C] p-5 rounded-full flex items-center justify-center overflow-hidden w-20 h-20 sm:h-24 sm:w-24 shadow-xl'
                            
                        >
                            <img
                                src={icon.src}
                                className="w-full h-full object-contain grayscale transition-all ease-in-out duration-300 group-hover:grayscale-0 group-hover:scale-110"
                                alt={`${icon.name} Icon`}
                            />
                        </div>

                        <span
                            className={` mt-2 transition-opacity duration-400 ease-in ${hoveredIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                            style={{ color: icon.color }}
                        >
                            {icon.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
