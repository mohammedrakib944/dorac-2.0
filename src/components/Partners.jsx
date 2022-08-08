import React from "react";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";

const Partners = () => {
  return (
    <div className="py-[30px] border-t-2 border-violet-600/50">
      <h2 className="title w-full text-center mt-12">Partners</h2>
      <div
        className="max-w-[1080px] mx-auto py-[80px] grid md:grid-cols-3 xl:grid-cols-4 gap-10"
        id="partners"
      >
        <a href="#" className="flex justify-center">
          <img src={P1} alt="" />
        </a>
        <a href="#" className="flex justify-center">
          <img src={P2} alt="" />
        </a>
        <a href="#" className="flex justify-center">
          <img src={P3} alt="" />
        </a>
        <a href="#" className="flex justify-center">
          <img src={P4} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Partners;
