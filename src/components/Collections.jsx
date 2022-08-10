import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings2 } from "./Settings";

import Connection1 from "../assets/collection-1.png";
import Connection2 from "../assets/collection-2.png";

import { motion } from "framer-motion";
import { FromLeftNormal, PopUp } from "./animation";

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
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit.
          </p>
        </motion.div>
        <div className="col-span-3">
          <motion.div className="mt-10 max-w-[1080px] mx-auto" variants={PopUp}>
            <Slider {...settings2}>
              <div>
                <img src={Connection1} alt="" />
              </div>
              <div>
                <img src={Connection2} alt="" />
              </div>
              <div>
                <img src={Connection1} alt="" />
              </div>
              <div>
                <img src={Connection2} alt="" />
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
