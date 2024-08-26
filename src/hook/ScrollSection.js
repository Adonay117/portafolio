import { useEffect, useState } from 'react';
const useScrollVisibilitySection = (dataById = '', viewport = 0) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const section = document.getElementById(dataById);
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
  
        setIsVisible(rect.top < viewportHeight - viewport);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check visibility on mount
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [dataById, viewport]);
  
    return isVisible;
  };
  
  export default useScrollVisibilitySection;