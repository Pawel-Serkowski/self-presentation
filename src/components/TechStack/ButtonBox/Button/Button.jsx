import { motion } from "framer-motion";
import "./button.scss";

const Button = ({ text, logo, isSelected, selectHandler, _id, inView }) => {
    const variants = {
        animate: {
            opacity: 0.6,
            y: 0,
            transition: {
                duration: 0.2,
                delay: _id * 0.3 + 1,
            },
        },
        initial: {
            opacity: 0,
            y: !isSelected ? -25 : 0,
        },
    };

    return (
        <motion.button
            className={`stackButton ${isSelected ? "selected" : ""} `}
            onClick={selectHandler}
            variants={variants}
            animate={inView && "animate"}
            initial="initial"
        >
            <div className="logo">
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
        </motion.button>
    );
};

export default Button;
