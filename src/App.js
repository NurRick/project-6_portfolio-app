import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Page1 from "./Components/Page1";
import Projects from "./Components/Projects";
import SayHello from "./Components/SayHello";

function App(props) {

  const [scrollTarget, setScrollTarget] = useState(null);
  

  function handleButtonClick(id) {
    setScrollTarget(id);
  }
  
  useEffect(() => {
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetElementPosition, behavior: "smooth" });
      setScrollTarget(null);
    }
  }, [scrollTarget]);
  

  return (
    <div className="App">
      <div>
        <Header onButtonClick={handleButtonClick}/>
        <div>
          <Page1/>
          <AboutMe/>
          <Experience/>
          <Projects/>
          <SayHello/>
        </div>       
        <Footer/>
      </div>
    </div>
  );
}

export default App;
