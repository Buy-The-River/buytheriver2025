import { useState, useEffect, useRef } from "react";
import Chatime from "../../../src/assets/Chatime-Logo.png";
import Osmows from "../../../src/assets/osmows-mobile-retina-logo.webp";
import Pj from "../../../src/assets/PJ Logo Colour.png";
import Business from "../../../src/assets/SchoolOfBusiness.png";

const SponsorsSection = () => {
  const [whiteBgClass, setWhiteBgClass] = useState("bg-white");
  const sponsorsRef = useRef(null);

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
        threshold: 0.5, // Adjust this value for mobile/desktop sensitivity
      }
    );

    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }

    return () => {
      if (sponsorsRef.current) {
        observer.unobserve(sponsorsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="sponsors"
      ref={sponsorsRef}
      className={`sponsor-section min-h-[50vh] text-black !text-[#004aad] !leading-18
                 !border-t-10 !border-[#004aad] !p-10 text-center !text-6xl transition-colors duration-300 ${whiteBgClass}`}
    >
      <h2>Our Sponsors</h2>
      <div className="flex flex-wrap justify-center !gap-8 !m-15">
        <img
          src={Chatime}
          alt="Chatime Logo"
          className="!h-50 w-auto object-contain"
        />
        <img
          src={Osmows}
          alt="Osmow's Logo"
          className="!h-50 w-auto object-contain"
        />
        <img
          src={Pj}
          alt="Pitch Jams Logo"
          className="!h-50 w-auto object-contain"
        />
        <img
          src={Business}
          alt="School of Business Logo"
          className="!h-24 w-auto object-contain !m-auto"
        />
      </div>
      <p className="!text-base !font-bold !mt-10">
        More Sponsors for Buy the River 2025 Coming Soon...
      </p>
    </div>
  );
};

export default SponsorsSection;
