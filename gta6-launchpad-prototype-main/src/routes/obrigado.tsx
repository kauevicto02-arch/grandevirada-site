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

    const setupDenyButtons = () => {
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
    };

    setupDenyButtons();

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050510] text-white px-4 py-5 md:py-10">
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-pink-400 text-sm font-bold uppercase">
            Compra aprovada
          </p>

          <h1 className="text-2xl md:text-4xl font-black mt-1">
            Antes de acessar, libere esta oferta exclusiva
          </h1>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Disponível apenas nesta página.
          </p>
        </div>

        <div className="bg-white/5 border border-pink-500/30 rounded-3xl p-4 md:p-8">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <img
                src="/kit-monetizacao.jpeg"
                alt="Kit Completo de Monetização GTA VI"
                className="w-full max-w-[310px] md:max-w-[390px] mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="inline-block bg-pink-500/20 text-pink-300 border border-pink-500/40 rounded-full px-4 py-1 text-xs font-bold uppercase mb-3">
                Oferta especial pós-compra
              </p>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Kit Completo de{" "}
                <span className="text-pink-500">Monetização GTA VI</span>
              </h2>

              <p className="text-gray-300 mt-3 text-sm md:text-lg">
                Prompts, ideias, roteiros, estratégias e modelos para transformar
                conteúdo em oportunidade.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 text-left">
                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ +100 Prompts</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Ideias prontas</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Estratégias</p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <p className="font-bold text-sm">✅ Modelos de oferta</p>
                </div>
              </div>

              <div className="mt-5 bg-black/40 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-gray-400 line-through text-base">
                  De R$ 47,00
                </p>

                <p className="text-5xl md:text-6xl font-black text-green-400">
                  R$ 10,00
                </p>

                <p className="text-pink-300 font-bold text-sm mt-1">
                  Pagamento seguro • acesso imediato
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
                <div
                  id="llupsell-CB9D2E0EA-"
                  className="button-default button-accept w-full bg-green-500 hover:bg-green-400 text-black text-center font-black text-base md:text-xl px-5 py-4 rounded-2xl cursor-pointer transition"
                >
                  SIM! QUERO ADICIONAR O KIT AGORA
                </div>

                <div
                  id="denyButton2088f19"
                  className="button-default button-deny text-gray-400 hover:text-white underline cursor-pointer text-sm"
                >
                  Não, obrigado. Quero acessar apenas o curso.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center mt-4 text-[11px] md:text-sm text-gray-300">
          <div>🔒 Compra segura</div>
          <div>⚡ Acesso imediato</div>
          <div>✅ Garantia 7 dias</div>
        </div>
      </section>
    </main>
  );
}