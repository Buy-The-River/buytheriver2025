import { useState, useEffect } from "react"; // Import useState and useEffect
import TFIC_logo from "../../assets/financeclublogo.png";
import TBSA_logo from "../../assets/TBSA_Logo_FINAL-01.png";
import Plus from "../../assets/Plus.svg";

const AboutSection = () => {
  // State to manage the background color of the second column
  const [backgroundColor, setBackgroundColor] = useState("bg-white");

  // Function to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change background color based on scroll position
      if (scrollY > 100 && scrollY < 1200) {
        setBackgroundColor("!bg-[#f9e6cf]"); // Change to the new color
      } else {
        setBackgroundColor("bg-white"); // Revert to the original color
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="about"
        className="about-section bg-white !text-[#004aad] flex flex-col justify-center sm:flex-row w-full"
      >
        {/* Left Section */}
        <div className="text-[#004aad] h-[40%] !py-15 sm:!p-10 sm:h-[100%] text-center flex flex-col items-center justify-center !text-4xl sm:text-6xl font-semibold px-2 sm:w-[33.33%]">
          <div className="!border-b-10 !border-[#FFDE59] !pb-2 text-left">
            <h2>About Us</h2>
          </div>
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 !m-8 items-center">
            <img
              src={TFIC_logo}
              alt="Trent Finance & Investments Club Logo"
              className="w-[5em] h-auto !m-5"
            />
            <img
              src={TBSA_logo}
              alt="Trent Business Students' Association Logo"
              className="w-[4em] h-auto !m-5"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`text-[#004aad] !p-10 sm:!py-10 h-[60%] flex flex-col sm:justify-center text-left sm:w-[66.66%] text-xl sm:!px-6 transition-colors duration-300 ${backgroundColor}`}
        >
          <div className="!my-2">
            <img
              src={Plus}
              alt="Plus Icon"
              className="w-[3em] h-auto" // Adjust size as needed
            />
            <h3 className="!my-4 !text-2xl font-semibold">Our Story</h3>

            {/* Added space between paragraphs */}
            <div className="!space-y-6">
              <p className="!leading-6">
                Buy the River is Trent University’s first-of-its-kind finance
                case competition, bringing together 100+ students and 20+
                industry professionals. This event marks the beginning of what
                promises to be a lasting legacy in finance competitions at
                Trent. It is a collaborative effort between the Trent Business
                Students' Association (TBSA) and the Trent Finance and
                Investment Club (TFIC).
              </p>
              <p className="!leading-6">
                The one-day event, scheduled for March 1st, features dynamic
                pitch presentations, immersive stock simulations, and a series
                of interactive experiences, including career workshops,
                networking opportunities, and engaging trivia competitions.
              </p>
            </div>
          </div>

          {/* Added spacing below Our Story */}
          <div className="!mt-8 "></div>

          <div className="!my-2">
            <img
              src={Plus}
              alt="Plus Icon"
              className="w-[3em] h-auto" // Adjust size as needed
            />
            <h3 className="!my-4 !text-2xl font-semibold">Who We Are</h3>

            {/* Added space between paragraphs */}
            <div className="!space-y-6">
              <p className="!leading-6">
                Buy the River is organized by the same team behind HackTrent,
                Trent’s largest hackathon, and the ‘Building Bridges’ Business
                Gala, university’s biggest networking event. With the support of
                college principals, esteemed mentors, and leading faculty
                including the Chair of Business and Humanities, this event is
                poised to elevate the student experience and foster meaningful
                connections within the business community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
