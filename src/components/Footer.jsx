import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-premium">
      <div className="footer-top-line"></div>
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo" onClick={() => handleNavClick('home')}>
            <div className="footer-logo-icon">
              <Sparkles size={16} />
            </div>
            <span>Finance<span className="logo-subtext">Hub</span></span>
          </div>
          <p className="footer-desc">
            A plataforma definitiva de gestão financeira e operacional para empresas em constante crescimento.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Product Column */}
        <div className="footer-col">
          <h4>Produto</h4>
          <ul>
            <li><button onClick={() => handleNavClick('funcionalidades')}>Funcionalidades</button></li>
            <li><button onClick={() => handleNavClick('downloads')}>Downloads</button></li>
            <li><button onClick={() => handleNavClick('planos')}>Planos & Preços</button></li>
            <li><button onClick={() => handleNavClick('suporte')}>Demonstrações</button></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-col">
          <h4>Suporte & Recursos</h4>
          <ul>
            <li><button onClick={() => handleNavClick('documentacao')}>Documentação</button></li>
            <li><button onClick={() => handleNavClick('suporte')}>Central de Ajuda</button></li>
            <li><button onClick={() => handleNavClick('documentacao')}>FAQ</button></li>
            <li><button onClick={() => handleNavClick('documentacao')}>Changelog</button></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="contact-list">
            <li>
              <Mail size={16} />
              <span>suporte@financehub.com.br</span>
            </li>
            <li>
              <Phone size={16} />
              <span>(11) 4003-8822</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} FinanceHub. Todos os direitos reservados. Este é um site institucional demonstrativo.</p>
          <div className="footer-bottom-links">
            <a href="#/privacidade">Termos de Uso</a>
            <a href="#/privacidade">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
