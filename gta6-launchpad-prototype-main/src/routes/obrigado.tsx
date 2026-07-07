import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lastlink.com/upsell.min.js";
    script.async = true;
    document.body.appendChild(script);

    function setupDenyButtons() {
      document.querySelectorAll('[id^="denyButton"]').forEach((button) => {
        button.addEventListener("click", () => {
          const currentUrl = new URL(window.location.href);
          const newUrl = new URL("https://lastlink.com/app/member/dashboardV2");

          currentUrl.searchParams.forEach((value, key) => {
            newUrl.searchParams.append(key, value);
          });

          window.location.href = newUrl.toString();
        });
      });
    }

    setupDenyButtons();

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#080814] text-white px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-6 text-5xl">🎉</div>

        <p className="text-pink-400 font-bold uppercase tracking-wide mb-3">
          Compra Confirmada
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bem-vindo à Grande Virada!
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Sua compra foi aprovada. Agora você está pronto para começar sua jornada
          e se preparar para aproveitar a oportunidade do GTA 6.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-14 grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-3">1. Verifique seu e-mail</h2>
          <p className="text-gray-300">
            Os dados de acesso serão enviados para o mesmo e-mail usado na compra.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-3">2. Confira spam e promoções</h2>
          <p className="text-gray-300">
            Caso não encontre, veja também as abas Spam, Promoções ou Lixo Eletrônico.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-3">3. Aproveite a oferta abaixo</h2>
          <p className="text-gray-300">
            Antes de acessar o curso, você pode adicionar um material extra exclusivo.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-pink-500/30 text-center">
        <p className="text-pink-400 font-bold uppercase tracking-wide mb-3">
          Oferta Especial Pós-Compra
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          Turbine seus resultados com o Pack de Prompts IA + Banco de Conteúdo
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Você já garantiu o acesso à Grande Virada. Agora pode acelerar sua produção
          com prompts prontos, ideias de vídeos, ganchos, títulos e modelos para criar
          conteúdo com mais velocidade.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-8 text-left">
          <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
            <h3 className="font-bold text-lg mb-2">✅ Prompts prontos</h3>
            <p className="text-gray-300">
              Use IA para gerar ideias, roteiros, legendas e conteúdos rapidamente.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
            <h3 className="font-bold text-lg mb-2">✅ Banco de conteúdo</h3>
            <p className="text-gray-300">
              Tenha temas prontos para postar antes, durante e depois do lançamento.
            </p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
            <h3 className="font-bold text-lg mb-2">✅ Mais velocidade</h3>
            <p className="text-gray-300">
              Pare de travar sem ideia e comece a produzir com direção.
            </p>
          </div>
        </div>

        <div className="bg-black/40 rounded-2xl p-6 border border-white/10 mb-8">
          <p className="text-gray-400 line-through text-lg">De R$ 47,90</p>
          <p className="text-4xl md:text-5xl font-bold text-white mb-2">
            Por apenas R$ 11,90
          </p>
          <p className="text-gray-300">
            Oferta disponível somente nesta página.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center cursor-pointer">
          <div
            className="button-default button-accept w-full max-w-md rounded-xl font-bold text-lg px-8 py-4 bg-green-400 text-black"
            id="llupsell-CB9D2E0EA-"
          >
            Quero comprar agora!
          </div>

          <div
            className="button-default button-deny w-full max-w-md underline font-bold text-gray-300 hover:text-white"
            id="denyButton2088f19"
          >
            Recusar esta oferta
          </div>
        </div>
      </section>
    </main>
  );
}