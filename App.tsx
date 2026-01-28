
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="fade-in">
          <Header cartCount={cartCount} />
          <main>
            <Hero />
            <ProductList onAddToCart={handleAddToCart} />
            <AboutUs />
          </main>
          <Footer />
        </div>
      )}
      
      {!showSplash && (
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-[60]">
          <a 
            href="https://wa.me/62895337806967" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-end"
          >
            <span className="mr-3 bg-white px-4 py-2 rounded-xl text-slate-900 font-bold text-sm shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:block">
              Chat on WhatsApp
            </span>
            <div className="w-16 h-16 bg-green-500 text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(34,197,94,0.4)] hover:rotate-6 hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-whatsapp text-3xl"></i>
            </div>
          </a>
          <a 
            href="https://t.me/XBhigh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-end"
          >
            <span className="mr-3 bg-white px-4 py-2 rounded-xl text-slate-900 font-bold text-sm shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:block">
              Message on Telegram
            </span>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:-rotate-6 hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-telegram text-3xl"></i>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
