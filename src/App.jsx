import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Contact/> 
    </div>
  );
};

export default App;
