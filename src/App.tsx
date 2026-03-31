import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StartProject from './pages/StartProject';
import ServiceDetail from './pages/ServiceDetail';
import ProductDetail from './pages/ProductDetail';
import SEOPage from './pages/SEOPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Payment from './pages/Payment';
import ArchitectPortfolio from './pages/ArchitectPortfolio';
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

// --- Main App Component ---

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-emerald-500/30">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/start-project" element={<StartProject />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/seo/:slug" element={<SEOPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/architect" element={<ArchitectPortfolio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
