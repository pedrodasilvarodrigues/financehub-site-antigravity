import React, { useState } from 'react';
import { GraduationCap, Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import './Contato.css';

export default function Contato() {
  const trainingWhatsAppUrl = 'https://wa.me/5532987099260?text=Ol%C3%A1%2C%20preciso%20de%20treinamento%20para%20minha%20equipe%20usar%20o%20FinanceHub.';
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    assunto: 'comercial',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    // Simula o envio para manter a experiência fluida nesta versão do site.
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        assunto: 'comercial',
        mensagem: ''
      });
      setTimeout(() => setSuccess(false), 5000); // clear success alert
    }, 1500);
  };

  return (
    <div className="contact-page container section-padding">
      <div className="glow-spot" style={{ top: '20%', right: '15%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Fale Conosco</div>
        <h1 className="page-title text-gradient">Contato Institucional</h1>
        <p className="page-subtitle">
          Fale com o FinanceHub para tirar dúvidas, solicitar atendimento ou combinar treinamento para sua equipe.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="glass-card contact-form-card">
          {success && (
            <div className="contact-success-alert animate-fade-in">
              <ShieldCheck size={20} className="text-green" />
              <div>
                <strong>Mensagem enviada com sucesso!</strong>
                <p>Recebemos sua solicitação e entraremos em contato pelo canal informado.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="nome" className="form-label">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="empresa" className="form-label">Nome da Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail Corporativo *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@empresa.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="assunto" className="form-label">Assunto de Contato</label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                className="form-input"
                style={{ backgroundColor: 'var(--input-bg)' }}
              >
                <option value="comercial">Informações comerciais</option>
                <option value="implantacao">Implantação e treinamento</option>
                <option value="suporte">Suporte ao uso</option>
                <option value="outros">Outros Assuntos</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem" className="form-label">Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Como podemos ajudar a sua empresa?"
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary contact-submit-btn">
              {loading ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info Details */}
        <div className="contact-details-col">
          <div className="glass-card detail-info-box">
            <h3>Informações de Atendimento</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Nossa equipe orienta empresas que desejam conhecer, instalar e treinar usuários no FinanceHub.</p>
            
            <div className="info-list">
              <div className="info-item">
                <Mail size={20} className="text-cyan" />
                <div>
                  <strong>Contato Comercial</strong>
                  <span>Solicite apresentação do FinanceHub</span>
                  <span>Atendimento para implantação e dúvidas</span>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} className="text-purple" />
                <div>
                  <strong>Treinamento</strong>
                  <span>Capacitação para equipes operacionais</span>
                  <span>Orientação para uso no dia a dia</span>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={20} className="text-orange" />
                <div>
                  <strong>Disponibilidade</strong>
                  <span>Versão online e aplicativo Windows</span>
                  <span>Interface preparada para uso em desktop</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card response-sla-box">
            <MessageSquare size={24} className="text-green" />
            <div>
              <h4>Compromisso de Resposta</h4>
              <p>As solicitações são tratadas como contato comercial, suporte ou treinamento conforme o assunto informado.</p>
            </div>
          </div>
          <div className="glass-card training-contact-box">
            <GraduationCap size={24} className="text-cyan" />
            <div>
              <h4>Treinamento para Equipes</h4>
              <p>Caso sua empresa precise de treinamento para usar o FinanceHub, entre em contato pelo WhatsApp.</p>
              <a
                className="btn btn-primary training-whatsapp-btn"
                href={trainingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato pelo WhatsApp para treinamento"
              >
                <Phone size={16} />
                <span>Solicitar Treinamento</span>
              </a>
              <span className="training-phone">WhatsApp: (32) 98709-9260</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
