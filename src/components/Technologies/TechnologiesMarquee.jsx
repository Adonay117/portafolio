import React from 'react';


const technologies = [
  'JavaScript',
  'React',
  'Next',
  'Vite',
  'PostMan',
  'HTML',
  'CSS',
  'Tailwind',
  'React Native',
  'Bootstrap',
  'SASS', 
  'Figma'
];

const TechnologiesMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap max-w-[60%]  ">
        <h2 className=" animate-slideIn text-white font-semibold text-[23px] sm:text-[45px] text-center mb-10 md:mb-[70px]">
                Habilidades
            </h2>
      <div className="marquee inline-block animate-marquee">
        {technologies.concat(technologies).map((tech, index) => (
          <div key={index} className="inline-block mx-4 text-2xl text-white">
            {tech}
          </div>
        ))}
      </div>

    </div>
  );
};

export default TechnologiesMarquee;