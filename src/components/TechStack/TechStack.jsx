import { useState } from "react";

import Modal from "./Modal/Modal";
import ButtonBox from "./ButtonBox/ButtonBox";
import Button from "../Button/Button";
import "./techStack.scss";

import pythonLogo from "/img/python.png";
import jsLogo from "/img/js.png";
import otherLogo from "/img/Other.png";
import htmlLogo from "/img/html.png";
import reactLogo from "/img/react.png";
import cssLogo from "/img/css.png";

const stackData = [
  {
    id: 0,
    text: "Other",
    logo: otherLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
      "Basic management of SQL and NoSQL like MongoDB or SQLite",
      "Basic backend development (node.js & express.js",
      "Basic level of using Figma",
      "Git & GitHub knowledge",
      "Team and teamwork management",
    ],
  },
  {
    id: 1,
    text: "HTML",
    logo: htmlLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
      "Basic management of SQL and NoSQL like MongoDB or SQLite",
      "Basic backend development (node.js & express.js",
      "Basic level of using Figma",
      "Git & GitHub knowledge",
      "Team and teamwork management",
    ],
  },
  {
    id: 2,
    text: "CSS",
    logo: cssLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
      "Basic management of SQL and NoSQL like MongoDB or SQLite",
      "Basic backend development (node.js & express.js",
      "Basic level of using Figma",
      "Git & GitHub knowledge",
      "Team and teamwork management",
    ],
  },
  {
    id: 3,
    text: "React",
    logo: reactLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
      "Basic management of SQL and NoSQL like MongoDB or SQLite",
      "Basic backend development (node.js & express.js",
      "Basic level of using Figma",
      "Git & GitHub knowledge",
      "Team and teamwork management",
    ],
  },
  {
    id: 4,
    text: "JS",
    logo: jsLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
    ],
  },
  {
    id: 5,
    text: "Python",
    logo: pythonLogo,
    content: [
      "Basic knowledge about programming in C++, object and classes are also included",
      "Basic management of SQL and NoSQL like MongoDB or SQLite",
      "Basic backend development (node.js & express.js",
      "Basic level of using Figma",
      "Git & GitHub knowledge",
      "Team and teamwork management",
    ],
  },
];

const TechStack = () => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="techstack">
      <div className="wrapper">
        <div className="title">
          <h1>About me</h1>
          <hr />
        </div>
        <div className="left-side">
          <h2>Tech Stack</h2>
          <ButtonBox
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            stackData={stackData}
          />
          <div className="footer">
            <h2>Something interested you?</h2>
            <Button style="light" text="Contact me" id="contact" />
          </div>
        </div>
        <Modal stackData={stackData} selectedId={selectedId} />
      </div>
    </div>
  );
};

export default TechStack;
