import React from "react";
import BG from "../assets/home-bg.png";
import HomeLogo from "../assets/LogoHD.png";
import ButtonBG from "../assets/button-bg.png";
import GoldenDog from "../assets/gold-dog.png";
import PinkDog from "../assets/pink-dog.png";

import { motion } from "framer-motion";
import { FromLeft, FromRight, PopUp } from "./animation";
import Social from "./Social";
import "./custom.css";

const Hero = () => {
  return (
    <motion.div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${BG})` }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={FromLeft}>
        <img
          className="absolute top-[20%] hidden md:block lg:left-32"
          src={GoldenDog}
          alt=""
        />
      </motion.div>
      <motion.div variants={FromRight}>
        <img
          className="absolute hidden md:block right-0 lg:right-32 top-[20%]"
          src={PinkDog}
          alt=""
        />
      </motion.div>
      <div className="hidden md:block fixed right-0 top-[30%] mr-12">
        <Social vartically />
      </div>
      <motion.div className="min-h-screen in-wrapper flex items-center justify-center relative z-10">
        <motion.div className="max-w-[1024px] flex flex-col items-center justify-center gap-y-4 px-4">
          <motion.div variants={PopUp}>
            <img
              className="max-w-[170px] md:max-w-[200px] md:w-[350px] lg:w-[400px]"
              src={HomeLogo}
              alt=""
            />
          </motion.div>
          <h1 className="text-white text-center">
            A <span className="gradientTextAnimation">METAVERSE SPACE </span>{" "}
            PLAY AND EARN GAME.
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Start with raising your own dogs, breeding, and training them to
            perform better in competitions and races.
          </p>

          <motion.button
            variants={PopUp}
            className="py-3 w-[350px] font-bold h-[70px] px-6 bg-contain bg-no-repeat bg-center text-white"
            style={{ backgroundImage: `url(${ButtonBG})` }}
          >
            <a
              href="https://drive.google.com/drive/folders/1_0QSwc2Gl4VfefI1zvUBfyhhZhMXcWYX"
              target="_blank"
            >
              <span className="text-red-500">PLAY NOW</span> ALPHA TEST
            </a>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="container w-full h-[4px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"
        id="about"
      ></motion.div>
    </motion.div>
  );
};

export default Hero;
