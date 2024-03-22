import "./app.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
    return (
        <div>
            <section>
                <Navbar />
                <Home />
            </section>
            <section id="about">About me</section>
            <section>Tech stack</section>
            <section id="projects">Paralax</section>
            <section>Portfolio</section>
            <section id="contact">Contact</section>
        </div>
    );
}

export default App;
