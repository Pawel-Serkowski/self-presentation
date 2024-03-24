import "./about.scss";

import CatImg from "/img/Cat.png";
import mp4File from "/video/Demo.mp4";

const About = () => {
    return (
        <div className="about">
            <div className="circle circle-big"></div>
            <div className="wrapper">
                <div className="videoContainer"></div>
                <div className="textContainer">
                    <div className="title">
                        <h1>About me</h1>
                        <hr />
                    </div>
                    <div className="aboutText">
                        <h2>But who I am?</h2>
                        <p>
                            In general, I’m a student, cab-scout troop leader, <span>programmer</span> and guitarist. Every day, I try to
                            learn something new. May be it’s a new React feature or may be the Rubik’s cube algorithm. I invite you to see
                            my <span>work.</span>
                        </p>
                        <p>
                            I <span>dream</span> about becoming a full-stack developer, who can make an application from scratch through
                            sketching project to developing process. I’d love to gain any experience I can and turn it into something
                            beautiful.
                        </p>
                        <p>
                            Now please play the video and hear something more <span>about me.</span>
                        </p>
                    </div>
                    <div className="catContainer">
                        <img src={CatImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
