import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import man from "../assets/photo.jpg"

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Frontend Developer</span>
          <span className="flex items-center gap-2">
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          I am a front-end developer with a Bachelor's degree in Information
          Technology and 1.5 years of experience in the field. My expertise lies
          in building and maintaining complex web applications using
          cutting-edge technologies. I am well-versed in React, having worked on
          several projects that required me to utilize this technology. I have a
          strong understanding of web technologies and keep myself updated with
          the latest developments in HTML, CSS, and Javascript ecosystems. My
          focus is always on building an extendable style library and arranging
          the code for maintainability and reuse.
        </Div>
        {/* <motion.div
          className="w-[300px] md:w-[260px] 2xl:w-[475px] absolute bottom-0 left-[89%] -translate-x-0 "
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={man} alt="" />

         
        </motion.div> */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
