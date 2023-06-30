
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from './components/Footer/Footer.jsx';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element ={<Experience/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
