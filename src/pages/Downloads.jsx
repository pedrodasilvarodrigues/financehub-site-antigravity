import React from 'react';
import { Download, Monitor, Apple, Terminal, ShieldAlert, Cpu, HardDrive } from 'lucide-react';
import './Downloads.css';

const DOWNLOAD_URL = 'https://github.com/pedrodasilvarodrigues/financehub-site-antigravity/releases/download/v1.0.0/FinanceHub-Setup-1.0.0.exe';

export default function Downloads() {
  const currentVersion = {
    ver: 'v1.0.0',
    date: '03 de Julho de 2026',
    size: '77,4 MB',
    filename: 'FinanceHub-Setup-1.0.0.exe',
  };

  const requirements = [
    { icon: <Monitor size={18} />, title: 'Sistema Operacional', val: 'Windows 10 ou 11 (apenas 64 bits)' },
    { icon: <Cpu size={18} />, title: 'Processador', val: 'Intel Core i3 / AMD Ryzen 3 ou superior' },
    { icon: <HardDrive size={18} />, title: 'Armazenamento', val: '500 MB de espaço livre (recomendado SSD)' },
  ];

  const versionHistory = [
    { ver: 'v1.0.0', date: '03 de Julho de 2026', size: currentVersion.size, notes: 'Primeiro instalador público do FinanceHub Desktop para Windows.' },
  ];

  return (
    <div className="downloads-page container section-padding">
      <div className="glow-spot" style={{ top: '15%', left: '20%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Central de Downloads</div>
        <h1 className="page-title text-gradient">Instale o FinanceHub</h1>
        <p className="page-subtitle">
          Baixe o instalador oficial da plataforma para Windows. O aplicativo desktop abre a versão online do FinanceHub e recebe as atualizações automaticamente.
        </p>
      </div>

      <div className="downloads-grid">
        <div className="glass-card active-download-card">
          <div className="os-badge-header">
            <Monitor size={36} className="text-cyan" />
            <div>
              <h3>Windows Desktop</h3>
              <p>Recomendado para computadores de caixa e gerenciais</p>
            </div>
          </div>

          <div className="download-meta-info">
            <div className="meta-item"><span>Versão atual:</span> <strong>{currentVersion.ver}</strong></div>
            <div className="meta-item"><span>Lançamento:</span> <strong>{currentVersion.date}</strong></div>
            <div className="meta-item"><span>Tamanho:</span> <strong>{currentVersion.size}</strong></div>
          </div>

          <div className="download-btn-area">
            <a
              href={DOWNLOAD_URL}
              className="btn btn-primary w-full download-main-btn"
              download={currentVersion.filename}
            >
              <Download size={20} />
              <span>Baixar FinanceHub para Windows</span>
            </a>
            <p className="download-secure-tag">
              <ShieldAlert size={14} className="text-green" />
              <span>Instalador oficial disponibilizado via GitHub Releases.</span>
            </p>
          </div>
        </div>

        <div className="glass-card coming-soon-download">
          <div className="os-badge-header inactive">
            <Apple size={36} />
            <div>
              <h3>macOS App</h3>
              <span className="badge badge-soon">Em breve</span>
            </div>
          </div>
          <p className="os-desc">Versão nativa para computadores Mac. Lançamento previsto para uma próxima etapa do projeto.</p>

          <div className="divider"></div>

          <div className="os-badge-header inactive">
            <Terminal size={36} />
            <div>
              <h3>Linux x64</h3>
              <span className="badge badge-soon">Em breve</span>
            </div>
          </div>
          <p className="os-desc">Compatibilidade nativa para distribuições Linux em avaliação.</p>
        </div>
      </div>

      <div className="requirements-section glass-card">
        <h3>Requisitos mínimos de sistema</h3>
        <div className="requirements-grid">
          {requirements.map((req, i) => (
            <div key={i} className="req-card">
              <div className="req-icon">{req.icon}</div>
              <div>
                <strong>{req.title}</strong>
                <span>{req.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="downloads-history-section">
        <h3>Histórico de versões</h3>
        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Versão</th>
                <th>Data</th>
                <th>Tamanho</th>
                <th>Novidades</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {versionHistory.map((hist) => (
                <tr key={hist.ver}>
                  <td><strong>{hist.ver}</strong></td>
                  <td>{hist.date}</td>
                  <td>{hist.size}</td>
                  <td className="notes-col">{hist.notes}</td>
                  <td>
                    <a className="btn-download-small" href={DOWNLOAD_URL} download={currentVersion.filename}>
                      <Download size={12} />
                      <span>Baixar (.exe)</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
