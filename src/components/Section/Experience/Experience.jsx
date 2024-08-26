
import useScrollVisibilitySection from "../../../hook/ScrollSection";
import Timeline from "./Timeline/Timeline"


const experiences = [
  {
    title: 'Frontend',
    date: 'Enero 2024 - Actualmente',
    description: 'Tecnologías Informáticas ROOTS',
    link: 'https://drive.google.com/uc?export=download&id=13z0LYWZCu0Jz_IPSYVJeQiKi8El4AUId',
  },
  {
    title: 'Freelancer',
    date: 'Septiembre - 30 noviembre 2019',
    description: 'Distribuidora de bebidas Briana',
  },
  ];
const Experience = () => {
  const isVisible = useScrollVisibilitySection('experience-section', 100);


    return (
        <div 
        id="experience-section"
        className={`transition-opacity duration-500  ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className=" text-[45px] sm:text-[50px] font-semibold  text-center my-[40px]   text-white text-opacity-55 sm:pt-20 ">Experiencia</h1>
            <Timeline experiences={experiences}/>
            
        </div>
    )
}

export default Experience
