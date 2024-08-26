import React, { useState, useEffect } from 'react';
import LightIcon from '../Icons/LightIcon';
import DarkIcon from '../Icons/DarkIcon';
const BtnDarkLigth = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`py-4  rounded dark:text-[#B8BCB7]
      }`}
    >
      {darkMode == false ?  <LightIcon  className=" visible sm:hidden w-6 sm:w-5" /> :<DarkIcon className="  w-6 sm:w-5" />
      }
    </button>
    
  );
};

export default BtnDarkLigth;
