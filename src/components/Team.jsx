import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "./Settings";

import React from "react";
import TeamBG from "../assets/bg-2.png";
import MembersCard from "./MembersCard";
import { Members } from "./Data";

const Team = () => {
  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  return (
    <div style={{ backgroundImage: `url(${TeamBG})` }}>
      <div className="wrapper" id="team">
        <h2 className="title w-full text-center">TEam members</h2>
        <div className="mt-10 max-w-[1080px] mx-auto">
          <Slider {...settings}>
            {Members.map((data) => (
              <MembersCard key={data.id} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
