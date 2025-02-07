import { Link } from "react-scroll";
import { Button } from "./ui/button";
import Logo_png from "../assets/Logo.svg";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { IoMenu } from "react-icons/io5";
import { Theme } from "@chakra-ui/react";

// find products in the navbar

function NavBar() {
  return (
    <div className="bg-[#004aad] sticky top-0 z-50 w-full !py-2 border-b-2 border-white shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="logo-div !p-2 !px-3">
        <a href="/">
          <img src={Logo_png} alt="logo" className=" max-h-12 sm:max-h-16" />
        </a>
      </div>

      {/* Full Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-8 text-white text-lg !mx-4">
        <div className="flex gap-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="relative text-white transition-all duration-300 cursor-pointer 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
               after:h-[2px] after:bg-[#f8cf40] after:transition-all after:duration-300 
               hover:text-[#f8cf40]! hover:after:w-full !pb-0.5"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="relative text-white transition-all duration-300 cursor-pointer 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
               after:h-[2px] after:bg-[#f8cf40] after:transition-all after:duration-300 
               hover:text-[#f8cf40]! hover:after:w-full !pb-0.5"
          >
            About Us
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={500}
            className="relative text-white transition-all duration-300 cursor-pointer 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
               after:h-[2px] after:bg-[#f8cf40] after:transition-all after:duration-300 
               hover:text-[#f8cf40]! hover:after:w-full !pb-0.5"
          >
            What We Offer
          </Link>
          <Link
            to="sponsors"
            smooth={true}
            duration={500}
            className="relative text-white transition-all duration-300 cursor-pointer 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
               after:h-[2px] after:bg-[#f8cf40] after:transition-all after:duration-300 
               hover:text-[#f8cf40]! hover:after:w-full !pb-0.5"
          >
            Sponsors
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative text-white transition-all duration-300 cursor-pointer 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
               after:h-[2px] after:bg-[#f8cf40] after:transition-all after:duration-300 
               hover:text-[#f8cf40]! hover:after:w-full !pb-0.5"
          >
            Contact Us
          </Link>
        </div>

        <Button
          size="lg"
          onClick={() => (window.location.href = "/")}
          variant="solid"
          className="bg-black px-6 py-3 font-semibold text-lg border-0 rounded-lg transition-all duration-300 hover:bg-[#f8cf40]! hover:text-black!"
        >
          Apply Now
        </Button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="headings nav-heading bg-black md:hidden">
        <div className="menu  bg-[#004aad] ">
          {/* The whole menu component */}
          <MenuRoot>
            {/* Menu Trigger */}
            <MenuTrigger
              asChild
              className="!bg-[#004aad] !p-0 !m-0 !border-none"
            >
              <Button
                variant="outline"
                size="2xl"
                className="!bg-[#004aad] !border-none hover:!bg-[#003b8b]"
              >
                <IoMenu className="text-xl  text-white" />
              </Button>
            </MenuTrigger>
            {/* Menu Content */}
            <MenuContent>
              <Theme appearance="light">
                <MenuItem asChild value="Home" className="px-4 py-4 text-lg">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#FFDE59] cursor-pointer"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Find Products"
                  className="px-4 py-4 text-lg"
                >
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#FFDE59] cursor-pointer"
                  >
                    About Us
                  </Link>
                </MenuItem>
                <MenuItem
                  asChild
                  value="What We Offer"
                  className="px-4 py-4 text-lg"
                >
                  <Link
                    to="offer"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#FFDE59] cursor-pointer"
                  >
                    What We Offer
                  </Link>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Sponsors"
                  className="px-4 py-4 text-lg"
                >
                  <Link
                    to="sponsors"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#FFDE59] cursor-pointer"
                  >
                    Sponsors
                  </Link>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Contact Us"
                  className="px-4 py-4 text-lg"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#FFDE59] cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Apply Now"
                  className="px-4 py-4 text-lg"
                >
                  <a href="/" className="hover:text-[#FFDE59]">
                    Apply Now
                  </a>
                </MenuItem>
              </Theme>
            </MenuContent>
          </MenuRoot>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
