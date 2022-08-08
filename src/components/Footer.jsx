import React from "react";
import Logo from "../assets/logo.png";
import { NavLinks } from "./Navlinks";

const Footer = () => {
  return (
    <div className="w-full bg-violet-800 py-12">
      <img src={Logo} className="mx-auto" alt="" />
      <ul className="max-w-[1080px] text-center mx-auto mt-6 md:flex md:gap-x-3 lg:gap-x-6 items-center justify-center">
        {NavLinks.map((data) => (
          <a href={data.url} key={data.id}>
            <li className="py-2 md:py-0 c-link text-md text-gray-200 hover:text-sky-400 duration-300">
              {data.text}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
