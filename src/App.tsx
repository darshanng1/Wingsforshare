import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ArchitectPortfolio from './pages/ArchitectPortfolio';
import Payment from './pages/Payment';
import SEOPage from './pages/SEOPage';
import Login from './pages/Login';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/architect-portfolio" element={<ArchitectPortfolio />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/:slug" element={<SEOPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
          <MobileCTA />
        </div>
      </Router>
    </ThemeProvider>
  );
}
