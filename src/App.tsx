import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { usePageTracking } from './firebase/analytics';
import './i18n/config';

// Lazy load page components to enable code splitting
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Sectants = lazy(() => import('./pages/Sectants'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const EverBook = lazy(() => import('./pages/projects/EverBook'));
const FFSensitivities = lazy(() => import('./pages/projects/FFSensitivities'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const MCTools = lazy(() => import('./pages/projects/MCTools'));

// ScrollToTop component to reset scroll position on route change
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
  // Add page view tracking
  usePageTracking();

  return (
    <Router>
      <div className="min-h-screen bg-dark-100 text-light-100 flex flex-col">
        <Navigation />
        <ScrollToTop />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}> {/* fallback while loading components */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/sectants" element={<Sectants />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/everbook" element={<EverBook />} />
              <Route path="/ffsensitivities" element={<FFSensitivities />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/mctools" element={<MCTools />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;