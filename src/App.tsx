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
  MotionConfig,
  MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
} from "react";

const BRAND = {
  name: "Meu Portfolio",
  person: "Francisco Divino",
  handle: "@franciscodivinoo",
  whatsapp: "https://wa.me/5591984105852",
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

const floatingBrands = [
  { label: "Google Ads", image: "/visuals/brands/google-ads.png", className: "google" },
  { label: "Meta Ads", image: "/visuals/brands/meta-ads.png", className: "meta" },
  { label: "TikTok Ads", image: "/visuals/brands/tiktok-ads.png", className: "tiktok" },
  { label: "ChatGPT", image: "/visuals/brands/chatgpt.png", className: "chatgpt" },
  { label: "Claude", image: "/visuals/brands/claude.png", className: "claude" },
  { label: "Gemini", image: "/visuals/brands/gemini.png", className: "gemini" },
  { label: "iFood", image: "/visuals/brands/ifood.png", className: "ifood" },
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

// Cria cada componente motion.* uma única vez por tag. Criar dentro do render
// geraria um componente novo a cada renderização e remontaria os filhos.
const motionComponents = new Map<ElementType, ElementType>();

function getMotionComponent(as: ElementType): ElementType {
  let component = motionComponents.get(as);

  if (!component) {
    component = motion.create(as as Parameters<typeof motion.create>[0]) as ElementType;
    motionComponents.set(as, component);
  }

  return component;
}

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
  const Component = getMotionComponent(as || "div");

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
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;

    if (!element || reduceMotion) {
      return;
    }

    // Escreve o transform direto no elemento (sem estado do React) para não
    // re-renderizar o hero a cada movimento do ponteiro.
    let touching = false;
    let active = false;
    let frame = 0;

    const setTransform = (x: number, y: number, transition: string) => {
      element.style.transition = transition;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const reset = () => {
      if (!active) {
        return;
      }

      active = false;
      setTransform(0, 0, "transform 0.6s ease-in-out");
    };

    const applyPointer = (clientX: number, clientY: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const isInside =
          clientX > rect.left - padding &&
          clientX < rect.right + padding &&
          clientY > rect.top - padding &&
          clientY < rect.bottom + padding;

        if (!isInside) {
          reset();
          return;
        }

        active = true;
        setTransform(
          (clientX - (rect.left + rect.width / 2)) / strength,
          (clientY - (rect.top + rect.height / 2)) / strength,
          "transform 0.3s ease-out",
        );
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!touching) {
        applyPointer(event.clientX, event.clientY);
      }
    };

    const handleTouch = (event: TouchEvent) => {
      touching = true;
      const touch = event.touches[0];

      if (touch) {
        applyPointer(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      touching = false;
      cancelAnimationFrame(frame);
      reset();
    };

    // Listeners de toque passivos e touch-action: pan-y no CSS: a foto reage
    // ao dedo, mas a rolagem vertical da página continua funcionando.
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    element.addEventListener("touchstart", handleTouch, { passive: true });
    element.addEventListener("touchmove", handleTouch, { passive: true });
    element.addEventListener("touchend", handleTouchEnd);
    element.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("touchstart", handleTouch);
      element.removeEventListener("touchmove", handleTouch);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [padding, strength, reduceMotion]);

  return (
    <div ref={ref} className="magnet-root">
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

function FloatingBrandBadge({
  label,
  image,
  className,
}: {
  label: string;
  image: string;
  className: string;
}) {
  return (
    <div className={`floating-brand floating-brand--${className}`} title={label}>
      <img
        className="floating-brand__icon"
        src={image}
        alt={label}
        width={50}
        height={50}
      />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__ring hero-visual__ring--one" />
      <div className="hero-visual__ring hero-visual__ring--two" />
      {floatingBrands.map((brand) => (
        <FloatingBrandBadge key={brand.label} {...brand} />
      ))}
      <div className="hero-photo-frame">
        <picture className="block h-full w-full">
          <source srcSet="/visuals/francisco-divino.avif" type="image/avif" />
          <img
            className="hero-photo-frame__image"
            src="/visuals/francisco-divino.jpg"
            alt="Retrato de Francisco Divino"
            width={1024}
            height={1536}
            // React 18 só repassa o atributo em minúsculas.
            {...{ fetchpriority: "high" }}
          />
        </picture>
        <div className="hero-photo-frame__overlay">
          <span>Francisco Divino</span>
          <strong>Marketing + IA + Sistemas</strong>
        </div>
      </div>
      <div className="hero-visual__badge hero-visual__badge--left">
        <Megaphone size={20} aria-hidden="true" />
        IA + Marketing
      </div>
      <div className="hero-visual__badge hero-visual__badge--right">
        <BarChart3 size={20} aria-hidden="true" />
        Apps e sistemas
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section relative flex h-screen min-h-[720px] flex-col overflow-x-clip bg-[#0C0C0C]">
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
            className="-my-3 py-3 transition-opacity duration-200 hover:opacity-70"
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

      <FadeIn delay={0.6} y={30}>
        <div className="hero-visual-slot">
          <Magnet padding={120} strength={2.5}>
            <HeroVisual />
          </Magnet>
        </div>
      </FadeIn>

      <div className="relative z-30 mt-auto flex flex-col items-start gap-5 px-6 pb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          className="max-w-[300px] text-xs font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px] sm:text-sm md:max-w-[330px] md:text-xl"
          delay={0.35}
          y={20}
        >
          Francisco Divino une marketing digital, IA, apps e automações para
          vender mais na era digital.
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
  hidden = false,
}: {
  title: string;
  metric: string;
  image: string;
  hidden?: boolean;
}) {
  // As cópias repetidas da faixa ficam escondidas dos leitores de tela.
  return (
    <div className="marquee-card" aria-hidden={hidden || undefined}>
      <img
        className="h-[148px] w-full rounded-2xl object-cover"
        src={image}
        alt=""
        width={384}
        height={148}
        loading="lazy"
      />
      <div className="mt-5 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/55">
            {title}
          </p>
          <p className="mt-2 text-3xl font-black uppercase leading-none text-[#D7E2EA]">
            {metric}
          </p>
        </div>
        <Layers3 className="text-[#D7E2EA]/60" size={30} aria-hidden="true" />
      </div>
    </div>
  );
}

const firstRow = marqueeItems.slice(0, 6);
const secondRow = marqueeItems.slice(6);
const tripledFirst = [...firstRow, ...firstRow, ...firstRow];
const tripledSecond = [...secondRow, ...secondRow, ...secondRow];

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // Motion value atualiza o transform direto no DOM, sem re-renderizar os
  // 36 cards a cada evento de rolagem.
  const x = useMotionValue(-200);
  const reverseX = useMotionValue(200);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const offset = reduceMotion
        ? 0
        : (window.scrollY - section.offsetTop + window.innerHeight) * 0.3 - 200;
      x.set(offset);
      reverseX.set(-offset);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion, x, reverseX]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Resultados e canais"
    >
      <div className="flex flex-col gap-3">
        <motion.div className="flex gap-3" style={{ x, willChange: "transform" }}>
          {tripledFirst.map((item, index) => (
            <MetricTile
              key={`${item.title}-${index}`}
              {...item}
              hidden={index >= firstRow.length}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3"
          style={{ x: reverseX, willChange: "transform" }}
        >
          {tripledSecond.map((item, index) => (
            <MetricTile
              key={`${item.title}-${index}`}
              {...item}
              hidden={index >= secondRow.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedCharacter({
  character,
  progress,
  start,
  end,
}: {
  character: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{character}</motion.span>;
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const className =
    "mx-auto max-w-[720px] text-center text-base font-medium leading-relaxed text-[#D7E2EA] sm:text-xl md:text-[1.35rem]";

  if (reduceMotion) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  // Cada letra tem a própria opacidade ligada à rolagem por motion value (sem
  // re-render). O texto inteiro fica num span só para leitores de tela, que
  // assim não soletram letra por letra.
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((character, index) => (
          <AnimatedCharacter
            key={index}
            character={character}
            progress={scrollYProgress}
            start={index / text.length}
            end={(index + 14) / text.length}
          />
        ))}
      </span>
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
      <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
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
          <AnimatedText text="Francisco Divino é um especialista da era digital: cria apps, sistemas, automações com IA e estratégias completas de marketing digital. A diferença está em unir tecnologia, copy, tráfego, WhatsApp, e-mail, dados e operação para dar mais velocidade, clareza e chance real de resultado para qualquer negócio." />
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
          </div>
        </FadeIn>
      </div>
      <footer className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-4 border-t border-black/15 pt-8 text-sm uppercase tracking-[0.24em] opacity-60 sm:flex-row">
        <span>{BRAND.name}</span>
        <span>{BRAND.person} / IA / Apps / Marketing</span>
        <a
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
          href="https://instagram.com/franciscodivinoo"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={16} aria-hidden="true" /> {BRAND.handle}
        </a>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    // reducedMotion="user": quem pede menos movimento no sistema vê só os
    // fades, sem deslocamentos.
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
