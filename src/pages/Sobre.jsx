import React from 'react';
import { History, Eye, Award, CheckCircle2 } from 'lucide-react';
import './Sobre.css';

export default function Sobre() {
  const values = [
    { title: 'Simplicidade Operacional', desc: 'Sistemas devem simplificar rotinas comerciais, e não criar barreiras ou lentidões.' },
    { title: 'Integridade de Dados', desc: 'Dados financeiros são o maior patrimônio de uma empresa. Segurança vem em primeiro lugar.' },
    { title: 'Inovação Prática', desc: 'Usamos tecnologia de ponta (como IA) para resolver problemas operacionais e de margem reais.' },
    { title: 'Foco no Operador', desc: 'Interfaces desenhadas para quem trabalha no caixa o dia todo, evitando digitações desnecessárias.' }
  ];

  const timeline = [
    {
      date: 'Janeiro de 2024',
      title: 'Ideação e Pesquisa de Campo',
      desc: 'Pesquisa detalhada com mais de 50 comerciantes varejistas para identificar as falhas e lentidões dos sistemas de gestão antigos.'
    },
    {
      date: 'Junho de 2024',
      title: 'Desenvolvimento do Motor Híbrido',
      desc: 'Desenho da arquitetura offline-first combinando SQLite local com sincronizador em nuvem PostgreSQL e homologação fiscal.'
    },
    {
      date: 'Janeiro de 2025',
      title: 'Lançamento da Versão 1.0',
      desc: 'Versão inicial com frente de caixa (PDV) ultra veloz, cadastro de produtos simples e emissão de cupom NFC-e.'
    },
    {
      date: 'Novembro de 2025',
      title: 'FinanceHub v2.0 & Multiempresa',
      desc: 'Lançamento do módulo de conciliação bancária OFX e sincronização centralizada de saldos e estoques multiempresa.'
    },
    {
      date: 'Junho de 2026',
      title: 'FinanceHub v3.4.0 (Atual)',
      desc: 'Introdução do Assistente Virtual IA com consultas de linguagem natural e módulo de cotação logística automática.'
    }
  ];

  return (
    <div className="about-page container section-padding">
      <div className="glow-spot" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Sobre Nós</div>
        <h1 className="page-title text-gradient">Nossa História & Missão</h1>
        <p className="page-subtitle">
          Saiba como a equipe do FinanceHub está unificando o controle de caixa, estoques e margens de lucro para milhares de empresas no Brasil.
        </p>
      </div>

      {/* Main Info */}
      <div className="about-intro-grid">
        <div className="glass-card history-card">
          <div className="card-title-icon">
            <History size={20} className="text-cyan" />
            <h2>História do Projeto</h2>
          </div>
          <p>
            O FinanceHub nasceu em 2024 ao percebermos uma grande frustração comum no mercado de pequenas e médias empresas: a fragmentação de ferramentas. Donos de lojas precisavam usar uma planilha complexa para precificar itens, outro sistema legado lento para registrar as vendas no caixa, e uma ferramenta na web separada para controlar contas a pagar.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Nossa equipe de engenheiros e designers de software decidiu mudar isso. Criamos um sistema desktop moderno, construído com tecnologias Web de ponta (Electron, React, C#) capazes de dar velocidade instantânea ao operador, garantindo integridade fiscal e segurança mesmo em quedas de internet.
          </p>
        </div>

        <div className="glass-card mission-card">
          <div className="card-title-icon">
            <Eye size={20} className="text-purple" />
            <h2>Missão, Visão & Valores</h2>
          </div>
          <ul className="mvv-list">
            <li>
              <strong>Missão:</strong> Unificar e descomplicar a rotina financeira e operacional de PMEs através de tecnologia local e em nuvem robusta.
            </li>
            <li>
              <strong>Visão:</strong> Tornar-se o ecossistema de retaguarda e frente de caixa preferido por lojistas e varejistas em constante crescimento no Brasil.
            </li>
            <li>
              <strong>Valores:</strong> Respeito ao tempo do lojista, foco em segurança bancária, transparência fiscal e inovação prática orientada a resultados.
            </li>
          </ul>
        </div>
      </div>

      {/* Corporate Values */}
      <div className="values-section section-padding">
        <h3 className="section-subtitle-center text-center">Nossos Valores Fundamentais</h3>
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

      {/* Timeline Vertical */}
      <div className="timeline-section section-padding">
        <h3 className="section-subtitle-center text-center">Linha do Tempo</h3>
        <p className="text-center text-muted" style={{ marginBottom: '4rem' }}>
          Confira os principais marcos de crescimento do FinanceHub desde a concepção.
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
