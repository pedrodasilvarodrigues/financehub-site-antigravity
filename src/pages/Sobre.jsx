import React from 'react';
import { History, Eye, Award, CheckCircle2 } from 'lucide-react';
import './Sobre.css';

export default function Sobre() {
  const values = [
    { title: 'Clareza Operacional', desc: 'O sistema deve ajudar o usuário a entender vendas, estoque, caixa e financeiro sem poluição visual.' },
    { title: 'Dados Organizados', desc: 'Cada empresa autenticada deve acessar apenas seus próprios dados operacionais.' },
    { title: 'Evolução Contínua', desc: 'O produto apresenta recursos atuais e segue recebendo melhorias de usabilidade e operação.' },
    { title: 'Foco em Desktop', desc: 'A experiência principal foi pensada para computadores usados em gestão e operação.' }
  ];

  const timeline = [
    {
      date: 'Junho de 2026',
      title: 'Reconstrução do FinanceHub',
      desc: 'Início da nova versão do FinanceHub, com foco em interface desktop, clareza operacional e rotinas reais de gestão.'
    },
    {
      date: 'Junho de 2026',
      title: 'Módulos Operacionais',
      desc: 'Implementação de PDV, vendas, produtos, estoque, caixa, financeiro, relatórios, fornecedores, serviços, funcionários, agenda e frete.'
    },
    {
      date: 'Julho de 2026',
      title: 'Dados por Empresa',
      desc: 'Organização dos dados por conta empresarial, mantendo cadastros e operações separados por empresa.'
    },
    {
      date: 'Julho de 2026',
      title: 'Aplicativo Desktop Windows',
      desc: 'Criação do app Electron que carrega a versão online hospedada na Vercel, com splash screen, tratamento offline e instalador .exe.'
    },
    {
      date: 'Julho de 2026',
      title: 'Site Institucional e Download',
      desc: 'Publicação do site institucional com acesso ao download do instalador Windows do FinanceHub.'
    }
  ];

  return (
    <div className="about-page container section-padding">
      <div className="glow-spot" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Sobre o FinanceHub</div>
        <h1 className="page-title text-gradient">História & Objetivo</h1>
        <p className="page-subtitle">
          O FinanceHub é uma solução voltada à gestão financeira e operacional, com foco em interface desktop, rotina empresarial e aplicativo Windows.
        </p>
      </div>

      <div className="about-intro-grid">
        <div className="glass-card history-card">
          <div className="card-title-icon">
            <History size={20} className="text-cyan" />
            <h2>História do Projeto</h2>
          </div>
          <p>
            O FinanceHub foi desenvolvido para reunir rotinas importantes de uma empresa em uma interface única: vendas, produtos, estoque, pedidos, caixa, financeiro, frete, agenda e relatórios.
          </p>
          <p style={{ marginTop: '1rem' }}>
            A versão atual combina sistema online, dados por empresa e aplicativo Windows para entregar uma experiência desktop conectada.
          </p>
        </div>

        <div className="glass-card mission-card">
          <div className="card-title-icon">
            <Eye size={20} className="text-purple" />
            <h2>Missão, Visão & Valores</h2>
          </div>
          <ul className="mvv-list">
            <li>
              <strong>Missão:</strong> Organizar vendas, estoque, caixa e financeiro em uma experiência simples para empresas.
            </li>
            <li>
              <strong>Visão:</strong> Evoluir continuamente como uma solução mais completa, com permissões, relatórios exportáveis e integrações reais.
            </li>
            <li>
              <strong>Valores:</strong> Honestidade sobre recursos existentes, segurança dos dados por empresa e foco em usabilidade.
            </li>
          </ul>
        </div>
      </div>

      <div className="values-section section-padding">
        <h3 className="section-subtitle-center text-center">Valores do Produto</h3>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="glass-card value-card">
              <div className="value-header">
                <Award size={18} className="text-cyan" />
                <h4>{v.title}</h4>
              </div>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-section section-padding">
        <h3 className="section-subtitle-center text-center">Linha do Tempo</h3>
        <p className="text-center text-muted" style={{ marginBottom: '4rem' }}>
          Principais marcos reais do desenvolvimento recente do FinanceHub.
        </p>

        <div className="vertical-timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item-block">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot-line"></div>
                <div className="timeline-marker"></div>
              </div>
              <div className="glass-card timeline-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
