import "./modal.scss";
import { motion } from "framer-motion";

const Modal = ({ stackData, selectedId, inView }) => {
    const actualTech = stackData.filter((tech) => tech.id === selectedId)[0];

    const variantsModal = {
        animate: {
            height: "auto",
            transition: {
                duration: 1,
                // staggerChildren: 0.2,
            },
        },
        initial: {
            height: 0,
        },
    };

    const variantsText = {
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.4,
            },
        },
        initial: {
            opacity: 0,
        },
    };

    return (
        <motion.div className="modal" variants={variantsModal} animate={inView && "animate"} initial="initial">
            <motion.div variants={variantsText} className="bodyTitle">
                <h3>{actualTech.text}</h3>
                <hr />
            </motion.div>

            <motion.div className="textContainer" variants={variantsText}>
                <motion.ul>
                    {actualTech.content.map((tense) => (
                        <motion.li key={tense} variants={variantsText}>
                            {tense}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
