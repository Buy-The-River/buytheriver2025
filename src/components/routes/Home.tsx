import NavBar from "../NavBar";
import Footer from "../Footer";
import LandingSection from "../sections/Landing";
import AboutSection from "../sections/About";
import OfferSection from "../sections/Offer";
import SponsorsSection from "../sections/Sponsors";
import ContactSection from "../sections/Contact";
import Map from "../sections/Map";

const Home = () => {
  return (
    <>
      <NavBar />
      <LandingSection />
      <AboutSection />
      <OfferSection />
      <SponsorsSection />
      <ContactSection />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
