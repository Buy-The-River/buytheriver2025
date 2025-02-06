import { Button } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="contact-section bg-[#004aad] text-center flex flex-col items-center justify-center py-12 px-4"
    >
      <div className="text-white flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mt-6 gap-8">
        {/* Left Column - Contact Info */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="mb-4 text-5xl mt-10 font-semibold">Contact Us</h3>
          <p className="text-lg">
            Our Address: 1600 W Bank Dr, Peterborough, ON K9L 0G2
          </p>
          <p className="text-lg">Email: buytheriver2025@gmail.com</p>
        </div>

        {/* Right Column - Contact Button */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <Button
            size="xl"
            className="bg-white px-4 py-6 font-semibold text-base border-0"
          >
            <a href="https://forms.gle/NYGALwiWrNX3fDdP9" target="_blank">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
