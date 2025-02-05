import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import Logo_png from "../assets/react.svg";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { IoMenu } from "react-icons/io5";
import { Theme } from "@chakra-ui/react";

// find products in the navbar

function NavBar() {
  return (
    <div className="navbar flex flex-row justify-between items-center px-[5%] h-[5rem] bg-white sticky top-0 z-50 py-2 border-b-[1px] border-solid border-black">
      <div className="logo-div">
        <NavLink to="/">
          <img
            src={Logo_png}
            alt="logo"
            className=" max-h-[5rem] sm:max-w-[8rem] sm:max-h-[6.5rem] py-2"
          />
        </NavLink>
      </div>
      <div className="headings nav-heading bg-black">
        <div className="menu  bg-slate-200 ">
          {/* The whole menu component */}
          <MenuRoot>
            {/* Menu Trigger */}
            <MenuTrigger asChild className="w-10">
              <Theme appearance="light">
                <Button variant="outline" size="2xl">
                  <IoMenu className="text-xl" />
                </Button>
              </Theme>
            </MenuTrigger>
            {/* Menu Content */}
            <MenuContent>
              <Theme appearance="light">
                <MenuItem asChild value="Home" className="px-4 py-4 text-lg">
                  <NavLink to="/">Home</NavLink>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Find Products"
                  className="px-4 py-4 text-lg"
                >
                  <NavLink to="/">About Us</NavLink>
                </MenuItem>
                <MenuItem
                  asChild
                  value="What We Offer"
                  className="px-4 py-4 text-lg"
                >
                  <NavLink to="/">What We Offer</NavLink>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Sponsors"
                  className="px-4 py-4 text-lg"
                >
                  <NavLink to="/">Sponsors</NavLink>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Contact Us"
                  className="px-4 py-4 text-lg"
                >
                  <NavLink to="/">Contact Us</NavLink>
                </MenuItem>
                <MenuItem
                  asChild
                  value="Apply Now"
                  className="px-4 py-4 text-lg"
                >
                  <NavLink to="/">Apply Now</NavLink>
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
