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
    modulo: 'login',
    prioridade: 'normal',
    descricao: ''
  });
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const tutorials = [
    { title: 'Como baixar o instalador Windows', category: 'Download', link: '#/downloads' },
    { title: 'Como entrar com email e senha', category: 'Login', link: '#/documentacao' },
    { title: 'Como abrir e fechar o caixa', category: 'Caixa', link: '#/documentacao' },
    { title: 'Como cadastrar produtos e controlar estoque', category: 'Produtos', link: '#/documentacao' },
    { title: 'Como usar CEP e endereço no frete', category: 'Frete', link: '#/documentacao' },
    { title: 'Como consultar pedidos por status', category: 'Pedidos', link: '#/documentacao' }
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
        modulo: 'login',
        prioridade: 'normal',
        descricao: ''
      });
    }, 1000);
  };

  return (
    <div className="support-page container section-padding">
      <div className="glow-spot" style={{ top: '15%', left: '15%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '15%', right: '15%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Suporte do Projeto</div>
        <h1 className="page-title text-gradient">Central de Ajuda</h1>
        <p className="page-subtitle">
          Consulte guias sobre a versão atual do FinanceHub ou registre uma solicitação demonstrativa para acompanhamento do TCC.
        </p>
      </div>

      <div className="support-search-section glass-card">
        <div className="search-header-group">
          <h2>Base de Conhecimento & Tutoriais</h2>
          <p>Busque respostas rápidas ou navegue nos manuais guiados.</p>
        </div>

        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Pesquise por temas (ex: Login, Caixa, Produtos, Frete)..."
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

      <div className="ticket-support-grid section-padding">
        <div className="glass-card ticket-form-card">
          <h2>Registrar Solicitação</h2>
          <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Este formulário é demonstrativo e registra um protocolo visual para apresentação. Ele não envia suporte real externo.
          </p>

          {ticketId && (
            <div className="ticket-success-alert animate-fade-in">
              <ShieldCheck size={24} className="text-green" />
              <div>
                <strong>Solicitação registrada!</strong>
                <p>O código gerado é: <strong className="text-cyan">{ticketId}</strong>.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleTicketSubmit} className="ticket-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Seu E-mail *</label>
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
                  <option value="login">Login / Supabase</option>
                  <option value="pdv">Vendas / PDV</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="estoque">Estoque e Produtos</option>
                  <option value="frete">Logística e Frete</option>
                  <option value="desktop">Aplicativo Windows</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="prioridade" className="form-label">Prioridade</label>
                <select
                  id="prioridade"
                  name="prioridade"
                  value={ticketData.prioridade}
                  onChange={handleTicketChange}
                  className="form-input"
                  style={{ backgroundColor: 'var(--input-bg)' }}
                >
                  <option value="normal">Normal</option>
                  <option value="alta">Alta</option>
                  <option value="critica">Crítica</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="descricao" className="form-label">Descrição *</label>
              <textarea
                id="descricao"
                name="descricao"
                required
                rows={5}
                value={ticketData.descricao}
                onChange={handleTicketChange}
                placeholder="Descreva o que acontece no sistema."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-full">
              {loading ? <span>Registrando...</span> : <span>Registrar Solicitação</span>}
            </button>
          </form>
        </div>

        <div className="tech-channels-col">
          <div className="glass-card contact-support-box">
            <h3>Informações Úteis</h3>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              A versão atual é um projeto de TCC. Para testes, use os links oficiais do GitHub e da Vercel.
            </p>

            <div className="support-channels-list">
              <div className="channel-item">
                <MessageSquare className="text-cyan" size={20} />
                <div>
                  <strong>Site online</strong>
                  <span>financehub-tcc.vercel.app</span>
                  <span>Versão principal do sistema.</span>
                </div>
              </div>

              <div className="channel-item">
                <Terminal className="text-purple" size={20} />
                <div>
                  <strong>Aplicativo Windows</strong>
                  <span>FinanceHub-Setup-1.0.0.exe</span>
                  <span>Publicado no GitHub Releases.</span>
                </div>
              </div>

              <div className="channel-item">
                <FileText className="text-orange" size={20} />
                <div>
                  <strong>Dados</strong>
                  <span>Login e persistência via Supabase.</span>
                  <span>Dados isolados por organização.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
