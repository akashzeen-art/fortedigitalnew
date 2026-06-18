"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const SERVICE_COLORS: Record<number, { main: string; bg: string; border: string; glow: string; softGlow: string }> = {
  1: { main: "#FFD166", bg: "rgba(255,209,102,0.15)", border: "rgba(255,209,102,0.4)", glow: "rgba(255,209,102,0.6)", softGlow: "rgba(255,209,102,0.4)" },
  2: { main: "#F97316", bg: "rgba(249,115,22,0.15)", border: "rgba(249,115,22,0.4)", glow: "rgba(249,115,22,0.6)", softGlow: "rgba(249,115,22,0.4)" },
  3: { main: "#2563EB", bg: "rgba(37,99,235,0.15)", border: "rgba(37,99,235,0.4)", glow: "rgba(37,99,235,0.6)", softGlow: "rgba(37,99,235,0.4)" },
  4: { main: "#EF4444", bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.4)", glow: "rgba(239,68,68,0.6)", softGlow: "rgba(239,68,68,0.4)" },
};

const services: Service[] = [
  {
    id: 1,
    title: 'welcome to "drishhya"',
    subtitle: "your entertainment app",
    description: "One Platform. Unlimited Stories. Endless Inspiration.",
    subDescription:
      "Experience the perfect blend of global cinema, Bollywood magic, and lifestyle excellence—bringing entertainment, culture, and inspiration together in one destination.",
    heading: "Where Hollywood Meets Bollywood & Lifestyle Entertainment",
    body: "Step into a world of limitless entertainment with our all-in-one Entertainment platform, featuring the finest collection of Hollywood hits, Bollywood blockbusters, exclusive originals, and premium lifestyle content. Whether you're a movie enthusiast, series binge-watcher, or someone seeking inspiration for modern living, our platform delivers a seamless entertainment experience for every audience.\n\nDiscover the latest Hollywood releases, iconic Bollywood favorites, gripping web series, and engaging lifestyle programming covering travel, fashion, food, wellness, fitness, luxury, and culture. With fresh content added regularly, there's always something new to watch, explore, and enjoy.",
    media: { type: "video", url: "https://vz-d9579dc9-1fa.b-cdn.net/abb4b91b-49c5-4fca-a4ff-111ced35e454/play_480p.mp4" },
  },
  {
    id: 2,
    title: "grahveda",
    description: "Your Journey. Your Destiny. Written in the Stars.",
    subDescription: "Unlock the Secrets of Your Stars",
    heading: "Discover the Power of the Cosmos",
    body: "Discover the power of astrology and gain deeper insights into your life, relationships, career, health, and future through our comprehensive astrology platform. Combining ancient wisdom with modern technology, we bring personalized astrological guidance directly to your fingertips.\n\nWhether you're seeking daily guidance, exploring your birth chart, checking compatibility, or consulting experienced astrologers, our platform offers trusted insights to help you make informed decisions and navigate life's journey with confidence.\n\nExplore, understand, and embrace the cosmic forces shaping your life with trusted astrological insights and expert guidance.",
    media: { type: "video", url: "https://vz-d9579dc9-1fa.b-cdn.net/e8effc3f-32db-4d11-a49f-5edca1014e17/play_480p.mp4" },
  },
  {
    id: 3,
    title: "suite-X",
    description: "suite-X – All-in-One Digital Utility & Entertainment Suite",
    subDescription:
      "suite-X is a unified digital lifestyle bundle—combining security, connectivity, and entertainment into one powerful subscription.",
    heading: "What suite-X Offers",
    body: "suite-X is a bundled digital subscription service that combines essential utilities and entertainment into a single, seamless platform designed for today's always-connected users.\n\nIt brings together VPN security, Wi-Fi extender and booster, device protection, premium content, and gaming—eliminating the need for multiple apps and subscriptions.\n\n• Secure VPN Access — Ensures private, encrypted browsing with unrestricted access to global content.\n\n• Wi-Fi Extender / Booster — Enhances internet speed, coverage, and stability for a smoother online experience.\n\n• Advanced Anti-Virus Protection — Safeguards devices against malware, phishing, and cyber threats in real time.\n\n• OTT — Access to a curated library of movies, shows, and digital content.\n\n• Unlimited HTML5 Gaming — Instant, no-download gaming across multiple genres—accessible anytime, anywhere.\n\nsuite-X simplifies the digital lifestyle: one subscription → multiple services, cost efficiency vs standalone apps, seamless access across devices, optimized for telecom bundling & DCB billing.",
    media: { type: "video", url: "https://vz-d9579dc9-1fa.b-cdn.net/8f0872b6-5052-452d-8534-dd8e875eeae6/play_480p.mp4" },
  },
  {
    id: 4,
    title: "digital mVAS",
    description: "Mobile Digital Value-Added Services (digital mVAS)",
    subDescription:
      "Our digital mVAS portfolio delivers scalable, revenue-generating digital services through partnerships with 30+ mobile operators across 17 countries in Asia, the Middle East, Africa, Europe, and Latin America.",
    heading: "Core Service Offerings",
    body: "Using AI personalization, cloud-native platforms, carrier billing, analytics, APIs, and 5G-ready technologies, we help operators increase subscriber engagement, retention, and ARPU.\n\nServices are deployed across India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Egypt, South Africa, Kenya, Nigeria, Sri Lanka, Nepal, and Bangladesh.\n\n1. Gaming and eSports Platforms\n\n2. Lifestyle Services\n• News, Infotainment, and Education services\n• Quizzes & Skill Based Contests\n\n3. Direct Carrier Billing (DCB)\n• Subscription management platforms\n• Mobile wallets and payment integrations\n• One-click and recurring billing solutions\n• Fraud prevention and risk management\n\n4. Digital Advertising & Customer Acquisition\n• Performance Marketing\n• Subscriber Acquisition and Retention programs\n• Real-Time Bidding & Programmatic Advertising\n\nThis ecosystem makes us a trusted partner for telecom operators, content providers, enterprises, and digital brands expanding across emerging and developed markets.",
    media: { type: "video", url: "https://vz-d9579dc9-1fa.b-cdn.net/5ba4f94a-5e93-4a7f-868d-bc4c8044df6a/play_480p.mp4" },
  },
];

type Service = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  subDescription?: string;
  heading?: string;
  body?: string;
  media: { type: "image" | "video"; url: string };
};

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work-title span", {
      y: "100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative z-[400] h-fit p-4">
      <SectionHeading className="max-w-[950px] mb-6 md:mb-8" revealClassName="work-title">
        What We Offer
      </SectionHeading>
      <div className="min-h-screen">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Work;

const Card: React.FC<Service> = ({
  id,
  title,
  subtitle,
  description,
  subDescription,
  heading,
  body,
  media,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const colors = SERVICE_COLORS[id];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
      if (!atTop && !atBottom) e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="sticky top-16 left-0 h-[calc(100vh-4rem)] flex flex-col my-5 overflow-hidden relative rounded-xl">

      {/* Background video */}
      {media.type === "video" ? (
        <video
          src={media.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image src={media.url} alt={title} fill style={{ objectFit: "cover" }} />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-4 md:p-8">

        {/* Top row */}
        <div className="flex flex-col gap-5 md:gap-6 pb-5 md:pb-6 border-b border-white/15 shrink-0">
          <div className="flex items-start gap-4 md:gap-6">
            <span
              className="service-index text-6xl md:text-8xl shrink-0"
              style={{ color: colors.main, opacity: 0.35, textShadow: `0 0 40px ${colors.softGlow}` }}
            >
              {String(id).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 pt-1 md:pt-2 min-w-0">
              <h3
                className="service-title text-3xl sm:text-4xl md:text-5xl"
                style={{ color: colors.main, textShadow: `0 0 24px ${colors.glow}` }}
              >
                {title}
              </h3>
              {subtitle && (
                <p className="service-subtitle text-white/90">{subtitle}</p>
              )}
            </div>
          </div>
          <p
            className="service-tagline text-lg sm:text-xl md:text-2xl border-l-[3px] pl-4 md:pl-5 max-w-3xl"
            style={{ borderColor: colors.main, color: "#ffffff", textShadow: "0 1px 12px rgba(0,0,0,0.45)" }}
          >
            {description}
          </p>
        </div>

        {/* Scrollable text */}
        <div
          ref={textRef}
          className="flex flex-col gap-5 overflow-y-auto hide-scrollbar flex-1 mt-4 bg-black/40 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/15"
        >
          {subDescription && (
            <p
              className="service-lead text-sm sm:text-base md:text-lg text-white"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            >
              {subDescription}
            </p>
          )}
          {heading && (
            <h5
              className="service-heading text-sm md:text-base"
              style={{ color: colors.main }}
            >
              {heading}
            </h5>
          )}
          {body &&
            body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="service-body text-sm md:text-base text-white"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
              >
                {para}
              </p>
            ))}
        </div>

      </div>
    </div>
  );
};