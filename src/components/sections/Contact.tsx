import { Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_API_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSubmitted(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className="contact-section bg-[#004aad] text-center flex flex-col items-center justify-center py-12 px-6"
    >
      <div className="!text-white flex flex-col md:flex-row items-center justify-center w-full max-w-4xl !mt-10 md:!mt-0 gap-8">
        {/* Left Column - Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="mb-4 text-4xl md:text-5xl mt-6 font-semibold">
            Contact Us
          </h3>
          <p className="text-base md:text-lg">
            Our Address: 1600 W Bank Dr, Peterborough, ON K9L 0G2
          </p>
          <p className="text-base md:text-lg">
            Email: buytheriver2025@gmail.com
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full text-left flex flex-col items-center md:!py-20">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto"
          >
            <div className="form-group w-full">
              <label
                htmlFor="name"
                className="block text-white text-lg font-medium !pb-1"
              >
                Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-white !text-black borde focus:ring-2 focus:ring-blue-400 !p-2"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-full">
              <label
                htmlFor="email"
                className="block text-white text-lg font-medium !pb-1"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-white !text-black borde focus:ring-2 focus:ring-blue-400 !p-2"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-full">
              <label
                htmlFor="message"
                className="block text-white text-lg font-medium !pb-1"
              >
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-white !text-black borde focus:ring-2 focus:ring-blue-400 !p-2"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <Button
              type="submit"
              size="xl"
              className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
            >
              Send Message
            </Button>

            {submitted && (
              <div className="text-green-500 text-lg font-semibold text-center mt-4">
                Thank you for your message!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
