
import useScrollVisibilitySection from "../../../hook/ScrollSection";
import Card from "./Card/Card";




const School = () => {
    const isVisible = useScrollVisibilitySection('School-section', 100);
    return (
       <div id="School-section"
       className={`transition-opacity duration-500  ${isVisible ? 'animate-slideIn' : 'opacity-0'} `}>
       <h1 className="text-[45px] sm:text-[50px] font-semibold text-center my-[40px] sm:pt-5 text-white ">
        Formación
       </h1>
       <div className=" mx-auto max-w-[600px] flex flex-wrap gap-10">
        
      <Card
      school="Universidad Gerardo Barrios"
      career="Ingeniería en Sistemas y Redes Informáticas"
      year="2020-2024"
      />
      <Card
      school="ITCA FEPADE"
      career="Tecnicos en Ingeniería en Sistemas y Redes Informáticas"
      year="2017-2019"
      className="from-violet-500 to-purple-400"
      />
      </div>
       </div>
    )
}

export default School




