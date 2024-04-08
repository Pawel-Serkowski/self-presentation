import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Modal from "./Modal/Modal";
import ButtonBox from "./ButtonBox/ButtonBox";
import Button from "../Button/Button";
import "./techStack.scss";

import { data } from "./techstackData";

const stackData = data;

const variants = {
    initial: {
        x: -200,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.4,
        },
    },
};

const TechStack = () => {
    const [selectedId, setSelectedId] = useState(0);
    const ref = useRef(null);

    const inView = useInView(ref, { margin: "-100px" });

    return (
        <div className="techstack" ref={ref}>
            <motion.div className="title" variants={variants}>
                <h1>Tech Stack</h1>
                <hr />
            </motion.div>
            <motion.div className="wrapper" animate={inView && "animate"} initial="initial">
                <motion.div className="left-side" variants={variants}>
                    <motion.h1 variants={variants}>Tech Stack</motion.h1>
                    <ButtonBox setSelectedId={setSelectedId} selectedId={selectedId} stackData={stackData} inView={inView} />
                    <motion.div className="footer" variants={variants}>
                        <h2>Something of interest you?</h2>
                        <Button style="light" text="Contact me" id="contact" />
                    </motion.div>
                </motion.div>
                <Modal stackData={stackData} selectedId={selectedId} inView={inView} />
            </motion.div>
        </div>
    );
};

export default TechStack;
