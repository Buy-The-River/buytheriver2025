import { useState, useEffect } from "react";
import CaseRelease from "../../assets/BuyTheRiver2025_case_release.pdf";
import { Button } from "../../components/ui/button"; // Ensure you are using the correct UI component for buttons
import { FaFilePdf, FaFileExcel } from "react-icons/fa6";

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
                 !p-20 text-center flex flex-col items-center justify-center transition-colors duration-300"
    >
      <h3 className="!my-6 !text-4xl md:!text-6xl font-semibold text-center">
        The Case
      </h3>

      {/* PDF Toggle Button - Only Visible on Desktop */}
      {!isMobile && (
        <div className="flex justify-center mt-6">
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 !m-5 text-center 
                       text-base font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white"
            onClick={togglePdf}
          >
            {showPdf ? "Hide PDF" : "Show PDF"}
          </Button>
        </div>
      )}

      {/* PDF Embed - Only Visible on Desktop */}
      {!isMobile && showPdf && (
        <div className="w-full flex justify-center mt-6">
          <iframe
            src={CaseRelease}
            width="100%"
            height="600px"
            title="PDF Viewer"
            className="shadow-lg rounded-lg max-w-screen-lg"
          ></iframe>
        </div>
      )}

      {/* Always Visible Download Buttons */}
      <div className="md:!mt-6 flex flex-col md:flex-row md:gap-6 items-center">
        {/* PDF Download Button */}
        <a href={CaseRelease} download className="m-3">
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 text-center 
                       text-base font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white"
          >
            <FaFilePdf className="mr-2" />
            Download Case PDF
          </Button>
        </a>

        {/* Excel Download Button */}
        <a href="/case_figures_BTR2025.xlsx" download className="m-3">
          <Button
            size="lg"
            variant="solid"
            className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 text-center 
                       text-base font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white"
          >
            <FaFileExcel className="mr-2" />
            Download Excel File
          </Button>
        </a>
      </div>

      <h3 className="!my-6 !text-4xl md:!text-6xl font-semibold text-center">
        Guides, Hints & Rubric
      </h3>

      <a href="/Guides, Hints & The Rubric.xlsx" download className="m-3">
        <Button
          size="lg"
          variant="solid"
          className="!bg-[#FFDE59] !text-[#004aad] !px-6 !py-3 text-center 
                     text-base font-semibold border-0 rounded-lg transition-all duration-300 hover:bg-white"
        >
          <FaFileExcel className="mr-2" />
          Download Excel File
        </Button>
      </a>
    </div>
  );
};

export default CaseSection;
