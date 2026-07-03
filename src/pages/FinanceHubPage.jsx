import React from 'react';
import { Target, Shield, Cpu, Zap, Settings, Globe, CheckCircle2 } from 'lucide-react';
import './FinanceHubPage.css';

export default function FinanceHubPage() {
  const differentials = [
    {
      title: 'Arquitetura Híbrida & Offline-First',
      desc: 'Funciona mesmo sem internet. Suas vendas de PDV não param caso a conexão caia. Os dados são sincronizados automaticamente assim que restabelecida.',
      icon: <Globe className="text-cyan" size={24} />
    },
    {
      title: 'Segurança de Nível Bancário',
      desc: 'Banco de dados local criptografado e backups automáticos em nuvem. Suas informações financeiras e dados de clientes totalmente protegidos contra perdas.',
      icon: <Shield className="text-purple" size={24} />
    },
    {
      title: 'Processamento Ultra Rápido',
      desc: 'Desenvolvido com tecnologia de ponta, permitindo abrir o caixa, consultar produtos e emitir cupons em menos de 1 segundo.',
      icon: <Zap className="text-orange" size={24} />
    },
    {
      title: 'Precificação Inteligente Nativa',
      desc: 'Diferente de sistemas que dependem de planilhas extras, o motor de cálculo tributário e de lucro faz parte do núcleo do sistema.',
      icon: <Cpu className="text-indigo" size={24} />
    }
  ];

  const targetAudience = [
    'Comércio Varejista (Lojas de roupas, calçados, eletrônicos)',
    'Distribuidores e Atacadistas de pequeno/médio porte',
    'Prestadores de Serviço que demandam gestão de ordens e faturamento',
    'Empresas Multiunidades (Matriz e Filiais unificadas)',
    'Empresários que desejam sair do controle informal por planilhas'
  ];

  const techStack = [
    { name: 'Node.js & Electron', type: 'Estrutura Desktop / Cross-platform' },
    { name: 'React.js', type: 'Interface de Usuário Reativa' },
    { name: 'C# / .NET Core', type: 'Motor Fiscal de Alta Performance' },
    { name: 'PostgreSQL / SQLite', type: 'Bancos de dados Híbridos (Local + Nuvem)' },
    { name: 'REST APIs & Webhooks', type: 'Conectividade e Integrações de Terceiros' }
  ];

  return (
    <div className="financehub-page container section-padding">
      <div className="glow-spot" style={{ top: '20%', right: '10%' }}></div>
      
      {/* Intro Section */}
      <div className="section-header text-center animate-fade-in">
        <div className="badge">O FinanceHub</div>
        <h1 className="page-title text-gradient">A Solução Definitiva para a Gestão da sua Empresa</h1>
        <p className="page-subtitle">
          Entenda a visão, a arquitetura e a tecnologia por trás do software que está revolucionando a gestão de negócios e finanças corporativas.
        </p>
      </div>

      {/* Concept Grid */}
      <div className="concept-grid">
        <div className="glass-card concept-main">
          <h2>O que é o FinanceHub?</h2>
          <p>
            O FinanceHub é um software completo de gestão empresarial desktop com sincronização em nuvem, desenvolvido especificamente para pequenas e médias empresas. Ele consolida em um único ecossistema seguro todas as operações comerciais: desde a frente de caixa (PDV) rápida até o controle de custos, conciliação bancária, faturamento tributário e motor inteligente de precificação de produtos.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Nossa missão é eliminar a fragmentação operacional. Em vez de usar um software para PDV, outro para o contas a pagar e uma planilha para calcular preços, o FinanceHub resolve tudo de forma integrada e automática.
          </p>
        </div>

        <div className="glass-card concept-problem">
          <h2>O Problema que Resolve</h2>
          <ul className="problem-list">
            <li><strong>Desperdício de Lucro:</strong> Erros de precificação que ignoram impostos e custos fixos.</li>
            <li><strong>Sistemas Lentos:</strong> Frente de caixa que trava em horários de pico ou depende 100% de internet.</li>
            <li><strong>Desorganização de Dados:</strong> Falta de comunicação entre estoque, vendas e fluxo de caixa.</li>
            <li><strong>Burocracia Fiscal:</strong> Dificuldade e lentidão para emitir NFC-e, NF-e e controlar impostos.</li>
          </ul>
        </div>
      </div>

      {/* Target Audience & Differentials */}
      <div className="grid-two-cols section-padding">
        <div className="audience-section">
          <h2>Quem utiliza o FinanceHub?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A plataforma foi modelada para ser adaptável e intuitiva, atendendo desde pequenos comércios locais até redes de lojas em expansão.
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
          <h2>Nossos Diferenciais</h2>
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

      {/* Architecture & Tech Stack */}
      <div className="architecture-section glass-card">
        <div className="arch-header">
          <h2>Arquitetura e Tecnologia</h2>
          <p>
            Desenvolvido sobre pilares modernos para garantir integridade de dados, alta disponibilidade e compatibilidade.
          </p>
        </div>

        <div className="arch-grid">
          <div className="arch-text">
            <h3>Arquitetura Híbrida Inteligente</h3>
            <p>
              O FinanceHub utiliza um banco de dados local embarcado e altamente otimizado para operações instantâneas (SQLite). Paralelamente, um agente de background monitora a conectividade com a nuvem, sincronizando as transações com um banco de dados PostgreSQL centralizado em tempo real.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Isso garante que, mesmo que a internet do seu estabelecimento falhe, as vendas no PDV, consultas de preços e movimentações de estoque continuem funcionando sem nenhuma lentidão ou interrupção.
            </p>
          </div>

          <div className="tech-stack-card">
            <h3>Stack Tecnológica Oficial</h3>
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
