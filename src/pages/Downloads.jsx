import React, { useState } from 'react';
import { Download, Monitor, Apple, Terminal, ShieldAlert, Cpu, HardDrive } from 'lucide-react';
import './Downloads.css';

export default function Downloads() {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const currentVersion = {
    ver: 'v3.4.0',
    date: '01 de Junho de 2026',
    size: '184.2 MB',
    filename: 'FinanceHub_Setup_x64.exe'
  };

  const requirements = [
    { icon: <Monitor size={18} />, title: 'Sistema Operacional', val: 'Windows 10 ou 11 (Apenas 64-bit)' },
    { icon: <Cpu size={18} />, title: 'Processador', val: 'Intel Core i3 / AMD Ryzen 3 ou superior' },
    { icon: <HardDrive size={18} />, title: 'Armazenamento', val: '500 MB de espaço livre (Recomendado SSD)' },
  ];

  const versionHistory = [
    { ver: 'v3.3.1', date: '14 de Abril de 2026', size: '182.1 MB', notes: 'Adicionado suporte a PIX automático.' },
    { ver: 'v3.2.0', date: '20 de Fevereiro de 2026', size: '179.4 MB', notes: 'Melhorias de desempenho no banco de dados local.' },
    { ver: 'v3.1.2', date: '05 de Janeiro de 2026', size: '178.9 MB', notes: 'Lançamento inicial da versão 3.0.' }
  ];

  const handleDownloadClick = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloading(false);
            alert('Simulação de download concluída! O arquivo FinanceHub_Setup_x64.exe seria baixado agora.');
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="downloads-page container section-padding">
      <div className="glow-spot" style={{ top: '15%', left: '20%' }}></div>

      <div className="section-header text-center animate-fade-in">
        <div className="badge">Central de Downloads</div>
        <h1 className="page-title text-gradient">Instale o FinanceHub</h1>
        <p className="page-subtitle">
          Baixe o instalador oficial estável da plataforma corporativa. Instale no seu computador local e inicie o uso em minutos.
        </p>
      </div>

      {/* Main Download and OS grid */}
      <div className="downloads-grid">
        {/* Active Windows Download */}
        <div className="glass-card active-download-card">
          <div className="os-badge-header">
            <Monitor size={36} className="text-cyan" />
            <div>
              <h3>Windows Desktop</h3>
              <p>Recomendado para computadores de caixa e gerenciais</p>
            </div>
          </div>

          <div className="download-meta-info">
            <div className="meta-item"><span>Versão Atual:</span> <strong>{currentVersion.ver}</strong></div>
            <div className="meta-item"><span>Lançamento:</span> <strong>{currentVersion.date}</strong></div>
            <div className="meta-item"><span>Tamanho:</span> <strong>{currentVersion.size}</strong></div>
          </div>

          <div className="download-btn-area">
            {!downloading ? (
              <button onClick={handleDownloadClick} className="btn btn-primary w-full download-main-btn">
                <Download size={20} />
                <span>Baixar FinanceHub para Windows</span>
              </button>
            ) : (
              <div className="download-progress-container">
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${downloadProgress}%` }}></div>
                </div>
                <span className="progress-txt">Baixando: {downloadProgress}% ({currentVersion.filename})</span>
              </div>
            )}
            <p className="download-secure-tag">
              <ShieldAlert size={14} className="text-green" />
              <span>Instalador seguro livre de vírus e assinado digitalmente.</span>
            </p>
          </div>
        </div>

        {/* Coming soon macOS & Linux */}
        <div className="glass-card coming-soon-download">
          <div className="os-badge-header inactive">
            <Apple size={36} />
            <div>
              <h3>macOS App</h3>
              <span className="badge badge-soon">Em breve</span>
            </div>
          </div>
          <p className="os-desc">Versão nativa para computadores Mac (chips Intel e M1/M2/M3). Lançamento previsto para o próximo trimestre.</p>

          <div className="divider"></div>

          <div className="os-badge-header inactive">
            <Terminal size={36} />
            <div>
              <h3>Linux x64</h3>
              <span className="badge badge-soon">Em breve</span>
            </div>
          </div>
          <p className="os-desc">Compatibilidade nativa para distribuições Debian/Ubuntu e RedHat. Arquivos AppImage e Deb em homologação.</p>
        </div>
      </div>

      {/* System requirements */}
      <div className="requirements-section glass-card">
        <h3>Requisitos Mínimos de Sistema</h3>
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

      {/* History of releases */}
      <div className="downloads-history-section">
        <h3>Histórico de Versões Anteriores</h3>
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
              {versionHistory.map((hist, i) => (
                <tr key={i}>
                  <td><strong>{hist.ver}</strong></td>
                  <td>{hist.date}</td>
                  <td>{hist.size}</td>
                  <td className="notes-col">{hist.notes}</td>
                  <td>
                    <button className="btn-download-small" onClick={() => alert(`Download da versão ${hist.ver} simulado!`)}>
                      <Download size={12} />
                      <span>Baixar (.exe)</span>
                    </button>
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
