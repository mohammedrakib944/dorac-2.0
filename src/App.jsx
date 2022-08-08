import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Carusol from "./components/Carusol";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Carusol />
      <Roadmap />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
