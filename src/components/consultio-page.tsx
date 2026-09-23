import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Play,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import officeHero from "@/assets/consultio-office-hero.jpg";
import meetingImage from "@/assets/consultio-meeting.jpg";
import chessHero from "@/assets/consultio-chess-hero.jpg";
import buildingImage from "@/assets/consultio-building.jpg";

type Theme = "light" | "dark";

const lightSolutions = [
  { icon: Target, title: "Estratégia Empresarial", text: "Planejamento estratégico com foco em crescimento sustentável." },
  { icon: Settings, title: "Gestão de Processos", text: "Mais eficiência, menos custos, mais resultados." },
  { icon: Network, title: "Desenvolvimento de Pessoas", text: "Times mais preparados para grandes desafios." },
  { icon: Users, title: "Governança e Compliance", text: "Segurança e conformidade para seu negócio." },
];

const darkSolutions = [
  { icon: BarChart3, title: "Diagnóstico e Planejamento", text: "Análise profunda para decisões mais seguras." },
  { icon: Settings, title: "Gestão e Processos", text: "Mais eficiência e produtividade." },
  { icon: Users, title: "Pessoas e Cultura", text: "Times de alta performance." },
  { icon: ShieldCheck, title: "Governança e Riscos", text: "Segurança para crescer." },
  { icon: Sparkles, title: "Inovação e Transformação", text: "Preparando seu negócio para o futuro." },
];

const navItems = ["Início", "Sobre", "Soluções", "Cases", "Conteúdo", "Contato"];

function Logo({ theme }: { theme: Theme }) {
  return (
    <Link to={theme === "light" ? "/" : "/lp01"} className="flex items-center gap-2" aria-label="Consultio">
      <span className="logo-mark" aria-hidden="true"><span /></span>
      <span className="leading-none">
        <strong className="block text-[19px] font-semibold">CONSULTIO</strong>
        <span className="mt-1 block text-[5px] uppercase tracking-[0.2em] opacity-60">Consultoria empresarial</span>
      </span>
    </Link>
  );
}

function Header({ theme }: { theme: Theme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sticky top-0 z-50 border-b ${theme === "light" ? "border-soft bg-page/95" : "border-night-line bg-night/95"} backdrop-blur`}>
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <Logo theme={theme} />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase().replace("í", "i").replace("ç", "c")}`} className={`text-[12px] font-medium transition-colors ${index === 0 ? "text-brand" : "hover:text-brand"}`}>{item}</a>
          ))}
        </nav>
        <Button asChild className={theme === "light" ? "hidden rounded-full bg-brand px-5 text-brand-contrast hover:bg-brand-strong md:inline-flex" : "hidden rounded-full border border-night-muted bg-transparent px-5 text-night-text hover:border-gold hover:bg-transparent md:inline-flex"}>
          <a href="#contato">Falar com um especialista</a>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className={`border-t px-5 py-5 md:hidden ${theme === "light" ? "border-soft bg-page" : "border-night-line bg-night"}`}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace("í", "i").replace("ç", "c")}`} onClick={() => setOpen(false)} className="text-sm">{item}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Stats({ theme }: { theme: Theme }) {
  return (
    <div className="mt-8 grid max-w-[510px] grid-cols-3">
      {[["+200", "empresas atendidas"], ["98%", "de satisfação"], ["+15 anos", theme === "light" ? "de experiência" : "de mercado"]].map(([number, label], index) => (
        <div key={number} className={`pr-4 ${index > 0 ? theme === "light" ? "border-l border-soft pl-5" : "border-l border-night-line pl-5" : ""}`}>
          <strong className={`block text-2xl ${theme === "dark" ? "text-gold" : ""}`}>{number}</strong>
          <span className={`mt-1 block text-[10px] ${theme === "dark" ? "text-night-muted" : "text-subtle"}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function VideoModal({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: Theme }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay p-5" role="dialog" aria-modal="true" aria-label="Vídeo institucional">
      <div className={`relative w-full max-w-3xl overflow-hidden rounded-lg ${theme === "light" ? "bg-page" : "bg-night-card"}`}>
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-overlay text-night-text hover:bg-overlay-strong hover:text-night-text" aria-label="Fechar vídeo"><X /></Button>
        <div className="flex aspect-video items-center justify-center bg-night-card px-6 text-center">
          <div><Play className="mx-auto mb-4 size-12 text-gold" /><p className="text-lg font-semibold text-night-text">Estratégia hoje. Resultados amanhã.</p></div>
        </div>
      </div>
    </div>
  );
}

function Footer({ theme }: { theme: Theme }) {
  const isDark = theme === "dark";
  return (
    <footer id="contato" className={isDark ? "bg-night text-night-text" : "border-t border-soft bg-page text-ink"}>
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div><Logo theme={theme} /><p className={`mt-5 max-w-[230px] text-xs leading-5 ${isDark ? "text-night-muted" : "text-subtle"}`}>Estratégia, gestão e resultados para um amanhã mais forte.</p><div className="mt-5 flex gap-4"><Linkedin size={16}/><Instagram size={16}/><Youtube size={16}/></div></div>
        <div><h3 className="text-xs font-bold">{isDark ? "Soluções" : "Contato"}</h3>{isDark ? <ul className="mt-4 space-y-2 text-[11px] text-night-muted"><li>Estratégia</li><li>Gestão de Processos</li><li>Pessoas e Cultura</li><li>Governança e Compliance</li><li>Inovação</li></ul> : <ul className="mt-4 space-y-3 text-[11px] text-subtle"><li className="flex gap-2"><Phone size={13}/> (48) 4000–1234</li><li className="flex gap-2"><Mail size={13}/> contato@consultio.com.br</li><li className="flex gap-2"><MapPin size={13}/> Florianópolis - SC</li></ul>}</div>
        <div><h3 className="text-xs font-bold">{isDark ? "Institucional" : "Links Rápidos"}</h3><ul className={`mt-4 space-y-2 text-[11px] ${isDark ? "text-night-muted" : "text-subtle"}`}><li>Sobre</li><li>Soluções</li><li>Cases</li><li>Conteúdos</li><li>Trabalhe Conosco</li><li>Contato</li></ul></div>
        <div>{isDark ? <><h3 className="text-xs font-bold">Contato</h3><ul className="mt-4 space-y-3 text-[11px] text-night-muted"><li className="flex gap-2"><Phone size={13}/> (48) 4000–1234</li><li className="flex gap-2"><Mail size={13}/> contato@consultio.com.br</li><li className="flex gap-2"><MapPin size={13}/> Florianópolis - SC</li></ul></> : <><h3 className="text-xs font-bold">Receba nossos conteúdos</h3><p className="mt-4 text-[11px] text-subtle">Cadastre-se e receba insights sobre gestão e estratégia.</p><div className="mt-4 flex"><input aria-label="Seu e-mail" placeholder="Seu e-mail" className="min-w-0 flex-1 rounded-l-md border border-soft px-3 text-xs outline-none focus:border-brand"/><Button className="rounded-l-none bg-brand text-brand-contrast hover:bg-brand-strong">Cadastrar</Button></div></>}</div>
      </div>
      <div className={`mx-auto flex max-w-[1180px] flex-col gap-3 border-t px-5 py-6 text-[10px] sm:flex-row sm:justify-between lg:px-8 ${isDark ? "border-night-line text-night-muted" : "border-soft text-subtle"}`}><span>© 2026 Consultio. Todos os direitos reservados.</span><span>Política de Privacidade &nbsp; | &nbsp; Termos de Uso</span></div>
    </footer>
  );
}

export function ConsultioPage({ theme }: { theme: Theme }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const isDark = theme === "dark";
  const solutions = isDark ? darkSolutions : lightSolutions;
  return (
    <div className={isDark ? "min-h-screen bg-night font-sans text-night-text" : "min-h-screen bg-page font-sans text-ink"}>
      <Header theme={theme} />
      <main>
        <section id="inicio" className={`relative overflow-hidden ${isDark ? "min-h-[510px]" : "min-h-[520px] bg-warm"}`}>
          <img src={isDark ? chessHero : officeHero} alt={isDark ? "Rei dourado em um tabuleiro de xadrez" : "Executivo planejando em um escritório com vista para a cidade"} width={1600} height={912} className={`absolute inset-0 h-full w-full object-cover ${isDark ? "object-[62%_center]" : "object-[58%_center]"}`} />
          <div className={`absolute inset-0 ${isDark ? "hero-shade-dark" : "hero-shade-light"}`} />
          <div className="relative mx-auto flex min-h-[510px] max-w-[1180px] items-center px-5 py-16 lg:px-8">
            <div className="max-w-[600px]">
              <p className={`mb-5 text-[11px] font-bold uppercase tracking-[0.18em] ${isDark ? "text-gold" : "text-brand"}`}>{isDark ? "Estratégia em movimento" : "Estratégia que gera resultados"}</p>
              <h1 className="max-w-[590px] text-[38px] font-bold leading-[1.04] sm:text-[50px] lg:text-[58px]">{isDark ? <>Decisões melhores.<br/><span className="text-gold">Resultados maiores.</span></> : <>Transformando<br/>negócios hoje para<br/><span className="text-brand">um amanhã mais forte.</span></>}</h1>
              <p className={`mt-5 max-w-[520px] text-sm leading-6 ${isDark ? "text-night-soft" : "text-ink"}`}>Consultoria especializada em estratégia, gestão e resultados para empresas que querem crescer de forma sólida e sustentável.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-brand px-6 text-brand-contrast hover:bg-brand-strong"><a href="#contato">Falar com um especialista <ArrowRight /></a></Button>
                <Button asChild variant="outline" className={isDark ? "rounded-full border-night-muted bg-transparent px-6 text-night-text hover:border-gold hover:bg-transparent hover:text-gold" : "rounded-full border-ink bg-transparent px-6 text-ink hover:bg-ink hover:text-page"}><a href="#solucoes">{isDark ? "Conheça a Consultio" : "Conheça nossas soluções"}</a></Button>
              </div>
              <Stats theme={theme} />
            </div>
          </div>
          {isDark && <div className="absolute right-[6%] top-14 hidden text-[13px] uppercase leading-[2.25] tracking-[0.26em] text-gold-soft xl:block">Visão<br/>Planejamento<br/>Execução<br/>Resultados</div>}
        </section>

        <section id="solucoes" className={isDark ? "bg-night py-16" : "bg-page py-16"}>
          <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
            <div className="text-center"><p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isDark ? "text-gold" : "text-brand"}`}>{isDark ? "Como podemos ajudar" : "Nossas soluções"}</p><h2 className="mt-3 text-2xl font-bold">{isDark ? "Estratégia na prática, resultados de verdade." : "Soluções completas para o seu negócio"}</h2><p className={`mt-2 text-xs ${isDark ? "text-night-muted" : "text-subtle"}`}>{isDark ? "Soluções personalizadas para cada desafio da sua empresa." : "Da estratégia à execução, ajudamos sua empresa a ir mais longe."}</p></div>
            <div className={`mt-10 grid gap-4 ${isDark ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
              {solutions.map(({ icon: Icon, title, text }) => <article key={title} className={`min-h-[190px] rounded-lg border p-6 ${isDark ? "border-night-line bg-night-card text-center" : "border-soft bg-page shadow-card"}`}><div className={`mb-5 inline-flex size-11 items-center justify-center rounded-lg ${isDark ? "border border-gold-dim text-gold" : "bg-brand-pale text-brand"}`}><Icon size={21}/></div><h3 className="text-sm font-bold leading-5">{title}</h3><p className={`mt-3 text-[11px] leading-5 ${isDark ? "text-night-muted" : "text-subtle"}`}>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="sobre" className={isDark ? "bg-night py-6 pb-16" : "bg-page py-6 pb-16"}>
          <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 md:grid-cols-[1fr_1.15fr] lg:px-8">
            <button type="button" onClick={() => setVideoOpen(true)} className="group relative aspect-[4/3] overflow-hidden rounded-lg text-left" aria-label="Assistir vídeo institucional">
              <img src={isDark ? buildingImage : meetingImage} alt={isDark ? "Fachada de edifício corporativo" : "Equipe em reunião estratégica"} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"/>
              <span className="absolute inset-0 bg-image-shade"/><span className={`absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 ${isDark ? "border-gold bg-night/80 text-gold" : "border-page bg-page text-ink"}`}><Play className="ml-1" fill="currentColor"/></span>
              {isDark && <span className="absolute bottom-9 left-0 right-0 text-center text-xs uppercase tracking-[0.24em] text-night-text">Estratégia hoje<br/>Resultados amanhã</span>}
            </button>
            <div><p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isDark ? "text-gold" : "text-brand"}`}>Sobre a Consultio</p><h2 className="mt-3 max-w-[500px] text-3xl font-bold leading-tight">{isDark ? "Experiência que impulsiona negócios." : <>Mais que consultoria.<br/>Parceria para o futuro.</>}</h2><p className={`mt-4 max-w-[560px] text-sm leading-6 ${isDark ? "text-night-soft" : "text-subtle"}`}>{isDark ? "Unimos conhecimento, metodologia e visão de mercado para entregar soluções que realmente fazem a diferença." : "A Consultio nasceu com o propósito de apoiar empresas na construção de resultados consistentes, unindo experiência, metodologia e visão de futuro."}</p><ul className="mt-5 space-y-3 text-xs">{(isDark ? ["Consultores especialistas", "Metodologias reconhecidas", "Atuação em múltiplos segmentos", "Foco em resultados mensuráveis"] : ["Abordagem prática e personalizada", "Equipe multidisciplinar", "Resultados comprovados", "Atuação em diversos segmentos"]).map((item) => <li key={item} className="flex items-center gap-3"><CircleCheck className={isDark ? "text-gold" : "text-brand"} size={17}/>{item}</li>)}</ul>{isDark && <Button asChild variant="outline" className="mt-6 rounded-full border-gold bg-transparent text-gold hover:bg-gold hover:text-night"><a href="#inicio">Nossa história <ArrowRight/></a></Button>}</div>
          </div>
        </section>

        {isDark ? <section className="cta-band"><div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-9 sm:flex-row sm:items-center lg:px-8"><div><h2 className="text-2xl font-semibold">Vamos construir<br/>o próximo capítulo do seu negócio?</h2><p className="mt-2 max-w-[600px] text-xs text-night-soft">Fale com um de nossos especialistas e descubra como a Consultio pode ajudar sua empresa a ir mais longe.</p></div><Button asChild className="bg-gold px-6 text-night hover:bg-gold-soft"><a href="#contato">Falar com um especialista <ArrowRight/></a></Button></div></section> : <section className="border-y border-soft bg-soft py-8"><div className="mx-auto max-w-[1050px] px-5 text-center"><p className="mb-7 text-xs font-semibold">Empresas que confiam na Consultio</p><div className="grid grid-cols-3 items-center gap-8 text-lg font-bold text-logo-muted sm:grid-cols-6"><span>ambev</span><span>TOTVS</span><span>bradesco</span><span>Localiza</span><span>vivo</span><span>WEG</span></div></div></section>}
      </main>
      <Footer theme={theme}/>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} theme={theme}/>
    </div>
  );
}