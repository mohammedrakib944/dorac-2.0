import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings2 } from "./Settings";

import { motion } from "framer-motion";
import { FromLeftNormal, PopUp } from "./animation";

import dog1 from "../assets/collection/dog-black.png";
import dog2 from "../assets/collection/dog-blue.png";
import dog3 from "../assets/collection/dog-green.png";
import dog4 from "../assets/collection/dog-red.png";

const Collections = () => {
  return (
    <motion.div
      className="wrapper"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="md:grid grid-cols-5">
        <motion.div
          className="md:w-[90%] flex flex-col justify-center col-span-2"
          variants={FromLeftNormal}
        >
          <h2 className="title py-2 text-center md:text-left xl:pb-10">
            COLLECTIONS
          </h2>
          <p className="text-gray-300 para">
            Explore our first five project collections. Get your dog, player ID,
            usable, mintpas,s, or mystery box. Each of these collections plays a
            role in our game, so be sure to get one if you want to take full
            advantage of the offered services. More collections will be added
            over time together with game growth and project expansions, so be
            sure to check here from time to time. The key thing to keep in mind
            is that for now our collections are only tradable in our official
            marketplace.
          </p>
        </motion.div>
        <div className="col-span-3">
          <motion.div className="mt-10 max-w-[1080px] mx-auto" variants={PopUp}>
            <Slider {...settings2}>
              <div className="border-r">
                <img src={dog1} alt="" />
              </div>
              <div className="border-r">
                <img src={dog2} alt="" />
              </div>
              <div className="border-r">
                <img src={dog3} alt="" />
              </div>
              <div className="border-r">
                <img src={dog4} alt="" />
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
