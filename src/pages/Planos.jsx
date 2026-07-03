import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import './Planos.css';

export default function Planos() {
  const [billingCycle, setBillingCycle] = useState('mensal');

  const plans = [
    {
      name: 'Versão TCC',
      desc: 'Versão atual do projeto FinanceHub para apresentação, testes e validação dos fluxos principais.',
      priceMensal: 'Gratuito',
      priceAnual: 'Gratuito',
      features: [
        'Acesso ao sistema web publicado na Vercel',
        'Instalador Windows com Electron',
        'Login e cadastro com Supabase',
        'Vendas, PDV, produtos, estoque e caixa',
        'Pedidos, financeiro, relatórios, agenda e frete',
        'Dados operacionais por organização'
      ],
      notIncluded: [
        'Cobrança real por assinatura',
        'Emissão fiscal homologada',
        'Integrações automáticas de pagamento',
        'Conciliação bancária automática'
      ],
      cta: 'Usar versão atual',
      popular: true
    },
    {
      name: 'Evolução Comercial',
      desc: 'Ideia futura para transformar o protótipo em produto com cobrança, permissões e recursos avançados.',
      priceMensal: 'Planejado',
      priceAnual: 'Planejado',
      features: [
        'Planos e limites de uso',
        'Permissões por usuário',
        'Tabelas relacionais por módulo',
        'Relatórios exportáveis',
        'Rotas por API externa',
        'Integrações comerciais validadas'
      ],
      notIncluded: [
        'Ainda não disponível na versão atual'
      ],
      cta: 'Em planejamento',
      popular: false
    },
    {
      name: 'Recursos Futuros',
      desc: 'Funcionalidades que podem ser adicionadas depois que o protótipo estabilizar.',
      priceMensal: 'Futuro',
      priceAnual: 'Futuro',
      features: [
        'OAuth Google com redirects finais configurados',
        'Proteção contra senhas vazadas no Supabase Auth',
        'Exportação real de relatórios em PDF',
        'Cálculo real de rotas por API externa',
        'Migração do JSON operacional para tabelas relacionais',
        'Permissões multiusuário completas'
      ],
      notIncluded: [],
      cta: 'Roadmap',
      popular: false
    }
  ];

  const comparisons = [
    { name: 'Sistema web React + Vite', basic: 'Sim', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Aplicativo Windows Electron', basic: 'Sim', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Supabase Auth e dados por organização', basic: 'Sim', pro: 'Sim', enterprise: 'Sim' },
    { name: 'PDV, estoque, financeiro e pedidos', basic: 'Sim', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Emissão fiscal real', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
    { name: 'Integrações automáticas de pagamento', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
    { name: 'Conciliação bancária automática', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
    { name: 'Rotas por API externa', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
    { name: 'Cobrança por assinatura', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
    { name: 'Suporte com SLA comercial', basic: 'Não', pro: 'Planejado', enterprise: 'Planejado' },
  ];

  return (
    <div className="plans-page container section-padding">
      <div className="glow-spot" style={{ top: '30%', right: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Disponibilidade</div>
        <h1 className="page-title text-gradient">Versões e Roadmap</h1>
        <p className="page-subtitle">
          A versão atual do FinanceHub é um projeto funcional para TCC. Esta página mostra o que existe hoje e o que pode evoluir no futuro.
        </p>

        <div className="billing-cycle-switch">
          <button
            onClick={() => setBillingCycle('mensal')}
            className={`switch-btn ${billingCycle === 'mensal' ? 'active' : ''}`}
          >
            Atual
          </button>
          <button
            onClick={() => setBillingCycle('anual')}
            className={`switch-btn ${billingCycle === 'anual' ? 'active' : ''}`}
          >
            Futuro <span className="discount-tag">Roadmap</span>
          </button>
        </div>
      </div>

      <div className="plans-grid animate-fade-in">
        {plans.map((p, i) => (
          <div key={i} className={`glass-card plan-card ${p.popular ? 'popular' : ''}`}>
            {p.popular && <span className="popular-badge">Versão Atual</span>}
            <div className="plan-header">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="plan-price">
                <span className="price-num">
                  {billingCycle === 'mensal' ? p.priceMensal : p.priceAnual}
                </span>
                {p.priceMensal !== 'Gratuito' && p.priceMensal !== 'Planejado' && p.priceMensal !== 'Futuro' && (
                  <span className="price-period">/ mês</span>
                )}
              </div>
            </div>

            <div className="divider"></div>

            <div className="plan-body">
              <ul>
                {p.features.map((feat, fIdx) => (
                  <li key={fIdx} className="feature-item included">
                    <Check size={16} className="text-green" />
                    <span>{feat}</span>
                  </li>
                ))}
                {p.notIncluded.map((feat, fIdx) => (
                  <li key={fIdx} className="feature-item excluded">
                    <X size={16} className="text-red" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="plan-footer">
              <button
                onClick={() => alert(`${p.name}: informação exibida para apresentação do projeto.`)}
                className={`btn w-full ${p.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {p.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="comparison-section section-padding">
        <h3 className="comparison-title text-center">Comparação Realista</h3>
        <div className="comparison-table-container glass-card">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Funcionalidade</th>
                <th>Atual</th>
                <th>Evolução</th>
                <th>Futuro</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i}>
                  <td className="feat-name">
                    <span>{row.name}</span>
                  </td>
                  <td>{row.basic}</td>
                  <td className="text-pro-weight">{row.pro}</td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
