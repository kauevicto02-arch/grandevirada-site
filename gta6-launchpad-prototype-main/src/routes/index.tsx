import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTA 6: A Grande Virada — Página de Vendas" },
      { name: "description", content: "Curso para ganhar dinheiro com o lançamento do GTA 6 — streaming, conteúdo e afiliados." },
      { property: "og:title", content: "GTA 6: A Grande Virada" },
      { property: "og:description", content: "Aprenda a faturar com o lançamento do GTA 6." },
    ],
  }),
  component: LandingPage,
});
