import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import './Planos.css';

export default function Planos() {
  const [billingCycle, setBillingCycle] = useState('mensal'); // 'mensal' ou 'anual'

  const plans = [
    {
      name: 'Básico',
      desc: 'Ideal para MEIs e comércios locais que estão começando a organizar suas finanças.',
      priceMensal: 'R$ 99',
      priceAnual: 'R$ 79',
      features: [
        '1 Licença Caixa (PDV)',
        'Controle de Caixa e Gaveta',
        'Gestão de Produtos e Grade Básica',
        'Faturamento Fiscal (NFC-e/NF-e)',
        'Controle Financeiro Simples',
        'Suporte por E-mail (24h)'
      ],
      notIncluded: [
        'Sistema Multiempresa',
        'Motor de Precificação Avançado',
        'Integração Logística e Fretes',
        'Assistente Virtual AI',
        'Conciliação Bancária OFX'
      ],
      cta: 'Assinar Plano Básico',
      popular: false
    },
    {
      name: 'Profissional',
      desc: 'O plano recomendado para lojas físicas em expansão e empresas que exigem controle total de estoque e lucro.',
      priceMensal: 'R$ 199',
      priceAnual: 'R$ 159',
      features: [
        'Licenças PDV Ilimitadas',
        'Controle de Caixa Multioperador',
        'Gestão de Produtos, Lotes e Grade Complexa',
        'Faturamento Fiscal Completo',
        'Financeiro Completo (DRE + OFX)',
        'Motor de Precificação Inteligente',
        'Sistema Multiempresa (Até 3 filiais)',
        'Integração Logística e Fretes',
        'Assistente Virtual AI (250 consultas/mês)',
        'Suporte Prioritário via Chat & Whats'
      ],
      notIncluded: [],
      cta: 'Assinar Plano Profissional',
      popular: true
    },
    {
      name: 'Enterprise',
      desc: 'Solução sob medida para redes de franquias, atacadistas e grandes redes de lojas.',
      priceMensal: 'Personalizado',
      priceAnual: 'Personalizado',
      features: [
        'Tudo do Plano Profissional',
        'Multiempresa Ilimitada',
        'Assistente Virtual AI Ilimitado',
        'Servidor em Nuvem Dedicado',
        'API de Integração Customizada',
        'Gerente de Conta Dedicado',
        'Treinamento de Equipe On-boarding',
        'Suporte 24/7 com SLA de 1h'
      ],
      notIncluded: [],
      cta: 'Contatar Vendas',
      popular: false
    }
  ];

  const comparisons = [
    { name: 'Licenças de PDV (Frente de Caixa)', basic: '1 Caixa', pro: 'Ilimitados', enterprise: 'Ilimitados' },
    { name: 'Emissão de Notas Fiscais (NFCe/NFe)', basic: 'Sim', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Gestão de Grade e Variações', basic: 'Básico', pro: 'Avançado', enterprise: 'Avançado' },
    { name: 'Motor de Precificação Tributária', basic: 'Não', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Controle de Lotes e Validades', basic: 'Não', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Sincronização Multiempresa', basic: 'Não', pro: 'Até 3 Filiais', enterprise: 'Ilimitado' },
    { name: 'DRE & Conciliação OFX', basic: 'Não', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Cotação de Frete & Logística', basic: 'Não', pro: 'Sim', enterprise: 'Sim' },
    { name: 'Assistente AI', basic: 'Não', pro: '250 consultas', enterprise: 'Ilimitado' },
    { name: 'Suporte Técnico', basic: 'E-mail (24h)', pro: 'Chat Prioritário', enterprise: 'SLA Dedicado 24/7' },
  ];

  return (
    <div className="plans-page container section-padding">
      <div className="glow-spot" style={{ top: '30%', right: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Tabela de Preços</div>
        <h1 className="page-title text-gradient">Planos Transparentes</h1>
        <p className="page-subtitle">
          Escolha o plano ideal para a sua estrutura comercial. Sem taxas ocultas, cancele quando quiser.
        </p>

        {/* Billing cycle switch */}
        <div className="billing-cycle-switch">
          <button
            onClick={() => setBillingCycle('mensal')}
            className={`switch-btn ${billingCycle === 'mensal' ? 'active' : ''}`}
          >
            Mensal
          </button>
          <button
            onClick={() => setBillingCycle('anual')}
            className={`switch-btn ${billingCycle === 'anual' ? 'active' : ''}`}
          >
            Anual <span className="discount-tag">Salvar 20%</span>
          </button>
        </div>
      </div>

      {/* Plans grid cards */}
      <div className="plans-grid animate-fade-in">
        {plans.map((p, i) => (
          <div key={i} className={`glass-card plan-card ${p.popular ? 'popular' : ''}`}>
            {p.popular && <span className="popular-badge">Mais Escolhido</span>}
            <div className="plan-header">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="plan-price">
                <span className="price-num">
                  {billingCycle === 'mensal' ? p.priceMensal : p.priceAnual}
                </span>
                {p.priceMensal !== 'Personalizado' && (
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
                onClick={() => alert(`Iniciando simulação de assinatura para plano ${p.name}`)}
                className={`btn w-full ${p.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {p.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature matrix comparison */}
      <div className="comparison-section section-padding">
        <h3 className="comparison-title text-center">Comparação Detalhada</h3>
        
        <div className="comparison-table-container glass-card">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Funcionalidade</th>
                <th>Básico</th>
                <th>Profissional</th>
                <th>Enterprise</th>
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
