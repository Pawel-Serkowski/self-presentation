import { motion } from "framer-motion";

import React from "react";
import Button from "./Button/Button";
import "./buttonBox.scss";

const ButtonBox = ({ setSelectedId, selectedId, stackData }) => {
  return (
    <motion.div
      className="buttonContainer"
      transition={{ staggerChildren: 0.3, duration: 0.3 }}
    >
      {stackData.map((button) => (
        <Button
          text={button.text}
          logo={button.logo}
          key={button.id}
          selectHandler={() => setSelectedId(button.id)}
          isSelected={selectedId === button.id}
        />
      ))}
    </motion.div>
  );
};

export default ButtonBox;
