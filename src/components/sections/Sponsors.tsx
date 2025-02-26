import { useState, useEffect, useRef } from "react";
import Chatime from "../../../src/assets/Chatime-Logo.png";
import Osmows from "../../../src/assets/osmows-mobile-retina-logo.webp";
import Pj from "../../../src/assets/PJ Logo Colour.png";
import Business from "../../../src/assets/SchoolOfBusiness.png";
import Gzowski from "../../../src/assets/gzowski_crest.png";

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
        threshold: 0.2,
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
      <h2 className="sm:!text-6xl !mb-7 !text-4xl font-bold">Our Sponsors</h2>

      {/* Centered Sponsors Section */}
      <div className="flex md:!m-5 flex-wrap justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={Chatime}
            alt="Chatime Logo"
            className="!h-50 !w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Osmows}
            alt="Osmow's Logo"
            className="!h-50 !w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Pj}
            alt="Pitch Jams Logo"
            className="!h-50 !w-auto object-contain"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={Gzowski}
            alt="Gzowski College Logo"
            className="!h-50 w-auto  object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Business}
            alt="School of Business Logo"
            className="!h-30 w-auto object-contain"
          />
        </div>
      </div>

      <p className="!text-base font-bold !mt-10">
        More Sponsors for Buy the River 2025 Coming Soon...
      </p>
    </div>
  );
};

export default SponsorsSection;
