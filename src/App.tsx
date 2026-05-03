
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import ProductDetail from './pages/ProductDetail';
import StartProject from './pages/StartProject';
import Login from './pages/Login';
import SEOPage from './pages/SEOPage';
import ArchitectPortfolio from './pages/ArchitectPortfolio';
import SetupLogos from './pages/SetupLogos';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/layout/ErrorBoundary';
import NotFound from './pages/NotFound';
import { ScrollProvider } from './contexts/ScrollContext';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <ScrollProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/start-project" element={<StartProject />} />
              <Route path="/login" element={<Login />} />
              <Route path="/seo" element={<SEOPage />} />
              <Route path="/architect" element={<ArchitectPortfolio />} />
              <Route path="/setup-logos" element={<SetupLogos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ScrollProvider>
      </Router>
    </ErrorBoundary>
  );
}
