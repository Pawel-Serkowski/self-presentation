import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Button from "../Button/Button";
import "./home.scss";

const variants = {
    initial: {
        x: -600,
        opacity: 0.6,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.3,
            staggerChildren: 0.4,
        },
    },
};

const Home = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="home" ref={ref}>
            <div className="wrapper">
                <motion.div className="textContainer" variants={variants} animate="animate" initial="initial">
                    <motion.h1 variants={variants}>Hi, I’m Paweł</motion.h1>
                    <motion.p variants={variants}>
                        I am an 18-year-old and I dream of becoming <br />a <span>full-stack</span> developer. To make it come true, <br />{" "}
                        I invite you into my
                        <span> world.</span>
                    </motion.p>
                    <motion.div className="buttonContainer" variants={variants}>
                        <Button style={"main"} text={"Read about me"} id="about" />
                        <Button style={"dark"} text={"See my projects"} id="projects" />
                    </motion.div>
                </motion.div>
                <motion.div className="svgContainer">
                    <svg width="574" height="807" viewBox="0 0 574 807" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 70 }}
                            fill="none"
                            d="M331.874 187.337L326.112 209.519L313.258 226.821L296.859 238.8L271.152 244.123H265.39L255.196 238.8L242.785 232.589L238.353 226.821L231.705 219.834M331.874 187.337L334.977 176.69M331.874 187.337V201.534L330.101 209.519V222.828L331.184 232.589M334.977 176.69L341.182 184.675L351.376 176.69L355.808 162.937V146.078V132.769L347.83 129.22M334.977 176.69L336.306 167.151M209.987 176.69L215.818 193.104M209.987 176.69L205.111 170.479L208.214 166.486L209.987 169.813M209.987 176.69V169.813M347.83 129.22L337.636 138.98L336.28 154.064M347.83 129.22L355.808 117.242L357.581 105.263L365.116 98.1649C364.377 96.5382 362.368 93.2848 360.24 93.2848C358.113 93.2848 356.399 87.9611 355.808 85.2993L362.457 74.2082L351.376 67.9972L347.83 60.0117L341.182 50.6952L343.841 40.935L337.636 30.7313H313.258L305.724 16.5347H278.244L251.65 18.7529M336.28 154.064L337.636 157.613L336.306 167.151M336.28 154.064L331.874 142.529L328.771 126.558L323.009 107.925L309.269 95.5031L292.427 101.714L281.789 98.1649L268.936 104.376L258.742 111.031L246.331 101.714H255.196L258.742 95.5031V87.5175L251.65 81.7501L238.353 85.2993L226.829 91.0666L219.738 104.376L217.078 119.46L214.419 126.558L212.706 134.1M215.818 193.104L217.078 196.654C218.851 199.463 222.397 205.526 222.397 207.301C222.397 209.076 227.125 214.843 229.489 217.505L231.705 219.834M215.818 193.104H209.987V187.337L208.214 183.788L203.338 176.69V168.704L199.792 162.937V157.613M199.792 157.613H208.214M199.792 157.613L197.133 155.395V154.064L183.393 142.529L187.825 129.22C183.393 123.896 174.617 112.805 174.972 111.031C175.415 108.812 165.664 91.0666 165.664 87.5175C165.664 84.6782 163.3 77.4616 162.118 74.2082L168.323 56.9062L193.144 40.935L197.133 27.6258L222.397 20.9711V5L251.65 18.7529M251.65 18.7529L255.196 30.7313L249.877 40.935L242.785 48.9206M244.558 191.33L258.742 187.337L266.276 189.555L274.254 187.337L295.086 191.773L287.995 199.759L278.244 203.752H265.39H255.196L251.65 199.759L242.785 193.104M263.174 138.98L259.654 150.958L252.562 162.493L251.65 171.81H268.936M336.28 245.454L331.874 238.8L331.184 232.589M336.28 245.454V247.672L319.02 259.207L303.064 269.411L285.778 280.946L271.152 293.811L263.174 296.473L260.958 298.026M336.28 245.454L338.522 238.8L346.5 241.905L331.184 232.589M231.705 219.834V228.152L233.034 238.8L234.807 247.672C235.989 250.63 238.619 256.811 239.683 257.876C241.013 259.207 239.683 264.974 239.683 266.305C239.683 267.37 239.683 270.298 239.683 271.629V276.066L242.785 279.171L244.558 284.495L251.65 289.375L255.196 293.811L258.742 299.579L260.958 298.026M275.584 91.0666L285.778 81.7501L292.427 83.0811L291.54 74.2082L278.244 70.2154L263.174 58.2371L260.958 64.4481L239.683 67.9972L217.078 74.2082L214.419 85.2993L215.818 98.1649L208.214 107.925L205.998 126.558L209.987 131.882L212.706 134.1M212.706 134.1L209.987 146.078V162.937V169.813M338.522 166.486L341.182 162.937V156.282L342.955 150.958H347.83L350.046 154.064L348.717 161.162L336.306 167.151M348.717 241.905L355.808 257.876L359.797 266.305L358.689 270.52M260.958 298.026L268.936 303.128L271.152 308.895H278.244L285.778 315.106L295.086 329.746L300.405 335.07H305.724L313.258 323.979L319.02 315.106L330.101 305.346L336.306 296.473L348.717 286.713L357.581 274.735L358.689 270.52M251.65 298.026L244.558 299.579L239.683 305.346L231.705 317.768L222.397 323.979L212.646 331.964L208.214 326.641L212.646 317.768L215.818 305.346L221.511 291.149L222.397 284.495L225.943 276.066M225.943 276.066V266.305L229.489 259.207L234.807 252.109M225.943 276.066H217.078L208.214 278.727L197.133 280.946L186.496 286.713H178.518L161.232 289.375L146.162 293.811L132.865 300.909L123.558 308.895L112.034 320.873V326.641L108.045 339.506L103.612 352.372V372.78L92.9749 384.314L83.224 398.954V410.489L66.8246 421.58L57.9601 430.453L50.8684 441.544L46.8794 451.748L40.231 464.17L27.8207 472.599L22.9452 479.697L27.8207 486.352L26.9342 485.021M358.689 270.52L368.662 276.066L373.094 277.396L380.186 278.727L384.175 279.171L387.72 279.615H394.812H398.358L405.449 280.946L412.098 282.72L421.406 286.713C422.292 286.713 424.242 286.713 424.951 286.713C425.661 286.713 431.748 289.375 434.702 290.706L440.464 292.924L447.999 296.473L458.193 300.909L467.944 308.895L471.933 315.106L469.717 320.873L476.366 329.746L482.128 339.506L489.662 355.921L494.981 368.343C496.311 371.005 499.059 376.595 499.413 377.66C499.768 378.724 502.812 385.202 504.289 388.307L507.392 398.954L511.824 406.053L514.483 417.144L519.802 434.002L524.677 448.199L533.542 475.261C535.906 481.324 540.633 493.716 540.633 494.781C540.633 495.846 542.702 504.689 543.736 508.978L548.168 530.273L550.828 542.695L556.146 562.215L560.579 575.968M560.579 575.968V593.27L569 605.248M560.579 575.968L551.795 546.244L537.531 542.695L524.677 540.476H504.289L482.128 542.695L461.296 550.68V567.539M569 605.248C563.829 603.326 552.955 599.481 550.828 599.481C550.33 599.481 549.385 599.481 548.168 599.481M569 605.248L550.828 611.903L549.498 605.692M461.296 567.539L464.842 575.968V584.397L467.944 593.27L476.366 588.39H494.981L524.677 593.27L533.542 599.481C537.277 599.481 544.184 599.481 548.168 599.481M461.296 567.539V557.335C460.262 556.743 457.573 555.294 455.091 554.229C452.609 553.165 446.67 548.462 444.01 546.244L434.702 530.273L424.951 512.083M424.951 512.083V523.174L421.406 535.153L412.098 546.244V557.335L408.995 567.539V584.397L405.449 605.248V611.903L403.233 614.121M424.951 512.083L416.973 486.352L408.995 464.17L403.233 428.235M403.233 614.121L225.943 584.397M403.233 614.121L449.772 622.107M225.943 584.397L221.511 605.248L203.338 804M225.943 584.397H209.987L201.749 666.027M548.168 599.481L549.498 605.692M549.498 605.692L537.088 627.43L524.677 646.063L514.483 659.373L504.289 676.231L489.662 693.533L471.933 712.61L467.944 715.995M403.233 804L405.449 789.36L412.098 781.374L421.406 767.621L434.702 748.545L451.545 729.912L467.944 715.995M464.842 599.481L455.091 627.43L440.464 646.063L434.702 666.027L421.406 693.533L403.233 712.61L373.094 748.545L346.5 754.756H330.101L319.02 767.621H309.269L296.859 781.374L278.244 789.36V804M278.244 804H287.995H303.064L319.02 789.36L331.184 796.458L337.636 804M278.244 804H203.338M203.338 804H187.825L201.749 666.027M467.944 715.995L461.296 804H405.449M26.9342 485.021L16.74 508.978L7.43226 523.174M26.9342 485.021L7.43226 523.174M26.9342 485.021L50.8684 482.803L66.8246 494.781L88.0994 499.661L103.612 506.76L112.034 512.083M7.43226 523.174L3 535.153V546.244M3 546.244H7.43226L10.0916 540.476L16.74 535.153L20.2858 523.174H27.8207L36.242 516.076H50.8684H62.8356L77.0188 519.182L88.0994 516.076H96.5208L112.034 512.083M3 546.244V557.335V567.539V575.968V584.397L7.43226 593.27L10.0916 599.481H22.9452H40.231H62.8356H71.2569L81.4511 596.819L88.0994 593.27C91.202 590.312 98.0277 584.397 100.51 584.397C102.992 584.397 109.227 578.778 112.034 575.968L127.103 571.088L135.968 567.539L146.162 562.215L157.686 567.539H168.767H178.518H190.485L197.133 562.215H205.111L212.646 557.335L222.397 554.229V542.695M112.034 512.083L117.796 508.978L120.677 506.76M117.796 437.108C120.75 438.587 127.281 441.544 129.763 441.544C132.245 441.544 132.865 445.981 132.865 448.199V460.177L129.763 472.599L132.865 482.803V494.781V504.541V499.661L123.558 504.541L120.677 506.76M222.397 542.695H212.646H199.792H222.397ZM229.489 540.476L231.705 535.153L229.489 530.273L225.943 523.174M225.943 523.174C224.465 523.174 220.624 523.174 217.078 523.174C212.646 523.174 210.43 527.167 205.111 527.167C200.856 527.167 217.226 524.505 225.943 523.174ZM229.489 519.182V512.083L225.943 504.541L221.511 502.101M221.511 502.101L217.078 499.661L208.214 504.541H197.133L221.511 502.101ZM222.397 499.661V492.563L217.078 486.352H208.214L199.792 482.803H186.496L178.518 479.697V475.261L186.496 468.606L190.928 457.515L190.485 441.544L182.95 430.453L174.085 437.108L176.301 443.762L168.767 451.748L164.778 457.515L161.232 464.17L157.686 472.599V479.697L152.81 486.352L141.73 494.781L135.968 502.101L120.677 506.76M127.103 575.968V593.27L123.558 599.481V622.107L129.763 646.063M129.763 646.063C129.763 648.282 129.763 654.049 129.763 659.373C129.763 664.696 129.172 677.266 128.876 682.886M129.763 646.063H146.162H152.81L165.664 659.373H176.301L190.485 666.027H201.749M128.876 682.886V693.533L120.677 712.61C118.978 717.49 115.225 729.379 113.807 737.897C112.388 746.415 112.034 761.262 112.034 767.621V781.374L108.045 804M128.876 682.886H141.73H152.81L168.323 693.533L174.529 701.962H186.496H193.144M281.789 134.1L287.995 129.22L295.086 126.558L303.064 128.333L308.826 131.882L301.291 135.431C298.336 135.727 292.249 136.318 291.54 136.318C290.831 136.318 284.005 136.318 281.789 134.1ZM224.613 138.98L226.829 134.1L238.353 129.22L246.331 131.882L251.65 135.431L239.683 138.98H224.613Z"
                            // stroke="#F08314"
                            strokeWidth="6"
                        />
                    </svg>
                </motion.div>
                <div className="background-circles">
                    <div className="circle1 circle"/>
                    <div className="circle2 circle"/>
                    <div className="circle3 circle"/>
                    <div className="circle4 circle"/>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
