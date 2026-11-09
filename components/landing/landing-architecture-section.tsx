"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";

interface EcosystemCardItem {
  id: string;
  number: string;
  title: string;
  status: "AVAILABLE" | "Coming Soon";
  tagline: string;
  description: string;
  badges: string[];
  image: string;
  imageAlt: string;
  linkHref?: string;
  linkText?: string;
  imageOnLeft?: boolean;
}

export function LandingArchitectureSection() {
  const ecosystemItems: EcosystemCardItem[] = [
    {
      id: "k4book",
      number: "01",
      title: "K4Book",
      status: "AVAILABLE",
      tagline:
        "The Mindful Digital Reading Sanctuary for Thoughtful Readers & Collectors",
      description:
        "An editorial reading sanctuary calibrated with warm tactile paper cream textures, realistic 3D book depth, distraction-free chapter reading, customizable typography, and reading velocity meters. Built to eliminate digital screen fatigue and honor deep literary contemplation.",
      badges: ["3D Paper Simulation", "Reading Habit Tracker", "Editorial Typography"],
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Open editorial book resting on a warm wooden reading table with soft morning sunlight",
      linkHref: "/k4book",
      linkText: "Launch K4Book ↗",
      imageOnLeft: false,
    },
    {
      id: "rani",
      number: "02",
      title: "RANI",
      status: "Coming Soon",
      tagline:
        "Autonomous Neural Intelligence & Everyday Life Companion",
      description:
        "A proactive, context-aware AI assistant engineered to streamline complex daily workflows, manage schedules, automate repetitive research, and bridge family logistics with private, on-device security.",
      badges: ["Context-Aware AI", "Zero-Latency Core", "Privacy First"],
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Futuristic ambient neural intelligence light visualization and minimalist workspace",
      imageOnLeft: true,
    },
    {
      id: "k4craft",
      number: "03",
      title: "K4Craft",
      status: "Coming Soon",
      tagline:
        "Precision Craftsmanship, Computational Design & Physical Art",
      description:
        "Where raw materials meet digital precision. K4Craft combines artisanal woodcraft, 3D spatial modeling, generative furniture design, and sustainable materials into timeless physical artifacts for the modern home.",
      badges: ["Parametric Design", "Sustainable Woods", "Bespoke Fabrication"],
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Master woodworker crafting bespoke modern furniture in an artisanal workshop",
      imageOnLeft: false,
    },
    {
      id: "k4studio",
      number: "04",
      title: "K4Studio",
      status: "Coming Soon",
      tagline:
        "Next-Generation Media Production & Spatial Audio Suite",
      description:
        "A high-fidelity creative studio built for creators, storytellers, and audio architects. From cinematic color grading to spatial acoustic recordings, K4Studio turns abstract ideas into sensory masterworks.",
      badges: ["Spatial Acoustics", "4K Cinema Pipeline", "Creative Suite"],
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "High-end sound design studio with audio mixing console and acoustic panelling",
      imageOnLeft: true,
    },
    {
      id: "k4farm",
      number: "05",
      title: "K4Farm",
      status: "Coming Soon",
      tagline:
        "Regenerative Agriculture, Organic Botanicals & Smart Farming",
      description:
        "Pioneering sustainable food systems through microclimate sensor arrays, automated drip irrigation, and permaculture principles. Bridging urban living with fresh, earth-friendly organic produce directly from farm to table.",
      badges: ["Permaculture", "IoT Soil Sensors", "Zero Pesticides"],
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Lush modern organic greenhouse with sunlit botanical crops and smart irrigation",
      imageOnLeft: false,
    },
    {
      id: "k4health",
      number: "06",
      title: "K4Health",
      status: "Coming Soon",
      tagline:
        "Preventive Vitality, Mindful Health & Dental Care Excellence",
      description:
        "Holistic wellness platform combining continuous circadian health tracking, guided restorative routines, preventive clinical dental care, and personalized nutritional guidance designed around your biological rhythm.",
      badges: ["Circadian Tracking", "Preventive Diagnostics", "Holistic Care"],
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Serene modern wellness space with natural stone, warm water, and holistic spa amenities",
      imageOnLeft: true,
    },
    {
      id: "k4academy",
      number: "07",
      title: "K4Academy",
      status: "Coming Soon",
      tagline:
        "Interactive Masterclasses, Deep Learning & Community Mentorship",
      description:
        "An immersive digital academy dedicated to deep mastery over superficial summaries. Featuring world-class mentors in philosophy, programming, architecture, creative writing, and mindful leadership.",
      badges: ["Deep Mastery", "Peer Mentorship", "Lifelong Learning"],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Contemporary university lecture room and collaborative seminar workshop",
      imageOnLeft: false,
    },
    {
      id: "warunk",
      number: "08",
      title: "WarunK",
      status: "Coming Soon",
      tagline:
        "Hyperlocal Culinary Hub, Community Commerce & Modern Pantry",
      description:
        "Reimagining the beloved neighborhood food stall with modern supply chains, artisanal pantry staples, farm-fresh ingredients, and seamless mobile pre-orders for local food lovers.",
      badges: ["Artisanal Pantry", "Farm-to-Doorstep", "Community Hub"],
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Vibrant contemporary artisan cafe, dining counter, and neighborhood culinary hub",
      imageOnLeft: true,
    },
  ];

  return (
    <section
      id="ecosystem"
      className="w-full flex flex-col gap-10"
      data-purpose="k4family-ecosystem-section"
    >
      {/* Section Header with Consistent Unified Typography */}
      <div className="w-full text-center max-w-3xl mx-auto flex flex-col items-center pt-8 pb-4 mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-200/60 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
            K4Family Ecosystem
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.1] tracking-tight mb-5">
          <span className="font-extrabold text-neutral-950">
            K4Family Ecosystem,
          </span>
          <br />
          <span className="font-light text-neutral-400">
            a unified universe.
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-500 max-w-xl mx-auto font-normal">
          An interconnected universe of mindful digital products, artisanal
          craftsmanship, regenerative agriculture, and community spaces.
        </p>
      </div>

      {/* Parallax Stacking Cards Container */}
      <div className="w-full flex flex-col relative pb-16">
        {ecosystemItems.map((item, index) => {
          const isAvailable = item.status === "AVAILABLE";

          return (
            <div
              key={item.id}
              className="sticky mb-8 last:mb-0 transition-transform duration-300"
              style={{
                top: `calc(78px + ${index * 14}px)`,
                zIndex: index + 10,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`w-full bg-white rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-12 border ${
                  isAvailable ? "border-emerald-200/90" : "border-neutral-200/90"
                } shadow-[0_16px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.11)] transition-shadow duration-300`}
              >
                {/* Card Top Bar: Title, Status Badge, and Big Number */}
                <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-5 mb-8">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-[900] tracking-wider text-black uppercase">
                      {item.title}
                    </h3>
                    {isAvailable ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold tracking-wider uppercase shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        AVAILABLE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 text-xs font-medium tracking-wide">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-[800] tracking-wider text-neutral-400">
                    {item.number}
                  </span>
                </div>

                {/* Card Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Column (or Image if imageOnLeft is true) */}
                  {item.imageOnLeft ? (
                    <div className="w-full aspect-[4/3] rounded-2xl md:rounded-[22px] overflow-hidden bg-neutral-100 shadow-sm group relative order-2 md:order-1">
                      <SafeImage
                        alt={item.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={item.image}
                      />
                    </div>
                  ) : null}

                  {/* Text Column */}
                  <div
                    className={`flex flex-col gap-5 ${
                      item.imageOnLeft ? "order-1 md:order-2" : ""
                    }`}
                  >
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 leading-snug tracking-tight">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-[13px] md:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Badge Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {item.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Optional Launch Button */}
                    {item.linkHref && (
                      <div className="pt-2">
                        <Link
                          href={item.linkHref}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-colors shadow-sm"
                        >
                          <span>{item.linkText || "Explore App"}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Image if imageOnLeft is false) */}
                  {!item.imageOnLeft ? (
                    <div className="w-full aspect-[4/3] rounded-2xl md:rounded-[22px] overflow-hidden bg-neutral-100 shadow-sm group relative">
                      <SafeImage
                        alt={item.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={item.image}
                      />
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
