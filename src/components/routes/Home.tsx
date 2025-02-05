import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaMicrochip } from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";
import { motion } from "framer-motion";
import NavBar from "../NavBar";

function Home() {
  const navigate = useNavigate();

  const goToTest = () => {
    navigate("/test");
  };

  return (
    <>
      <NavBar />
      {/* Landing Page of Buy the River */}
      <div className="home-section bg-blue-800 text-white h-[100vh] flex flex-col items-center justify-center bg-circle">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            justifyContent: "Center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="text-6xl lg:text-[4.5rem] xl:text-8xl font-semibold sm:max-w-[50vw] px-4 leading-[4rem] pb-12 text-center ">
            <p>In-Person | 100+ Participants | March 1st, 2025</p>
            <h2>Buy The River Logo</h2>
          </div>
          <Button
            size="xl"
            onClick={goToTest}
            variant="solid"
            className="bg-white  px-6 py-8 font-semibold text-xl border-0 rounded-lg hover:bg-black hover:text-white"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
      {/* About Us Section */}
      <div className="about-section bg-white sm:h-[40vh] text-black flex flex-col justify-center sm:flex-row p-6 ">
        <div className=" h-[50%] pt-4 sm:h-[100%] text-center flex flex-col items-center justify-center text-4xl sm:text-6xl font-semibold px-2 ">
          <h3>About</h3>
          <h3>Us</h3>
        </div>
        <div className="h-[50%] flex flex-col sm:justify-center  text-center pb-8 sm:w-[60%] text-xl px-6">
          <h3 className="text-4xl font-semibold">Our Story</h3>
          <p className="pt-4 leading-6">
            Buy the River is Trent University’s first-of-its-kind finance case
            competition, bringing together 100+ students and 20+ industry
            professionals. This event marks the beginning of what promises to be
            a lasting legacy in finance competitions at Trent. It is a
            collaborative effort between the Trent Business Students'
            Association (TBSA) and the Trent Finance and Investment Club (TFIC).
            ​ The one-day event, scheduled for March 1st, features dynamic pitch
            presentations, immersive stock simulations, and a series of
            interactive experiences, including career workshops, networking
            opportunities, and engaging trivia competitions.
          </p>
          <h3 className="text-4xl font-semibold">Who We Are</h3>
          <p className="pt-4 leading-6">
            Buy the River is organized by the same team behind HackTrent,
            Trent’s largest hackathon, and the ‘Building Bridges’ Business Gala,
            university’s biggest networking event. With the support of college
            principals, esteemed mentors, and leading faculty including the
            Chair of Business and Humanities, this event is poised to elevate
            the student experience and foster meaningful connections within the
            business community.
          </p>
        </div>
      </div>
      {/* What we Offer */}
      <div className="offer-section bg-[#004aad] flex flex-col items-center pt-[3rem] sm:flex-none  sm:pb-4">
        <div className="w-[50%] h-full">
          <h3>What We Offer</h3>
          <h3>Trent University’s first-of-its-kind finance case competition</h3>
          <h3>Bringing Together 100+ Students</h3>
          <h3>20+ Industry Professionals</h3>
          <h3>Free In-Person Event</h3>
        </div>
      </div>
      {/* Sponsor Buy the river */}
      <div className="sponsor-section bg-white min-h-[50vh] text-black flex flex-col sm:flex-row justify-evenly items-center">
        <h3>Sponsors for Buy the River</h3>
        <h3>2025 Coming Soon...</h3>
      </div>
      {/* CONTACT US SECTION */}
      <div className="contact-section bg-blue-800 text-center flex flex-col items-center justify-center py-12 px-4">
        <h3 className="mb-4 text-5xl mt-10 font-semibold">Contact Us</h3>
        <p className="text-lg ">
          Our Address 1600 W Bank Dr, Peterborough, ON K9L 0G2 Our Email
          buytheriver2025@gmail.com
        </p>
        <Button
          size="xl"
          variant="solid"
          className="mt-6 mb-10 bg-white px-4 py-6 font-semibold text-base border-0"
        >
          <a href="https://forms.gle/NYGALwiWrNX3fDdP9" target="_blank">
            Contact Us
          </a>
        </Button>
      </div>
    </>
  );
}

export default Home;
