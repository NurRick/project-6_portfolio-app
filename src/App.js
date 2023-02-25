import './App.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Header from './Components/Header';
import Page1 from './Components/Page1';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Page1/>
      <AboutMe/>
      <Experience/>
      <h1>Page4</h1>
      <h1>Page5</h1>
      <h1>Page6</h1>
      <h1>Footer</h1>
      </div>     
    </div>
  );
}

export default App;
