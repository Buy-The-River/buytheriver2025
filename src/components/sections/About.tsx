const AboutSection = () => {
  return (
    <div
      id="about"
      className="about-section !my-5 bg-white text-[#004aad] flex flex-col justify-center sm:flex-row p-6"
    >
      <div className="text-[#004aad] h-[30% !py-3 sm:!px-10 pt-4 sm:h-[100%] text-left flex flex-col  justify-center !text-4xl sm:text-6xl font-semibold px-2">
        <h3>About</h3>
        <h3>Us</h3>
      </div>
      <div className="text-[#004aad] h-[70%] flex flex-col sm:justify-center text-left pb-8 sm:w-[60%] text-xl px-6">
        <div className="!my-2">
          <h3 className="!my-4 !text-2xl font-semibold">Our Story</h3>
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
        </div>
        <div className="!my-2">
          <h3 className="!my-4 !text-2xl font-semibold">Who We Are</h3>
          <p className="pt-4 leading-6">
            Buy the River is organized by the same team behind HackTrent,
            Trent’s largest hackathon, and the ‘Building Bridges’ Business Gala,
            university’s biggest networking event. With the support of college
            principals, esteemed mentors, and leading faculty including the
            Chair of Business and Humanities, this event is poised to elevate
            the student experience and foster meaningful connections within the
            business community
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
