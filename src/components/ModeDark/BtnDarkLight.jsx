import React, { useState, useEffect } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
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
      className={`py-2 rounded dark:text-white text-black
      }`}
    >
      {darkMode == false ?  <CiLight /> :<CiDark/>}
    </button>
    
  );
};

export default BtnDarkLigth;
