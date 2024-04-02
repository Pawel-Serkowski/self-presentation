import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div className="parallax" ref={ref}>
            <motion.h1 style={{ y: yText }}>My projects</motion.h1>
            <motion.div className="moutains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;
