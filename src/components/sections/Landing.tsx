import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import LogoText from "../../../src/assets/Logotxt.svg";
import Logo from "../../../src/assets/Logo.svg";

const LandingSection = () => {
  return (
    <div
      id="home"
      className="home-section min-h-[100vh] bg-[#004aad] text-white flex flex-col items-center justify-center !pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center w-[80vw]"
      >
        {/* Responsive Text */}
        <div className="w-full flex justify-center">
          <p className="text-white! font-bold! !my-8 text-center text-base sm:text-lg! md:text-xl! lg:text-2xl! xl:text-3xl! 2xl:text-4xl!">
            In-Person | 100+ Participants | March 1st, 2025
          </p>
        </div>

        {/* Responsive Logo Container */}
        <div className="flex flex-row justify-center items-center w-full">
          <img
            src={Logo}
            alt="logo"
            className="w-[30%] h-auto max-w-[5rem] sm:max-w-[7rem] md:w-[25%]"
          />
          <img
            src={LogoText}
            alt="logo"
            className="w-[30%] h-auto max-w-[2rem] sm:max-w-[4rem] md:w-[25%]"
          />
        </div>

        {/* Responsive Button */}
        <Button
          size="lg"
          onClick={() =>
            (window.location.href = "https://forms.office.com/r/1zEKdjMXqc")
          }
          variant="solid"
          className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 lg:py-10! !my-5 text-center text-base sm:text-lg! md:text-xl! lg:text-2xl! xl:text-3xl! 2xl:text-4xl! font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
        >
          Apply Now
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingSection;
