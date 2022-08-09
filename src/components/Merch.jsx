import React from "react";
import comming from "../assets/comming-soon.png";

import { motion } from "framer-motion";
import { Rotate } from "./animation";

const Merch = () => {
  return (
    <motion.div
      className="max-w-full flex items-center justify-center pt-20"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div className="max-w-[700px]">
        <h2 className="title mt-[40px] w-full text-center">MERCH</h2>
        <motion.div variants={Rotate}>
          <img src={comming} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Merch;
