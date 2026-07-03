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
        { id: 'manual-ia', label: 'Assistente' }
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
      q: 'O FinanceHub funciona sem internet?',
      a: 'A versão atual depende da versão online publicada na Vercel e do Supabase para login e dados. O aplicativo Windows abre essa versão online.'
    },
    {
      q: 'O sistema emite documentos fiscais reais?',
      a: 'Não. A versão atual não possui emissão fiscal homologada. O foco atual é gestão de vendas, caixa, estoque, financeiro, pedidos e frete.'
    },
    {
      q: 'Onde os dados ficam salvos?',
      a: 'Os dados da aplicação são carregados e salvos no Supabase por organização autenticada. Contas novas começam sem dados operacionais.'
    },
    {
      q: 'O botão de download baixa um instalador real?',
      a: 'Sim. O download aponta para o instalador Windows FinanceHub-Setup-1.0.0.exe publicado no GitHub Releases.'
    },
    {
      q: 'O assistente usa IA generativa?',
      a: 'Não nesta versão. Ele funciona como assistente operacional por consultas estruturadas e exemplos de comando.'
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
          Guias objetivos sobre instalação, módulos atuais, dados no Supabase, aplicativo Windows e limitações reais da versão atual.
        </p>
      </div>

      <div className="docs-layout">
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

        <main className="docs-content glass-card animate-fade-in" key={activeTab}>
          {activeTab === 'intro' && (
            <div className="doc-section">
              <h2>O que é o FinanceHub</h2>
              <p>
                O FinanceHub é uma aplicação de gestão financeira e operacional construída em React + Vite, conectada ao Supabase e publicada na Vercel. Ela possui módulos para vendas, produtos, estoque, pedidos, caixa, financeiro, relatórios, logística, agenda, fornecedores e equipe.
              </p>
              <div className="doc-alert note">
                <BookOpen size={20} />
                <div>
                  <strong>Propósito do Site</strong>
                  <p>Este site apresenta o projeto e oferece o instalador Windows. O sistema real é acessado online ou pelo aplicativo desktop.</p>
                </div>
              </div>
              <h3>Principais Pilares</h3>
              <ul>
                <li><strong>Gestão operacional:</strong> vendas, estoque, pedidos e financeiro em uma interface única.</li>
                <li><strong>Dados por empresa:</strong> autenticação e persistência com Supabase.</li>
                <li><strong>Aplicativo Windows:</strong> Electron carregando a versão online hospedada na Vercel.</li>
              </ul>
            </div>
          )}

          {activeTab === 'requisitos' && (
            <div className="doc-section">
              <h2>Requisitos Mínimos</h2>
              <p>Consulte as configurações necessárias para abrir o aplicativo desktop ou usar a versão online.</p>
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
                    <td>Windows 10 64 bits</td>
                    <td>Windows 11 64 bits</td>
                  </tr>
                  <tr>
                    <td>Navegador</td>
                    <td>Chrome, Edge ou similar atualizado</td>
                    <td>Chrome ou Edge atualizado</td>
                  </tr>
                  <tr>
                    <td>Memória RAM</td>
                    <td>4 GB</td>
                    <td>8 GB ou mais</td>
                  </tr>
                  <tr>
                    <td>Armazenamento</td>
                    <td>500 MB livres</td>
                    <td>2 GB livres</td>
                  </tr>
                  <tr>
                    <td>Conectividade</td>
                    <td>Internet para login e dados</td>
                    <td>Internet estável</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'instalacao' && (
            <div className="doc-section">
              <h2>Como Instalar o Software</h2>
              <p>O instalador Windows abre uma janela nativa que carrega a versão online do FinanceHub.</p>
              <ol className="doc-steps">
                <li>Acesse a página de Downloads.</li>
                <li>Clique em "Baixar FinanceHub para Windows".</li>
                <li>Execute o arquivo `FinanceHub-Setup-1.0.0.exe`.</li>
                <li>Siga o assistente de instalação.</li>
                <li>Abra o FinanceHub e faça login com sua conta.</li>
              </ol>
            </div>
          )}

          {activeTab === 'baixar' && (
            <div className="doc-section">
              <h2>Como Baixar</h2>
              <p>
                O instalador oficial fica publicado no GitHub Releases do projeto institucional. O botão da página Downloads aponta diretamente para esse arquivo.
              </p>
              <div className="doc-alert warning">
                <AlertTriangle size={20} />
                <div>
                  <strong>Aviso</strong>
                  <p>Use o link oficial do site para baixar o instalador. Assim você evita arquivos desatualizados ou modificados por terceiros.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'primeira-execucao' && (
            <div className="doc-section">
              <h2>Primeira Execução</h2>
              <p>Na primeira abertura, entre com uma conta existente ou crie um cadastro. Cada conta fica ligada a uma organização no Supabase.</p>
              <h3>Etapas principais:</h3>
              <ul className="doc-check-list">
                <li><CheckCircle2 className="text-green" size={18} /><span><strong>Login:</strong> autenticação por email e senha via Supabase.</span></li>
                <li><CheckCircle2 className="text-green" size={18} /><span><strong>Empresa:</strong> a organização é carregada para separar os dados da conta.</span></li>
                <li><CheckCircle2 className="text-green" size={18} /><span><strong>Dados:</strong> contas novas começam vazias e passam a salvar os próprios registros.</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'manual-produtos' && (
            <div className="doc-section">
              <h2>Manual: Produtos e Estoque</h2>
              <p>Cadastre produtos, controle preço, custo, categoria, estoque e estoque mínimo.</p>
              <p>Produtos com atenção ficam destacados em amarelo; produtos críticos ficam destacados em vermelho. A partir do estoque baixo, é possível iniciar uma reposição com fornecedor sugerido.</p>
            </div>
          )}

          {activeTab === 'manual-financeiro' && (
            <div className="doc-section">
              <h2>Manual: Gestão Financeira</h2>
              <p>O módulo financeiro organiza contas e lançamentos. É possível alternar status pago/pendente, excluir registros e acompanhar valores em gráficos e tabelas.</p>
            </div>
          )}

          {activeTab === 'manual-pdv' && (
            <div className="doc-section">
              <h2>Manual: Frente de Caixa (PDV) e Caixa</h2>
              <p>O PDV registra vendas, valida estoque, exige caixa aberto e baixa o saldo do produto ao confirmar a venda.</p>
              <div className="terminal-code">
                <Terminal size={16} />
                <code>
                  1. Abra o caixa<br />
                  2. Selecione o produto<br />
                  3. Informe quantidade, desconto e pagamento<br />
                  4. Confirme a venda<br />
                  5. Consulte o histórico de vendas
                </code>
              </div>
            </div>
          )}

          {activeTab === 'manual-precificacao' && (
            <div className="doc-section">
              <h2>Manual: Precificação</h2>
              <p>O módulo ajuda a analisar custo, margem e preço de venda. Ele não substitui validação contábil ou tributária, mas apoia a decisão comercial.</p>
            </div>
          )}

          {activeTab === 'manual-logistica' && (
            <div className="doc-section">
              <h2>Manual: Logística e Fretes</h2>
              <p>O frete aceita CEP, rua, número, bairro, cidade e estado. O CEP pode preencher endereço automaticamente via ViaCEP/BrasilAPI.</p>
              <p>O mapa usa OpenStreetMap/Leaflet, valida cidade/UF e permite mais de uma entrega na rota.</p>
            </div>
          )}

          {activeTab === 'manual-ia' && (
            <div className="doc-section">
              <h2>Manual: Assistente Operacional</h2>
              <p>O assistente atual usa consultas estruturadas por palavras-chave. Ele não é uma IA generativa completa.</p>
              <div className="doc-alert note">
                <BookOpen size={20} />
                <div>
                  <strong>Exemplos de consulta</strong>
                  <p>"Produto mais vendido do mês"</p>
                  <p>"Vendas do dia"</p>
                  <p>"Clientes e formas de pagamento"</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="doc-section">
              <h2>Perguntas Frequentes</h2>
              <p>Encontre respostas rápidas sobre a versão atual.</p>
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
              <p>Guia rápido para instabilidades comuns da versão atual.</p>
              <div className="problem-card">
                <div className="problem-header text-red">
                  <AlertCircle size={18} />
                  <h3>Não consigo entrar na conta</h3>
                </div>
                <div className="problem-solution">
                  <p><strong>Causa comum:</strong> email não confirmado, senha incorreta ou sessão expirada no Supabase.</p>
                  <p><strong>Resolução:</strong> tente recuperar a senha ou entrar novamente com o email cadastrado.</p>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-header text-orange">
                  <AlertCircle size={18} />
                  <h3>O aplicativo desktop abre tela branca</h3>
                </div>
                <div className="problem-solution">
                  <p><strong>Causa comum:</strong> falha de conexão com a versão online ou deploy em atualização.</p>
                  <p><strong>Resolução:</strong> verifique a internet e tente recarregar. O app depende da URL publicada na Vercel.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="doc-section">
              <h2>Histórico de Versões</h2>
              <p>Confira o histórico verdadeiro da versão publicada.</p>
              <div className="changelog-timeline">
                <div className="changelog-item">
                  <div className="changelog-header">
                    <span className="changelog-ver">Versão 1.0.0</span>
                    <span className="changelog-date">03 de Julho de 2026</span>
                  </div>
                  <ul>
                    <li><strong className="tag-new">[NOVO]</strong> Instalador Windows publicado como `FinanceHub-Setup-1.0.0.exe`.</li>
                    <li><strong className="tag-new">[NOVO]</strong> App desktop Electron carregando a versão online do FinanceHub.</li>
                    <li><strong className="tag-new">[NOVO]</strong> Site institucional com botão real de download.</li>
                    <li><strong className="tag-fix">[AJUSTE]</strong> Informações do site revisadas para refletir somente funcionalidades existentes.</li>
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
