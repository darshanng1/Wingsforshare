import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalytics from './components/GoogleAnalytics';
import ChatWidget from './components/ChatWidget';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { ScrollProvider } from './contexts/ScrollContext';

// Route-level code splitting: each page loads only when visited (faster first paint)
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Services = lazy(() => import('./pages/Services'));
const StartProject = lazy(() => import('./pages/StartProject'));
const Login = lazy(() => import('./pages/Login'));
const SEOPage = lazy(() => import('./pages/SEOPage'));
const ArchitectPortfolio = lazy(() => import('./pages/ArchitectPortfolio'));
const SetupLogos = lazy(() => import('./pages/SetupLogos'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-10 h-10 border-4 border-card-border border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <GoogleAnalytics />
        <ScrollProvider>
          <Layout>
            <ChatWidget />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
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
            </Suspense>
          </Layout>
        </ScrollProvider>
      </Router>
    </ErrorBoundary>
  );
}
