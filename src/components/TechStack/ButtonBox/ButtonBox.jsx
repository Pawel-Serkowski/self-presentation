import { motion } from "framer-motion";

import React from "react";
import Button from "./Button/Button";
import "./buttonBox.scss";

const ButtonBox = ({ setSelectedId, selectedId, stackData, inView }) => {
    return (
        <div className="buttonContainer">
            {stackData.map((button) => (
                <Button
                    text={button.text}
                    logo={button.logo}
                    key={button.id}
                    selectHandler={() => setSelectedId(button.id)}
                    isSelected={selectedId === button.id}
                    _id={button.id}
                    inView={inView}
                />
            ))}
        </div>
    );
};

export default ButtonBox;
