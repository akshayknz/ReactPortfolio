import * as React from "react";
import { motion } from "framer-motion";

export const Example = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    height: "100px",
    width: "100px",
    display: "inlineBlock"
  };
  return (
    <motion.div
      style={mystyle}
      className="yooo"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.7, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};
