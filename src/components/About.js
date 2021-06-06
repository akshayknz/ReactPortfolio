import React from "react";
import { motion } from "framer-motion";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};
const About = () => {
  return (
    <div>
      <h1>About US</h1>
      <p>About US page body contentYo baby</p>
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <motion.img
          variants={imageVariants}
          src="https://images.squarespace-cdn.com/content/5b475b2c50a54f54f9b4e1dc/1532639550193-UH2J0SYQU4AQVIWNAH5A/DSCF3338.jpg?content-type=image%2Fjpeg"
          alt="The Barbican"
        />
        <motion.div className="back" variants={backVariants}>
          bacj
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
