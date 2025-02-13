import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";

const OfferSection = () => {
  const [whiteBgClass, setWhiteBgClass] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1200 && scrollY < 6000) {
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
      id="offer"
      className="offer-section w-full grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 text-center"
      style={{
        gridTemplateRows: "repeat(2, minmax(5em, 1fr))", // Ensure bigger squares
        gridAutoRows: "minmax(5em, 1fr)", // Adjust row size dynamically
      }}
    >
      {/* Row 1 */}
      <div className="bg-[#004aad] !p-5 !text-white font-semibold flex flex-col items-center justify-center !text-7xl leading-tight aspect-square">
        <h2>What We Offer</h2>
      </div>
      <div
        className={`!text-[#004aad] !p-5 flex flex-col items-center justify-center !text-4xl font-semibold leading-tight transition-colors duration-300 ${whiteBgClass} aspect-square`}
      >
        <p>Trent University’s first-of-its-kind finance case competition</p>
      </div>
      <div className="bg-[#004aad] !p-5 !text-white font-semibold flex flex-col items-center justify-center !text-4xl leading-tight aspect-square">
        <p>Bringing Together 100+ Students</p>
      </div>

      {/* Row 2 */}
      <div
        className={`!text-[#004aad] flex flex-col !p-5 items-center justify-center !text-4xl font-semibold leading-tight transition-colors duration-300 ${whiteBgClass} aspect-square`}
      >
        <p>20+ Industry Professionals</p>
      </div>
      <div className="bg-[#004aad] !p-5 flex items-center justify-center aspect-square">
        <img
          src={Logo}
          alt="Buy the River Whale Logo"
          className="w-[40em] h-auto"
        />
      </div>
      <div
        className={`!text-[#004aad] flex flex-col !p-5 items-center justify-center !text-4xl font-semibold leading-tight transition-colors duration-300 ${whiteBgClass} aspect-square`}
      >
        <p>Free In-Person Event & Exciting Prizes</p>
      </div>
    </div>
  );
};

export default OfferSection;
