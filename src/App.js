import "./App.css";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Page1 from "./Components/Page1";
import Projects from "./Components/Projects";
import SayHello from "./Components/SayHello";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Page1 />
        <AboutMe />
        <Experience />
        <Projects />
        <SayHello />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
