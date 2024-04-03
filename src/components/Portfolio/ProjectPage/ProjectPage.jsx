import Button from "../../Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import "./projectPage.scss";
import { useRef } from "react";

const ProjectPage = ({ img, title, desc, buttonText, link }) => {
    const imgRef = useRef();
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start start", "end end"],
    });

    const yImgPosition = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yTextPosition = useTransform(scrollYProgress, [0, 1], [-500, 500]);

    return (
        <section className="project-page" ref={ref}>
            <div className="wrapper">
                <motion.div className="imgContainer" ref={imgRef} style={{ y: yImgPosition }}>
                    <img src={img} alt={title} />
                </motion.div>

                <motion.div className="textContainer" style={{ y: yTextPosition }}>
                    <h1>{title}</h1>
                    {desc.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                    <Button style={"main"} text={buttonText} id={link} link={1} />
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectPage;
