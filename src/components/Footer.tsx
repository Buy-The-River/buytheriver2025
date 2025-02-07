import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#004aad] !text-white flex flex-col justify-center items-center !py-10 !pb-15">
      <ul className="flex gap-3.5 flex-row !py-6">
        <li className="!text-3xl">
          <a
            href="https://www.linkedin.com/company/buy-the-river/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="!text-3xl">
          <a href="https://www.instagram.com/buytherivertrent/" target="_blank">
            <FaInstagram />
          </a>
        </li>
      </ul>

      <p className="text-center">
        Made with 💖 in Peterborough, Ontario by the Buy The River Team
      </p>
    </div>
  );
}

export default Footer;
