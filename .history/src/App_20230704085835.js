import './App.css';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from './components/Footer/Footer.jsx';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/about' element={ <About/> } />
));
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element ={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
