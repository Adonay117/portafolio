import CardProject from "../../CardProject"
import Filter from "./Filter"

const project = [
  {
    title: 'Portafolio',
    description: 'Una sitio estatico donde muestro mi perfil', 
    prototype: 'Figma', 
    prototypeLink: 'https://www.figma.com/design/E8LIhlIHQe6YtbPKEnztuC/Portafolio-Adonay-Arag%C3%B3n?node-id=0-1&t=AH9fjCK2OliYrarC-1',
    view: '...', 
    linkView: '#',
    tags: [
      'react', 'tailwind', 'vite'
    ], 
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/score%20(2).png', 
   },
   {
    title: 'Ecommerce',
    description: 'Es un ecommerce a la medida usuario final', 
    prototype: '...', 
    prototypeLink: '.',
    view: '...', 
    linkView: 'https://www.tiendaudg.com/',
    tags: [
      'react', 'antd', 'vite', 'boostrap', 'api'
    ], 
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/score%20(2).png', 
   },
 {
  title: 'Tablero',
  description: 'Reto de FrotendMentor, maquetación', 
  prototype: '...', 
  prototypeLink: '.',
  view: '...', 
  linkView: 'https://score-nu.vercel.app/',
  tags: [
    'react', 'css', 'maquetación'
  ], 
  imgProject: 'https://github.com/Adonay117/serverimage/raw/main/score%20(2).png', 
 },
 
   {
    title: 'Piedra, papel y tijera',
    description: 'Reto FrontendMentor, el famoso juego de piedra, papel y tijera. La funcionalidad es la siguiente cada vez que ganas sumas puntos, pero si pierde te resta 1 punto', 
    prototype: '...', 
    prototypeLink: '.',
    view: '...', 
    linkView: 'https://adonay117.github.io/',
    tags: [
      'javascript', 'css'
    ], 
    imgProject: 'https://github.com/Adonay117/serverimage/raw/main/paper.png', 
   },

]
const tags =['react', 'tailwind']
const Work = () => {
    return (
        <>
        <h1 className=" text-[40px] font-semibold text-center mt-[40px] text-black text-opacity-65  dark:text-white dark:text-opacity-55">
            Proyectos
        </h1>
        <div className=" flex flex-col items-center my-10 ">
        <Filter/>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap pb-10">

       {project.map( (item, index) =>(
        <CardProject
        key={index}
        titleProject={item.title}
        description={item.description}
        imgProject={item.imgProject}
        tags={item.tags}
        linkView={item.linkView}
        linkPrototype={item.prototypeLink}
        isview={item.linkView.length > 0}
        isprototype={item.prototypeLink !== '.'}

        />
       ))}
            
    
      
        </div>
        </>
    )
}

export default Work
