import { motion } from "framer-motion";
import "./button.scss";

const Button = ({ text, logo, isSelected, selectHandler }) => {
  return (
    <motion.button
      className={`stackButton ${isSelected ? "selected" : ""} `}
      onClick={selectHandler}
    >
      <div className="logo">
        <img src={logo} alt={text} />
      </div>
      <h3>{text}</h3>
    </motion.button>
  );
};

export default Button;
