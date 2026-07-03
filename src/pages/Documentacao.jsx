import React, { useState } from 'react';
import { 
  BookOpen, HelpCircle, AlertTriangle, ListRestart, 
  ChevronRight, Terminal, CheckCircle2, AlertCircle 
} from 'lucide-react';
import './Documentacao.css';

export default function Documentacao() {
  const [activeTab, setActiveTab] = useState('intro');
  const [faqSearch, setFaqSearch] = useState('');

  const docStructure = [
    {
      title: 'Primeiros Passos',
      items: [
        { id: 'intro', label: 'O que é o FinanceHub' },
        { id: 'requisitos', label: 'Requisitos Mínimos' },
        { id: 'instalacao', label: 'Como Instalar' }
      ]
    },
    {
      title: 'Download & Instalação',
      items: [
        { id: 'baixar', label: 'Como Baixar' },
        { id: 'primeira-execucao', label: 'Primeira Execução' }
      ]
    },
    {
      title: 'Manual de Utilização',
      items: [
        { id: 'manual-produtos', label: 'Produtos' },
        { id: 'manual-financeiro', label: 'Financeiro' },
        { id: 'manual-pdv', label: 'PDV / Caixa' },
        { id: 'manual-precificacao', label: 'Precificação' },
        { id: 'manual-logistica', label: 'Logística & Fretes' },
        { id: 'manual-ia', label: 'Assistente AI' }
      ]
    },
    {
      title: 'Central de Suporte',
      items: [
        { id: 'faq', label: 'Perguntas Frequentes' },
        { id: 'solucao-problemas', label: 'Solução de Problemas' },
        { id: 'changelog', label: 'Histórico de Versões' }
      ]
    }
  ];

  const faqs = [
    {
      q: 'O FinanceHub requer conexão permanente com a internet?',
      a: 'Não. O software funciona completamente offline para registro de vendas, fechamento de caixa e rotinas básicas. A conexão só é necessária para sincronizar os dados com a nuvem, emitir notas fiscais eletrônicas (que exigem validação da SEFAZ) e interagir com o Assistente Virtual AI.'
    },
    {
      q: 'Consigo emitir NFC-e e NF-e diretamente pelo sistema?',
      a: 'Sim, o FinanceHub possui motor fiscal homologado para emissão de Nota Fiscal de Consumidor Eletrônica (NFC-e) e Nota Fiscal Eletrônica (NF-e) em todos os estados brasileiros. É necessário possuir certificado digital A1 válido.'
    },
    {
      q: 'Como funciona a sincronização multiempresa?',
      a: 'Os dados de cada computador local são gravados no banco de dados SQLite local. Um agente em background sincroniza de forma segura essas alterações com nosso servidor na nuvem a cada 30 segundos. A matriz lê os dados consolidados da nuvem.'
    },
    {
      q: 'Os meus dados financeiros ficam seguros?',
      a: 'Sim. Os dados locais são criptografados com AES-256 e o banco em nuvem é hospedado em servidores de alta segurança (AWS) com backups automáticos diários. Nós não compartilhamos ou acessamos seus dados financeiros.'
    },
    {
      q: 'Posso importar cadastros antigos de outras planilhas?',
      a: 'Sim, na aba de Configurações do FinanceHub existe uma ferramenta para importação em lote de clientes, produtos e fornecedores a partir de arquivos Excel (.xlsx) ou CSV.'
    }
  ];

  const filteredFaqs = faqs.filter(
    faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
           faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="docs-page container section-padding">
      <div className="glow-spot" style={{ bottom: '10%', right: '20%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Central de Ajuda</div>
        <h1 className="page-title text-gradient">Documentação do FinanceHub</h1>
        <p className="page-subtitle">
          Guias completos de instalação, manuais de uso por módulo operacional, FAQ detalhado e changelog de atualizações.
        </p>
      </div>

      <div className="docs-layout">
        {/* Sidebar */}
        <aside className="docs-sidebar">
          {docStructure.map((group, gIdx) => (
            <div key={gIdx} className="docs-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`docs-menu-btn ${activeTab === item.id ? 'active' : ''}`}
                    >
                      <ChevronRight size={14} className="chevron" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Content reader */}
        <main className="docs-content glass-card animate-fade-in" key={activeTab}>
          {activeTab === 'intro' && (
            <div className="doc-section">
              <h2>O que é o FinanceHub</h2>
              <p>
                O FinanceHub é a plataforma ideal para organizar a gestão da sua empresa. Ele une frente de caixa (PDV), inteligência de precificação tributária, relatórios dinâmicos de faturamento e fluxo de caixa, além de logística avançada em um sistema desktop ágil e simples de usar.
              </p>
              <div className="doc-alert note">
                <BookOpen size={20} />
                <div>
                  <strong>Propósito do Site</strong>
                  <p>Este site é exclusivamente a central de apresentação e documentação do FinanceHub. O software operacional é acessado após instalação no seu computador.</p>
                </div>
              </div>
              <h3>Principais Pilares</h3>
              <ul>
                <li><strong>Eficiência Fiscal:</strong> Emissão ágil de cupons fiscais e notas fiscais.</li>
                <li><strong>Gestão Segura:</strong> Banco de dados local criptografado contra acessos não autorizados.</li>
                <li><strong>IA Integrada:</strong> Análises preditivas do seu negócio sem necessidade de planilhas complexas.</li>
              </ul>
            </div>
          )}

          {activeTab === 'requisitos' && (
            <div className="doc-section">
              <h2>Requisitos Mínimos</h2>
              <p>Consulte as configurações necessárias para que o FinanceHub opere com o melhor desempenho no seu estabelecimento.</p>
              
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th>Configuração Mínima</th>
                    <th>Recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sistema Operacional</td>
                    <td>Windows 10 (64-bit)</td>
                    <td>Windows 11 (64-bit)</td>
                  </tr>
                  <tr>
                    <td>Processador</td>
                    <td>Intel Core i3 ou AMD Ryzen 3</td>
                    <td>Intel Core i5 ou AMD Ryzen 5</td>
                  </tr>
                  <tr>
                    <td>Memória RAM</td>
                    <td>4 GB</td>
                    <td>8 GB ou mais</td>
                  </tr>
                  <tr>
                    <td>Armazenamento</td>
                    <td>500 MB livres (SSD preferencial)</td>
                    <td>2 GB livres (SSD)</td>
                  </tr>
                  <tr>
                    <td>Conectividade</td>
                    <td>Acesso à internet para sincronização</td>
                    <td>Internet banda larga estável</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'instalacao' && (
            <div className="doc-section">
              <h2>Como Instalar o Software</h2>
              <p>O processo de instalação é direto e não requer conhecimentos técnicos avançados.</p>
              <ol className="doc-steps">
                <li>Acesse a página de <button className="inline-link" onClick={() => { setActiveTab('baixar') }}>Downloads</button> do nosso site.</li>
                <li>Clique no botão "Baixar para Windows". O instalador `FinanceHub_Setup.exe` começará a baixar.</li>
                <li>Dê um duplo clique no instalador baixado para abrir o assistente de instalação.</li>
                <li>Siga as instruções clicando em "Avançar", escolha o local de instalação e clique em "Instalar".</li>
                <li>Após finalizado, marque a caixa "Abrir FinanceHub" e clique em "Concluir".</li>
              </ol>
            </div>
          )}

          {activeTab === 'baixar' && (
            <div className="doc-section">
              <h2>Como Baixar</h2>
              <p>
                Os instaladores oficiais do FinanceHub são disponibilizados unicamente através deste site oficial para garantir a integridade dos arquivos e a segurança do seu computador.
              </p>
              <div className="doc-alert warning">
                <AlertTriangle size={20} />
                <div>
                  <strong>Aviso de Segurança</strong>
                  <p>Não baixe o FinanceHub de sites de terceiros ou gerenciadores de downloads alternativos. Isso protege sua empresa de vírus ou cavalos de troia.</p>
                </div>
              </div>
              <p>Nossos arquivos são assinados digitalmente com certificado de segurança verificado.</p>
            </div>
          )}

          {activeTab === 'primeira-execucao' && (
            <div className="doc-section">
              <h2>Primeira Execução & Configuração Inicial</h2>
              <p>Ao abrir o FinanceHub pela primeira vez, o assistente inteligente guiará você na configuração inicial da empresa.</p>
              <h3>Etapas da Configuração:</h3>
              <ul className="doc-check-list">
                <li>
                  <CheckCircle2 className="text-green" size={18} />
                  <span><strong>Identificação Comercial:</strong> Insira o CNPJ da sua empresa para buscar os dados automáticos na Receita Federal.</span>
                </li>
                <li>
                  <CheckCircle2 className="text-green" size={18} />
                  <span><strong>Regime Tributário:</strong> Selecione entre Simples Nacional, Lucro Presumido ou Lucro Real para configuração fiscal básica.</span>
                </li>
                <li>
                  <CheckCircle2 className="text-green" size={18} />
                  <span><strong>Criação do Administrador:</strong> Configure o e-mail e senha mestre do usuário administrador da plataforma.</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'manual-produtos' && (
            <div className="doc-section">
              <h2>Manual: Cadastro e Controle de Produtos</h2>
              <p>Gerencie sua grade de produtos, SKU, código de barras e estoque mínimo de forma prática.</p>
              <h3>Como cadastrar um produto:</h3>
              <p>1. Vá no menu lateral e selecione <strong>Cadastros &gt; Produtos</strong>.</p>
              <p>2. Clique em <strong>Novo Produto (+)</strong> no canto superior direito.</p>
              <p>3. Preencha o nome, descrição, categoria e defina se ele possui variações em grade (cores/tamanhos).</p>
              <p>4. No campo de preços, você poderá digitar os custos e abrir o simulador de margem de lucro.</p>
              <p>5. Salve as alterações para disponibilizar o produto no PDV imediatamente.</p>
            </div>
          )}

          {activeTab === 'manual-financeiro' && (
            <div className="doc-section">
              <h2>Manual: Gestão Financeira</h2>
              <p>Mantenha as contas da sua empresa organizadas com o fluxo de caixa diário e conciliação.</p>
              <h3>Conciliação por OFX:</h3>
              <p>Vá em <strong>Financeiro &gt; Conciliação</strong>, clique em <strong>Importar Extrato OFX</strong>. O sistema listará todos os lançamentos bancários ao lado esquerdo e contas a pagar/receber correspondentes ao lado direito. Clique em "Conciliar" para liquidar os lançamentos.</p>
            </div>
          )}

          {activeTab === 'manual-pdv' && (
            <div className="doc-section">
              <h2>Manual: Frente de Caixa (PDV) e Operador</h2>
              <p>O PDV é desenhado para rapidez. Veja os principais atalhos operacionais:</p>
              <div className="terminal-code">
                <Terminal size={16} />
                <code>
                  [F1] - Iniciar Venda / Pagar com PIX<br />
                  [F2] - Selecionar Forma de Pagamento (Cartão / Dinheiro)<br />
                  [F3] - Consultar Estoque / Preço de Item<br />
                  [F4] - Deixar Compra Atual em Espera (Rascunho)<br />
                  [F9] - Cancelar Venda Atual / Limpar Tela<br />
                  [ESC] - Voltar / Fechar Janelas Ativas
                </code>
              </div>
            </div>
          )}

          {activeTab === 'manual-precificacao' && (
            <div className="doc-section">
              <h2>Manual: Motor de Precificação Inteligente</h2>
              <p>Aprenda a calcular os preços de venda garantindo margem operacional real.</p>
              <h3>Entendendo os Fatores:</h3>
              <ul>
                <li><strong>Custo de Compra:</strong> Valor cobrado pelo fornecedor na nota fiscal.</li>
                <li><strong>Tributação:</strong> Percentual de impostos aplicados na venda do produto de acordo com sua NCM.</li>
                <li><strong>Margem de Contribuição:</strong> A fatia de lucro líquido destinada a pagar os custos fixos da empresa e gerar lucro real.</li>
              </ul>
            </div>
          )}

          {activeTab === 'manual-logistica' && (
            <div className="doc-section">
              <h2>Manual: Gestão de Fretes e Logística</h2>
              <p>Calcule os custos de postagem e emita etiquetas de envio para Correios e transportadoras.</p>
              <p>Ao realizar uma venda de entrega, preencha o CEP de destino. O FinanceHub consulta em background as tabelas das transportadoras cadastradas e exibe os custos e prazos de entrega em tempo real.</p>
            </div>
          )}

          {activeTab === 'manual-ia' && (
            <div className="doc-section">
              <h2>Manual: Assistente AI do FinanceHub</h2>
              <p>Use IA para fazer perguntas rápidas sobre as finanças corporativas.</p>
              <div className="doc-alert note">
                <BookOpen size={20} />
                <div>
                  <strong>Exemplos de Perguntas da IA</strong>
                  <p>"Qual produto teve o maior faturamento este mês?"</p>
                  <p>"Quais contas a pagar vencem nesta semana?"</p>
                  <p>"Qual foi o ticket médio das vendas no cartão ontem?"</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="doc-section">
              <h2>Perguntas Frequentes</h2>
              <p>Encontre respostas rápidas para as dúvidas mais comuns de novos usuários.</p>
              
              <div className="faq-search-wrapper">
                <input
                  type="text"
                  placeholder="Pesquisar no FAQ..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="form-input faq-search"
                />
              </div>

              <div className="faq-list">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <div key={i} className="faq-accordion-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-cyan" />
                        <h4>{faq.q}</h4>
                      </div>
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">Nenhum resultado encontrado para "{faqSearch}".</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'solucao-problemas' && (
            <div className="doc-section">
              <h2>Solução de Problemas Comuns</h2>
              <p>Guia rápido de diagnósticos para resolver instabilidades operacionais.</p>

              <div className="problem-card">
                <div className="problem-header text-red">
                  <AlertCircle size={18} />
                  <h3>Erro de comunicação com o Certificado Digital</h3>
                </div>
                <div className="problem-solution">
                  <p><strong>Causa Comum:</strong> O Certificado Digital A1 venceu ou a cadeia de chaves de segurança do Windows está desatualizada.</p>
                  <p><strong>Resolução:</strong> Acesse as configurações de certificado no FinanceHub, verifique a validade. Caso esteja correto, reinstale o certificado no repositório de chaves do Windows em nível de usuário.</p>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-header text-orange">
                  <AlertCircle size={18} />
                  <h3>O PDV não abre no computador local</h3>
                </div>
                <div className="problem-solution">
                  <p><strong>Causa Comum:</strong> Porta de rede local ocupada por outro aplicativo ou falha de acesso aos arquivos de banco SQLite local.</p>
                  <p><strong>Resolução:</strong> Reinicie o computador. Se persistir, verifique se seu antivírus não bloqueou o arquivo `FinanceHub_Service.exe` nas pastas do sistema.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="doc-section">
              <h2>Histórico de Versões (Changelog)</h2>
              <p>Confira as últimas melhorias, novidades e correções aplicadas ao FinanceHub.</p>

              <div className="changelog-timeline">
                <div className="changelog-item">
                  <div className="changelog-header">
                    <span className="changelog-ver">Versão 3.4.0</span>
                    <span className="changelog-date">01 de Junho de 2026</span>
                  </div>
                  <ul>
                    <li><strong className="tag-new">[NOVO]</strong> Assistente Virtual AI: Agora você pode interagir por voz ou texto para extrair dados financeiros.</li>
                    <li><strong className="tag-new">[NOVO]</strong> Integração logística com transportadora Loggi.</li>
                    <li><strong className="tag-fix">[CORREÇÃO]</strong> Lentidão na conciliação OFX com arquivos maiores de 5MB.</li>
                    <li><strong className="tag-fix">[CORREÇÃO]</strong> Erro de impressão em modelos de bobinas térmicas de 58mm.</li>
                  </ul>
                </div>

                <div className="changelog-item">
                  <div className="changelog-header">
                    <span className="changelog-ver">Versão 3.3.1</span>
                    <span className="changelog-date">14 de Abril de 2026</span>
                  </div>
                  <ul>
                    <li><strong className="tag-new">[NOVO]</strong> Recebimento PIX automático via API direta de bancos parceiros.</li>
                    <li><strong className="tag-fix">[CORREÇÃO]</strong> Falha de sincronização multiempresa em redes corporativas com proxy restrito.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
