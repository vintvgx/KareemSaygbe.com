import HomePage from './Homepage';
import Links from './Links';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Knowledge from './Knowledge';
import Projects from './Projects';
import './App.css';
import FadeInAnimation from "./FadeAnimation";


function App() {
  return (
    <div className="App">
      
        <Nav />
        
      <Links />
      <FadeInAnimation delay={1}>
          <HomePage />
          </FadeInAnimation>
      <About />
      <Work />
      <Projects />
      <Knowledge />
      
    </div>
  );
}

export default App;
