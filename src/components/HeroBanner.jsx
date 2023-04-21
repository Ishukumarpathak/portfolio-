import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import man from "../assets/photo.jpg";
import face from "../assets/face-icon.png"
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div>pishu1766@gmail.com</div>
          </div>
          <ul className="flex 2xl:text-[20px]">
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("about")}
            >
              About me
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("work")}
            >
              Work
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        <motion.div
          className="flex justify-center text-center mt-14 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[45px] md:text-[100px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
            I Am A Frontend
            <br className="invisible md:visible" />
            Developer
          </h1>
        </motion.div>
      

        <motion.div
          className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="font-light mb-4">
            👋 Hi, I Am <span className="font-semibold">Ishu Pathak 🙌</span>
          </div>
          <div className="max-w-[1000px]">
            I am a front-end developer with a Bachelor's degree in Information
            Technology and 1.5 years of experience in the field. My expertise
            lies in building and maintaining complex web applications using
            cutting-edge technologies. I am well-versed in React, having worked
            on several projects that required me to utilize this technology.
          </div>
        </motion.div>
       
        <motion.div
          className="hidden md:flex gap-8 relative z-10"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
         
          <div className="flex items-center gap-3">
            <div className="text-[80px] font-light">10+</div>
            <div className="leading-[22px]">
              SUCCESSFULLY
              <br />
              COMPLETED
              <br />
              PROJECTS
            </div>
          </div>
        
          <div className="flex items-center gap-3">
            <div className="text-[80px] font-light">1.5 +</div>
            <div className="leading-[22px]">
              YEARS OF
              <br />
              EXPERIENCE
            </div>
          </div>
         
        </motion.div>
       
        <motion.div
          className="w-[300px] md:w-[260px] 2xl:w-[475px] absolute bottom-0 left-[89%] -translate-x-1/2"
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={face} alt="" />

         
        </motion.div>
      
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
