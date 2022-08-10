import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

import logo from "../assets/logo.png";
import { NavLinks } from "./Navlinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 100 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] duration-300 z-[100] shadow-lg bg-[#130f14] backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100]"
      }
    >
      <div className=" container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <div>
          <a href="/#">
            <img
              src={logo}
              className={shadow ? "w-[50px]" : "w-[60px] md:w-[70px]"}
              alt=""
            />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-6">
            {NavLinks.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="c-link text-md text-gray-200 hover:text-sky-400 hover:border-b duration-300">
                  {data.text}
                </li>
              </a>
            ))}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#130c25] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>
                <img src={logo} className="w-[70px]" alt="" />
              </div>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavLinks.map((data) => (
                <a href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-100">
                    {data.text}
                  </li>
                </a>
              ))}
            </ul>
            <div>
              <p className="uppercase font-bold tracking-widest text-sky-400">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 max-w-[250px] text-gray-200">
                <div className="c-button">
                  <FaLinkedinIn />
                </div>
                <div className="c-button">
                  <FaGithub />{" "}
                </div>
                <div className="c-button">
                  <AiOutlineMail />{" "}
                </div>
                <div className="c-button">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
