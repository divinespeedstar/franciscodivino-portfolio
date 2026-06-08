import {
  ArrowUpRight,
  BarChart3,
  Instagram,
  Layers3,
  Megaphone,
  MousePointer2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const BRAND = {
  name: "Meu Portfolio",
  person: "Francisco Divino",
  handle: "@franciscodivino",
  email: "contato@franciscodivino.com",
  whatsapp: "https://wa.me/5500000000000",
};

const marqueeItems = [
  {
    title: "IA Marketing",
    metric: "estratégia smart",
    image: "/visuals/ai-command-center.svg",
  },
  {
    title: "Apps Mobile",
    metric: "iOS + Android",
    image: "/visuals/mobile-app.svg",
  },
  {
    title: "WhatsApp IA",
    metric: "24h vendendo",
    image: "/visuals/whatsapp-automation.svg",
  },
  {
    title: "Delivery",
    metric: "mais pedidos",
    image: "/visuals/delivery-stack.svg",
  },
  {
    title: "Disparos",
    metric: "campanhas em massa",
    image: "/visuals/mass-dispatch.svg",
  },
  {
    title: "E-mail",
    metric: "funis ativos",
    image: "/visuals/email-funnel.svg",
  },
  {
    title: "CRM IA",
    metric: "lead priorizado",
    image: "/visuals/crm-ai.svg",
  },
  {
    title: "Restaurantes",
    metric: "delivery completo",
    image: "/visuals/restaurant-growth.svg",
  },
  {
    title: "Automação",
    metric: "menos operação",
    image: "/visuals/ai-command-center.svg",
  },
  {
    title: "Sistemas",
    metric: "web + painel",
    image: "/visuals/mobile-app.svg",
  },
  {
    title: "Vendas",
    metric: "funil rastreado",
    image: "/visuals/crm-ai.svg",
  },
  {
    title: "Tráfego",
    metric: "com dados",
    image: "/visuals/mass-dispatch.svg",
  },
];

const decorativeItems = [
  {
    className: "top-[6%] left-[3%] rotate-[-12deg]",
    icon: Sparkles,
    label: "IA",
  },
  {
    className: "top-[7%] right-[4%] rotate-[10deg]",
    icon: Target,
    label: "Vendas",
  },
  {
    className: "bottom-[11%] left-[6%] rotate-[8deg]",
    icon: MousePointer2,
    label: "Apps",
  },
  {
    className: "bottom-[10%] right-[7%] rotate-[-7deg]",
    icon: Zap,
    label: "Delivery",
  },
];

const services = [
  {
    number: "01",
    name: "Marketing com IA",
    description:
      "Estratégia, anúncios, criativos, páginas e dados conectados por inteligência artificial para acelerar decisões e melhorar a conversão.",
  },
  {
    number: "02",
    name: "Apps e sistemas",
    description:
      "Aplicativos mobile, sistemas web, painéis e ferramentas sob medida para transformar operação, atendimento e vendas em produto digital.",
  },
  {
    number: "03",
    name: "WhatsApp e automações",
    description:
      "Bots com IA, qualificação de leads, follow-up automático, recuperação de clientes e fluxos para vender sem depender de atendimento manual.",
  },
  {
    number: "04",
    name: "Disparos e e-mail",
    description:
      "Campanhas em massa, segmentação, e-mail marketing, nutrição, remarketing e comunicações que mantêm sua marca presente até a compra.",
  },
  {
    number: "05",
    name: "Restaurantes e delivery",
    description:
      "Cardápios digitais, automação de pedidos, campanhas locais, fidelização e tecnologia para restaurantes venderem mais no salão e no delivery.",
  },
];

const projects = [
  {
    number: "01",
    category: "Delivery",
    name: "Motor de pedidos",
    result: "cardápio, WhatsApp e campanhas no mesmo funil",
    leftTop: "Cardápio digital",
    leftBottom: "Bot de pedidos",
    right: "Painel delivery",
    visuals: {
      leftTop: "/visuals/restaurant-growth.svg",
      leftBottom: "/visuals/whatsapp-automation.svg",
      right: "/visuals/delivery-stack.svg",
    },
    colors: ["#ccff00", "#00d4ff", "#ff4fb8"],
  },
  {
    number: "02",
    category: "Sistemas",
    name: "App sob medida",
    result: "processos, clientes e vendas dentro de uma plataforma",
    leftTop: "Mobile app",
    leftBottom: "Sistema web",
    right: "Operação com IA",
    visuals: {
      leftTop: "/visuals/mobile-app.svg",
      leftBottom: "/visuals/crm-ai.svg",
      right: "/visuals/ai-command-center.svg",
    },
    colors: ["#ffffff", "#8fd2ff", "#9d6bff"],
  },
  {
    number: "03",
    category: "Marketing IA",
    name: "Funil inteligente",
    result: "tráfego, CRM, disparos e análise conectados por dados",
    leftTop: "Tráfego pago",
    leftBottom: "E-mail + WhatsApp",
    right: "CRM inteligente",
    visuals: {
      leftTop: "/visuals/mass-dispatch.svg",
      leftBottom: "/visuals/email-funnel.svg",
      right: "/visuals/crm-ai.svg",
    },
    colors: ["#ffe259", "#ff5f6d", "#65d6ce"],
  },
];

const navItems = [
  ["Sobre", "#sobre"],
  ["Soluções", "#servicos"],
  ["Cases", "#cases"],
  ["Contato", "#contato"],
];

type FadeInProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function FadeIn<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps<T>) {
  const Component = motion(as || "div");

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "translate3d(0, 0, 0)",
    transition: "transform 0.6s ease-in-out",
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const isInside =
        event.clientX > rect.left - padding &&
        event.clientX < rect.right + padding &&
        event.clientY > rect.top - padding &&
        event.clientY < rect.bottom + padding;

      if (!isInside) {
        setStyle({
          transform: "translate3d(0, 0, 0)",
          transition: "transform 0.6s ease-in-out",
        });
        return;
      }

      const x = (event.clientX - (rect.left + rect.width / 2)) / strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) / strength;

      setStyle({
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: "transform 0.3s ease-out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  return (
    <div ref={ref} style={{ ...style, willChange: "transform" }}>
      {children}
    </div>
  );
}

function ContactButton({ label = "Falar com Francisco" }: { label?: string }) {
  return (
    <a
      className="contact-button"
      href={BRAND.whatsapp}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a className="live-button" href="#contato">
      Ver estratégia
      <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__ring hero-visual__ring--one" />
      <div className="hero-visual__ring hero-visual__ring--two" />
      <div className="hero-visual__device">
        <div className="hero-visual__topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__content">
          <div className="hero-visual__stat">
            <span>Ecossistema IA</span>
            <strong>F.D</strong>
          </div>
          <div className="hero-visual__chart">
            <span style={{ height: "38%" }} />
            <span style={{ height: "64%" }} />
            <span style={{ height: "48%" }} />
            <span style={{ height: "82%" }} />
            <span style={{ height: "72%" }} />
            <span style={{ height: "96%" }} />
          </div>
          <div className="hero-visual__grid">
            <span>Apps mobile</span>
            <span>WhatsApp IA</span>
            <span>Delivery</span>
            <span>Automação</span>
          </div>
        </div>
      </div>
      <div className="hero-visual__badge hero-visual__badge--left">
        <Megaphone size={20} />
        IA + Marketing
      </div>
      <div className="hero-visual__badge hero-visual__badge--right">
        <BarChart3 size={20} />
        Apps e sistemas
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[720px] flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        className="relative z-30 flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        delay={0}
        y={-20}
      >
        {navItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {label}
          </a>
        ))}
      </FadeIn>

      <FadeIn
        as="div"
        className="relative z-20 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5"
        delay={0.15}
        y={40}
      >
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-5xl font-black uppercase leading-none sm:text-7xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          Meu Portfolio
        </h1>
      </FadeIn>

      <FadeIn
        className="absolute left-1/2 top-1/2 z-10 w-[310px] -translate-x-1/2 -translate-y-1/2 sm:w-[420px] md:w-[540px] lg:w-[650px]"
        delay={0.6}
        y={30}
      >
        <Magnet>
          <HeroVisual />
        </Magnet>
      </FadeIn>

      <div className="relative z-30 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          className="max-w-[190px] text-xs font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px] sm:text-sm md:max-w-[330px] md:text-xl"
          delay={0.35}
          y={20}
        >
          Francisco Divino une marketing digital, IA, apps e automações para
          vender mais na nova era.
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MetricTile({
  title,
  metric,
  image,
}: {
  title: string;
  metric: string;
  image: string;
}) {
  return (
    <div className="marquee-card">
      <img
        className="h-[148px] w-full rounded-2xl object-cover"
        src={image}
        alt={`Visual de ${title}`}
        loading="lazy"
      />
      <div className="mt-5 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/55">
            {title}
          </p>
          <h3 className="mt-2 text-3xl font-black uppercase leading-none text-[#D7E2EA]">
            {metric}
          </h3>
        </div>
        <Layers3 className="text-[#D7E2EA]/60" size={30} />
      </div>
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const firstRow = marqueeItems.slice(0, 6);
  const secondRow = marqueeItems.slice(6);
  const tripledFirst = useMemo(() => [...firstRow, ...firstRow, ...firstRow], [firstRow]);
  const tripledSecond = useMemo(
    () => [...secondRow, ...secondRow, ...secondRow],
    [secondRow],
  );

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const sectionTop = section.offsetTop;
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Resultados e canais"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {tripledFirst.map((item, index) => (
            <MetricTile key={`${item.title}-${index}`} {...item} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-1 * (offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {tripledSecond.map((item, index) => (
            <MetricTile key={`${item.title}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <p
      ref={ref}
      className="mx-auto max-w-[720px] text-center text-base font-medium leading-relaxed text-[#D7E2EA] sm:text-xl md:text-[1.35rem]"
    >
      {text.split("").map((character, index) => {
        const start = index / text.length;
        const end = (index + 14) / text.length;
        const opacity =
          progress <= start
            ? 0.2
            : progress >= end
              ? 1
              : 0.2 + ((progress - start) / (end - start)) * 0.8;

        return (
          <span key={`${character}-${index}`} style={{ opacity }}>
            {character}
          </span>
        );
      })}
    </p>
  );
}

function DecorativeToken({
  className,
  icon: Icon,
  label,
}: {
  className: string;
  icon: typeof Sparkles;
  label: string;
}) {
  return (
    <FadeIn
      className={`decorative-token absolute hidden sm:flex ${className}`}
      duration={0.9}
      y={0}
      x={className.includes("right") ? 80 : -80}
    >
      <Icon size={34} strokeWidth={1.8} />
      <span>{label}</span>
    </FadeIn>
  );
}

function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {decorativeItems.map((item) => (
        <DecorativeToken key={item.label} {...item} />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" className="hero-heading section-heading" delay={0} y={40}>
          F. Divino
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="Francisco Divino é um especialista da nova era: cria apps, sistemas, automações com IA e estratégias completas de marketing digital. A diferença está em unir tecnologia, copy, tráfego, WhatsApp, e-mail, dados e operação para dar mais velocidade, clareza e chance real de resultado para qualquer negócio." />
          <ContactButton label="Falar com Francisco" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="servicos"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" className="section-heading mb-16 text-center sm:mb-20 md:mb-28">
        Soluções
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            className="grid gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:grid-cols-[0.48fr_1fr] sm:gap-8 sm:py-10 md:py-12"
            delay={index * 0.1}
          >
            <span className="text-6xl font-black leading-none text-[#0C0C0C] sm:text-8xl md:text-[8.75rem]">
              {service.number}
            </span>
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-xl font-medium uppercase leading-tight sm:text-2xl md:text-4xl">
                {service.name}
              </h3>
              <p className="max-w-2xl text-base font-light leading-relaxed opacity-60 sm:text-lg md:text-xl">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({
  label,
  colors,
  variant,
  image,
}: {
  label: string;
  colors: string[];
  variant: "wide" | "small" | "tall";
  image: string;
}) {
  return (
    <div className={`project-visual project-visual--${variant}`}>
      <img className="project-visual__image" src={image} alt="" loading="lazy" />
      <div
        className="project-visual__glow"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${colors[0]}, transparent 34%), radial-gradient(circle at 78% 18%, ${colors[1]}, transparent 30%), radial-gradient(circle at 50% 84%, ${colors[2]}, transparent 38%)`,
        }}
      />
      <div className="project-visual__screen">
        <div className="project-visual__toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="project-visual__body">
          <strong>{label}</strong>
          <div className="project-visual__bars">
            <span style={{ width: "52%" }} />
            <span style={{ width: "76%" }} />
            <span style={{ width: "64%" }} />
            <span style={{ width: "88%" }} />
          </div>
          <div className="project-visual__mini-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-auto pb-12 md:h-[85vh]">
      <motion.article
        className="project-card"
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
      >
        <div className="grid gap-5 md:grid-cols-[0.24fr_0.28fr_1fr_auto] md:items-center">
          <span className="text-6xl font-black leading-none text-[#D7E2EA] sm:text-8xl md:text-[8.125rem]">
            {project.number}
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/55">
            {project.category}
          </span>
          <div>
            <h3 className="text-3xl font-black uppercase leading-none text-[#D7E2EA] sm:text-5xl md:text-6xl lg:text-7xl">
              {project.name}
            </h3>
            <p className="mt-3 text-base font-light uppercase tracking-[0.18em] text-[#D7E2EA]/70">
              {project.result}
            </p>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-4">
            <ProjectVisual
              label={project.leftTop}
              colors={project.colors}
              variant="small"
              image={project.visuals.leftTop}
            />
            <ProjectVisual
              label={project.leftBottom}
              colors={[project.colors[1], project.colors[2], project.colors[0]]}
              variant="wide"
              image={project.visuals.leftBottom}
            />
          </div>
          <ProjectVisual
            label={project.right}
            colors={project.colors}
            variant="tall"
            image={project.visuals.right}
          />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="cases"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" className="hero-heading section-heading mb-16 text-center md:mb-24">
        Projetos
      </FadeIn>
      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-white px-5 py-20 text-[#0C0C0C] sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <FadeIn>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.36em] opacity-55">
            Próximo passo
          </p>
          <h2 className="text-5xl font-black uppercase leading-none sm:text-7xl md:text-8xl lg:text-[8rem]">
            Vamos criar sua máquina de vendas com IA.
          </h2>
        </FadeIn>
        <FadeIn className="flex flex-col gap-8" delay={0.12}>
          <p className="max-w-xl text-base font-light leading-relaxed opacity-70 sm:text-xl md:text-2xl">
            Conte sobre seu negócio, desafio e meta. Francisco D. analisa o
            caminho mais inteligente entre tecnologia, marketing, automação e
            vendas para fazer sua empresa competir em outro nível.
          </p>
          <div className="flex flex-wrap gap-4">
            <ContactButton label="Chamar Francisco" />
            <a className="secondary-button" href={`mailto:${BRAND.email}`}>
              {BRAND.email}
            </a>
          </div>
        </FadeIn>
      </div>
      <footer className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-4 border-t border-black/15 pt-8 text-sm uppercase tracking-[0.24em] opacity-60 sm:flex-row">
        <span>{BRAND.name}</span>
        <span>{BRAND.person} / IA / Apps / Marketing</span>
        <span className="flex items-center gap-2">
          <Instagram size={16} /> {BRAND.handle}
        </span>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
