import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import './Contato.css';

export default function Contato() {
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

    // Simulate API request
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
          Dúvidas comerciais sobre planos? Solicite uma proposta customizada para sua empresa ou fale com a nossa equipe.
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
                <p>Nossa equipe entrará em contato em até 4 horas úteis.</p>
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
                <option value="comercial">Departamento Comercial (Planos & Preços)</option>
                <option value="parcerias">Parcerias e Franquias</option>
                <option value="imprensa">Assessoria de Imprensa</option>
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
            <h3>Informações Oficiais</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Fale diretamente com nossa sede administrativa de segunda a sexta, das 8h às 18h.</p>
            
            <div className="info-list">
              <div className="info-item">
                <Mail size={20} className="text-cyan" />
                <div>
                  <strong>Canais de E-mail</strong>
                  <span>comercial@financehub.com.br</span>
                  <span>suporte@financehub.com.br</span>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} className="text-purple" />
                <div>
                  <strong>Central Telefônica</strong>
                  <span>0800 591 2940 (Ligação gratuita)</span>
                  <span>(11) 4003-8822 (WhatsApp)</span>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={20} className="text-orange" />
                <div>
                  <strong>Endereço de Correspondência</strong>
                  <span>Av. Paulista, 1000 - 14º Andar</span>
                  <span>Bela Vista - São Paulo, SP - CEP 01310-100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card response-sla-box">
            <MessageSquare size={24} className="text-green" />
            <div>
              <h4>Compromisso de Resposta</h4>
              <p>Nossa equipe responde a todos os contatos comerciais e dúvidas institucionais em menos de 4 horas úteis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
