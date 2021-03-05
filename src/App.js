import logo from './logo.svg';
import HomePage from './Homepage';
import Links from './Links';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Knowledge from './Knowledge';
import Projects from './Projects';
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <Links />
      <HomePage />
      <About />
      <Work />
      <Projects />
      <Knowledge />
      
    </div>
  );
}

export default App;
