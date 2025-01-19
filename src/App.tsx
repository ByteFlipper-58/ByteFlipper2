import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sectants from './pages/Sectants';
import About from './pages/About';
import Contact from './pages/Contact';
import TikTik from './pages/projects/EverBook';
import './i18n/config';
import EverBook from './pages/projects/EverBook';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-100 text-light-100 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/tiktik" element={<TikTik />} />
            <Route path="/sectants" element={<Sectants />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/everbook" element={<EverBook />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;