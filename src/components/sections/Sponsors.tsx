import { useState, useEffect } from "react";

const SponsorsSection = () => {
  const [whiteBgClass, setWhiteBgClass] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2000 && scrollY < 8000) {
        setWhiteBgClass("!bg-[#f9e6cf]"); // Light peach color when scrolling
      } else {
        setWhiteBgClass("bg-white"); // Revert to white
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sponsors"
      className={`sponsor-section min-h-[50vh] text-black flex flex-col sm:flex-row justify-evenly items-center !text-[#004aad] !leading-18
                 !border-t-10 !border-[#004aad] !p-10 text-center !text-6xl transition-colors duration-300 ${whiteBgClass}`}
    >
      <h2>Sponsors for Buy the River 2025 Coming Soon...</h2>
    </div>
  );
};

export default SponsorsSection;
