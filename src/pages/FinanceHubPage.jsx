import React from 'react';
import { Target, Shield, Cpu, Zap, Settings, Globe, CheckCircle2 } from 'lucide-react';
import './FinanceHubPage.css';

export default function FinanceHubPage() {
  const differentials = [
    {
      title: 'Web App com Desktop Windows',
      desc: 'O FinanceHub roda online pela Vercel e também possui um aplicativo Windows em Electron que abre sempre a versão mais recente do site.',
      icon: <Globe className="text-cyan" size={24} />
    },
    {
      title: 'Dados por Empresa',
      desc: 'Cada empresa acessa seu próprio ambiente, mantendo cadastros, vendas e rotinas operacionais separados por conta.',
      icon: <Shield className="text-purple" size={24} />
    },
    {
      title: 'Interface Desktop-First',
      desc: 'A estrutura foi pensada para uso em computador, com menu lateral, painéis de gestão, tabelas, gráficos e fluxos operacionais.',
      icon: <Zap className="text-orange" size={24} />
    },
    {
      title: 'Módulos Integrados',
      desc: 'Vendas, produtos, estoque, pedidos, caixa, financeiro, relatórios, frete, agenda, fornecedores e equipe ficam no mesmo ambiente.',
      icon: <Cpu className="text-indigo" size={24} />
    }
  ];

  const targetAudience = [
    'Pequenos comércios que precisam organizar vendas, estoque e caixa',
    'Empresas que querem substituir planilhas por um painel único',
    'Operações que precisam cadastrar produtos, clientes, fornecedores e funcionários',
    'Negócios que precisam acompanhar pedidos por status',
    'Equipes que precisam centralizar rotina comercial, estoque e financeiro'
  ];

  const techStack = [
    { name: 'Aplicação web', type: 'Interface online do sistema e da área institucional' },
    { name: 'Ambiente seguro', type: 'Login, organização por empresa e dados separados por conta' },
    { name: 'Hospedagem online', type: 'Publicação da versão oficial do FinanceHub' },
    { name: 'Aplicativo Windows', type: 'Janela desktop que carrega a versão online oficial' },
    { name: 'Mapa real', type: 'Base visual usada no módulo de logística e frete' }
  ];

  return (
    <div className="financehub-page container section-padding">
      <div className="glow-spot" style={{ top: '20%', right: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">O FinanceHub</div>
        <h1 className="page-title text-gradient">Gestão financeira e operacional para empresas</h1>
        <p className="page-subtitle">
          Conheça uma plataforma web para organizar vendas, estoque, financeiro, pedidos, agenda e logística em uma experiência desktop.
        </p>
      </div>

      <div className="concept-grid">
        <div className="glass-card concept-main">
          <h2>O que é o FinanceHub?</h2>
          <p>
            O FinanceHub é um sistema de gestão financeira e operacional construído em React. Ele reúne rotinas de vendas, PDV, produtos, estoque, clientes, fornecedores, funcionários, pedidos, caixa, financeiro, relatórios, agenda e logística em uma única interface.
          </p>
          <p style={{ marginTop: '1rem' }}>
            O aplicativo Windows carrega a versão online oficial, permitindo que melhorias publicadas no sistema apareçam na próxima abertura ou atualização.
          </p>
        </div>

        <div className="glass-card concept-problem">
          <h2>O Problema que Resolve</h2>
          <ul className="problem-list">
            <li><strong>Informação espalhada:</strong> vendas, produtos, caixa e financeiro passam a ficar no mesmo painel.</li>
            <li><strong>Controle de estoque:</strong> produtos com atenção ou nível crítico ficam destacados e podem gerar pedido de compra.</li>
            <li><strong>Pedidos misturados:</strong> a área de pedidos separa abertos, aprovados, separados, em entrega e concluídos.</li>
            <li><strong>Frete manual:</strong> o módulo de logística aceita CEP, endereço completo e múltiplas entregas na rota.</li>
          </ul>
        </div>
      </div>

      <div className="grid-two-cols section-padding">
        <div className="audience-section">
          <h2>Quem pode usar o FinanceHub?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A plataforma foi criada para empresas que precisam organizar rotinas comerciais, financeiras e operacionais em uma interface única.
          </p>
          <div className="audience-list">
            {targetAudience.map((item, i) => (
              <div key={i} className="audience-item">
                <CheckCircle2 size={18} className="text-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="differentials-section">
          <h2>Diferenciais Atuais</h2>
          <div className="differentials-grid">
            {differentials.map((item, i) => (
              <div key={i} className="diff-card">
                <div className="diff-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="architecture-section glass-card">
        <div className="arch-header">
          <h2>Estrutura do Produto</h2>
          <p>
            A estrutura atual prioriza uma aplicação web funcional, dados por empresa e acesso simples pelo navegador ou pelo aplicativo Windows.
          </p>
        </div>

        <div className="arch-grid">
          <div className="arch-text">
            <h3>Modelo de Funcionamento</h3>
            <p>
              O FinanceHub funciona como uma plataforma online com acesso por conta, organização dos dados por empresa e módulos integrados para operação diária.
            </p>
            <p style={{ marginTop: '1rem' }}>
              O aplicativo desktop não embute uma versão antiga do sistema: ele abre a versão online oficial. Assim, quando o sistema recebe uma atualização, o aplicativo exibe a nova versão na próxima abertura ou atualização.
            </p>
          </div>

          <div className="tech-stack-card">
            <h3>Componentes do Produto</h3>
            <div className="tech-list">
              {techStack.map((tech, i) => (
                <div key={i} className="tech-item">
                  <div className="tech-dot-indicator"></div>
                  <div>
                    <strong>{tech.name}</strong>
                    <span>{tech.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
