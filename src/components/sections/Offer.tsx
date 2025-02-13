import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Logo.png";

const OfferSection = () => {
  const [whiteBgClass, setWhiteBgClass] = useState("bg-white");
  const offerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWhiteBgClass("!bg-[#f9e6cf]");
          } else {
            setWhiteBgClass("bg-white");
          }
        });
      },
      {
        threshold: 0.15, // Adjust this value for mobile/desktop sensitivity
      }
    );

    if (offerRef.current) {
      observer.observe(offerRef.current);
    }

    return () => {
      if (offerRef.current) {
        observer.unobserve(offerRef.current);
      }
    };
  }, []);

  return (
    <div
      id="offer"
      ref={offerRef}
      className={`offer-section w-full grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 text-center transition-colors duration-300 ${whiteBgClass}`}
      style={{
        gridTemplateRows: "repeat(2, minmax(5em, 1fr))",
        gridAutoRows: "minmax(5em, 1fr)",
      }}
    >
      {/* Row 1 */}
      <div className="bg-[#004aad] !p-5 !text-white font-semibold flex flex-col items-center justify-center !text-5xl leading-tight aspect-square">
        <h2>What We Offer</h2>
      </div>
      <div className="!text-[#004aad] !p-5 flex flex-col items-center justify-center !text-2xl font-semibold leading-tight aspect-square">
        <p>Trent University’s first-of-its-kind finance case competition</p>
      </div>
      <div className="bg-[#004aad] !p-5 !text-white font-semibold flex flex-col items-center justify-center !text-3xl leading-tight aspect-square">
        <p>Bringing Together 100+ Students</p>
      </div>

      {/* Row 2 */}
      <div className="!text-[#004aad] flex flex-col !p-5 items-center justify-center !text-3xl font-semibold leading-tight aspect-square">
        <p>20+ Industry Professionals</p>
      </div>
      <div className="bg-[#004aad] !p-5 flex items-center justify-center aspect-square">
        <img
          src={Logo}
          alt="Buy the River Whale Logo"
          className="w-[40em] h-auto"
        />
      </div>
      <div className="!text-[#004aad] flex flex-col !p-5 items-center justify-center !text-2xl font-semibold leading-tight aspect-square">
        <p>Free In-Person Event & Exciting Prizes</p>
      </div>
    </div>
  );
};

export default OfferSection;
