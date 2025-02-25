import { useState, useEffect } from "react";
import CaseRelease from "../../assets/BuyTheRiver2025_case_release.pdf";
import { Button } from "../../components/ui/button"; // Ensure you are using the correct UI component for buttons
import { FaFilePdf } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa6";

const CaseSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPdf, setShowPdf] = useState(false); // State to toggle PDF visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust based on your breakpoint needs
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePdf = () => {
    setShowPdf((prevState) => !prevState); // Toggle PDF visibility
  };

  return (
    <div
      id="case"
      className="sponsor-section min-h-[50vh] text-black !text-white !bg-[#004aad] !leading-18
                 !p-20 text-center !text-6xl transition-colors duration-300"
    >
      <h3 className="!m-2 text-lg font-semibold md:col-span-3">The Case</h3>

      {/* PDF Toggle Button - Only Visible on Desktop */}
      {!isMobile && (
        <div className="flex justify-center mt-6">
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 lg:py-10! !m-5 text-center text-base sm:text-lg! md:text-xl! lg:text-2xl! xl:text-3xl! 2xl:text-4xl! font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
            onClick={togglePdf}
          >
            {showPdf ? "Hide PDF" : "Show PDF"}
          </Button>
        </div>
      )}

      {/* PDF Embed - Only Visible on Desktop */}
      {!isMobile && showPdf && (
        <div className="flex justify-center mt-6">
          <iframe
            src={CaseRelease}
            width="80%"
            height="600px"
            title="PDF Viewer"
            className="shadow-lg rounded-lg"
          ></iframe>
        </div>
      )}

      {/* Always Visible Download Buttons (Side by Side on Desktop, Stacked on Mobile) */}
      <div
        className={`mt-6 flex flex-col ${
          isMobile ? "gap-2" : "md:grid md:grid-cols-2 md:gap-4"
        }`}
      >
        {/* PDF Download Button */}
        <a href={CaseRelease} download>
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 lg:py-10! !m-5 text-center text-base sm:text-lg! md:text-xl! lg:text-2xl! xl:text-3xl! 2xl:text-4xl! font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
          >
            <FaFilePdf />
            Download Case PDF
          </Button>
        </a>

        {/* Excel Download Button */}
        <a href="/case_figures_BTR2025.xlsx" download>
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 lg:py-10! !m-5 text-center text-base sm:text-lg! md:text-xl! lg:text-2xl! xl:text-3xl! 2xl:text-4xl! font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white! !text-sm"
          >
            <FaFileExcel />
            Download Excel File
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CaseSection;
