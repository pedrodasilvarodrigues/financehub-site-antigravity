import React from 'react';
import { ArrowRight, Download, Play, TrendingUp, ShieldCheck, Zap, Layers, BarChart3, Settings, HelpCircle, Box } from 'lucide-react';
import './Home.css';

export default function Home({ setCurrentPage }) {
  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <TrendingUp size={24} className="icon-cyan" />,
      title: 'Precificação Inteligente',
      desc: 'Cálculo de margem, markup e ponto de equilíbrio automatizado para garantir lucro em cada venda.'
    },
    {
      icon: <Layers size={24} className="icon-purple" />,
      title: 'Sistema Multiempresa',
      desc: 'Gerencie matriz, filiais e franquias de forma unificada, com relatórios individuais e consolidados.'
    },
    {
      icon: <Zap size={24} className="icon-orange" />,
      title: 'PDV Integrado Rápido',
      desc: 'Frente de caixa ágil, offline, com emissão de notas fiscais instantânea e baixa de estoque imediata.'
    },
    {
      icon: <BarChart3 size={24} className="icon-indigo" />,
      title: 'Gestão Financeira Completa',
      desc: 'Fluxo de caixa, DRE gerencial, contas a pagar e receber, e conciliação bancária automática.'
    },
    {
      icon: <Box size={24} className="icon-green" />,
      title: 'Controle de Estoque',
      desc: 'Gestão de compras, grades de produtos, controle de lote e inventário automatizado.'
    },
    {
      icon: <ShieldCheck size={24} className="icon-blue" />,
      title: 'Logística & Fretes Integrados',
      desc: 'Cálculo de frete em tempo real, rastreamento de entregas e integrações com Correios e transportadoras.'
    }
  ];

  const screenshots = [
    {
      title: 'Dashboard Executivo',
      desc: 'Visão consolidada do faturamento, contas a receber, lucratividade e principais indicadores em tempo real.',
      color: 'gradient-cyan-blue',
      elements: (
        <div className="mock-ui">
          <div className="mock-header">
            <div className="mock-dot red"></div>
            <div className="mock-dot yellow"></div>
            <div className="mock-dot green"></div>
            <span className="mock-title-bar">financehub_dashboard.exe</span>
          </div>
          <div className="mock-body">
            <div className="mock-stats-grid">
              <div className="mock-stat-card">
                <span>Receita Mensal</span>
                <strong className="text-cyan">R$ 142.850,00</strong>
                <span className="stat-perc positive">+12.4%</span>
              </div>
              <div className="mock-stat-card">
                <span>Margem Média</span>
                <strong className="text-purple">34.2%</strong>
                <span className="stat-perc positive">+2.1%</span>
              </div>
            </div>
            <div className="mock-chart-container">
              <div className="mock-chart-bar" style={{ height: '40%' }}></div>
              <div className="mock-chart-bar" style={{ height: '60%' }}></div>
              <div className="mock-chart-bar" style={{ height: '85%' }}></div>
              <div className="mock-chart-bar" style={{ height: '70%' }}></div>
              <div className="mock-chart-bar" style={{ height: '95%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Frente de Caixa (PDV)',
      desc: 'Interface ultraveloz para o operador de caixa. Emissão fiscal e recebimento PIX integrados em segundos.',
      color: 'gradient-purple-accent',
      elements: (
        <div className="mock-ui">
          <div className="mock-header">
            <div className="mock-dot red"></div>
            <div className="mock-dot yellow"></div>
            <div className="mock-dot green"></div>
            <span className="mock-title-bar">financehub_pdv.exe</span>
          </div>
          <div className="mock-body pdv">
            <div className="pdv-checkout">
              <div className="pdv-items">
                <div className="pdv-item-row">
                  <span>01. Notebook Core i7</span>
                  <strong>1x R$ 4.299,00</strong>
                </div>
                <div className="pdv-item-row">
                  <span>02. Mouse Sem Fio</span>
                  <strong>2x R$ 149,00</strong>
                </div>
              </div>
              <div className="pdv-total">
                <span>TOTAL A PAGAR</span>
                <strong className="text-accent">R$ 4.597,00</strong>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Motor de Precificação',
      desc: 'Simulador inteligente que sugere o preço de venda ideal baseado em custos tributários, operacionais e margem desejada.',
      color: 'gradient-orange-red',
      elements: (
        <div className="mock-ui">
          <div className="mock-header">
            <div className="mock-dot red"></div>
            <div className="mock-dot yellow"></div>
            <div className="mock-dot green"></div>
            <span className="mock-title-bar">financehub_pricing.exe</span>
          </div>
          <div className="mock-body pricing">
            <div className="pricing-simulator">
              <div className="pricing-row">
                <span>Custo de Aquisição</span>
                <span className="pricing-val">R$ 120,00</span>
              </div>
              <div className="pricing-row">
                <span>ICMS / Impostos</span>
                <span className="pricing-val text-red">18.0%</span>
              </div>
              <div className="pricing-row highlight">
                <span>Preço Sugerido</span>
                <strong className="pricing-val text-green">R$ 218,50</strong>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="home-page">
      <div className="glow-spot" style={{ top: '-10%', left: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ top: '30%', right: '5%' }}></div>

      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge badge">
            <span>Disponível versão 3.4.0</span>
          </div>
          <h1 className="hero-title text-gradient">
            A gestão financeira e operacional mais potente da sua empresa
          </h1>
          <p className="hero-subtitle">
            O FinanceHub unifica PDV ágil, precificação de alta precisão, controle total de estoques e logística multiempresa em uma plataforma robusta e de alta performance.
          </p>
          <div className="hero-actions-btns">
            <button onClick={() => handleNavClick('downloads')} className="btn btn-primary">
              <Download size={18} />
              <span>Baixar Agora</span>
            </button>
            <a href="#demonstracao-video" className="btn btn-secondary">
              <Play size={16} />
              <span>Ver Demonstração</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="hero-visual animate-fade-in">
          <div className="visual-window-frame">
            <div className="window-header">
              <div className="window-dots">
                <span className="w-dot red"></span>
                <span className="w-dot yellow"></span>
                <span className="w-dot green"></span>
              </div>
              <div className="window-address">financehub-desktop-v3.4.exe</div>
            </div>
            <div className="window-body">
              {/* Simulation of operational screen */}
              <div className="sim-grid">
                <div className="sim-sidebar">
                  <div className="sim-logo-dot"></div>
                  <div className="sim-nav-item active"></div>
                  <div className="sim-nav-item"></div>
                  <div className="sim-nav-item"></div>
                  <div className="sim-nav-item"></div>
                </div>
                <div className="sim-main">
                  <div className="sim-header-row">
                    <div className="sim-profile-block"></div>
                  </div>
                  <div className="sim-cards-row">
                    <div className="sim-card-block">
                      <span className="block-label">Faturamento Total</span>
                      <span className="block-value">R$ 520.400</span>
                      <span className="block-trend positive">↑ 18.5%</span>
                    </div>
                    <div className="sim-card-block">
                      <span className="block-label">Vendas PDV</span>
                      <span className="block-value">1.402</span>
                      <span className="block-trend positive">↑ 9.2%</span>
                    </div>
                  </div>
                  <div className="sim-graph-block">
                    <svg viewBox="0 0 400 150" className="sim-sparkline-svg">
                      <path
                        d="M 0 120 Q 50 80 100 90 T 200 40 T 300 70 T 400 20 L 400 150 L 0 150 Z"
                        fill="url(#sparkline-grad)"
                        stroke="var(--primary-color)"
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Por que escolher o FinanceHub?</h2>
            <p className="section-desc">
              Uma ferramenta desenhada para eliminar planilhas bagunçadas, processos manuais e softwares desintegrados.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="glass-card benefit-card">
                <div className="benefit-icon-wrapper">
                  {b.icon}
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="demonstracao-video" className="demo-section container">
        <div className="section-header text-center">
          <h2 className="section-title">O FinanceHub em ação</h2>
          <p className="section-desc">
            Assista à nossa demonstração guiada de 2 minutos e veja como operar seu caixa, gerenciar compras e calcular sua lucratividade.
          </p>
        </div>

        <div className="video-player-container glass-card">
          <div className="video-thumbnail">
            <div className="video-overlay-glow"></div>
            <div className="play-button-circle">
              <Play className="play-icon" size={32} />
            </div>
            <span className="video-duration">02:15</span>
            <div className="video-controls-simulation">
              <div className="video-progress-bar">
                <div className="video-progress-fill" style={{ width: '45%' }}></div>
              </div>
              <div className="video-bottom-controls">
                <div className="control-left">
                  <Play size={14} />
                  <span>Demonstração FinanceHub - Visão Geral</span>
                </div>
                <div className="control-right">
                  <span className="control-hd">HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="screenshots-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Uma experiência visual refinada</h2>
            <p className="section-desc">
              Telas limpas, focadas no operador e projetadas para evitar erros de digitação e digitação excessiva.
            </p>
          </div>

          <div className="screenshots-grid">
            {screenshots.map((s, i) => (
              <div key={i} className="screenshot-card glass-card">
                <div className={`screenshot-mockup ${s.color}`}>
                  {s.elements}
                </div>
                <div className="screenshot-info">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section container">
        <div className="cta-box glass-card">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <h2>Pronto para transformar a gestão da sua empresa?</h2>
            <p>
              Baixe a versão de testes gratuita hoje mesmo. Instalação rápida em menos de 1 minuto.
            </p>
            <div className="cta-buttons">
              <button onClick={() => handleNavClick('downloads')} className="btn btn-primary">
                <Download size={18} />
                <span>Instalar no Windows</span>
              </button>
              <button onClick={() => handleNavClick('planos')} className="btn btn-outline">
                <span>Ver Planos</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
