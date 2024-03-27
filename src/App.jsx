import "./app.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";

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
      <section id="projects">Paralax</section>
      <section>Portfolio</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
