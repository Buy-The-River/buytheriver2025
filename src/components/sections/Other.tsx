const OtherSection = () => {
  return (
    <>
      <div
        id="other"
        className={`sponsor-section min-h-[50vh] text-black !text-white !bg-[#004aad] !leading-18
              !p-10 text-left !text-6xl transition-colors duration-300`}
      >
        <div className="!border-t-2 !border-b-2 !border-white !py-8 md:grid md:grid-cols-12 md:gap-6 items-start">
          <h3 className="text-lg font-semibold md:col-span-3">The Case</h3>
          <div className="space-y-3 md:col-span-9">
            <p className="!text-base !my-2">
              You stepped into your office on the 30th floor one sunny morning
              in March 2023. You were excited but also nervous about tackling
              your latest deal as an investment banking analyst.
            </p>
            <p className="!text-base !my-2">
              As an equity capital markets analyst covering the technology
              sector, you had recently been assigned to work on one of the
              <b className="!font-bold">
                {" "}
                hottest initial public offerings (IPOs){" "}
              </b>
              of the year:{" "}
              <b className="!font-bold"> Instacart's planned IPO </b>, set to
              make it the first significant venture-backed tech company to hit
              the US public market since December 2021.
            </p>
            <p className="!text-base !my-2">
              With the company set to go public in September,
              <b className="!font-bold">
                your task was to determine the price range using the DCF method
                and comparable analysis to put on the cover of the prospectus
                that would be used to market the IPO to investors.
              </b>
              Your main focus was on building a financial model to assess the
              company's current financial situation and incorporating senior
              bankers' insights to determine a reasonable share range for
              Instacart's IPO.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSection;
