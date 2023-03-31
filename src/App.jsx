import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marque from "./components/Marque";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marque />
      <Aboutme />
      <Education />
      <MySkills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
