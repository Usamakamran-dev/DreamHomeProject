import { useState, useEffect } from 'react';

const useShowFooter = () => {
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = window.scrollY;
      const threshold = 100;
      if (scrollPoint >= threshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }      
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return showFooter;
  }
  export default useShowFooter;