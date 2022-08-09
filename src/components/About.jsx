import RedDog from "../assets/red-dog.png";
import AboutBG from "../assets/bg-2.png";
import AboutSide from "../assets/about-side.png";

import { motion } from "framer-motion";
import { FromRightNormal, PopUp } from "./animation";

const About = () => {
  return (
    <motion.div
      className="wrapper mt-6 lg:mt-0 overflow-hidden"
      style={{ backgroundImage: `url(${AboutBG})` }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div className="grid md:grid-cols-7 gap-6">
        <motion.div variants={PopUp} className="md:col-span-3">
          <img src={AboutSide} alt="" />
        </motion.div>
        <motion.div
          variants={FromRightNormal}
          className="md:col-span-4 flex flex-col justify-center xl:pl-6"
        >
          <h2 className="title text-center md:text-left" id="#about">
            About the game
          </h2>
          <p className="para max-w-[720px] mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            repudiandae eligendi tempora dolores consequuntur. Soluta temporibus
            odit dolore, quae expedita alias voluptatem incidunt modi ullam et
            culpa architecto ipsam ipsum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates repudiandae eligendi tempora dolores
            consequuntur. Soluta temporibus odit dolore, quae expedita alias
            voluptatem incidunt modi ullam et culpa architecto ipsam ipsum?
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
