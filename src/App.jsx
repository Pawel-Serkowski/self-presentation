import "./app.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div>
            <section>
                <Navbar />
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="techstack">
                <TechStack />
            </section>
            <section id="parallax">
                <Parallax />
            </section>
            <Portfolio />
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
