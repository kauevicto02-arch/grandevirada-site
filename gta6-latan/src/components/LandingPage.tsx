import { useEffect, useState } from "react";
import MetaPixel from "./MetaPixel";
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
  <>
    <MetaPixel />
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

        .hero{position:relative;overflow:hidden;background:radial-gradient(120% 80% at 50% 0%, rgba(232,66,122,.35), transparent 60%),radial-gradient(80% 60% at 80% 30%, rgba(240,122,58,.25), transparent 60%),linear-gradient(180deg,#1a0a26 0%,#0D0D0D 80%);padding:34px 18px 44px}
.hero-inner{
  max-width:1180px;
  margin:0 auto;
  display:grid;
  gap:26px;
  align-items:center;
  padding:0 28px;
}

@media(min-width:768px){
  .hero-inner{grid-template-columns:1fr 1fr;gap:60px}
}
.hero-content{
  position:relative;
  z-index:2;
  max-width:500px;
}
        .palm{position:absolute;opacity:.35;pointer-events:none}
        .palm.l{left:-20px;top:30px;width:140px}
        .palm.r{right:-30px;top:80px;width:170px;transform:scaleX(-1)}
        .hero-tag{display:inline-block;font-family:'Bebas Neue';letter-spacing:2px;color:var(--gold);font-size:13px;border:1px solid rgba(245,200,66,.35);padding:8px 14px;border-radius:999px;background:rgba(245,200,66,.08)}
        .hero h1{font-family:'Bebas Neue','Bebas Neue',sans-serif;font-size:54px;line-height:.9;margin:18px 0 14px;text-transform:uppercase}
        .hero h1 .vi{background:var(--sunset);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 18px rgba(232,66,122,.5))}
        .hero p.sub{color:#e6dff2;font-size:15px;line-height:1.5;margin-bottom:18px}
        .hero-img{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  box-shadow:var(--neon-purple);
  background:#000;
}

.hero-img img{
  width:100%;
  height:auto;
  object-fit:contain;
}
        .hero-cta{margin-top:22px}
        .price-row{display:flex;align-items:baseline;gap:10px;justify-content:center;margin:10px 0 18px}
        .price-old{color:#7a6f86;text-decoration:line-through;font-size:18px}
        .price-now{font-family:'Bebas Neue','Bebas Neue';font-size:46px;color:var(--gold);text-shadow:0 0 20px rgba(245,200,66,.4)}
        .price-row small{color:var(--muted);font-size:12px;display:block;text-align:center;margin-bottom:14px}

        section.block{padding:36px 18px;position:relative}
        section.block h2{font-family:'Bebas Neue','Bebas Neue';font-size:36px;text-transform:uppercase;line-height:.95;margin-bottom:14px}
        section.block h2 .accent{background:var(--sunset);-webkit-background-clip:text;color:transparent}
        section.block p.lead{color:var(--muted);font-size:15px;line-height:1.6;margin-bottom:18px}

        .gta-card{
display:flex;
align-items:center;
gap:12px;
background:#1a0f2a;
border:1px solid rgba(255,255,255,.08);
border-radius:18px;
padding:10px 14px;
margin-bottom:10px;
}

.gta-card img,
.gta-card .icon{
width:46px;
height:46px;
border-radius:12px;
flex-shrink:0;
min-height:72px;
}

.gta-card h3{
font-family:'Bebas Neue';
line-height:.95;
line-height:1;
letter-spacing:.8px;
margin:0;
}

.gta-card p{
display:none;
}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
        .stat{background:#150c1c;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:12px 8px;text-align:center}
        .stat b{font-family:'Bebas Neue','Bebas Neue';font-size:26px;display:block;color:var(--gold);line-height:1}
        .stat span{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}

        .trailer{margin-top:22px;border-radius:16px;overflow:hidden;position:relative;box-shadow:var(--neon-pink)}
        .trailer img{width:100%;aspect-ratio:16/9;object-fit:cover}
        .play{
  display:none;
}

        .results{
display:grid;
grid-template-columns:1fr;
gap:14px;
margin-top:20px;
}

.result-card{
display:flex;
align-items:center;
gap:16px;
padding:18px;
border-radius:18px;
background:linear-gradient(135deg,#170d22,#22112f);
border:1px solid rgba(232,66,122,.20);
box-shadow:0 10px 25px rgba(0,0,0,.30);
transition:.3s;
}

.result-card:hover{
transform:translateY(-2px);
border-color:rgba(245,200,66,.45);
}

.icon{
width:54px;
height:54px;
border-radius:14px;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
background:linear-gradient(135deg,#ff2e79,#ff7a3d);
flex-shrink:0;
}

.result-card b{
font-family:'Bebas Neue',sans-serif;
font-size:24px;
font-weight:400;
letter-spacing:.5px;
line-height:1;
color:#fff;
}
.compare{
display:grid;
gap:18px;
margin-top:26px;
}

.compare-card{
padding:20px;
border-radius:18px;
border:1px solid rgba(255,255,255,.08);
}

.good{
background:linear-gradient(135deg,#122417,#1b3a24);
border:1px solid rgba(45,226,122,.35);
}

.bad{
background:linear-gradient(135deg,#2a1117,#43161f);
border:1px solid rgba(255,77,109,.35);
}

.compare-title{
font-family:'Bebas Neue';
font-size:26px;
letter-spacing:1px;
margin-bottom:12px;
}

.compare-item{
padding:9px 0;
border-bottom:1px solid rgba(255,255,255,.04);
font-size:15px;
font-weight:600;
}

.compare-item:last-child{
border-bottom:none;
}
.faq{
display:grid;
gap:14px;
margin-top:22px;
}

.faq-item{
background:#171028;
border:1px solid rgba(255,255,255,.06);
border-radius:14px;
padding:14px;
}

.faq-item h3{
font-family:'Bebas Neue';
font-size:22px;
letter-spacing:1px;
margin-bottom:4px;
}

.faq-item p{
color:var(--muted);
font-size:14px;
line-height:1.35;
}
        .bonus{background:linear-gradient(135deg,rgba(245,200,66,.12),rgba(240,122,58,.08));border:1px dashed rgba(245,200,66,.4);border-radius:16px;padding:18px;margin-top:18px}
        .bonus h3{font-family:'Bebas Neue','Bebas Neue';color:var(--gold);font-size:26px;margin-bottom:10px}
        .bonus-item{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06)}
        .bonus-item:last-child{border:0}
        .bonus-item .ic{width:34px;height:34px;border-radius:8px;background:var(--gold);color:#1a0f00;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}
        .bonus-item b{font-size:14px}
        .bonus-item span{font-size:12px;color:var(--muted);display:block}

        .final-cta{background:var(--sunset);border-radius:20px;padding:22px;text-align:center;margin-top:8px;box-shadow:0 0 40px rgba(232,66,122,.4)}
        .final-cta h2{font-family:'Bebas Neue','Bebas Neue';font-size:34px;line-height:.95;margin-bottom:10px}
        .final-cta p{font-size:14px;margin-bottom:14px;opacity:.95}
        .countdown{display:flex;gap:6px;justify-content:center;margin:14px 0}
        .countdown div{background:rgba(0,0,0,.4);border-radius:8px;padding:8px 10px;min-width:54px}
        .countdown b{font-family:'Bebas Neue','Bebas Neue';font-size:24px;display:block}
        .countdown span{font-size:9px;text-transform:uppercase;letter-spacing:1px;opacity:.8}

        footer{padding:30px 18px;text-align:center;color:#544c5e;font-size:11px;border-top:1px solid rgba(255,255,255,.05)}

       @media(min-width:768px){
  .hero-inner{grid-template-columns:1fr 1fr}
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
    <path d="M50 80 C30 50 30 30 15 20 C35 30 45 50 75 Z" fill="#F07A3A"/>
  </svg>

  <div className="hero-inner">
    <div>
      <span className="hero-tag">🌴 LA GRAN OPORTUNIDAD GTA IV</span>

      <h1>
  GANA DINERO<br />
  CON<span className="vi">GTA VI</span>
</h1>
<p
  style={{
    color: "#F5C842",
    fontWeight: "700",
    marginTop: "12px",
    marginBottom: "8px",
    letterSpacing: "1px",
  }}
>
  MÉTODO GTA VI
</p>

      <p className="sub">
  Mientras millones esperan el lanzamiento de GTA VI solo para jugar, tú puedes aprovechar este momento para crear contenido, construir una audiencia y generar ingresos antes que la mayoría.
</p>

      <div style={{ display: "grid", gap: "10px", margin: "22px 0" }}>
  <span>✅ Empieza incluso sin experiencia</span>
  <span>✅ No necesitas aparecer en los videos</span>
  <span>✅ Puedes empezar solo con tu celular</span>
  <span>✅ Acceso inmediato + garantía de 7 días</span>
</div>

      <div className="hero-cta">
        <div className="price-row">
          <span className="price-old">R$ 97,90</span>
          <span className="price-now">R$ 19,90</span>
        </div>

        <small>🔒 Compra 100% segura • Garantía de 7 días</small>

        <a
          href="https://pay.hotmart.com/R106649539E"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if ((window as any).fbq) {
              (window as any).fbq("track", "InitiateCheckout");
            }
          }}
          className="btn btn-primary"
        >
          🚀 QUIERO EMPEZAR AHORA
        </a>
      </div>
    </div>
<section className="block">

  <h2>
    Conoce por dentro el<span className="accent">curso</span>
  </h2>

  <p className="lead">
     Millones de personas ya esperan GTA VI. Aprovecha esta oportunidad para crear una audiencia antes que la mayoría.
    <br /><br />
  </p>

  <div className="hero-img">
    <img
      src="/mocup-latan.jpeg"
      alt="Área de miembros Método GTA VI"
    />
  </div>

</section>
  </div>

        <section className="block">

<h2>
LO QUE VAS A <span className="accent">LOGRAR</span>
</h2>

<p className="lead">
Aunque empieces hoy utilizando solo tu celular.
</p>

<div className="results">

<div className="result-card">
<div className="icon">🎬</div>
<b>Crear videos que captan la atención</b>
</div>

<div className="result-card">
<div className="icon">📱</div>
<b>Crecer en TikTok y YouTube Shorts</b>
</div>

<div className="result-card">
<div className="icon">🤖</div>
<b>Usar IA para crear contenido mucho más rápido</b>
</div>

<div className="result-card">
<div className="icon">💰</div>
<b>Convertir el hype en ingresos</b>
</div>

<div className="result-card">
<div className="icon">🎮</div>
<b>Aprovechar el mayor lanzamiento de la década</b>
</div>

<div className="result-card">
<div className="icon">🚀</div>
<b>Empezar incluso sin experiencia</b>
</div>

</div>

</section>

        <div style={{marginTop:"22px"}}>
          <a
            href="https://pay.hotmart.com/R106649539E"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq("track", "InitiateCheckout");
              }
            }}
            className="btn btn-primary"
          >
            QUIERO EMPEZAR AHORA 🚀
          </a>
        </div>
      </section>
      <section className="block" style={{ background: "#0a0610" }}>
  <h2>
    Todo el mundo está hablando de <span className="accent">GTA VI</span>
  </h2>

  <p className="lead">
    Los tráilers oficiales ya acumulan cientos de millones de visualizaciones.
    Mientras millones esperan el lanzamiento, tú puedes aprovechar esa atención para crear una audiencia antes que la mayoría.
  </p>

  <div className="stats" style={{ marginBottom: "22px" }}>
    <div className="stat">
      <b>500M+</b>
      <span>Visualizaciones de los tráilers</span>
    </div>
    <div className="stat">
      <b>Global</b>
      <span>Interés mundial</span>
    </div>
    <div className="stat">
      <b>Ahora</b>
      <span>Momento ideal para prepararte</span>
    </div>
  </div>

  <div className="trailer">
    <iframe
      width="100%"
      height="300"
      src="https://www.youtube.com/embed/QdBZY2fkU-0"
      title="Tráiler Oficial GTA VI"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div style={{ marginTop: "22px" }}>
    <a
      href="https://pay.hotmart.com/R106649539E"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if ((window as any).fbq) {
          (window as any).fbq("track", "InitiateCheckout");
        }
      }}
      className="btn btn-primary"
    >
      🚀 QUIERO APROVECHAR ESTA OPORTUNIDAD
    </a>
  </div>
<section className="block">

<h2>
¿POR QUÉ EMPEZAR <span className="accent">AHORA</span>
</h2>

<p className="lead">
Quien empieza antes del lanzamiento estará preparado cuando toda la atención llegue a GTA VI.
</p>

<div className="compare">

<div className="compare-card good">

<div className="compare-title">
🟢 EMPEZAR AHORA
</div>

<div className="compare-item">✔ Menos competencia</div>

<div className="compare-item">✔ Tiempo para aprender</div>

<div className="compare-item">✔ Crecer antes que la mayoría</div>

<div className="compare-item">✔ Llegar preparado al lanzamiento</div>

</div>

<div className="compare-card bad">

<div className="compare-title">
🔴 ESPERAR EL LANZAMIENTO
</div>

<div className="compare-item">✖ Mucha más competencia</div>

<div className="compare-item">✖ Algoritmo saturado</div>

<div className="compare-item">✖ Crecimiento más lento</div>

<div className="compare-item">✖ Llegar tarde</div>

</div>

</div>
</section>
<section className="block">

  <div className="final-cta">
    <h2>🛡️GARANTÍA DE 7 DÍAS</h2>

    <p>
      Teste todo o treinamento por 7 dias. Se não for para você, basta solicitar o reembolso dentro do prazo.
    </p>

    <a
      href="https://pay.hotmart.com/R106649539E"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if ((window as any).fbq) {
          (window as any).fbq("track", "InitiateCheckout");
        }
      }}
      className="btn btn-gold"
    >
      🚀 QUIERO ACCEDER AHORA
    </a>
  </div>

</section>
        <div className="bonus">
          <h3>🎁 Bonos Incluidos</h3>
          <div className="bonus-item"><div className="ic">🛠</div><div><b>Herramientas Gratuitas</b><span>Lista de herramientas para crear contenido profesional sin gastar dinero.</span></div></div>
          <div className="bonus-item"><div className="ic">🎬</div><div><b>Ideas de Videos</b><span>Calendario de contenido para la semana del lanzamiento.Solo tendrás que publicar.</span></div></div>
          <div className="bonus-item"><div className="ic">✍️</div><div><b>Guiones Listos</b><span>Ganchos virales para videos y transmisiones en vivo.</span></div></div>
        </div>
<section className="block">

<h2>
PREGUNTAS <span className="accent">FRECUENTES</span>
</h2>

<div className="faq">

<div className="faq-item">
<h3>📱 ¿Puedo hacer todo desde mi celular?</h3>
<p>Sí. Funciona perfectamente desde el celular o la computadora.</p>
</div>

<div className="faq-item">
<h3>🎥 ¿Necesito aparecer en los videos?</h3>
<p>No. Puedes aplicar el método sin mostrar tu rostro.</p>
</div>

<div className="faq-item">
<h3>⚡¿El acceso es inmediato?</h3>
<p>Sí. El acceso se libera automáticamente después de confirmar el pago.</p>
</div>

<div className="faq-item">
<h3>🛡️ ¿Hay garantía?</h3>
<p>Sí. Tienes 7 días para probar el curso. Si no cumple tus expectativas, puedes solicitar el reembolso.</p>
</div>

</div>

</section>
        <div className="final-cta">
          <h2>EMPIEZA ANTES<br/>DEL LANZAMIENTO</h2>
          <p>Cada día que pasa es una oportunidad perdida.
Entra hoy y prepárate antes de que GTA VI conquiste Internet.</p>
          <div className="countdown">
  <div><b>{timeLeft.days}</b><span>Días</span></div>
  <div><b>{timeLeft.hours}</b><span>Horas</span></div>
  <div><b>{timeLeft.minutes}</b><span>Min</span></div>
  <div><b>{timeLeft.seconds}</b><span>Seg</span></div>
</div>
         <a
  href="https://pay.hotmart.com/R106649539E"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if ((window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  }}
  className="btn btn-gold"
>
 🚀 QUIERO ASEGURAR MI ACCESO
</a>
        </div>
      </section>

      <footer>
        🔒 Pago 100% Seguro

✔ Acceso Inmediato

✔ Garantía de 7 Días

Curso independiente. No está afiliado ni respaldado por Rockstar Games o Take-Two Interactive.
          </footer>
    </div>
  </>
);
}