import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import SideProjects from './components/SideProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <SideProjects />
    </div>
  );
}

export default App;
