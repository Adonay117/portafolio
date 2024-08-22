import Timeline from "./Timeline/Timeline"


const experiences = [
  {
    title: 'Frontend',
    date: 'Enero 2024 - Actualmente',
    description: 'Tecnologías Informáticas ROOTS',
    link: '#',
  },
  {
    title: 'Freelancer',
    date: 'Septiembre - 30 noviembre 2019',
    description: 'Distribuidora de bebidas Briana',
  },
  ];
const Experience = (props) => {
    return (
        <div>
            <h1 className=" text-[40px] font-semibold  text-center my-[40px] text-black text-opacity-65  dark:text-white dark:text-opacity-55    ">Experiencia</h1>
            <Timeline experiences={experiences}/>
            
        </div>
    )
}

export default Experience
