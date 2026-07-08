import React, { useState } from 'react';
import { 
  BarChart, Percent, Box, ShoppingCart, KeyRound, DollarSign, 
  FileText, Users, Truck, MessageSquare, Building2, CheckCircle 
} from 'lucide-react';
import './Funcionalidades.css';

export default function Funcionalidades() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = [
    {
      id: 'dashboard',
      icon: <BarChart size={20} />,
      name: 'Dashboard Gerencial',
      desc: 'Sua central de acompanhamento. O Dashboard consolida dados de vendas, fluxo de caixa, estoque e indicadores principais da empresa.',
      benefits: [
        'Indicadores carregados a partir dos dados salvos da organização.',
        'Gráficos interativos de receitas versus despesas.',
        'Acompanhamento de faturamento, volume de vendas e ticket médio.',
        'Alertas de estoque abaixo do ponto de ressuprimento.'
      ],
      useCase: 'O administrador abre o sistema e acompanha vendas, estoque baixo, caixa e financeiro em uma tela mais objetiva.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Dashboard Consolidado</span>
          </div>
          <div className="mock-ui-content">
            <div className="mock-summary-cards">
              <div className="m-card">
                <span className="m-lbl">Faturamento Hoje</span>
                <strong className="m-val text-green">R$ 18.240,00</strong>
                <span className="m-sub text-green">↑ 14% vs ontem</span>
              </div>
              <div className="m-card">
                <span className="m-lbl">Ticket Médio</span>
                <strong className="m-val">R$ 142,50</strong>
                <span className="m-sub">Baseado em 128 vendas</span>
              </div>
            </div>
            <div className="mock-bar-chart-visual">
              <div className="mock-bar" style={{ height: '35%' }}><span className="bar-label">Matriz</span></div>
              <div className="mock-bar" style={{ height: '75%' }}><span className="bar-label">Filial 1</span></div>
              <div className="mock-bar" style={{ height: '55%' }}><span className="bar-label">Filial 2</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      icon: <Percent size={20} />,
      name: 'Motor de Precificação',
      desc: 'Um módulo de simulação para apoiar decisões de preço. Ele permite comparar custo, margem desejada e preço final sem depender de planilhas externas.',
      benefits: [
        'Análise de custo, preço e margem.',
        'Simulação de preço sugerido.',
        'Apoio ao cadastro e revisão de produtos.',
        'Visualização mais clara do impacto da margem.'
      ],
      useCase: 'O gerente de compras recebe um lote de produtos com aumento de custo do fornecedor. Ele abre o simulador, ajusta o custo e recalcula a tabela de preços de forma que a margem da empresa seja protegida.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Simulador de Custos e Margem</span>
          </div>
          <div className="mock-ui-content flex-col">
            <div className="mock-pricing-inputs">
              <div className="inp-row"><span>Custo Original:</span> <strong>R$ 80,00</strong></div>
              <div className="inp-row"><span>Custos adicionais:</span> <strong className="text-red">+ R$ 14,40</strong></div>
              <div className="inp-row"><span>Margem Desejada:</span> <strong className="text-cyan">30.00% (R$ 38,40)</strong></div>
            </div>
            <div className="mock-pricing-result">
              <span>PREÇO DE VENDA RECOMENDADO</span>
              <strong className="text-green">R$ 164,28</strong>
              <div className="badge badge-success" style={{ fontSize: '0.6rem', marginTop: '0.25rem' }}>Markup: 2.05x</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      icon: <Box size={20} />,
      name: 'Gestão de Produtos',
      desc: 'Cadastre e controle produtos com nome, SKU, categoria, custo, preço, estoque e estoque mínimo. A tela também permite editar produtos e acompanhar itens que precisam de reposição.',
      benefits: [
        'Cadastro e edição de produtos.',
        'Controle de preço, custo e estoque.',
        'Destaque visual para estoque baixo ou crítico.',
        'Fluxo de reposição com fornecedor sugerido.'
      ],
      useCase: 'Ao identificar um produto com estoque baixo, o administrador pode iniciar uma reposição para fornecedor e registrar o pedido de compra.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Ficha de Produto</span>
          </div>
          <div className="mock-ui-content">
            <div className="mock-product-grid">
              <div className="prod-spec">
                <span>SKU: PROD-88219</span>
                <strong>Camiseta Slim Preta</strong>
              </div>
              <div className="prod-inventory-table">
                <div className="table-row header"><span>Grade</span> <span>Qtd</span> <span>Preço</span></div>
                <div className="table-row"><span>Tamanho P</span> <strong>12 un</strong> <span>R$ 89,90</span></div>
                <div className="table-row text-red"><span>Tamanho M</span> <strong>0 un</strong> <span>R$ 89,90</span></div>
                <div className="table-row"><span>Tamanho G</span> <strong>24 un</strong> <span>R$ 89,90</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pdv',
      icon: <ShoppingCart size={20} />,
      name: 'Ponto de Venda (PDV)',
      desc: 'Frente de caixa para registrar vendas, selecionar produtos, quantidade, desconto e forma de recebimento. O fluxo valida caixa aberto, estoque disponível e atualiza os registros do sistema.',
      benefits: [
        'Validação de caixa aberto antes da venda.',
        'Baixa de estoque após finalizar venda.',
        'Registro da forma de recebimento.',
        'Histórico de vendas separado da tela de registro.'
      ],
      useCase: 'O operador escolhe o produto, informa quantidade, desconto e forma de recebimento. Ao confirmar, a venda é registrada e o estoque é atualizado.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Frente de Caixa Ativo</span>
          </div>
          <div className="mock-ui-content pdv-style">
            <div className="pdv-checkout-screen">
              <div className="screen-list">
                <div className="list-item"><span>1x Coca Cola 350ml</span> <span>R$ 6,00</span></div>
                <div className="list-item"><span>1x Pizza Congelada</span> <span>R$ 22,90</span></div>
              </div>
              <div className="screen-action">
                <div className="subtotal">R$ 28,90</div>
                <button className="btn-pay-pix">Confirmar venda</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cash',
      icon: <KeyRound size={20} />,
      name: 'Controle de Caixa',
      desc: 'Controle da situação do caixa, abertura, fechamento e acompanhamento do saldo esperado com base nas vendas registradas.',
      benefits: [
        'Abertura e fechamento de caixa.',
        'Saldo esperado calculado a partir das vendas.',
        'Histórico de caixa disponível para consulta.',
        'Integração com o fluxo de vendas.'
      ],
      useCase: 'Ao final do expediente, o operador declara os valores existentes na gaveta. O sistema confronta as informações com os registros do sistema e aponta eventuais quebras ou sobras.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Fechamento de Caixa</span>
          </div>
          <div className="mock-ui-content flex-col">
            <div className="cash-audit">
              <div className="audit-row"><span>Abertura de Caixa:</span> <strong>R$ 150,00</strong></div>
              <div className="audit-row"><span>Entradas (Vendas):</span> <strong className="text-green">+ R$ 1.840,00</strong></div>
              <div className="audit-row"><span>Sangrias (Retiradas):</span> <strong className="text-red">- R$ 1.200,00</strong></div>
            </div>
            <div className="cash-balance-highlight">
              <span>SALDO ESPERADO EM CAIXA</span>
              <strong>R$ 790,00</strong>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'finance',
      icon: <DollarSign size={20} />,
      name: 'Financeiro',
      desc: 'Área para organizar contas, status pago ou pendente, fluxo de caixa e registros financeiros gerados por vendas e reposições.',
      benefits: [
        'Contas a pagar e receber.',
        'Alteração de status pago ou pendente.',
        'Exclusão de registros financeiros.',
        'Visão de fluxo de caixa e totais.'
      ],
      useCase: 'O administrador registra uma conta, acompanha o vencimento e altera o status quando a obrigação é concluída.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Fluxo Financeiro</span>
          </div>
          <div className="mock-ui-content">
            <div className="dre-mock">
              <div className="dre-line"><span>(+) Receita Bruta</span> <span className="text-green">R$ 125.400,00</span></div>
              <div className="dre-line"><span>(-) Saídas registradas</span> <span className="text-red">R$ 18.200,00</span></div>
              <div className="dre-line"><span>(-) Custo Mercadorias (CMV)</span> <span className="text-red">R$ 48.000,00</span></div>
              <div className="dre-line highlight"><span>(=) Lucro Operacional</span> <strong className="text-cyan">R$ 59.200,00</strong></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reports',
      icon: <FileText size={20} />,
      name: 'Relatórios',
      desc: 'Central de indicadores visuais com gráficos, tabelas e resumos para acompanhar vendas, produtos, caixa e financeiro.',
      benefits: [
        'Gráficos e KPIs operacionais.',
        'Resumo de formas de recebimento.',
        'Ranking de produtos vendidos.',
        'Apoio visual para análise do negócio.'
      ],
      useCase: 'O proprietário da empresa gera o relatório de Curva ABC de Produtos para identificar quais itens estão parados no estoque e programar uma queima de estoque.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Curva ABC de Vendas</span>
          </div>
          <div className="mock-ui-content flex-col">
            <div className="abc-chart">
              <div className="abc-row"><span className="badge">A</span> <span>1. Notebook Intel i5</span> <strong>72% do Lucro</strong></div>
              <div className="abc-row"><span className="badge" style={{backgroundColor: 'var(--primary-glow)'}}>B</span> <span>2. Teclado Mecânico</span> <strong>18% do Lucro</strong></div>
              <div className="abc-row"><span className="badge" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>C</span> <span>3. Cabo HDMI 2.0</span> <strong>10% do Lucro</strong></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'registrations',
      icon: <Users size={20} />,
      name: 'Cadastros',
      desc: 'Base de cadastros para clientes, fornecedores, funcionários, serviços e produtos, com formulários e edição dos principais registros.',
      benefits: [
        'Cadastro de clientes.',
        'Cadastro de fornecedores.',
        'Cadastro de funcionários e operadores.',
        'Edição dos registros principais.'
      ],
      useCase: 'O administrador cadastra cliente, produto ou fornecedor e usa esses dados nos fluxos de venda, compra e financeiro.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Ficha Cadastral</span>
          </div>
          <div className="mock-ui-content">
            <div className="customer-card">
              <strong>Alfa Distribuidores Ltda</strong>
              <span>Email: contato@empresa.com</span>
              <div className="credit-bar">
                <span>Limite Crédito: R$ 10.000</span>
                <div className="bar-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'logistics',
      icon: <Truck size={20} />,
      name: 'Logística e Fretes',
      desc: 'Módulo para montar rotas e estimar frete usando mapa real. Aceita CEP, endereço completo, preenchimento automático por CEP e mais de uma entrega na mesma rota.',
      benefits: [
        'Mapa real com OpenStreetMap e Leaflet.',
        'Busca de endereço por CEP com ViaCEP/BrasilAPI.',
        'Validação de cidade e estado para evitar marcações erradas.',
        'Rotas com múltiplas entregas.'
      ],
      useCase: 'O usuário informa origem e entregas. O mapa marca os pontos corretos e calcula uma rota visual para apoiar a entrega.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Cotação de Frete</span>
          </div>
          <div className="mock-ui-content flex-col">
            <div className="logistics-quote">
              <div className="quote-item active"><span>Rota principal</span> <strong>Entrega 1 - validada</strong></div>
              <div className="quote-item"><span>Entrega adicional</span> <strong>CEP preenchido</strong></div>
              <div className="quote-item"><span>Frete estimado</span> <strong>Distância + peso</strong></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'assistant',
      icon: <MessageSquare size={20} />,
      name: 'Assistente Operacional',
      desc: 'Assistente por consultas estruturadas. Ele interpreta comandos simples por palavras-chave e retorna informações operacionais, sem prometer IA generativa completa.',
      benefits: [
        'Consultas por exemplos prontos.',
        'Busca de produto mais vendido.',
        'Respostas baseadas em dados operacionais.',
        'Apoio rápido para perguntas recorrentes.'
      ],
      useCase: 'O usuário seleciona uma consulta como "produto mais vendido do mês" e o sistema retorna uma resposta baseada nos registros disponíveis.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Assistente FinanceHub</span>
          </div>
          <div className="mock-ui-content chat-style">
            <div className="chat-msg user">Produto mais vendido do mês</div>
            <div className="chat-msg ai">Consulta convertida: <strong>topProducts(month)</strong></div>
          </div>
        </div>
      )
    },
    {
      id: 'multi',
      icon: <Building2 size={20} />,
      name: 'Organização por Empresa',
      desc: 'Cada cadastro empresarial possui um ambiente próprio. Os dados operacionais são carregados para essa empresa, evitando misturar informações de contas diferentes.',
      benefits: [
        'Conta vinculada a uma organização.',
        'Dados isolados por empresa.',
        'Base preparada para evoluir para multiusuário.',
        'Sessão persistente para o usuário.'
      ],
      useCase: 'Uma nova conta começa vazia e passa a carregar somente os dados salvos no banco da sua própria organização.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Organização da Conta</span>
          </div>
          <div className="mock-ui-content">
            <div className="multi-list">
              <div className="multi-row"><span>Empresa cadastrada</span> <strong>Ativa</strong></div>
              <div className="multi-row"><span>Dados operacionais</span> <strong>Por empresa</strong></div>
              <div className="multi-row"><span>Sessão</span> <strong className="text-cyan">Persistente</strong></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const activeModuleData = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <div className="features-page container section-padding">
      <div className="glow-spot" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-spot-secondary" style={{ top: '60%', right: '10%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Módulos do Sistema</div>
        <h1 className="page-title text-gradient">Funcionalidades do FinanceHub</h1>
        <p className="page-subtitle">
          Explore os recursos atuais do sistema: gestão comercial, estoque, financeiro, pedidos, frete, agenda e dados por empresa.
        </p>
      </div>

      <div className="features-layout">
        {/* Navigation Sidebar */}
        <aside className="features-sidebar">
          <nav className="features-nav">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`features-nav-btn ${activeModule === m.id ? 'active' : ''}`}
              >
                <span className="nav-btn-icon">{m.icon}</span>
                <span className="nav-btn-text">{m.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Details Display area */}
        <main className="features-display animate-fade-in" key={activeModule}>
          <div className="glass-card feature-detail-card">
            <div className="detail-header">
              <div className="detail-title-wrapper">
                <span className="detail-icon-bg">{activeModuleData.icon}</span>
                <h2>{activeModuleData.name}</h2>
              </div>
              <span className="badge">Módulo atual</span>
            </div>

            <div className="detail-body-grid">
              <div className="detail-text-col">
                <h3>Descrição</h3>
                <p>{activeModuleData.desc}</p>

                <h3 style={{ marginTop: '1.5rem' }}>Benefícios Principais</h3>
                <ul className="detail-benefits-list">
                  {activeModuleData.benefits.map((b, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="text-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ marginTop: '1.5rem' }}>Exemplo Prático</h3>
                <div className="detail-use-case">
                  <p><strong>Cenário de uso:</strong> {activeModuleData.useCase}</p>
                </div>
              </div>

              <div className="detail-visual-col">
                <h3>Visualização da Operação</h3>
                <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>Representação conceitual das telas operacionais do FinanceHub.</p>
                <div className="mockup-container">
                  {activeModuleData.mockup}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
