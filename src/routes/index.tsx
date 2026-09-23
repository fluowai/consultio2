import { createFileRoute } from "@tanstack/react-router";
import { ConsultioPage } from "@/components/consultio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consultio — Estratégia que gera resultados" },
      { name: "description", content: "Consultoria especializada em estratégia, gestão e resultados para empresas que querem crescer." },
      { property: "og:title", content: "Consultio — Estratégia que gera resultados" },
      { property: "og:description", content: "Transformando negócios hoje para um amanhã mais forte." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <ConsultioPage theme="light" />;
}
