import React from "react";
import BG from "../assets/home-bg.png";
import HomeLogo from "../assets/home-logo.png";
import ButtonBG from "../assets/button-bg.png";
import GoldenDog from "../assets/gold-dog.png";
import PinkDog from "../assets/pink-dog.png";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <img
        className="absolute top-[20%] hidden md:block lg:left-32"
        src={GoldenDog}
        alt=""
      />
      <img
        className="absolute hidden md:block right-0 lg:right-32 top-[20%]"
        src={PinkDog}
        alt=""
      />
      <div className="min-h-screen in-wrapper flex items-center justify-center relative z-10">
        <div className="max-w-[1024px] flex flex-col items-center justify-center gap-y-4 px-4">
          <img
            className="w-[250px] md:w-[350px] lg:w-[400px]"
            src={HomeLogo}
            alt=""
          />
          <h1 className="text-white text-center">
            A <span className="text-violet-500">METAVERSE SPACE </span>{" "}
            PLAY-TO-EARN GAME.
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Start with raising your own dogs, breeding, and training them to
            perform better in competitions and races.
          </p>

          <button
            className="py-3 w-[300px] font-bold h-[60px] px-6 bg-contain bg-no-repeat bg-center text-white"
            style={{ backgroundImage: `url(${ButtonBG})` }}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
