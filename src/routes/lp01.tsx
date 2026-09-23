import { createFileRoute } from "@tanstack/react-router";
import { ConsultioPage } from "@/components/consultio-page";

export const Route = createFileRoute("/lp01")({
  head: () => ({
    meta: [
      { title: "Consultio — Decisões melhores. Resultados maiores." },
      { name: "description", content: "Estratégia na prática e soluções personalizadas para resultados de verdade." },
      { property: "og:title", content: "Consultio — Decisões melhores. Resultados maiores." },
      { property: "og:description", content: "Consultoria em estratégia, gestão e pessoas para empresas que querem crescer de forma sólida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/lp01" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/lp01" }],
  }),
  component: Lp01,
});

function Lp01() {
  return <ConsultioPage theme="dark" />;
}