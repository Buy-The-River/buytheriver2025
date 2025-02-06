import { Button } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="contact-section bg-blue-800 text-center flex flex-col items-center justify-center py-12 px-4"
    >
      <h3 className="mb-4 text-5xl mt-10 font-semibold">Contact Us</h3>
      <p className="text-lg">
        Our Address: 1600 W Bank Dr, Peterborough, ON K9L 0G2
      </p>
      <p className="text-lg">Email: buytheriver2025@gmail.com</p>
      <Button
        size="xl"
        className="mt-6 mb-10 bg-white px-4 py-6 font-semibold text-base border-0"
      >
        <a href="https://forms.gle/NYGALwiWrNX3fDdP9" target="_blank">
          Contact Us
        </a>
      </Button>
    </div>
  );
};

export default ContactSection;
