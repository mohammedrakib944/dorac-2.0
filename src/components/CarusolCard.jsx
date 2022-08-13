import React, { useState } from "react";
import Doughnuts from "./Doughnuts";

const CarusolCard = ({ data, ChartData }) => {
  const { image, title, para } = data;
  return (
    <div className="lg:p-12 lg:mx-32">
      <div className="grid md:grid-cols-7 gap-6">
        <div className="md:col-span-4 flex flex-col justify-center">
          <h2 className="text-white">{title}</h2>
          <p className="para max-w-[720px] mt-4 leading-7">{para}</p>
        </div>
        <div className="md:col-span-3">
          {/* <img src={image} alt="" /> */}
          <Doughnuts />
        </div>
      </div>
    </div>
  );
};

export default CarusolCard;
