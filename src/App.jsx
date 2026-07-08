import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FinanceHubPage from './pages/FinanceHubPage';
import Funcionalidades from './pages/Funcionalidades';
import Documentacao from './pages/Documentacao';
import Downloads from './pages/Downloads';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Suporte from './pages/Suporte';
import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  // URL Hash Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const route = hash.replace('#/', '');
        const validRoutes = [
          'home', 'financehub', 'funcionalidades', 'documentacao',
          'downloads', 'sobre', 'contato', 'suporte'
        ];
        if (validRoutes.includes(route)) {
          setCurrentPage(route);
        } else {
          setCurrentPage('home');
        }
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'financehub':
        return <FinanceHubPage />;
      case 'funcionalidades':
        return <Funcionalidades />;
      case 'documentacao':
        return <Documentacao />;
      case 'downloads':
        return <Downloads />;
      case 'sobre':
        return <Sobre />;
      case 'contato':
        return <Contato />;
      case 'suporte':
        return <Suporte />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-wrapper">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
