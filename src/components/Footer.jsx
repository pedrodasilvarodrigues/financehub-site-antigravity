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
            FinanceHub para gestão financeira e operacional, com sistema online e aplicativo Windows.
          </p>
        </div>

        {/* Product Column */}
        <div className="footer-col">
          <h4>Produto</h4>
          <ul>
            <li><button onClick={() => handleNavClick('funcionalidades')}>Funcionalidades</button></li>
            <li><button onClick={() => handleNavClick('downloads')}>Downloads</button></li>
            <li><button onClick={() => handleNavClick('financehub')}>O FinanceHub</button></li>
            <li><button onClick={() => handleNavClick('suporte')}>Suporte</button></li>
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
              <span>Atendimento comercial</span>
            </li>
            <li>
              <Phone size={16} />
              <span>Treinamento e implantação</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>Atendimento para empresas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} FinanceHub. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#/privacidade">Termos de Uso</a>
            <a href="#/privacidade">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
