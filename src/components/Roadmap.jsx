import React from "react";
import RoadmapBG from "../assets/bg-3.png";
import blueDog from "../assets/blue-dog.png";
import RoadCard from "./RoadCard";
import { RoadMap } from "./Data";

const Roadmap = () => {
  return (
    <div style={{ backgroundImage: `url(${RoadmapBG})` }}>
      <div className="wrapper" id="roadmap">
        <div className=" w-full text-center">
          <h2 className="title">Roadmap</h2>
          <p className="text-gray-300 text-xl font-light mt-4 mb-10">
            OUR JOURNEY
          </p>
        </div>

        {/* main */}
        <div className="grid md:grid-cols-7 md:gap-12">
          <div className="py-6 col-span-3 h-full md:flex items-center justify-end">
            <img
              src={blueDog}
              className="md:max-w-[400px]  md:float-right md:pr-12"
              alt=""
            />
          </div>
          {/* xl:max-h-[600px] overflow-y-auto my-4 scrollbar-hide */}
          <div className="text-white relative  col-span-4 md:pl-4">
            <div className="w-[3px] md:w-[4px] absolute h-[100%] bg-gradient-to-t from-transparent via-violet-500 to-transparent ml-[23px]"></div>
            {RoadMap.map((data) => (
              <RoadCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
