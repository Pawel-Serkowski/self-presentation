import ProjectPage from "./ProjectPage/ProjectPage";
import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";

import { projectData } from "./projects";
import { useRef } from "react";

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref}>
            <div className="statusBar">
                <h4>Featured Works</h4>
                <motion.div style={{ scaleX }} className="progress"></motion.div>
            </div>

            {projectData.map((project) => (
                <ProjectPage
                    key={project.title}
                    title={project.title}
                    desc={project.desc}
                    img={project.img}
                    link={project.link}
                    buttonText={project.buttonText}
                />
            ))}
        </div>
    );
};

export default Portfolio;
