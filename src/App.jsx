import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import DownloadModal from './components/DownloadModal';
import PrivacyModal from './components/PrivacyModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import EnterprisePage from './pages/EnterprisePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products' | 'pricing' | 'enterprise'
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'pricing', 'enterprise'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden text-gray-900 flex flex-col justify-between">
      
      {/* Main Top Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Dedicated Page View Content */}
      <main className="relative z-10 flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onOpenDownload={() => setDownloadModalOpen(true)}
            onOpenVideo={() => setVideoModalOpen(true)}
            onNavigatePricing={() => handlePageChange('pricing')}
            onNavigateProducts={() => handlePageChange('products')}
            onOpenPrivacy={() => setPrivacyModalOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            onOpenDownload={() => setDownloadModalOpen(true)}
            onNavigatePricing={() => handlePageChange('pricing')}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage 
            onOpenDownload={() => setDownloadModalOpen(true)}
          />
        )}

        {currentPage === 'enterprise' && (
          <EnterprisePage 
            onOpenDownload={() => setDownloadModalOpen(true)}
          />
        )}
      </main>

      {/* Footer with huge Shakti wordmark from Image 2 */}
      <Footer 
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenDownload={() => setDownloadModalOpen(true)}
        onNavigatePage={handlePageChange}
      />

      {/* Modals */}
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />

      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
      />

      <PrivacyModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
      />

    </div>
  );
}
