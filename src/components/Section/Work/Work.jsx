import { useState } from "react";
import CardProject from "../../CardProject";
import Filter from "./Filter";
import useScrollVisibilitySection from "../../../hook/ScrollSection";
import Hobby from "../Hobby/Hobby";

const projects = [

  {
    title: 'Ecommerce',
    description: 'Es un Ecommerce a la medida usuario final.',
    prototype: '...',
    prototypeLink: '.',
    view: '...',
    linkView: 'https://www.tiendaudg.com/',
    tags: ['react', 'antd', 'vite', 'bootstrap', 'api'],
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/shoping.png',
  },
  {
    title: 'Heroes App',
    description: 'Data de los heroes de DC y Marvel, con la funcionalidad de buscar, filtrar y ver detalles de cada heroe.',
    prototype: '...',
    prototypeLink: '.',
    view: '...',
    linkView: 'https://herodcmarvel.netlify.app/marvel',
    tags: ['react', 'vite', 'bootstrap'],
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/HeroApp.png',
  },
  {
    title: 'Tablero',
    description: 'Reto de FrotendMentor, maquetación.',
    prototype: '...',
    prototypeLink: '.',
    view: '...',
    linkView: 'https://score-nu.vercel.app/',
    tags: ['react', 'css', 'maquetación'],
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/score%20(2).png',
  },

];

const tags = ['react', 'tailwind', 'vite', 'api', 'css', 'javascript', 'antd', 'bootstrap', 'maquetación'];

const Work = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const isVisibleSection = useScrollVisibilitySection('work-section', 200);

  const handleTagChange = (selectedTags) => {
    console.log("Updated tags in Work component:", selectedTags);
    setSelectedTags(selectedTags);
  };

  const filteredProjects = selectedTags.length
    ? projects.filter(project => selectedTags.every(tag => project.tags.includes(tag)))
    : projects;



  const projectVisibility = filteredProjects.map((_, index) =>
    useScrollVisibilitySection(`project-card-${index}`, 200)
  );

  return (
    <>
      <h1
        id="work-section"
        className={`text-[45px] sm:text-[50px] font-semibold text-center mt-[40px] sm:pt-5 text-white  transition-opacity duration-500 ${isVisibleSection ? 'opacity-100' : 'opacity-0'}`}
      >
        Proyectos
      </h1>
      <div className="flex flex-col pb-10 items-center lg:items-start max-w-[1440px] sm:mx-auto transition-all">
        {/* <Filter options={tags} onChange={handleTagChange} /> */}
      </div>
      <div className="flex gap-10 justify-center lg:justify-between flex-wrap pb-10 max-w-[1440px] sm:mx-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => {
        
            return (
              <CardProject
                key={index}
                id={`project-card-${index}`}
                titleProject={item.title}
                description={item.description}
                imgProject={item.imgProject}
                tags={item.tags}
                linkView={item.linkView}
                linkPrototype={item.prototypeLink}
                isview={item.linkView.length > 0}
                isprototype={item.prototypeLink !== '.'}
                isVisible={projectVisibility[index]}
              />
            );
          })
        ) : (
          <p className="text-center text-gray-300 dark:text-gray-300 mt-5">
            No hay proyectos disponibles con los filtros seleccionados.
          </p>
        )}
      </div>
{/* 
      <Hobby/> */}
    </>
  );
};

export default Work;
