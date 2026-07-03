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
      title: 'Dados por Empresa no Supabase',
      desc: 'O sistema usa Supabase Auth e banco de dados com isolamento por organização, mantendo cada conta com seus próprios dados operacionais.',
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
    'Usuários que precisam de um protótipo funcional para apresentação de TCC'
  ];

  const techStack = [
    { name: 'React + Vite', type: 'Interface web do sistema e do site institucional' },
    { name: 'Supabase', type: 'Autenticação, banco de dados e isolamento por organização' },
    { name: 'Vercel', type: 'Hospedagem da versão online do FinanceHub' },
    { name: 'Electron', type: 'Aplicativo desktop Windows que carrega a versão online' },
    { name: 'OpenStreetMap / Leaflet', type: 'Mapa real usado no módulo de logística e frete' }
  ];

  return (
    <div className="financehub-page container section-padding">
      <div className="glow-spot" style={{ top: '20%', right: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">O FinanceHub</div>
        <h1 className="page-title text-gradient">Gestão financeira e operacional para o TCC FinanceHub</h1>
        <p className="page-subtitle">
          Conheça o sistema real: uma aplicação web conectada ao Supabase, publicada na Vercel e disponível também como aplicativo Windows.
        </p>
      </div>

      <div className="concept-grid">
        <div className="glass-card concept-main">
          <h2>O que é o FinanceHub?</h2>
          <p>
            O FinanceHub é um sistema de gestão financeira e operacional construído em React. Ele reúne rotinas de vendas, PDV, produtos, estoque, clientes, fornecedores, funcionários, pedidos, caixa, financeiro, relatórios, agenda e logística em uma única interface.
          </p>
          <p style={{ marginTop: '1rem' }}>
            A versão atual usa Supabase para autenticação e persistência por empresa. O aplicativo Windows foi criado com Electron e carrega a versão online publicada, permitindo que novas alterações apareçam sem gerar um novo instalador.
          </p>
        </div>

        <div className="glass-card concept-problem">
          <h2>O Problema que Resolve</h2>
          <ul className="problem-list">
            <li><strong>Informação espalhada:</strong> vendas, produtos, caixa e financeiro passam a ficar no mesmo painel.</li>
            <li><strong>Controle de estoque:</strong> produtos com atenção ou nível crítico ficam destacados e podem gerar reposição.</li>
            <li><strong>Pedidos misturados:</strong> a área de pedidos separa abertos, aprovados, separados, em entrega e concluídos.</li>
            <li><strong>Frete manual:</strong> o módulo de logística aceita CEP, endereço completo e múltiplas entregas na rota.</li>
          </ul>
        </div>
      </div>

      <div className="grid-two-cols section-padding">
        <div className="audience-section">
          <h2>Quem pode usar o FinanceHub?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A plataforma foi criada como um sistema de gestão para apresentação acadêmica e validação de fluxos reais de uma operação comercial.
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
          <h2>Arquitetura e Tecnologia</h2>
          <p>
            A base técnica atual prioriza uma aplicação web funcional, dados por conta e distribuição simples pelo navegador ou pelo aplicativo Windows.
          </p>
        </div>

        <div className="arch-grid">
          <div className="arch-text">
            <h3>Arquitetura Atual</h3>
            <p>
              O frontend do sistema foi desenvolvido em React e Vite. A autenticação e os dados operacionais são carregados do Supabase, com funções RPC para conta, organização e coleções da aplicação.
            </p>
            <p style={{ marginTop: '1rem' }}>
              O aplicativo desktop em Electron não embute o frontend dentro do executável: ele abre a URL oficial hospedada na Vercel. Assim, quando o site online recebe uma atualização, o aplicativo exibe a nova versão na próxima abertura ou atualização.
            </p>
          </div>

          <div className="tech-stack-card">
            <h3>Stack Tecnológica Real</h3>
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
