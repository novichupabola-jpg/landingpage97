import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { business, services, questions } from './content';
import '@fontsource-variable/dm-sans/wght.css';
import './styles.css';

function Icon({ name = 'arrow', size = 22, ...props }) {
  const paths = {
    arrow: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    desktop: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M10 5h4m-3 14h2" /></>,
    performance: <><path d="M4 17a9 9 0 1 1 16 0M12 13l5-5" /><circle cx="12" cy="13" r="2" /><path d="M6 21h12" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    bolt: <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M7 3v4m10-4v4m-10 7h3m4 0h3m-10 4h3" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    target: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 1v4m0 14v4M1 12h4m14 0h4" /></>,
    pause: <><path d="M8 5v14M16 5v14" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
  };
  if (name === 'discord') return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.4C1.5 9.2.7 13.2 1.1 17.2a18 18 0 0 0 5.4 2.7l1.1-1.8-1.7-.8.4-.3a12.7 12.7 0 0 0 11.4 0l.4.3-1.7.8 1.1 1.8a18 18 0 0 0 5.4-2.7c.5-4.6-.8-8.5-3.2-12.1ZM8.6 14.8c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm6.8 0c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2Z" /></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Novi Sensi, início"><span className="brand-mark" aria-hidden="true">n<span>.</span></span><span className="brand-name">NOVI<span>SENSI & OTIMIZAÇÃO</span></span></a>;
}

function JapaneseAccent({ children, className = '' }) {
  return <span className={`jp-mark ${className}`} lang="ja" aria-hidden="true">{children}</span>;
}

function useSectionReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;

    const elements = [...document.querySelectorAll('.section-heading, .service-card, .feature-art, .feature-copy, .process-grid > li, .faq > div, .contact')];
    let observer;
    const revealAll = () => {
      elements.forEach(element => element.setAttribute('data-reveal', 'visible'));
      observer?.disconnect();
    };

    try {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-reveal', 'visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

      elements.forEach(element => {
        const siblings = [...element.parentElement.children];
        const stagger = element.matches('.service-card, .process-grid > li') ? siblings.indexOf(element) * 65 : 0;
        element.style.setProperty('--reveal-delay', `${stagger}ms`);
        element.setAttribute('data-reveal', 'pending');
        observer.observe(element);
      });
    } catch {
      revealAll();
    }

    const onPreferenceChange = event => { if (event.matches) revealAll(); };
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', onPreferenceChange);
      elements.forEach(element => element.removeAttribute('data-reveal'));
    };
  }, []);
}

function discordUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    if (url.hostname === 'discord.gg' && /^\/[\w-]+\/?$/.test(url.pathname)) return url.href;
    if (['discord.com', 'www.discord.com'].includes(url.hostname) && /^\/invite\/[\w-]+\/?$/.test(url.pathname)) return url.href;
  } catch { /* An empty or invalid invite keeps checkout unavailable. */ }
  return null;
}

function HeroArt() {
  return <div className="hero-art" role="img" aria-label="Ilustração de um painel Novi de sensibilidade, com mira e controles visuais demonstrativos">
    <JapaneseAccent className="jp-hero">感度</JapaneseAccent>
    <div className="art-grid" />
    <div className="art-topline"><span><i className="live-dot" /> NOVI CONFIG LAB</span><span>FF / 001</span></div>
    <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
    <div className="crosshair"><span className="crosshair-h" /><span className="crosshair-v" /><span className="crosshair-center" /><i /><i /><i /><i /></div>
    <span className="coordinate coordinate-top">X: SEU ESTILO</span><span className="coordinate coordinate-bottom">Y: SEU CONTROLE</span>
    <div className="art-platform"><Icon name="desktop" size={17} /><span>EMULADOR</span><span className="platform-divider" /><Icon name="mobile" size={17} /><span>MOBILE</span></div>
    <div className="config-card"><div className="config-head"><span className="config-logo">novi<span>.</span></span><span className="config-badge">SENSI</span></div><span className="config-caption">O AJUSTE É SEU.</span><div className="visual-slider"><span>Geral</span><div><i style={{width:'78%'}} /></div></div><div className="visual-slider"><span>Precisão</span><div><i style={{width:'63%'}} /></div></div><div className="visual-slider"><span>Seu ritmo</span><div><i style={{width:'87%'}} /></div></div><div className="config-foot"><span><i className="live-dot" /> FEITO PARA O SEU JOGO</span><Icon name="target" size={18} /></div></div>
    <div className="floating-tag"><Icon name="bolt" size={16} /><span>MENOS ACHISMO.<br /><strong>MAIS CONFIGURAÇÃO.</strong></span></div>
    <span className="art-caption">ILUSTRAÇÃO CONCEITUAL • NÃO É UMA PRÉVIA DO PAINEL</span>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const dialogRef = useRef(null);
  const invite = discordUrl(business.discordInvite);
  useSectionReveal();

  useEffect(() => {
    if (!menuOpen) return;
    const close = event => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  function showDetails(service = null) {
    setMenuOpen(false);
    setSelectedService(service);
    dialogRef.current.showModal();
  }

  function DiscordButton({ children = 'Entrar no Discord', className = 'button button-lime' }) {
    return invite
      ? <a className={className} href={invite} target="_blank" rel="noopener noreferrer"><Icon name="discord" size={19} />{children}<Icon name="arrow" size={17} /><span className="sr-only"> (abre em uma nova aba)</span></a>
      : <button type="button" className={className} onClick={() => showDetails()}><Icon name="discord" size={19} />{children}<Icon name="arrow" size={17} /></button>;
  }

  return <div className="site-shell" data-motion={motionPaused ? 'paused' : 'playing'}>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header container"><Brand /><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button><nav id="main-navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal"><a href="#servicos" onClick={() => setMenuOpen(false)}>Os serviços</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a><DiscordButton className="button button-nav">Cola no Discord</DiscordButton></nav></header>

    <main id="conteudo">
      <section className="hero container" id="inicio" aria-labelledby="hero-title"><JapaneseAccent className="jp-hero-side">ノヴィ</JapaneseAccent><div className="hero-copy"><span className="eyebrow"><i className="live-dot" /> A CONFIG DA NOVIZADA.</span><h1 id="hero-title">O seu jogo.<br />O seu ritmo.<br /><em>A sua sensi.</em></h1><p>Sensi e otimização para quem vive o Free Fire. Do emulador ao mobile, encontre seu ajuste com a <strong>Novi.</strong></p><div className="hero-actions"><DiscordButton /><a href="#servicos" className="text-link">Explorar serviços <Icon name="down" size={15} /></a></div><div className="hero-platforms"><span><Icon name="desktop" size={16} />Emulador</span><span><Icon name="mobile" size={16} />Android</span><span><Icon name="mobile" size={16} />iOS</span></div></div><HeroArt /></section>

      <div className="benefit-strip"><div className="container"><span><Icon name="target" />SENSI DO SEU JEITO</span><i /><span><Icon name="bolt" />SENSI & PAINEL NA HORA<span className="asterisk">*</span></span><i /><span><Icon name="discord" />TUDO PELO DISCORD</span></div></div>

      <section className="services container section-space" id="servicos" aria-labelledby="services-title"><JapaneseAccent className="jp-services">最適化</JapaneseAccent><div className="section-heading"><div><span className="eyebrow">01 / ESCOLHA SEU PRÓXIMO UPGRADE</span><h2 id="services-title">Cada player, um estilo.<br /><em>Qual é o seu?</em></h2></div><p>Emulador, Android ou iOS.<br />A novizada tem seu lugar aqui.</p></div><div className="services-grid">{services.map(service => <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.id}><div className="service-top"><span className="service-icon"><Icon name={service.icon} size={27} /></span><span>{service.number} / NOVI</span></div><span className="service-platform">{service.platform}</span><h3>{service.title.split('\n').map((line,index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</h3><p>{service.description}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="delivery"><Icon name={service.id === 'otimizacao' ? 'calendar' : 'bolt'} size={14} />{service.delivery}{service.id !== 'otimizacao' && '*'}</div><button type="button" className="service-action" onClick={() => showDetails(service)}>{service.action}<Icon name="arrow" size={18} /></button></article>)}</div><p className="delivery-note">* Sensi de emulador e painel mobile liberados após a confirmação do pagamento no Discord. Otimização de emulador com agendamento.</p></section>

      <section className="split-feature container" aria-labelledby="feature-title"><div className="feature-art" aria-hidden="true"><div className="feature-grid" /><JapaneseAccent className="jp-feature">集中</JapaneseAccent><span className="feature-label">NOVI / PERFORMANCE MINDSET</span><Icon name="target" size={180} /><span className="feature-word">SEU JOGO.<br /><em>SEU AJUSTE.</em></span><span className="feature-mini">EMULADOR + MOBILE</span></div><div className="feature-copy"><span className="eyebrow">CADA PLAYER TEM O SEU ESTILO.</span><h2 id="feature-title">Encontre a config<br /><em>do seu jogo.</em></h2><p>Cada setup e cada player têm seu jeito. A Novi reúne sensi para emulador, painel mobile e otimização remota para você ajustar sua experiência no Free Fire.</p><ul className="check-list"><li><Icon name="check" size={17} />Opções para PC, Android e iOS</li><li><Icon name="check" size={17} />Orientações e pagamento no Discord</li><li><Icon name="check" size={17} />Otimização de emulador via AnyDesk</li></ul><a href="#como-funciona" className="text-link">Veja como dar o próximo passo <Icon name="arrow" size={17} /></a></div></section>

      <section className="process container section-space" id="como-funciona" aria-labelledby="process-title"><div className="section-heading"><div><span className="eyebrow">02 / DO DISCORD PARA O SEU JOGO</span><h2 id="process-title">Sem enrolação.<br /><em>O próximo passo é seu.</em></h2></div><span className="section-side-note"><Icon name="discord" size={29} />Nossa base é<br />no Discord.</span></div><ol className="process-grid">{[['Entre na novizada.', 'Acesse o servidor oficial da Novi pelo botão do Discord.'], ['Escolha o serviço.', 'Confira valores, compatibilidade e condições com a equipe.'], ['Pague pelo servidor.', 'Toda a compra acontece no Discord. Nada de pagamento por aqui.'], ['Receba ou agende.', 'Sensi emu e painel mobile na hora após confirmação. Otimização com horário marcado.']].map(([title,description],index) => <li key={title}><span className="step-number">0{index + 1}<Icon name="arrow" size={15} /></span><h3>{title}</h3><p>{description}</p></li>)}</ol></section>

      <section className="faq container section-space" id="duvidas" aria-labelledby="faq-title"><div><span className="eyebrow">03 / BORA TIRAR AS DÚVIDAS</span><h2 id="faq-title">Antes de<br /><em>dar o play.</em></h2><p>O que a novizada precisa saber<br />para começar.</p><DiscordButton className="text-link">Conversar no Discord</DiscordButton></div><div className="faq-list">{questions.map(([question,answer]) => <details key={question}><summary>{question}<span className="faq-toggle" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="contact container" aria-labelledby="contact-title"><JapaneseAccent className="jp-contact">ノヴィ</JapaneseAccent><div><span className="eyebrow"><i className="live-dot" /> SUA PRÓXIMA CONFIG COMEÇA AQUI.</span><h2 id="contact-title">Chega mais,<br /><em>novizada.</em></h2><p>Escolha sua sensi, conheça o painel ou agende<br className="desktop-break" /> sua otimização. A gente se encontra no Discord.</p><DiscordButton>Entrar na comunidade</DiscordButton></div><div className="contact-art" aria-hidden="true"><Icon name="discord" size={180} /><span>NOVI SENSI<br />SEU JOGO. SEU AJUSTE.</span></div></section>
    </main>

    <footer className="site-footer container"><Brand /><p>Da novizada. Para o seu jogo.</p><a className="back-top" href="#inicio">Voltar ao topo ↑</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Novi Sensi.</span><button className="motion-toggle" type="button" aria-label="Pausar animações" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}><Icon name={motionPaused ? 'play' : 'pause'} size={13} />{motionPaused ? 'Animações pausadas' : 'Pausar animações'}</button><span>Projeto independente, sem vínculo com a Garena ou Free Fire.</span></div></footer>

    <dialog ref={dialogRef} className="service-dialog" aria-labelledby="dialog-title" onClick={event => { if (event.target !== event.currentTarget) return; const rect=event.currentTarget.getBoundingClientRect(); if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialogRef.current.close(); }}><button type="button" className="close-dialog" aria-label="Fechar detalhes" onClick={() => dialogRef.current.close()}><Icon name="close" /></button><span className="eyebrow">NOVI SENSI / {selectedService ? 'SEU PRÓXIMO UPGRADE' : 'NOSSA COMUNIDADE'}</span><h2 id="dialog-title">{selectedService ? selectedService.name : 'O encontro é no Discord.'}</h2>{selectedService && <><p>{selectedService.description}</p><ul className="check-list">{selectedService.details.map(detail => <li key={detail}><Icon name="check" size={17} />{detail}</li>)}</ul><p className="dialog-timing"><Icon name={selectedService.id === 'otimizacao' ? 'calendar' : 'bolt'} size={18} />{selectedService.timing}</p></>}{invite ? <><a className="button button-lime" href={invite} target="_blank" rel="noopener noreferrer"><Icon name="discord" size={19} />Continuar no Discord<Icon name="arrow" size={17} /><span className="sr-only"> (abre em uma nova aba)</span></a><p className="dialog-note">Valores, pagamento e atendimento no servidor oficial.</p></> : <div className="unavailable-notice" role="status"><strong>Convite disponível em breve.</strong><p>O link oficial do servidor ainda não está disponível nesta página. As compras e os agendamentos serão feitos pelo Discord.</p></div>}</dialog>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
