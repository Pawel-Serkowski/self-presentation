import { motion } from "framer-motion";
import "./aboutText.scss";

const AboutText = ({ file, variants, inView }) => {
  return (
    <motion.div
      initial="initial"
      animate={inView && "animate"}
      variants={variants}
      className="textContainer"
    >
      <motion.div className="title" variants={variants}>
        <h1>About me</h1>
        <hr />
      </motion.div>
      <motion.div className="aboutText" variants={variants}>
        <h2>But who I am?</h2>
        <p>
          In general, I’m a student, cab-scout troop leader,{" "}
          <span>programmer</span> and guitarist. Every day, I try to learn
          something new. May be it’s a new React feature or may be the Rubik’s
          cube algorithm. I invite you to see my <span>work.</span>
        </p>
        <p>
          I <span>dream</span> about becoming a full-stack developer, who can
          make an application from scratch through sketching project to
          developing process. I’d love to gain any experience I can and turn it
          into something beautiful.
        </p>
        <p>
          Now please play the video and hear something more{" "}
          <span>about me.</span>
        </p>
      </motion.div>
      <motion.div className="catContainer" variants={variants}>
        <img src={file} alt="cat" />
      </motion.div>
    </motion.div>
  );
};

export default AboutText;
