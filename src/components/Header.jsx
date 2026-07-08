import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Menu, X, Sun, Moon, Sparkles, Download } from 'lucide-react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'financehub', label: 'O FinanceHub' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'documentacao', label: 'Documentação' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
    { id: 'suporte', label: 'Suporte' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.location.hash = `#/${id}`;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-glass">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrapper">
            <Sparkles className="logo-spark" />
          </div>
          <span className="logo-text">Finance<span className="logo-subtext">Hub</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Section Actions */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Alterar Tema">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Call to action */}
          <button onClick={() => handleNavClick('downloads')} className="btn btn-primary btn-sm header-cta">
            <Download size={14} />
            <span>Baixar</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <div className="mobile-nav-actions">
              <button
                onClick={() => handleNavClick('downloads')}
                className="btn btn-primary w-full"
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>Baixar FinanceHub</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
