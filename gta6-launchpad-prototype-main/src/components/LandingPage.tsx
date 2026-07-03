import { useEffect, useState } from "react";
export default function LandingPage() {
const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const target = new Date();
  target.setDate(target.getDate() + 14);

  const timer = setInterval(() => {
    const distance = target.getTime() - new Date().getTime();

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);  
  return (
    <div className="landing-page">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700;800&family=Montserrat:wght@700;800;900&display=swap');
        :root{
          --bg:#0D0D0D;
          --pink:#E8427A;
          --purple:#7B3FA0;
          --orange:#F07A3A;
          --gold:#F5C842;
          --text:#fff;
          --muted:#b9b3c7;
          --card:#161018;
          --sunset:linear-gradient(135deg,#1f3b8f 0%,#7B3FA0 35%,#E8427A 70%,#F07A3A 100%);
          --neon-pink:0 0 0 1px rgba(232,66,122,.5), 0 0 18px rgba(232,66,122,.45), 0 0 40px rgba(232,66,122,.25);
          --neon-purple:0 0 0 1px rgba(123,63,160,.5), 0 0 18px rgba(123,63,160,.55), 0 0 40px rgba(123,63,160,.3);
        }
        .landing-page{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh}
        .landing-page a{color:inherit;text-decoration:none}
        .landing-page img{max-width:100%;display:block}
        .display{font-family:'Bebas Neue',sans-serif;letter-spacing:.5px;line-height:.95;text-transform:uppercase}
        .bebas{font-family:'Bebas Neue',sans-serif;letter-spacing:1px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 22px;border-radius:14px;font-weight:800;font-size:16px;border:0;cursor:pointer;width:100%;text-align:center;transition:transform .15s ease, box-shadow .2s ease;text-transform:uppercase;letter-spacing:.5px}
        .btn-primary{background:linear-gradient(135deg,var(--pink),var(--orange));color:#fff;box-shadow:var(--neon-pink)}
        .btn-primary:hover{transform:translateY(-2px)}
        .btn-gold{background:linear-gradient(135deg,var(--gold),var(--orange));color:#1a0f00;box-shadow:0 0 24px rgba(245,200,66,.35)}
        .btn-ghost{background:transparent;color:#cfc7d8;border:1px solid rgba(255,255,255,.15)}
        .btn-purple{background:linear-gradient(135deg,var(--purple),#3a2660);color:#fff;box-shadow:var(--neon-purple)}

        .hero{position:relative;overflow:hidden;background:radial-gradient(120% 80% at 50% 0%, rgba(232,66,122,.35), transparent 60%),radial-gradient(80% 60% at 80% 30%, rgba(240,122,58,.25), transparent 60%),linear-gradient(180deg,#1a0a26 0%,#0D0D0D 80%);padding:28px 18px 36px}
        .palm{position:absolute;opacity:.35;pointer-events:none}
        .palm.l{left:-20px;top:30px;width:140px}
        .palm.r{right:-30px;top:80px;width:170px;transform:scaleX(-1)}
        .hero-tag{display:inline-block;font-family:'Bebas Neue';letter-spacing:2px;color:var(--gold);font-size:13px;border:1px solid rgba(245,200,66,.35);padding:4px 10px;border-radius:999px;background:rgba(245,200,66,.08)}
        .hero h1{font-family:'Bebas Neue','Bebas Neue',sans-serif;font-size:54px;line-height:.9;margin:14px 0 10px;text-transform:uppercase}
        .hero h1 .vi{background:var(--sunset);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 18px rgba(232,66,122,.5))}
        .hero p.sub{color:#e6dff2;font-size:15px;line-height:1.5;margin-bottom:18px}
        .hero-img{position:relative;border-radius:18px;overflow:hidden;box-shadow:var(--neon-purple);aspect-ratio:4/5;background:#000}
        .hero-img img{width:100%;height:100%;object-fit:cover}
        .hero-cta{margin-top:22px}
        .price-row{display:flex;align-items:baseline;gap:10px;justify-content:center;margin:10px 0 18px}
        .price-old{color:#7a6f86;text-decoration:line-through;font-size:18px}
        .price-now{font-family:'Bebas Neue','Bebas Neue';font-size:46px;color:var(--gold);text-shadow:0 0 20px rgba(245,200,66,.4)}
        .price-row small{color:var(--muted);font-size:12px;display:block;text-align:center;margin-bottom:14px}

        section.block{padding:36px 18px;position:relative}
        section.block h2{font-family:'Bebas Neue','Bebas Neue';font-size:36px;text-transform:uppercase;line-height:.95;margin-bottom:14px}
        section.block h2 .accent{background:var(--sunset);-webkit-background-clip:text;color:transparent}
        section.block p.lead{color:var(--muted);font-size:15px;line-height:1.6;margin-bottom:18px}

        .gta5-card{display:flex;gap:14px;background:#150c1c;border:1px solid rgba(123,63,160,.3);border-radius:16px;padding:14px;box-shadow:var(--neon-purple)}
        .gta5-card img{width:110px;border-radius:10px;object-fit:cover}
        .gta5-card h3{font-family:'Bebas Neue';font-size:22px;color:var(--pink);letter-spacing:1px;margin-bottom:4px}
        .gta5-card p{color:#cfc7d8;font-size:13px;line-height:1.5}

        .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
        .stat{background:#150c1c;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:12px 8px;text-align:center}
        .stat b{font-family:'Bebas Neue','Bebas Neue';font-size:26px;display:block;color:var(--gold);line-height:1}
        .stat span{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}

        .trailer{margin-top:22px;border-radius:16px;overflow:hidden;position:relative;box-shadow:var(--neon-pink)}
        .trailer img{width:100%;aspect-ratio:16/9;object-fit:cover}
        .play{
  display:none;
}

        .modules{display:grid;gap:14px;margin-top:8px}
        .mod{background:linear-gradient(135deg,#1a0f24,#120a1a);border:1px solid rgba(232,66,122,.2);border-radius:16px;padding:16px;position:relative;overflow:hidden}
        .mod::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--sunset)}
        .mod .num{font-family:'Bebas Neue','Bebas Neue';font-size:42px;color:var(--pink);line-height:.8;text-shadow:0 0 15px rgba(232,66,122,.5)}
        .mod h3{font-family:'Bebas Neue';font-size:22px;letter-spacing:1px;margin:6px 0}
        .mod p{color:var(--muted);font-size:13px;line-height:1.55}
        .mod ul{margin-top:8px;padding-left:18px;color:#d6cee0;font-size:13px}
        .mod ul li{margin-bottom:4px}

        .bonus{background:linear-gradient(135deg,rgba(245,200,66,.12),rgba(240,122,58,.08));border:1px dashed rgba(245,200,66,.4);border-radius:16px;padding:18px;margin-top:18px}
        .bonus h3{font-family:'Bebas Neue','Bebas Neue';color:var(--gold);font-size:26px;margin-bottom:10px}
        .bonus-item{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06)}
        .bonus-item:last-child{border:0}
        .bonus-item .ic{width:34px;height:34px;border-radius:8px;background:var(--gold);color:#1a0f00;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}
        .bonus-item b{font-size:14px}
        .bonus-item span{font-size:12px;color:var(--muted);display:block}

        .final-cta{background:var(--sunset);border-radius:20px;padding:22px;text-align:center;margin-top:24px;box-shadow:0 0 40px rgba(232,66,122,.4)}
        .final-cta h2{font-family:'Bebas Neue','Bebas Neue';font-size:34px;line-height:.95;margin-bottom:10px}
        .final-cta p{font-size:14px;margin-bottom:14px;opacity:.95}
        .countdown{display:flex;gap:6px;justify-content:center;margin:14px 0}
        .countdown div{background:rgba(0,0,0,.4);border-radius:8px;padding:8px 10px;min-width:54px}
        .countdown b{font-family:'Bebas Neue','Bebas Neue';font-size:24px;display:block}
        .countdown span{font-size:9px;text-transform:uppercase;letter-spacing:1px;opacity:.8}

        footer{padding:30px 18px;text-align:center;color:#544c5e;font-size:11px;border-top:1px solid rgba(255,255,255,.05)}

        @media(min-width:768px){
          .hero h1{font-size:78px}
          section.block h2{font-size:48px}
          .stats{grid-template-columns:repeat(3,1fr)}
          .modules{grid-template-columns:1fr 1fr}
        }
      `}</style>

      <section className="hero">
        <svg className="palm l" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 200 L50 80" stroke="#3a1a4a" strokeWidth="4" fill="none"/>
          <path d="M50 80 C20 60 5 65 0 50 C20 55 35 60 50 75 Z" fill="#E8427A"/>
          <path d="M50 80 C80 60 95 65 100 50 C80 55 65 60 50 75 Z" fill="#7B3FA0"/>
          <path d="M50 80 C30 50 30 30 15 20 C35 30 45 50 50 75 Z" fill="#F07A3A"/>
          <path d="M50 80 C70 50 70 30 85 20 C65 30 55 50 50 75 Z" fill="#7B3FA0"/>
        </svg>
        <svg className="palm r" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 200 L50 80" stroke="#3a1a4a" strokeWidth="4" fill="none"/>
          <path d="M50 80 C20 60 5 65 0 50 C20 55 35 60 50 75 Z" fill="#E8427A"/>
          <path d="M50 80 C80 60 95 65 100 50 C80 55 65 60 50 75 Z" fill="#7B3FA0"/>
          <path d="M50 80 C30 50 30 30 15 20 C35 30 45 50 50 75 Z" fill="#F07A3A"/>
        </svg>

        <span className="hero-tag">🌴 Vice City • 2026</span>
        <h1>A Grande<br/>Virada <span className="vi">VI</span></h1>
        <p className="sub">Aprenda a transformar o lançamento mais esperado da década em <b>renda recorrente</b> com streaming, conteúdo e afiliados — mesmo começando do zero.</p>

        <div className="hero-img">
          <img src="/gta6-poster.jpeg" alt="GTA 6 Vice City" />
        </div>

        <div className="hero-cta">
          <div className="price-row">
            <span className="price-old">R$ 97,90</span>
            <span className="price-now">R$ 39,90</span>
          </div>
          <small>ou 3x de R$ 14,52 • Acesso vitalício</small>
          <a
  href="https://lastlink.com/p/C2777DD37/checkout-payment"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  }}
  className="btn btn-primary"
>
  Quero Entrar Agora 🔥
</a>
        </div>
      </section>

      <section className="block">
        <h2>Lembra do <span className="accent">GTA 5</span>?</h2>
        <p className="lead">Em 2013, criadores independentes surfaram a onda do GTA 5 e construíram audiências sólidas. <b style={{color:'var(--pink)'}}>O GTA 6 será ainda maior — e quem se posicionar antes leva vantagem.</b></p>

        <div className="gta5-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="GTA V" />
          <div>
            <h3>O caso GTA 5</h3>
            <p>Mais de <b>200 milhões de cópias</b> vendidas. Criadores que pegaram a onda em 2013 ainda vivem do jogo até hoje.</p>
          </div>
        </div>

        <div className="stats">
          <div className="stat"><b>Maior</b><span>Lançamento da Rockstar</span></div>
          <div className="stat"><b>500M+</b><span>Views já no trailer</span></div>
          <div className="stat"><b>Top 1</b><span>Em vendas Steam</span></div>
        </div>
      </section>

      <section className="block" style={{background:'#0a0610'}}>
        <h2>A janela é <span className="accent">agora</span></h2>
        <p className="lead">Quem se posicionar antes do lançamento, surfa a maior onda da história dos games.</p>

        <div className="trailer">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/QdBZY2fkU-0"
    title="Trailer 1 GTA VI"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<div className="trailer" style={{ marginTop: "14px" }}>
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/VQRLujxTm3c"
    title="Trailer 2 GTA VI"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
      </section>

      <section className="block">
        <h2>O que você vai <span className="accent">aprender</span></h2>
        <p className="lead">4 módulos diretos ao ponto. Sem enrolação. Você assiste hoje, aplica amanhã.</p>

        <div className="modules">
          <div className="mod">
            <div className="num">01</div>
            <h3>A Oportunidade Histórica</h3>
            <p>Por que o GTA 6 é a maior chance da década.</p>
            <ul>
              <li>Como o GTA 5 mudou vidas</li>
              <li>Por que o GTA 6 é diferente</li>
              <li>A janela exata para agir agora</li>
            </ul>
          </div>
          <div className="mod">
            <div className="num">02</div>
            <h3>Seu Plano de Gameplay</h3>
            <p>O que gravar e como se posicionar desde a sessão 1.</p>
            <ul>
              <li>O que gravar (e o que ignorar)</li>
              <li>Como se comportar na câmera</li>
              <li>Estrutura de sessões viralizáveis</li>
            </ul>
          </div>
          <div className="mod">
            <div className="num">03</div>
            <h3>Divulgação que Funciona</h3>
            <p>O playbook orgânico que está bombando agora.</p>
            <ul>
              <li>TikTok: cortes que viralizam</li>
              <li>Reels e Shorts: a fórmula 3-7-15</li>
              <li>YouTube: crescimento orgânico</li>
            </ul>
          </div>
          <div className="mod">
            <div className="num">04</div>
            <h3>Monetização na Prática</h3>
            <p>Várias fontes de renda rodando ao mesmo tempo.</p>
            <ul>
              <li>AdSense e YouTube Partner</li>
              <li>Twitch: subs, bits e doações</li>
              <li>Afiliados e parcerias com marcas</li>
            </ul>
          </div>
        </div>

        <div className="bonus">
          <h3>🎁 Bônus Inclusos</h3>
          <div className="bonus-item"><div className="ic">🛠</div><div><b>Ferramentas Gratuitas</b><span>Lista para criar conteúdo profissional sem gastar nada</span></div></div>
          <div className="bonus-item"><div className="ic">🎬</div><div><b>Ideias de Vídeos</b><span>Calendário para a semana de lançamento — só apertar play</span></div></div>
          <div className="bonus-item"><div className="ic">✍️</div><div><b>Scripts Prontos</b><span>Ganchos virais para vídeos e lives</span></div></div>
        </div>

        <div className="final-cta">
          <h2>Não fique de fora<br/>dessa vez</h2>
          <p>O lançamento se aproxima. Cada dia parado é dinheiro deixado na mesa.</p>
          <div className="countdown">
  <div><b>{timeLeft.days}</b><span>Dias</span></div>
  <div><b>{timeLeft.hours}</b><span>Hrs</span></div>
  <div><b>{timeLeft.minutes}</b><span>Min</span></div>
  <div><b>{timeLeft.seconds}</b><span>Seg</span></div>
</div>
         <a
  href="https://lastlink.com/p/C2777DD37/checkout-payment"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  }}
  className="btn btn-gold"
>
  Garantir Minha Vaga →
</a>
        </div>
      </section>

      <footer>
        GTA 6: A Grande Virada • Curso independente, sem vínculo com Rockstar Games.<br/>
        Garantia incondicional de 7 dias.
      </footer>
    </div>
  );
}
