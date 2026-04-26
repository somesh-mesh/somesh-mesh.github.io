"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, RoundedBox } from "@react-three/drei";
import {
  Activity,
  ArrowUpRight,
  Blocks,
  Database,
  Flame,
  FolderGit2,
  Gauge,
  ScanSearch,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const career = [
  {
    version: "v4.0",
    company: "Hoora Technology",
    role: "Sr. Flutter Developer",
    location: "Nagpur",
    description:
      "Focused on premium UI delivery, scalable feature architecture, API integration, and code quality discipline."
  },
  {
    version: "v3.0",
    company: "Technobase IT Solutions",
    role: "Android Developer",
    location: "India",
    description:
      "Shipped native Android work with an emphasis on reliable product execution and practical engineering ownership."
  },
  {
    version: "v2.0",
    company: "Tricky Sys & ASIT Solutions",
    role: "Android Developer",
    location: "India",
    description:
      "Built early Android experiences and strengthened UI implementation, delivery rhythm, and platform foundations."
  }
];

const systemCore = [
  {
    name: "Firebase",
    icon: Flame,
    detail: "Realtime services, auth, and production telemetry."
  },
  {
    name: "GetX",
    icon: Workflow,
    detail: "Fast state handling with clean feature orchestration."
  },
  {
    name: "BLOC",
    icon: Blocks,
    detail: "Predictable state architecture for scalable apps."
  },
  {
    name: "SQLite",
    icon: Database,
    detail: "Reliable local persistence and offline-first layers."
  },
  {
    name: "OpenCV",
    icon: ScanSearch,
    detail: "Computer vision capabilities with applied mobile utility."
  }
];

const galleryScreens = [
  {
    title: "Commerce Flow",
    subtitle: "Flutter Checkout System",
    accent: "from-cyan-300/35 via-sky-300/10 to-transparent"
  },
  {
    title: "Field Dashboard",
    subtitle: "Android Ops Interface",
    accent: "from-amber-200/25 via-white/5 to-transparent"
  },
  {
    title: "Identity Layer",
    subtitle: "Secure Access Experience",
    accent: "from-emerald-200/25 via-white/5 to-transparent"
  }
];

const featuredWork = [
  {
    index: "01",
    title: "Merchant Commerce Suite",
    category: "Flutter Product System",
    summary:
      "A polished commerce experience focused on fast checkout flows, scalable architecture, and high-quality transactional UX.",
    stack: "Flutter, GetX, Firebase, REST APIs"
  },
  {
    index: "02",
    title: "Operations Dashboard",
    category: "Android Field Platform",
    summary:
      "A native Android workspace for real-world operational visibility, task orchestration, and efficient field reporting.",
    stack: "Kotlin, Java, SQLite, Background Sync"
  },
  {
    index: "03",
    title: "Identity Access Flow",
    category: "Secure Mobile Experience",
    summary:
      "A stable authentication and onboarding layer designed to balance visual trust, speed, and production-ready reliability.",
    stack: "Flutter, BLoC, Firebase Auth, OpenCV"
  },
  {
    index: "04",
    title: "Service Booking Engine",
    category: "MERN-Connected Mobile App",
    summary:
      "A connected booking system with real-time data handling, modular services, and a clean app-first interaction model.",
    stack: "Flutter, MERN, Web APIs, Push Flows"
  }
];

const heroData = [
  { label: "Architecture", value: "GetX / BLoC" },
  { label: "Runtime", value: "Flutter + Native Android" },
  { label: "Core Languages", value: "Dart, Kotlin, Java" },
  { label: "Backend Edge", value: "MERN + Firebase" }
];

const floatingSpecs = [
  { label: "Flutter", position: [-1.95, 1.45, 0.2] as [number, number, number] },
  { label: "Kotlin", position: [1.95, 1.15, 0.1] as [number, number, number] },
  { label: "BLoC", position: [-1.8, -1.35, 0.2] as [number, number, number] },
  { label: "Firebase", position: [1.9, -1.05, 0.18] as [number, number, number] }
];

function SectionIntro({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
        {copy}
      </p>
    </div>
  );
}

function LoadingSequence() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.48em] text-white/38">Initializing</p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-[-0.05em] text-white md:text-5xl">
          Somesh Meshram
        </h2>
        <div className="mx-auto mt-8 h-px w-60 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-200 to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 38, mass: 0.15 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 38, mass: 0.15 });
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 mix-blend-screen md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 md:block"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}

function Surface({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`surface-panel ${className}`}>
      <div className="surface-highlight" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

function DepthSection({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -24]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.35, 1, 1, 0.6]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ rotateX, y, opacity, transformPerspective: 1500 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function DeviceStage() {
  return (
    <div className="hero-stage">
      <Canvas camera={{ position: [0, 0.2, 5.6], fov: 32 }}>
        <color attach="background" args={["#0e0e0e"]} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[4, 5, 3]} intensity={2.4} color="#ffffff" />
        <pointLight position={[-4, -2, 2]} intensity={1.8} color="#6ee7f9" />
        <spotLight position={[0, 6, 2]} angle={0.35} penumbra={1} intensity={2.5} color="#fff8dc" />
        <OrbitalField />
        <Float rotationIntensity={0.18} floatIntensity={0.55} speed={1.8}>
          <DeviceModel />
        </Float>
        <Environment preset="city" />
      </Canvas>
      <div className="hero-stage-glow" />
    </div>
  );
}

function OrbitalField() {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.28, -0.3]}>
        <torusGeometry args={[1.8, 0.012, 24, 200]} />
        <meshBasicMaterial color="#8ee8ff" transparent opacity={0.36} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.28, -0.3]}>
        <torusGeometry args={[2.25, 0.012, 24, 200]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>
      {floatingSpecs.map((chip, index) => (
        <Float key={chip.label} speed={1.4 + index * 0.16} floatIntensity={0.45}>
          <Html transform position={chip.position} distanceFactor={1.55}>
            <div className="spec-chip">{chip.label}</div>
          </Html>
        </Float>
      ))}
    </group>
  );
}

function DeviceModel() {
  const group = useRef<THREE.Group | null>(null);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#111111",
        metalness: 0.96,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.16
      }),
    []
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.25;
    group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      <mesh position={[0, -1.9, -0.45]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.7, 64]} />
        <meshBasicMaterial color="#2be4ff" transparent opacity={0.15} />
      </mesh>
      <RoundedBox args={[2.2, 4.45, 0.18]} radius={0.26} smoothness={8} material={material} />
      <RoundedBox args={[1.95, 4.08, 0.05]} radius={0.18} smoothness={8} position={[0, 0, 0.095]}>
        <meshStandardMaterial color="#07090d" emissive="#07131b" emissiveIntensity={0.8} />
      </RoundedBox>
      <mesh position={[0, 2.02, 0.12]}>
        <boxGeometry args={[0.42, 0.05, 0.03]} />
        <meshStandardMaterial color="#1d1d1d" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.67, 2.02, 0.12]}>
        <circleGeometry args={[0.05, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <Html transform position={[0, 0, 0.13]} distanceFactor={1.15}>
        <div className="device-ui">
          <div className="device-ui-top">
            <span>Flutter Runtime</span>
            <span>Stable Build</span>
          </div>
          <div className="device-ui-card">
            <p>Somesh Meshram</p>
            <strong>Engineering kinetic mobile systems</strong>
          </div>
          <div className="device-ui-grid">
            <div>
              <span>Stack</span>
              <strong>Dart / Kotlin</strong>
            </div>
            <div>
              <span>Pattern</span>
              <strong>GetX / BLoC</strong>
            </div>
            <div>
              <span>Quality</span>
              <strong>99.9% Crash-Free</strong>
            </div>
            <div>
              <span>Velocity</span>
              <strong>4+ Years</strong>
            </div>
          </div>
          <div className="device-ui-feed">
            <div />
            <div />
            <div />
          </div>
        </div>
      </Html>
    </group>
  );
}

function HeroControlDeck() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-5xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <Surface className="px-5 py-5 md:px-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Control Deck</p>
            <h3 className="mt-2 font-display text-2xl text-white">Built like a product system</h3>
          </div>
          <FolderGit2 size={18} className="text-white/20" />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {heroData.map((item) => (
            <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/38">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-white/84">{item.value}</p>
            </div>
          ))}
        </div>
      </Surface>

      <Surface className="px-5 py-5 md:px-7">
        <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Engineering Pulse</p>
        <div className="mt-5 space-y-4">
          {[
            ["UI Fidelity", "94%"],
            ["Delivery Velocity", "Fast"],
            ["Code Health", "High"],
            ["Crash Risk", "Low"]
          ].map(([label, value]) => (
            <div key={label}>
              <div className="flex items-center justify-between text-sm text-white/72">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/6">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-200/90 to-white/30"
                  style={{ width: label === "Crash Risk" ? "18%" : label === "Delivery Velocity" ? "86%" : "94%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}

function HorizontalShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"]);

  return (
    <section ref={ref} className="relative mt-14 h-[240vh] md:mt-24">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Surface className="px-6 py-8 md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Selected Work"
              title="A horizontal project stage with controlled motion"
              copy="An original showcase surface built to feel immersive and product-driven, using pinned motion and deliberate spatial pacing instead of a static card list."
            />
            <motion.div style={{ x }} className="mt-10 flex w-[220%] gap-5 md:mt-14 md:w-[170%]">
              {featuredWork.map((item) => (
                <article
                  key={item.index}
                  className="showcase-card flex min-h-[24rem] w-[78vw] max-w-[32rem] flex-col justify-between md:min-h-[30rem] md:w-[34rem]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.34em] text-white/35">
                        {item.index}
                      </span>
                      <Sparkles size={16} className="text-cyan-100/60" />
                    </div>
                    <p className="mt-8 text-[11px] uppercase tracking-[0.34em] text-cyan-100/68">
                      {item.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-8 text-white/62">{item.summary}</p>
                  </div>

                  <div>
                    <div className="showcase-visual">
                      <div className="showcase-screen">
                        <div className="showcase-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="showcase-grid">
                          <div className="showcase-block large" />
                          <div className="showcase-block" />
                          <div className="showcase-block" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/42">
                      <span>{item.stack}</span>
                      <span>Production Focus</span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </Surface>
        </div>
      </div>
    </section>
  );
}

function GalleryMockup({
  title,
  subtitle,
  accent
}: {
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 4, rotateY: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="perspective-[1200px]"
    >
      <div className="gallery-object">
        <div className={`gallery-aura bg-gradient-to-br ${accent}`} />
        <div className="gallery-device">
          <div className="gallery-status">
            <span />
            <span />
            <span />
          </div>
          <div className="gallery-screen">
            <div className="gallery-head">
              <p>{title}</p>
              <span>{subtitle}</span>
            </div>
            <div className="gallery-panel gallery-panel-large" />
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
              <div className="gallery-panel h-24" />
              <div className="gallery-stack">
                <div className="gallery-line" />
                <div className="gallery-line short" />
                <div className="gallery-line medium" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="gallery-mini" />
              <div className="gallery-mini" />
              <div className="gallery-mini" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SpecsBar() {
  const specs = ["4+ YEARS EXP", "99.9% CRASH-FREE", "FLUTTER/KOTLIN EXPERT"];

  return (
    <Surface className="mx-auto mt-8 max-w-3xl">
      <div className="grid gap-4 px-5 py-4 md:grid-cols-3 md:px-8">
        {specs.map((spec) => (
          <div key={spec} className="flex items-center justify-center gap-3 py-1 text-center">
            <Gauge size={16} className="text-cyan-200" />
            <span className="text-xs tracking-[0.32em] text-white/75">{spec}</span>
          </div>
        ))}
      </div>
    </Surface>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.22 });
  const bgY1 = useParallax(smooth, 180);
  const bgY2 = useParallax(smooth, 90);

  return (
    <main className="relative overflow-hidden bg-[#0e0e0e] text-white">
      <LoadingSequence />
      <CustomCursor />
      <motion.div style={{ y: bgY1 }} className="kinetic-orb kinetic-orb-a" />
      <motion.div style={{ y: bgY2 }} className="kinetic-orb kinetic-orb-b" />
      <motion.div style={{ y: bgY1 }} className="kinetic-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
        >
          <div>
            <p className="font-display text-base tracking-[0.08em] text-white">Somesh Meshram</p>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Senior Flutter & Android Developer
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {["Heritage", "System Core", "Gallery", "Contact"].map((item, index) => (
              <a
                key={item}
                href={["#experience", "#system-core", "#gallery", "#contact"][index]}
                className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.header>

        <section className="relative flex min-h-[92vh] flex-col items-center justify-center py-16 text-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-5xl"
          >
            <p className="text-[11px] uppercase tracking-[0.48em] text-white/40">
              Kinetic Laboratory
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl font-display text-4xl font-medium uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
              Somesh Meshram: Engineering Kinetic Experiences
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
              Senior Flutter & Android Developer with 4+ years of experience crafting high
              performance mobile products across Flutter, Dart, Kotlin, Java, and MERN-backed
              systems.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 w-full max-w-4xl">
            <DeviceStage />
          </div>

          <SpecsBar />
          <HeroControlDeck />
        </section>

        <DepthSection id="experience" className="mt-14 md:mt-24">
          <Surface className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
            <SectionIntro
              eyebrow="The Heritage"
              title="Build versions in a disciplined engineering timeline"
              copy="Every role is treated like a release milestone: cleaner execution, stronger mobile foundations, sharper UX instincts, and greater ownership over product quality."
            />

            <div className="relative mx-auto mt-14 max-w-4xl pl-7 md:pl-12">
              <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-white/30 via-cyan-300/35 to-white/10 md:left-4" />
              <div className="space-y-7">
                {career.map((item) => (
                  <motion.article
                    key={item.version}
                    whileHover={{ x: 6 }}
                    className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="absolute left-[-1.55rem] top-8 h-4 w-4 rounded-full border border-cyan-200/70 bg-cyan-200 shadow-[0_0_24px_rgba(90,214,255,0.45)] md:left-[-2.15rem]" />
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200/75">
                          {item.version}
                        </p>
                        <h3 className="mt-2 font-display text-2xl text-white">{item.company}</h3>
                        <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/45">
                          {item.role} • {item.location}
                        </p>
                      </div>
                      <Activity className="text-white/20" size={22} />
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-white/62">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </Surface>
        </DepthSection>

        <DepthSection id="system-core" className="mt-14 md:mt-24">
          <Surface className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
            <SectionIntro
              eyebrow="System Core"
              title="Industrial-light skill modules built for performance"
              copy="The core toolkit combines Flutter architecture, native Android depth, and proven supporting systems that keep releases stable, maintainable, and engineered with intent."
            />

            <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 xl:grid-cols-5">
              {systemCore.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="system-card"
                >
                  <div className="system-card-beam" />
                  <item.icon size={22} className="relative z-[1] text-cyan-100" />
                  <h3 className="relative z-[1] mt-8 font-display text-xl text-white">
                    {item.name}
                  </h3>
                  <p className="relative z-[1] mt-3 text-sm leading-7 text-white/60">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
              {[
                "Flutter (GetX/BLOC)",
                "Dart, Kotlin, Java",
                "MERN Stack"
              ].map((spec) => (
                <div
                  key={spec}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm tracking-[0.24em] text-white/72"
                >
                  {spec}
                </div>
              ))}
            </div>
          </Surface>
        </DepthSection>

        <HorizontalShowcase />

        <DepthSection id="gallery" className="mt-14 md:mt-24">
          <Surface className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
            <SectionIntro
              eyebrow="The Gallery"
              title="Minimal 3D product studies with measured placement"
              copy="A curated showcase of mobile interface compositions presented inside restrained device mockups, staying premium, architectural, and deliberate instead of noisy."
            />

            <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <GalleryMockup
                title={galleryScreens[0].title}
                subtitle={galleryScreens[0].subtitle}
                accent={galleryScreens[0].accent}
              />
              <div className="grid gap-8">
                {galleryScreens.slice(1).map((item) => (
                  <GalleryMockup
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    accent={item.accent}
                  />
                ))}
              </div>
            </div>
          </Surface>
        </DepthSection>

        <DepthSection className="mt-14 md:mt-24">
          <Surface className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
            <SectionIntro
              eyebrow="Foundation"
              title="Built on strong technical grounding"
              copy="B.E. in Information Technology from RTMNU with an 8.0 CGPA, grounding product execution in practical engineering fundamentals."
            />
          </Surface>
        </DepthSection>

        <DepthSection id="contact" className="mt-14 md:mt-24">
          <Surface className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">Contact</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">
                Available for high-performance mobile product work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
                Senior Flutter and Android development with a focus on cinematic interfaces, robust
                engineering, and maintainable delivery quality.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:somesh@example.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm text-white transition hover:bg-white/[0.08]"
                >
                  <Smartphone size={16} />
                  Start a Conversation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-6 py-3 text-sm text-cyan-100 transition hover:bg-cyan-200/14"
                >
                  View Work Surface
                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </div>
          </Surface>
        </DepthSection>

        <footer className="mx-auto mt-10 max-w-6xl px-2 text-center text-[11px] uppercase tracking-[0.34em] text-white/28">
          Somesh Meshram • Senior Flutter & Android Developer • RTMNU • 4+ Years Experience
        </footer>
      </div>
    </main>
  );
}
