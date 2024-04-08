import Form from "./Form/Form";

import catImg from "/img/Cat.png";
import "./contact.scss";

function Contact() {
    return (
        <div className="contact">
            <div className="wrapper">
                <h1>Contact me</h1>
                <div className="container">
                    <div className="textContainer">
                        <p>
                            I hope you’ve enjoyed my self-presentation and gained some perspective on me. If you have any more questions
                            about my projects or if you are curious about the process of making this website, <span>contact me!</span>
                        </p>

                        <div className="imgContainer">
                            <img src={catImg} alt="Cat" />
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Contact;
