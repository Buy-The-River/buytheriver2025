import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import LogoText from "../../../src/assets/Logotxt.svg";
import Logo from "../../../src/assets/Logo.svg";

const LandingSection = () => {
  return (
    <div
      id="home"
      className="home-section h-[100vh] bg-[#004aad] !text-white !pt-10 !pb-20 flex flex-col items-center justify-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        {/* Responsive Text */}
        <div className="text-center">
          <p className="!my-2 !font-bold whitespace-nowrap">
            In-Person | 100+ Participants | March 1st, 2025
          </p>
        </div>

        {/* Responsive Logo Container */}
        <div className="!mt-3 flex flex-row justify-center items-center w-full">
          <img
            src={Logo}
            alt="logo"
            className="!mx-3 w-1/2 max-w-[6rem] sm:max-w-[8rem] md:max-w-[12rem] lg:max-w-[16rem] xl:max-w-[20rem]"
          />
          <img
            src={LogoText}
            alt="logo"
            className="w-1/2 max-w-[3rem] sm:max-w-[4rem] md:max-w-[6rem] lg:max-w-[8rem] xl:max-w-[10rem]"
          />
        </div>

        {/* Responsive Button */}
        <Button
          size="lg"
          onClick={() => (window.location.href = "/")}
          variant="solid"
          className="bg-black !px-4 !py-2 font-semibold text-xs sm:text-sm border-0 rounded-lg transition-all duration-300 hover:bg-[#f8cf40]! hover:text-black! !mt-3"
        >
          Apply Now
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingSection;
