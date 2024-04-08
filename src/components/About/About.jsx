import { motion, useInView } from "framer-motion";

import AboutText from "./AboutText/AboutText";
import Video from "./Video/Video";
import "./about.scss";

import CatImg from "/img/Cat.png";
import mp4File from "/video/autoprezentacja.mp4";
import { useRef } from "react";

const variantsRight = {
    initial: {
        x: 500,
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
const variantsLeft = {
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

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="about" ref={ref}>
            <div className="circle circle-big" />
            <div className="wrapper">
                <Video file={mp4File} variants={variantsLeft} inView={inView} />
                <AboutText file={CatImg} variants={variantsRight} inView={inView} />
                <motion.div className="title" variants={variantsLeft}>
                    <h1>About me</h1>
                    <hr />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
