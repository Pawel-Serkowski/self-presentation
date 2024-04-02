import { motion } from "framer-motion";
import "./navbar.scss";

const variants = {
    initial: {
        x: 0,
        y: -50,
        opacity: 0.6,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.ul variants={variants} initial="initial" animate="animate">
                <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href="#about">About me</a>
                </motion.li>
                <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <a href="#parallax">My projects</a>
                </motion.li>
                <motion.li variants={variants}>
                    <motion.a href="#contact" className="btn" whileHover={{ backgroundColor: "#ce550e" }}>
                        Contact me
                    </motion.a>
                </motion.li>
            </motion.ul>
        </nav>
    );
};

export default Navbar;
