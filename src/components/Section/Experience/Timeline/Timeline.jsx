import React from 'react';
import useScrollVisibilitySection from '../../../../hook/ScrollSection';

const Timeline = ({ experiences }) => {
  // Use the hook for each item and store their visibility states
  const visibilityStates = experiences.map((_, index) =>
    useScrollVisibilitySection(`exp${index}`, 200)
  );

  return (
    <div className='flex flex-col items-center'>
      <ol className="relative flex flex-col justify-center items-center border-l border-gray-700">
        {experiences.map((exp, index) => (
          <li
            key={index}
            id={`exp${index}`}
            className={`mb-10 ml-6 transition-opacity duration-1000 ease-in-out ${visibilityStates[index] ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="mb-1 text-lg font-normal leading-none text-gray-300">
              {exp.date}
            </time>
            <p className="text-[40px] font-semibold  text-white">
              {exp.title}
            </p>
            <p className="mb-4 text-[35px] font-normal  text-gray-400">
              {exp.description}
            </p>
            {exp.link && (
              <a
                href={exp.link}
                download='AdonayAragonCv.pdf'
                className="inline-flex animate-bounce hover:animate-none items-center px-4 py-2 text-sm font-medium  focus:z-10 focus:ring-4 focus:outline-none bg-gray-800  border-gray-600 text hover:text-white bg-gradient-to-l from-indigo-500  to-violet-500 focus:ring-white text-white"
              >
                Descargar CV
                <svg
                  className="w-3 h-3 ml-2 rtl:rotate-180 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
