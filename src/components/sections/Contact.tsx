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

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          {submitted ? (
            <div className="text-green-500 text-lg font-semibold">
              Thank you for your message!
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button
                type="submit"
                size="xl"
                className="bg-white px-4 py-6 font-semibold text-base border-0"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
