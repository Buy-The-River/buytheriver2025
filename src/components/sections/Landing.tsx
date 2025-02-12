import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import LogoText from "../../../src/assets/Logotxt.svg";
import Logo from "../../../src/assets/Logo.svg";

const LandingSection = () => {
  return (
    <div
      id="home"
      className="home-section h-[100vh] bg-[#004aad] text-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center w-[80vw]"
      >
        {/* Responsive Text */}
        <div className="w-full flex justify-center">
          <p className="text-white! font-bold! !mb-3 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            In-Person • 100+ Participants • March 1st, 2025
          </p>
        </div>

        {/* Responsive Logo Container */}
        <div className="mt-4 flex flex-row justify-center items-center w-full">
          <img
            src={Logo}
            alt="logo"
            className="!mx-3 w-[30%] max-w-[5rem] sm:max-w-[7rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[16rem]"
          />
          <img
            src={LogoText}
            alt="logo"
            className="!mx-3 w-[30%] max-w-[2rem] sm:max-w-[4rem] md:max-w-[6rem] lg:max-w-[8rem] xl:max-w-[10rem]"
          />
        </div>

        {/* Responsive Button */}
        <Button
          size="lg"
          onClick={() => (window.location.href = "/")}
          variant="solid"
          className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
        >
          Apply Now
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingSection;
