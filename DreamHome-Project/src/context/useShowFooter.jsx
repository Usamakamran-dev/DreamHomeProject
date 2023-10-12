import { useState, useEffect } from 'react';

const useShowFooter = () => {
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("show-footer");
      const scrollPoint = window.scrollY;
      const threshold = 500;
      if (scrollPoint >= projectSection.offsetTop - threshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }}
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return showFooter;};

export default useShowFooter;