const AboutSection = () => {
  return (
    <div
      id="about"
      className="about-section bg-white sm:h-[40vh] text-black flex flex-col justify-center sm:flex-row p-6"
    >
      <div className="h-[50%] pt-4 sm:h-[100%] text-center flex flex-col items-center justify-center text-4xl sm:text-6xl font-semibold px-2">
        <h3>About</h3>
        <h3>Us</h3>
      </div>
      <div className="h-[50%] flex flex-col sm:justify-center text-center pb-8 sm:w-[60%] text-xl px-6">
        <h3 className="text-4xl font-semibold">Our Story</h3>
        <p className="pt-4 leading-6">
          Buy the River is Trent University’s first-of-its-kind finance case
          competition, bringing together 100+ students and 20+ industry
          professionals.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
