import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sectants from './pages/Sectants';
import About from './pages/About';
import Contact from './pages/Contact';
import EverBook from './pages/projects/EverBook';
import FFSensitivities from './pages/projects/FFSensitivities';
import MCTools from './pages/projects/MCTools';
import { usePageTracking } from './firebase/analytics';
import './i18n/config';

// ScrollToTop component that handles scrolling on route change
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);
  
  return null;
}

function App() {
  // Добавляем отслеживание просмотров страниц
  usePageTracking();

  return (
    <Router>
      <div className="min-h-screen bg-dark-100 text-light-100 flex flex-col">
        <Navigation />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sectants" element={<Sectants />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/everbook" element={<EverBook />} />
            <Route path="/ffsensitivities" element={<FFSensitivities />} />
            <Route path="/mctools" element={<MCTools />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;