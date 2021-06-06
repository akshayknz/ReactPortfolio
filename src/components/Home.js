import React from "react";
import { motion } from "framer-motion";
import { Example } from "./Example";
const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page body content</p>
      <motion.div animate={{ opacity: 1 }} />
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
      />
      <Example key={3} />
    </div>
  );
};

export default home;
