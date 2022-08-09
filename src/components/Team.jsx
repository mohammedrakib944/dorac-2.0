import React from "react";
import TeamBG from "../assets/bg-2.png";
import MembersCard from "./MembersCard";
import { Members } from "./Data";
import dp1 from "../assets/man.jpg";
import dp2 from "../assets/man2.jpg";

import { motion } from "framer-motion";

import { PopUp, FromBottom } from "./animation";

const Team = () => {
  return (
    <motion.div style={{ backgroundImage: `url(${TeamBG})` }}>
      <div className="wrapper" id="team">
        <h2 className="title w-full text-center">TEam members</h2>
        <motion.div
          className="max-w-[1080px] mx-auto mt-10  grid md:grid-cols-2 xl:grid-cols-3 gap-y-10"
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {Members.map((data) => (
            <motion.div variants={PopUp}>
              <MembersCard key={data.id} data={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mb-[100px]" id="team">
        <h2 className="title w-full text-center">ADVISORS</h2>
        <motion.div
          className="max-w-[700px] mx-auto flex flex-col md:flex-row gap-6 mt-10"
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={FromBottom}>
            <MembersCard
              data={{
                dp: dp1,
                name: "Whatever",
                title: "Cofounder of Nothing",
              }}
            />
          </motion.div>
          <motion.div variants={FromBottom}>
            <MembersCard
              data={{
                dp: dp2,
                name: "Whatever",
                title: "Cofounder of Nothing",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team;
