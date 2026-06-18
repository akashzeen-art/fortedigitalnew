import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: 1,
    title: 'welcome to "drishhya"',
    subtitle: "your entertainment app",
    color: "#FFD166",
    description: "One Platform. Unlimited Stories. Endless Inspiration.",
    body: "Experience the perfect blend of global cinema, Bollywood magic, and lifestyle excellence—bringing entertainment, culture, and inspiration together in one destination. Step into a world of limitless entertainment with our all-in-one Entertainment platform, featuring Hollywood hits, Bollywood blockbusters, exclusive originals, and premium lifestyle content.",
    tags: ["Hollywood & Bollywood", "Exclusive Originals", "Live Entertainment", "Lifestyle Content"],
  },
  {
    id: 2,
    title: "grahveda",
    color: "#F97316",
    description: "Your Journey. Your Destiny. Written in the Stars.",
    body: "Discover the power of astrology and gain deeper insights into your life, relationships, career, health, and future. Combining ancient wisdom with modern technology, we bring personalized astrological guidance directly to your fingertips.",
    tags: ["Daily Horoscopes", "Birth Chart", "Compatibility", "Expert Consultations"],
  },
  {
    id: 3,
    title: "suite-X",
    color: "#2563EB",
    description: "All-in-One Digital Utility & Entertainment Suite",
    body: "suite-X is a unified digital lifestyle bundle—combining security, connectivity, and entertainment into one powerful subscription. It brings together VPN security, Wi-Fi extender and booster, device protection, premium content, and gaming.",
    tags: ["VPN Security", "Wi-Fi Booster", "Anti-Virus", "VOD & Gaming"],
  },
  {
    id: 4,
    title: "digital mVAS",
    color: "#EF4444",
    description: "Mobile Digital Value-Added Services",
    body: "Our digital mVAS portfolio delivers scalable, revenue-generating digital services through partnerships with 30+ mobile operators across 17 countries in Asia, the Middle East, Africa, Europe, and Latin America.",
    tags: ["Direct Carrier Billing", "Gaming & eSports", "Performance Marketing", "Telecom Integration"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero */}
        <section className="px-6 md:px-16 lg:px-32 py-20 border-b border-[#d0d0d0]">
          <SectionHeading as="h1" size="large">
            Our Services
          </SectionHeading>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#111] mt-6 max-w-5xl leading-snug">
            Powering Digital Growth Across Content, Technology & Monetization.
          </p>
          <p className="text-[#444444] text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            From OTT entertainment to telecom monetization, we deliver end-to-end digital solutions that scale.
          </p>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-16 lg:px-32 py-16 flex flex-col gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="sticky top-20 flex flex-col md:flex-row gap-8 border border-[#d0d0d0] p-8 rounded-2xl bg-white shadow-md"
              style={{ zIndex: 10 + i }}
            >
              <div className="md:w-1/2">
                <span
                  className="service-index text-5xl md:text-6xl block"
                  style={{ color: service.color, opacity: 0.25 }}
                >
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3
                  className="service-title text-3xl md:text-4xl mt-1"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="service-subtitle text-[#888888] mt-2">{service.subtitle}</p>
                )}
                <p className="service-tagline text-lg md:text-xl text-[#333333] mt-4 border-l-[3px] pl-4" style={{ borderColor: service.color }}>
                  {service.description}
                </p>
                <p className="service-body text-[#555555] text-sm md:text-base mt-5">{service.body}</p>
              </div>
              <div className="md:w-1/2 flex flex-wrap gap-3 content-start mt-4 md:mt-8">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="service-subtitle text-[10px] border rounded-full px-4 py-2"
                    style={{ borderColor: `${service.color}55`, color: service.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
