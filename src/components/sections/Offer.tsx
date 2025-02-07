import Logo from "../../assets/Logo.svg";

const OfferSection = () => {
  return (
    <div
      id="offer"
      className="offer-section w-full grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 text-center"
    >
      {/* Row 1 */}
      <div className="h-[17em] bg-[#004aad] !text-white font-semibold flex items-center justify-center">
        What We Offer
      </div>
      <div className="h-[17em] bg-white !text-[#004aad] font-semibold flex items-center justify-center">
        Trent University’s first-of-its-kind finance case competition
      </div>
      <div className="h-[17em] bg-[#004aad] !text-white font-semibold flex items-center justify-center">
        Bringing Together 100+ Students
      </div>

      {/* Row 2 */}
      <div className="h-[17em] bg-white !text-[#004aad] font-semibold flex items-center justify-center">
        20+ Industry Professionals
      </div>
      <div className="h-[17em] bg-[#004aad] flex items-center justify-center">
        <img
          src={Logo}
          alt="Buy the River Whale Logo"
          className="h-10 w-auto em:h-16"
        />
      </div>
      <div className="h-[17em] bg-white !text-[#004aad] font-semibold flex items-center justify-center">
        Free In-Person Event & Exciting Prizes
      </div>
    </div>
  );
};

export default OfferSection;
