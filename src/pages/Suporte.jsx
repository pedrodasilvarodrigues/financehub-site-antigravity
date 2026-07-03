import React, { useState } from 'react';
import { 
  HelpCircle, MessageSquare, Terminal, FileText, 
  Search, CheckCircle2, AlertTriangle, ShieldCheck, Play 
} from 'lucide-react';
import './Suporte.css';

export default function Suporte() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketData, setTicketData] = useState({
    email: '',
    modulo: 'fiscal',
    prioridade: 'normal',
    descricao: ''
  });
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const tutorials = [
    { title: 'Como configurar o Certificado Digital A1', category: 'Fiscal', link: '#/documentacao' },
    { title: 'Importando cadastro de produtos em lote (.xlsx)', category: 'Produtos', link: '#/documentacao' },
    { title: 'Como abrir e fechar o caixa do PDV', category: 'PDV', link: '#/documentacao' },
    { title: 'Conectando múltiplas lojas (Multiempresa)', category: 'Redes', link: '#/documentacao' },
    { title: 'Configurando Pix dinâmico no caixa', category: 'PDV', link: '#/documentacao' },
    { title: 'Configuração de alíquotas de impostos por produto', category: 'Fiscal', link: '#/documentacao' }
  ];

  const filteredTutorials = tutorials.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketChange = (e) => {
    const { name, value } = e.target;
    setTicketData(prev => ({ ...prev, [name]: value }));
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!ticketData.email || !ticketData.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setTicketData({
        email: '',
        modulo: 'fiscal',
        prioridade: 'normal',
        descricao: ''
      });
    }, 1500);
  };

  return (
    <div className="support-page container section-padding">
      <div className="glow-spot" style={{ top: '15%', left: '15%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '15%', right: '15%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Suporte Técnico</div>
        <h1 className="page-title text-gradient">Central de Suporte</h1>
        <p className="page-subtitle">
          Precisa de ajuda com o FinanceHub? Busque na base de conhecimento ou abra um chamado direto para nosso time técnico.
        </p>
      </div>

      {/* Search Base de Conhecimento */}
      <div className="support-search-section glass-card">
        <div className="search-header-group">
          <h2>Base de Conhecimento & Tutoriais</h2>
          <p>Busque respostas rápidas ou navegue nos manuais guiados.</p>
        </div>

        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Pesquise por temas (ex: Certificado, Impostos, Caixa, Lote)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input search-input-field"
          />
        </div>

        <div className="search-results-grid">
          {filteredTutorials.length > 0 ? (
            filteredTutorials.map((tut, i) => (
              <a href={tut.link} key={i} className="tutorial-item-card">
                <span className="tut-cat-badge">{tut.category}</span>
                <h4>{tut.title}</h4>
                <div className="tut-link-text">
                  <span>Acessar manual</span>
                  <Play size={10} style={{ fill: 'currentColor' }} />
                </div>
              </a>
            ))
          ) : (
            <p className="text-muted padding-1">Nenhum tutorial encontrado para "{searchQuery}".</p>
          )}
        </div>
      </div>

      {/* Opening Ticket and Tech Contact Grid */}
      <div className="ticket-support-grid section-padding">
        {/* Ticket Form */}
        <div className="glass-card ticket-form-card">
          <h2>Abrir Chamado Técnico</h2>
          <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>Descreva seu problema com detalhes e anexe logs se necessário. Retorno em até 2 horas.</p>

          {ticketId && (
            <div className="ticket-success-alert animate-fade-in">
              <ShieldCheck size={24} className="text-green" />
              <div>
                <strong>Chamado Aberto com Sucesso!</strong>
                <p>O código do seu chamado é: <strong className="text-cyan">{ticketId}</strong>. Acompanhe a resposta no seu e-mail.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleTicketSubmit} className="ticket-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Seu E-mail Corporativo *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={ticketData.email}
                onChange={handleTicketChange}
                placeholder="seu.email@empresa.com"
                className="form-input"
              />
            </div>

            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="modulo" className="form-label">Módulo do Sistema</label>
                <select
                  id="modulo"
                  name="modulo"
                  value={ticketData.modulo}
                  onChange={handleTicketChange}
                  className="form-input"
                  style={{ backgroundColor: 'var(--input-bg)' }}
                >
                  <option value="fiscal">Faturamento / Emissão Fiscal</option>
                  <option value="pdv">Frente de Caixa (PDV)</option>
                  <option value="financeiro">Financeiro / OFX / DRE</option>
                  <option value="estoque">Estoque e Produtos</option>
                  <option value="instalacao">Instalação e Banco de Dados</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="prioridade" className="form-label">Prioridade de Suporte</label>
                <select
                  id="prioridade"
                  name="prioridade"
                  value={ticketData.prioridade}
                  onChange={handleTicketChange}
                  className="form-input"
                  style={{ backgroundColor: 'var(--input-bg)' }}
                >
                  <option value="normal">Normal (Até 4 horas)</option>
                  <option value="alta">Alta - Caixa Parado (Até 1 hora)</option>
                  <option value="critica">Crítica - Sistema não Inicia (Imediato)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="descricao" className="form-label">Descrição do Problema *</label>
              <textarea
                id="descricao"
                name="descricao"
                required
                rows={5}
                value={ticketData.descricao}
                onChange={handleTicketChange}
                placeholder="Descreva o que acontece. Caso apareça algum código de erro, insira aqui."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-full">
              {loading ? <span>Registrando chamado...</span> : <span>Abrir Chamado</span>}
            </button>
          </form>
        </div>

        {/* Support channels */}
        <div className="tech-channels-col">
          <div className="glass-card contact-support-box">
            <h3>Contatos Técnicos de Plantão</h3>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>Para situações críticas onde frentes de caixa estão paradas, utilize nossos contatos diretos.</p>

            <div className="support-channels-list">
              <div className="channel-item">
                <MessageSquare className="text-cyan" size={20} />
                <div>
                  <strong>WhatsApp de Plantão</strong>
                  <span>(11) 99882-1002 (Apenas Caixa Parado)</span>
                  <span>Disponível de Segunda a Domingo 24h</span>
                </div>
              </div>

              <div className="channel-item">
                <Terminal className="text-purple" size={20} />
                <div>
                  <strong>Acesso Remoto</strong>
                  <span>Tenha o TeamViewer ou AnyDesk instalado.</span>
                  <span>Nossos técnicos solicitarão o ID de acesso.</span>
                </div>
              </div>

              <div className="channel-item">
                <FileText className="text-orange" size={20} />
                <div>
                  <strong>Tempo de SLA</strong>
                  <span>Plano Profissional: Atendimento em até 1h.</span>
                  <span>Plano Básico: Atendimento em até 4h.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
