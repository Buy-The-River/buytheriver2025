import { useState, useEffect, useRef } from "react";

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
      className={`sponsor-section min-h-[50vh] text-black flex flex-col sm:flex-row justify-evenly items-center !text-[#004aad] !leading-18
                 !border-t-10 !border-[#004aad] !p-10 text-center !text-6xl transition-colors duration-300 ${whiteBgClass}`}
    >
      <h2>Sponsors for Buy the River 2025 Coming Soon...</h2>
    </div>
  );
};

export default SponsorsSection;
