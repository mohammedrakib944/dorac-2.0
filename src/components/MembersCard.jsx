import React from "react";
import Man from "../assets/man.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

const MembersCard = ({ data }) => {
  const { dp, name, title, linkdin, twitter } = data;
  return (
    <div className="rounded-lg rounded-br-[30px] overflow-hidden min-w-[300px] mx-4 bg-violet-500/20 hover:bg-violet-800 duration-300">
      <img
        src={dp}
        className="w-full border-2 border-violet-800 rounded-lg"
        alt=""
      />
      <div className="text-gray-100 text-center ">
        <h3 className="mt-4 text-teal-500">{name}</h3>
        <p className="py-2">{title}</p>
        <div className="w-full text-[24px] flex gap-4 items-center justify-center pb-6">
          <a href={linkdin}>
            <AiOutlineTwitter />
          </a>
          <a href={twitter}>
            <GrLinkedinOption />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
