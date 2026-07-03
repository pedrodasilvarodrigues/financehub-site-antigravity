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
      desc: 'Sua cabine de comando empresarial. O Dashboard consolida dados de vendas do PDV, fluxo de caixa e estoques críticos de todas as suas empresas de forma instantânea. Tenha acesso a indicadores cruciais como ticket médio, margem de lucro e faturamento diário sem precisar gerar relatórios complexos.',
      benefits: [
        'Atualização em tempo real de transações do PDV.',
        'Gráficos interativos de receitas versus despesas.',
        'Acompanhamento de metas de faturamento mensal.',
        'Alertas de estoque abaixo do ponto de ressuprimento.'
      ],
      useCase: 'O diretor financeiro abre o sistema no início do dia e analisa os gráficos de faturamento acumulado de todas as filiais e toma decisões baseadas em dados consolidados.',
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
      desc: 'Um motor de simulação inteligente para eliminar prejuízos operacionais. Insira o custo de aquisição do produto, adicione os impostos (ICMS, IPI, PIS, COFINS), comissões de vendedores, custos fixos atribuídos e sua margem de contribuição desejada. O sistema calcula e sugere o markup e o preço de venda ideal.',
      benefits: [
        'Cálculo preciso de impostos por região e regime tributário.',
        'Identificação do Ponto de Equilíbrio (Break-Even) do produto.',
        'Sugestão automática de Markup de acordo com custos fixos.',
        'Alertas de preços defasados devido ao aumento de custos.'
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
              <div className="inp-row"><span>Impostos (NFe):</span> <strong className="text-red">+ 18.00% (R$ 14,40)</strong></div>
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
      desc: 'Cadastre e controle seus produtos com facilidade. Suporta grades complexas de produtos (cor, tamanho, voltagem), cadastro de múltiplos códigos de barras (EAN), controle de lote, rastreamento de data de validade, kit de produtos, tabela de preços diferenciada e controle de estoque mínimo.',
      benefits: [
        'Estruturação rápida de produtos em grade (Ex: P, M, G).',
        'Controle rígido de validade para evitar perdas.',
        'Tabela de preços múltiplos (Varejo, Atacado, Distribuidor).',
        'Histórico completo de movimentações de entrada e saída.'
      ],
      useCase: 'Uma loja de calçados cadastra um tênis esportivo e define rapidamente as variações de cores (Azul, Preto) e tamanhos (38 a 43) em lote, com estoques individuais para cada variação.',
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
      desc: 'Sua frente de caixa de alta performance. Desenvolvido para funcionar 100% offline, processando compras, calculando descontos e registrando pagamentos instantaneamente. Integração direta com balanças comerciais, leitores de código de barras, impressoras térmicas e faturamento automático de NFC-e.',
      benefits: [
        'Operação offline-first garantida contra quedas de internet.',
        'Recebimento via PIX automático com confirmação na tela.',
        'Atalhos de teclado configuráveis para operadores rápidos.',
        'Suspensão de vendas (deixar compra em espera).'
      ],
      useCase: 'O operador passa os produtos de um cliente com leitor de código de barras, o sistema sugere pagamento via PIX, gera um QR Code dinâmico, confirma a transação em 2 segundos e imprime o cupom fiscal.',
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
                <button className="btn-pay-pix">F1 - Pagar com PIX</button>
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
      desc: 'Controle completo da movimentação diária do dinheiro no PDV. Gerencie aberturas com saldo inicial, fechamento cego (onde o operador digita o saldo físico para auditoria), suprimentos (entrada de dinheiro para troco), sangrias (retiradas de valores por segurança) e relatórios detalhados de quebras de caixa.',
      benefits: [
        'Fechamento de caixa cego para evitar desvios.',
        'Auditoria detalhada de suprimentos e sangrias.',
        'Registro de movimentações por operador de caixa.',
        'Envio de alertas de limite de dinheiro em gaveta.'
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
      desc: 'Ferramentas de tesouraria de alto nível corporativo. O módulo financeiro do FinanceHub oferece contas a pagar e receber integrados às compras e vendas, DRE gerencial automatizado (demonstrativo de resultados do exercício), fluxo de caixa previsto versus realizado, e conciliação bancária por importação de arquivos OFX.',
      benefits: [
        'DRE anual e mensal estruturado de forma automática.',
        'Conciliação bancária automática com arquivos OFX.',
        'Agendamento automático de despesas recorrentes (Aluguel, Luz).',
        'Controle de inadimplência e envio automatizado de cobranças.'
      ],
      useCase: 'O departamento financeiro importa o extrato do banco, o FinanceHub localiza os pagamentos correspondentes no contas a receber e faz a baixa automática em lote.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">DRE Simplificado</span>
          </div>
          <div className="mock-ui-content">
            <div className="dre-mock">
              <div className="dre-line"><span>(+) Receita Bruta</span> <span className="text-green">R$ 125.400,00</span></div>
              <div className="dre-line"><span>(-) Deduções e Impostos</span> <span className="text-red">R$ 18.200,00</span></div>
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
      desc: 'Central de Business Intelligence integrada. Exporte relatórios detalhados em PDF e Excel sobre ticket médio, comissão de vendedores, curvas ABC de clientes e produtos (os mais vendidos e os que geram mais lucro), vendas por meio de pagamento e relatórios contábeis consolidados.',
      benefits: [
        'Análise de Curva ABC para identificar produtos mais lucrativos.',
        'Exportação rápida para PDF, Excel e formatos CSV.',
        'Relatórios customizáveis com filtros avançados.',
        'Cálculo automático de comissões de venda.'
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
      desc: 'Base de dados consolidada. Gerencie cadastros detalhados de clientes (com histórico de compras, limite de crédito e situação financeira), fornecedores (associados aos produtos comprados), transportadoras, funcionários e regras tributárias vinculadas.',
      benefits: [
        'Consulta e autopreenchimento de dados por CNPJ.',
        'Limite de crédito configurável por cliente.',
        'Histórico detalhado de faturamento por cliente.',
        'Registro de tabelas tributárias padrão.'
      ],
      useCase: 'Ao cadastrar uma nova empresa parceira, a secretária digita apenas o CNPJ, e o FinanceHub preenche o endereço completo, razão social e situação cadastral consultando a Receita Federal.',
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
              <span>CNPJ: 12.345.678/0001-90</span>
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
      desc: 'Integração logística completa do pedido ao destino. Calcule fretes em tempo real diretamente nas telas de vendas ou pedidos de compra, gere etiquetas de envio padronizadas, controle lotes de postagem e rastreie entregas em andamento através de integrações nativas com os Correios e transportadoras parceiras.',
      benefits: [
        'Cálculo de frete multi-transportadora integrado.',
        'Impressão em lote de etiquetas de despacho (PLP).',
        'Rastreamento automatizado de códigos de entrega.',
        'Controle de entrega própria com rotas sugeridas.'
      ],
      useCase: 'O faturista fecha uma venda para outro estado, o FinanceHub cota o frete mais barato em três transportadoras, emite a etiqueta de despacho e envia o link de rastreamento por e-mail ao comprador.',
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
              <div className="quote-item active"><span>Jadlog Express</span> <strong>2 dias - R$ 24,90</strong></div>
              <div className="quote-item"><span>Correios Pac</span> <strong>6 dias - R$ 18,20</strong></div>
              <div className="quote-item"><span>Loggi Entregas</span> <strong>1 dia - R$ 38,00</strong></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'assistant',
      icon: <MessageSquare size={20} />,
      name: 'Assistente Virtual AI',
      desc: 'Insights inteligentes de negócios alimentados por IA. O assistente virtual do FinanceHub analisa seus dados de vendas e despesas em background e responde perguntas de linguagem natural. Saiba instantaneamente qual filial está performando melhor, qual margem média dos seus produtos ou peça sugestões de corte de custos.',
      benefits: [
        'Interação por chat com dados reais da sua empresa.',
        'Projeção de caixa para os próximos meses.',
        'Sugestões inteligentes de quantidade de compras.',
        'Alertas preditivos de risco de capital de giro.'
      ],
      useCase: 'O empresário digita na central de ajuda: "Qual foi o meu produto mais lucrativo na semana passada?" e a IA responde: "Foi o Copo Térmico Inox, com R$ 3.200 em lucro líquido e margem de 42%".',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Assistente FinanceHub AI</span>
          </div>
          <div className="mock-ui-content chat-style">
            <div className="chat-msg user">Qual filial faturou mais hoje?</div>
            <div className="chat-msg ai">A Filial 02 lidera hoje com <strong>R$ 8.920,00</strong> em vendas (48% do total).</div>
          </div>
        </div>
      )
    },
    {
      id: 'multi',
      icon: <Building2 size={20} />,
      name: 'Sistema Multiempresa',
      desc: 'Gerenciamento completo para redes, franquias ou múltiplos negócios. Cadastre diferentes CNPJs (matriz e filiais) no mesmo sistema. Faça transferências de estoque seguras entre unidades, emita notas de transferência, consulte saldos de outras filiais em tempo real e emita relatórios unificados para a contabilidade.',
      benefits: [
        'Controle centralizado de estoques de múltiplas lojas.',
        'DRE consolidado ou individual por CNPJ.',
        'Transferência fácil de produtos entre filiais.',
        'Permissões de acesso distintas por filial e usuário.'
      ],
      useCase: 'Um cliente chega na Filial 1 procurando um calçado tamanho 40 que está esgotado ali. O vendedor faz uma busca rápida no FinanceHub e descobre que a Filial 2, a 5km dali, possui 3 unidades em estoque.',
      mockup: (
        <div className="module-mockup-ui">
          <div className="mock-ui-header">
            <span className="mock-dot-red"></span>
            <span className="mock-dot-yellow"></span>
            <span className="mock-dot-green"></span>
            <span className="mock-title">Visão Multiempresa</span>
          </div>
          <div className="mock-ui-content">
            <div className="multi-list">
              <div className="multi-row"><span>Matriz (São Paulo)</span> <strong>Ativa</strong></div>
              <div className="multi-row"><span>Filial 01 (Campinas)</span> <strong>Ativa</strong></div>
              <div className="multi-row"><span>Filial 02 (Santos)</span> <strong className="text-cyan">Sincronizando</strong></div>
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
          Explore os recursos completos e veja como as ferramentas integradas impulsionam o controle financeiro, tributário e operacional do seu negócio.
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
              <span className="badge">Módulo Premium</span>
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
