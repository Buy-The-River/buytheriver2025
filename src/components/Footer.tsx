import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=" flex flex-col sm:flex-row">
      <ul className="flex flex-row">
        <li className="text-4xl">
          <a href="https://www.instagram.com/buytherivertrent/" target="_blank">
            <FaInstagramSquare />
          </a>
        </li>
        <li className="text-4xl">
          <a
            href="https://www.linkedin.com/company/buy-the-river/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>

      <p>Made with 💖 in Peterborough, Ontario by the Buy The River team!</p>
    </div>
  );
}

export default Footer;
