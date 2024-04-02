import "./form.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Form = () => {
    const refName = useRef();
    const refEmail = useRef();
    const refContent = useRef();
    const refValidate = useRef();
    const form = useRef();

    const [send, setSend] = useState("");

    const sendEmail = async (e) => {
        if (refValidate.current.value) return;
        e.preventDefault();

        emailjs.sendForm("service_k2hblm2", "template_0cboht7", form.current, { publicKey: "cFu3Yzi-MDKAr_FQd" }).then(
            (result) => {
                console.log("SUCCESS!", result.text);
                setSend("true");
            },
            (error) => {
                console.log("FAILED...", error.text);
                setSend("false");
            }
        );
    };

    return (
        <form onSubmit={(e) => sendEmail(e)} className="contactForm" ref={form}>
            <input type="text" name="name" placeholder="Name" ref={refName} required />
            <input type="email" name="email" placeholder="Email" ref={refEmail} required />
            <input type="text" name="gender" placeholder="Gender" style={{ display: "none" }} ref={refValidate} required />
            <textarea type="email" name="email_content" placeholder="email" ref={refContent} />
            <div className={`send ${send}`}>
                {send === "true" ? <>Twoja wiadomość została wysłana</> : send === "false" ? <>Twoja wiadomość nie została wysłana</> : ""}
            </div>
            <motion.input className="submit" type="submit" value="Send!" />
        </form>
    );
};

export default Form;
