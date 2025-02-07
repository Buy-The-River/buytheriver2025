import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import LogoText from "../../../src/assets/Logotxt.svg";
import Logo from "../../../src/assets/Logo.svg";

const LandingSection = () => {
  return (
    <div
      id="home"
      className="home-section bg-[#004aad] text-white h-[100vh] flex flex-col items-center justify-center bg-circle"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="text-6xl lg:text-[4.5rem] xl:text-8xl font-semibold sm:max-w-[50vw] leading-[4rem] pb-12 text-center">
          <p className="!my-3 weight-900">
            In-Person | 100+ Participants | March 1st, 2025
          </p>
          <div className="!my-5 flex flex-row justify-between items-center">
            <img
              src={Logo}
              alt="logo"
              className="!mx-3 max-h-[60rem] sm:max-w-[120rem] sm:max-h-[80rem]"
            />
            <img
              src={LogoText}
              alt="logo"
              className="max-h-[20rem] sm:max-w-[40rem] sm:max-h-[35rem]"
            />
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => (window.location.href = "/")}
          variant="solid"
          className="bg-black px-6 py-3 font-semibold text-lg border-0 rounded-lg transition-all duration-300 hover:bg-[#f8cf40]! hover:text-black!"
        >
          Apply Now
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingSection;
