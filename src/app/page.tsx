"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const assetPathPrefix = "/figma";
const imgCalloutChar = `${assetPathPrefix}/a184e.png`;
const imgHeroChars = `${assetPathPrefix}/1db26.png`;
const imgChar2 = `${assetPathPrefix}/18283.png`;
const imgChar3 = `${assetPathPrefix}/21eda.png`;
const imgChar4 = `${assetPathPrefix}/0f547.png`;
const imgEndExplorer = `${assetPathPrefix}/aba56.png`;
const imgEndCyclist = `${assetPathPrefix}/3e449.png`;
const imgEndRunner = `${assetPathPrefix}/588be.png`;
const imgChar8 = `${assetPathPrefix}/a5001.png`;
const imgChar9 = `${assetPathPrefix}/28534.png`;
const imgChar10 = `${assetPathPrefix}/5e76c.png`;
const imgChar11 = `${assetPathPrefix}/d866f.png`;
const imgChar12 = `${assetPathPrefix}/610b2.png`;

const imgArrowRight = `${assetPathPrefix}/6b7ac.svg`;
const imgWaveIndigo = `${assetPathPrefix}/4a430.svg`;
const imgHeroClouds = `${assetPathPrefix}/07a8f.svg`;
const imgMusicNote1 = `${assetPathPrefix}/e99cb.svg`;
const imgClock = `${assetPathPrefix}/c980e.svg`;
const imgFolder = `${assetPathPrefix}/9c440.svg`;
const imgFolderShape = `${assetPathPrefix}/7a44a.svg`;
const imgPlane2 = `${assetPathPrefix}/a2993.svg`;
const imgSheet = `${assetPathPrefix}/a02d7.svg`;
const imgComposerShape2 = `${assetPathPrefix}/50295.svg`;
const imgMusicNote2 = `${assetPathPrefix}/a3898.svg`;
const imgMusicNote3 = `${assetPathPrefix}/b8ac4.svg`;
const imgTrumpetShape = `${assetPathPrefix}/df022.svg`;
const imgGamerShape = `${assetPathPrefix}/d5997.svg`;
const imgJoystickShape = `${assetPathPrefix}/fffa8.svg`;
const imgSoccerCircle = `${assetPathPrefix}/0b181.svg`;
const imgSoccerShape1 = `${assetPathPrefix}/54f06.svg`;
const imgSoccerShape2 = `${assetPathPrefix}/5abbb.svg`;
const imgSoccerShape3 = `${assetPathPrefix}/a52bc.svg`;
const imgSoccerShape4 = `${assetPathPrefix}/79eb7.svg`;
const imgSoccerTrace = `${assetPathPrefix}/5d506.svg`;
const imgSoccerCircle2 = `${assetPathPrefix}/57ddb.svg`;
const imgCloud1 = `${assetPathPrefix}/56d85.svg`;
const imgCloud2 = `${assetPathPrefix}/03e69.svg`;
const imgCloud3 = `${assetPathPrefix}/b98c3.svg`;
const imgCloud4 = `${assetPathPrefix}/52d06.svg`;
const imgCloud5 = `${assetPathPrefix}/08e6f.svg`;
const imgHillsBack = `${assetPathPrefix}/0dca5.svg`;
const imgHillsMiddle = `${assetPathPrefix}/f9f03.svg`;
const imgHillsFront = `${assetPathPrefix}/99a38.svg`;
const imgClockShape = `${assetPathPrefix}/fb7d6.svg`;
const imgPlane1 = `${assetPathPrefix}/891ca.svg`;
const imgPlaneTrace = `${assetPathPrefix}/d9a65.svg`;
const imgComposerShape = `${assetPathPrefix}/22db9.svg`;
const imgJoystick = `${assetPathPrefix}/39ac6.svg`;
const imgWaveLilac = `${assetPathPrefix}/db1c6.svg`;
const imgIconGo = `${assetPathPrefix}/ca2ba.svg`;
const imgIconPro = `${assetPathPrefix}/62e87.svg`;
const imgIconMax = `${assetPathPrefix}/b2ff8.svg`;
const imgChevronDown = `${assetPathPrefix}/046de.svg`;
const imgMenuEquals = `${assetPathPrefix}/725c8.svg`;

function renderMaliWords(text: string) {
  const words = text.split(" ");
  return words.map((word, idx) => (
    <React.Fragment key={idx}>
      <span className="inline-block overflow-visible">
        <span className="mali-word inline-block will-change-transform">
          {word}
        </span>
      </span>
      {idx < words.length - 1 ? " " : ""}
    </React.Fragment>
  ));
}

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const svgDrawPathRef = useRef<SVGPathElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const observers: IntersectionObserver[] = [];

    const ctx = gsap.context(() => {
      // 1. SVG DRAW PATH ANIMATION ON SCROLL (MindMarket Blue S-Line)
      const path = svgDrawPathRef.current;
      const timelineEl = timelineSectionRef.current;
      if (path && timelineEl) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: timelineEl,
            start: "top 68%",
            end: "bottom 82%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      }

      // 2. Card Stack Scale Effect on Major Rounded Containers (scale: 0.96 as next section overlaps)
      const stackBlocks = gsap.utils.toArray<HTMLElement>(".card-stack-block");
      stackBlocks.forEach((block) => {
        const overlay = block.querySelector<HTMLElement>(".card-stack-overlay");
        gsap.fromTo(
          block,
          { scale: 1, transformOrigin: "center bottom" },
          {
            scale: 0.96,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          }
        );

        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0 },
            {
              opacity: 0.16,
              ease: "none",
              scrollTrigger: {
                trigger: block,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      // 3. Multi-layer Parallax & Continuous Float on Central Hero Illustration
      const heroStage = document.querySelector<HTMLElement>(".hero-central-stage");
      if (heroStage) {
        gsap.fromTo(
          ".hero-central-characters",
          { yPercent: 0 },
          {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: heroStage,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          }
        );

        gsap.fromTo(
          ".hero-central-bg-clouds",
          { yPercent: 0 },
          {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: heroStage,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      gsap.to(".hero-central-float", {
        y: -12,
        rotation: -0.7,
        duration: 3.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".hero-clouds-float", {
        y: 8,
        x: 5,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // 4. Parallax & Continuous Float on Secondary Illustrations and Decorative Vectors
      const secondaryChars = gsap.utils.toArray<HTMLElement>(".parallax-character");
      secondaryChars.forEach((el, idx) => {
        const shift = idx % 2 === 0 ? 28 : 40;
        gsap.fromTo(
          el,
          { y: shift },
          {
            y: -shift,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          }
        );

        const innerImg = el.querySelector("img");
        if (innerImg) {
          gsap.to(innerImg, {
            y: idx % 2 === 0 ? -9 : 9,
            duration: 2.7 + (idx % 4) * 0.35,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      });

      const decorVectors = gsap.utils.toArray<HTMLElement>(".parallax-decor");
      decorVectors.forEach((el, idx) => {
        const speed = idx % 2 === 0 ? -15 : -10;
        gsap.fromTo(
          el,
          { yPercent: 10 },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 5. Timeline Feature Cards Organic Entrance
      const entranceCards = gsap.utils.toArray<HTMLElement>(".timeline-feature-card");
      if (typeof IntersectionObserver !== "undefined" && entranceCards.length) {
        const cardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const card = entry.target as HTMLElement;
              if (entry.isIntersecting) {
                gsap.fromTo(
                  card,
                  { y: 36, opacity: 0.85 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    ease: "back.out(1.2)",
                    overwrite: "auto",
                  }
                );
              }
            });
          },
          { threshold: 0.1 }
        );
        entranceCards.forEach((c) => cardObserver.observe(c));
        observers.push(cardObserver);
      }

      // 6. Organic Mali Headlines Word-by-Word Reveal (elastic bounce back.out(1.4))
      const maliHeadings = gsap.utils.toArray<HTMLElement>(".mali-heading-reveal");
      if (typeof IntersectionObserver !== "undefined" && maliHeadings.length) {
        const headingObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const heading = entry.target as HTMLElement;
              const words = heading.querySelectorAll<HTMLElement>(".mali-word");
              if (!words.length) return;
              if (entry.isIntersecting) {
                gsap.fromTo(
                  words,
                  {
                    yPercent: 75,
                    opacity: 0,
                    rotateZ: 3,
                  },
                  {
                    yPercent: 0,
                    opacity: 1,
                    rotateZ: 0,
                    duration: 0.85,
                    stagger: 0.06,
                    ease: "back.out(1.4)",
                    overwrite: true,
                    clearProps: "transform,opacity",
                  }
                );
              }
            });
          },
          { threshold: 0.08 }
        );
        maliHeadings.forEach((h) => headingObserver.observe(h));
        observers.push(headingObserver);
      }
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      observers.forEach((obs) => obs.disconnect());
      ctx.revert();
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -90, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openQuoteWhatsApp = (planName?: string, price?: string) => {
    setMobileMenuOpen(false);
    const url = planName
      ? buildWhatsAppLink({
          type: "package",
          packageName: planName,
          launchPrice: price || "$300.000",
          regularPrice: price || "$300.000",
          deliveryTime: "5 días hábiles",
        })
      : buildWhatsAppLink({ type: "navbar_general" });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={rootRef} className="relative w-full bg-[#f5f1e4] text-[#2c2e2a]">
      {/* =====================================================================
          FLOATING TOP NAVIGATION BAR (Mobile Single Pill / Desktop Full Bar)
         ===================================================================== */}
      <header className="fixed top-3 md:top-[17px] left-0 right-0 z-50 pointer-events-none">
        <div className="w-[92%] md:w-[90%] max-w-[1435px] mx-auto flex items-center gap-[16px] md:gap-[20px] pointer-events-auto">
          {/* Main White Pill */}
          <nav
            aria-label="Navegación principal"
            className="bg-white flex-1 h-[62px] md:h-[68px] rounded-[12px] md:rounded-[10px] pl-[18px] pr-[10.6px] flex items-center justify-between shadow-[0_8px_30px_rgba(44,46,42,0.08)]"
          >
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="flex items-center text-left cursor-pointer"
            >
              <span className="font-['Mali:Regular'] font-mali text-[#2c2e2a] text-[30px] md:text-[35px] leading-none tracking-tight">
                Webify
              </span>
            </button>

            {/* Desktop Menu Links + Circular Button */}
            <div className="hidden md:flex items-center gap-[4px] h-full">
              <button
                type="button"
                onClick={() => scrollToSection("como-funciona")}
                className="mindmarket-nav-item relative flex items-center justify-center min-h-[46.75px] px-[17px] rounded-[50px]"
              >
                <span className="nav-pill-bg absolute inset-[4.5px_10px] bg-[#f5f1e4] opacity-0 rounded-[50px]" />
                <span className="relative font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] lg:text-[18.1px] tracking-[-0.72px] whitespace-nowrap">
                  Cómo funciona
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("rubros")}
                className="mindmarket-nav-item relative flex items-center gap-[8px] justify-center min-h-[46.75px] px-[17px] rounded-[50px]"
              >
                <span className="nav-pill-bg absolute inset-[4.5px_12px] bg-[#f5f1e4] opacity-0 rounded-[50px]" />
                <span className="relative font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] lg:text-[18.1px] tracking-[-0.72px] whitespace-nowrap">
                  Rubros
                </span>
                <img
                  alt=""
                  src={imgChevronDown}
                  className="nav-chevron relative size-[10px]"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("panel-movil")}
                className="mindmarket-nav-item relative flex items-center gap-[8px] justify-center min-h-[46.75px] px-[17px] rounded-[50px]"
              >
                <span className="nav-pill-bg absolute inset-[4.5px_11px] bg-[#f5f1e4] opacity-0 rounded-[50px]" />
                <span className="relative font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] lg:text-[18.1px] tracking-[-0.72px] whitespace-nowrap">
                  Panel Móvil
                </span>
                <img
                  alt=""
                  src={imgChevronDown}
                  className="nav-chevron relative size-[10px]"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("planes")}
                className="mindmarket-nav-item relative flex items-center gap-[8px] justify-center min-h-[46.75px] px-[17px] rounded-[50px]"
              >
                <span className="nav-pill-bg absolute inset-[4.5px_12px] bg-[#f5f1e4] opacity-0 rounded-[50px]" />
                <span className="relative font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] lg:text-[18.1px] tracking-[-0.72px] whitespace-nowrap">
                  Planes
                </span>
                <img
                  alt=""
                  src={imgChevronDown}
                  className="nav-chevron relative size-[10px]"
                />
              </button>

              <div className="pl-[12px] flex items-center">
                <button
                  type="button"
                  aria-label="Ir al contacto"
                  onClick={() => scrollToSection("contacto")}
                  className="mindmarket-pill-btn relative flex items-center justify-center size-[42.5px]"
                >
                  <span className="pill-circle absolute inset-0 bg-[#626cd4] rounded-full" />
                  <img
                    alt=""
                    src={imgMenuEquals}
                    className="relative size-[22px]"
                  />
                </button>
              </div>
            </div>

            {/* Mobile Circular Menu Button (Right side of single pill) */}
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden mindmarket-pill-btn relative flex items-center justify-center size-[42.5px]"
            >
              <span className="pill-circle absolute inset-0 bg-[#626cd4] rounded-full" />
              <img
                alt=""
                src={imgMenuEquals}
                className="relative size-[22px]"
              />
            </button>
          </nav>

          {/* Desktop Separate "Cotizar mi web" Pill Button */}
          <button
            type="button"
            onClick={() => openQuoteWhatsApp()}
            className="hidden md:flex mindmarket-pill-btn bg-white h-[68px] px-[14px] rounded-[10px] items-center gap-[10px] shadow-[0_8px_30px_rgba(44,46,42,0.08)] shrink-0"
          >
            <span className="font-['Inter:Medium'] font-inter font-medium text-[18.1px] text-black px-[8px] whitespace-nowrap">
              Cotizar mi web
            </span>
            <span className="pill-circle bg-[#626cd4] rounded-full size-[40px] flex items-center justify-center shrink-0">
              <img
                alt=""
                src={imgArrowRight}
                className="pill-arrow size-[21.25px]"
              />
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden w-[92%] mx-auto mt-2 bg-white rounded-[16px] p-5 shadow-[0_16px_40px_rgba(44,46,42,0.16)] flex flex-col gap-3 pointer-events-auto">
            <button
              type="button"
              onClick={() => scrollToSection("como-funciona")}
              className="text-left font-inter font-medium text-[19px] py-2 px-3 rounded-lg hover:bg-[#f5f1e4]"
            >
              Cómo funciona
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("panel-movil")}
              className="text-left font-inter font-medium text-[19px] py-2 px-3 rounded-lg hover:bg-[#f5f1e4]"
            >
              Panel Móvil
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("rubros")}
              className="text-left font-inter font-medium text-[19px] py-2 px-3 rounded-lg hover:bg-[#f5f1e4]"
            >
              Rubros
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("planes")}
              className="text-left font-inter font-medium text-[19px] py-2 px-3 rounded-lg hover:bg-[#f5f1e4]"
            >
              Planes
            </button>
            <button
              type="button"
              onClick={() => openQuoteWhatsApp()}
              className="mindmarket-pill-btn mt-1 bg-[#626cd4] text-white h-[56px] px-5 rounded-[12px] flex items-center justify-between font-inter font-medium text-[18px]"
            >
              <span>Cotizar mi web</span>
              <span className="pill-circle bg-white rounded-full size-[36px] flex items-center justify-center">
                <img
                  alt=""
                  src={imgArrowRight}
                  className="pill-arrow size-[18px]"
                />
              </span>
            </button>
          </div>
        )}
      </header>

      {/* =====================================================================
          BLOCK 1: HERO INDIGO ("Diseño web hecho a medida")
         ===================================================================== */}
      <section
        id="hero"
        className="card-stack-block relative w-full bg-[#626cd4] pt-[128px] md:pt-[200px] lg:pt-[235px] pb-[180px] md:pb-[340px] lg:pb-[420px] px-4 md:px-10"
      >
        <div className="card-stack-overlay absolute inset-0 bg-[#2c2e2a] opacity-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1503px] mx-auto flex flex-col items-center gap-[24px] md:gap-[44px]">
          <h1 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[52px] sm:text-[76px] md:text-[120px] lg:text-[156px] xl:text-[186.2px] leading-[1.02] md:leading-[0.95] tracking-[-0.02em] text-center">
            <span className="block">{renderMaliWords("Diseño web")}</span>
            <span className="block">{renderMaliWords("hecho a medida")}</span>
          </h1>

          {/* Subtitle in Pure White (#FFFFFF) for high contrast over Indigo */}
          <h2 className="font-['Inter:Medium'] font-inter font-medium text-[#FFFFFF] text-[19px] sm:text-[22px] md:text-[27px] lg:text-[29.8px] leading-[1.3] tracking-[-0.04em] text-center max-w-[92%] md:max-w-[900px]">
            De Instagram a tu WhatsApp, sin plantillas de IA
          </h2>
        </div>
      </section>

      {/* =====================================================================
          BLOCK 2: CREAM SECTION + HERO CHARACTERS OVERLAP + ANIMATED BLUE S-PATH
         ===================================================================== */}
      <section className="card-stack-block relative z-10 w-full bg-[#f5f1e4] rounded-t-[36px] md:rounded-t-[50px] -mt-[40px] md:-mt-[60px] pt-[20px] md:pt-[80px] pb-[80px] md:pb-[120px]">
        {/* Central Overlapping Hero Illustration (Bridging Hero Indigo & Cream Section cleanly) */}
        <div className="hero-central-stage relative md:absolute md:-top-[330px] lg:-top-[400px] md:right-[2%] lg:right-[6%] xl:right-[10%] z-10 w-[92%] sm:w-[80%] md:w-[520px] lg:w-[680px] xl:w-[820px] mx-auto -mt-[155px] sm:-mt-[200px] md:mt-0 pointer-events-none select-none">
          {/* Background Clouds */}
          <div className="hero-central-bg-clouds absolute -top-[4%] left-0 right-0 flex justify-center">
            <img
              alt=""
              src={imgHeroClouds}
              className="hero-clouds-float w-[95%] max-w-[780px] h-auto"
            />
          </div>
          {/* 3 Hero Characters with Transparent Background (Zero static blue blob below them) */}
          <div className="hero-central-characters relative z-10">
            <img
              alt="Ilustración central Webify"
              src={imgHeroChars}
              className="hero-central-float w-full h-auto block"
            />
          </div>
        </div>

        {/* Intro Paragraph & "Ver planes desde $150.000" Pill CTA (Protected z-20 so characters/blob never overlap it) */}
        <div className="relative z-20 w-[92%] max-w-[1640px] mx-auto pt-4 md:pt-[24px] lg:pt-[40px] pb-10 md:pb-[140px] lg:pb-[180px]">
          <div className="max-w-[560px] lg:max-w-[650px] flex flex-col items-start gap-[28px] md:gap-[38px]">
            <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[22px] sm:text-[25px] md:text-[28px] lg:text-[29.8px] leading-[1.28] md:leading-[35.7px] tracking-[-0.04em]">
              En Webify diseñamos páginas con carácter propio para estudios de
              uñas, spas, barberías y restaurantes en Colombia. Tus clientes
              eligen servicios o platos y tú recibes el pedido o la cita lista
              en tu WhatsApp.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("planes")}
              className="mindmarket-pill-btn bg-white min-h-[60px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] flex items-center gap-[10px] shadow-[0_8px_24px_rgba(44,46,42,0.06)]"
            >
              <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                Ver planes desde $150.000
              </span>
              <span className="pill-circle bg-[#626cd4] rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                <img
                  alt=""
                  src={imgArrowRight}
                  className="pill-arrow size-[21.25px]"
                />
              </span>
            </button>
          </div>
        </div>

        {/* ===================================================================
            TIMELINE STAGE WITH ANIMATED BLUE S-CURVE SVG DRAW PATH
           =================================================================== */}
        <div
          ref={timelineSectionRef}
          className="relative w-full overflow-x-clip pt-4 pb-[300px] md:pb-[520px] lg:pb-[640px]"
        >
          {/* Animated Continuous S-Shaped SVG Draw Path in #4F52C6 */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1920 4400"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full z-[1] overflow-visible"
          >
            <path
              ref={svgDrawPathRef}
              d="M 1180 -60 C 1480 180, 1560 540, 1220 820 C 860 1120, 340 1280, 520 1720 C 700 2160, 1460 2260, 1080 2780 C 700 3300, 1520 3480, 1260 3920 C 1060 4220, 880 4320, 960 4420"
              fill="none"
              stroke="#4F52C6"
              strokeWidth={isMobile ? "110" : "180"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Background Decorative Dashed Traces (Desktop) */}
          <img
            alt=""
            src={imgClockShape}
            className="hidden md:block pointer-events-none absolute top-[1%] left-[7%] w-[28%] max-w-[520px] z-[2]"
          />
          <img
            alt=""
            src={imgPlaneTrace}
            className="hidden md:block pointer-events-none absolute top-[7%] left-[22%] w-[22%] max-w-[420px] z-[2]"
          />
          <img
            alt=""
            src={imgFolderShape}
            className="hidden md:block pointer-events-none absolute top-[16%] left-[18%] w-[24%] max-w-[450px] z-[2]"
          />
          <img
            alt=""
            src={imgComposerShape}
            className="hidden md:block pointer-events-none absolute top-[26%] right-[8%] w-[36%] max-w-[680px] z-[2]"
          />
          <img
            alt=""
            src={imgComposerShape2}
            className="hidden md:block pointer-events-none absolute top-[29%] right-[8%] w-[36%] max-w-[680px] z-[2]"
          />
          <img
            alt=""
            src={imgSoccerTrace}
            className="hidden md:block pointer-events-none absolute top-[72%] left-[32%] w-[18%] max-w-[340px] z-[2]"
          />

          {/* Timeline Foreground Rows (Cards + Companion Characters + Floating Vectors) */}
          <div className="relative z-[10] max-w-[1680px] mx-auto flex flex-col gap-[72px] md:gap-[160px] lg:gap-[210px]">
            {/* ---------------------------------------------------------------
                ROW 1: "Catálogo y agenda a WhatsApp"
               --------------------------------------------------------------- */}
            <div
              id="como-funciona"
              className="w-[92%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10"
            >
              {/* Left Character & Clock/Plane Decor */}
              <div className="md:col-span-5 relative flex items-center justify-center order-2 md:order-1">
                <div className="parallax-decor hidden md:block absolute -top-12 left-4 w-[130px] lg:w-[170px]">
                  <img alt="" src={imgClock} className="w-full h-auto" />
                </div>
                <div className="parallax-decor hidden md:block absolute top-6 right-4 w-[90px] lg:w-[115px] rotate-[10deg]">
                  <img alt="" src={imgPlane1} className="w-full h-auto" />
                </div>
                <div className="parallax-character w-[82%] sm:w-[70%] md:w-full max-w-[560px]">
                  <img
                    alt="Catálogo y agenda Webify"
                    src={imgChar9}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right Feature Card 1 */}
              <div className="md:col-span-7 flex justify-end order-1 md:order-2">
                <div className="timeline-feature-card relative w-full md:max-w-[692.5px] rounded-[14px] md:rounded-[10px] bg-white p-[28px] sm:p-[36px] md:p-[53px] shadow-[0_2px_0_1px_#ff705d,0_16px_40px_rgba(44,46,42,0.06)] flex flex-col gap-[22px] md:gap-[26.6px]">
                  <h3 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[34px] sm:text-[42px] md:text-[53.1px] leading-[1.14] tracking-[-0.02em]">
                    <span className="block">
                      {renderMaliWords("Catálogo y agenda")}
                    </span>
                    <span className="block">
                      {renderMaliWords("a WhatsApp")}
                    </span>
                  </h3>

                  <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[18px] md:text-[20.2px] leading-[1.4] md:leading-[25.23px] tracking-[-0.03em]">
                    Tus clientes eligen platos o servicios, agregan adiciones y
                    salsas o seleccionan especialista. El domicilio se calcula
                    por barrio y tú recibes el pedido o la cita lista en tu
                    WhatsApp.
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("panel-movil")}
                      className="mindmarket-pill-btn bg-[#ff705d] min-h-[58px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px]"
                    >
                      <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                        Cómo funciona
                      </span>
                      <span className="pill-circle bg-white rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                        <img
                          alt=""
                          src={imgArrowRight}
                          className="pill-arrow size-[21.25px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                ROW 2: "Panel autogestionable en 10 segundos"
               --------------------------------------------------------------- */}
            <div
              id="panel-movil"
              className="w-[92%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10"
            >
              {/* Left Feature Card 2 */}
              <div className="md:col-span-7 flex justify-start">
                <div className="timeline-feature-card relative w-full md:max-w-[692.5px] rounded-[14px] md:rounded-[10px] bg-white p-[28px] sm:p-[36px] md:p-[53px] shadow-[0_2px_0_1px_#f5e211,0_16px_40px_rgba(44,46,42,0.06)] flex flex-col gap-[22px] md:gap-[26.6px]">
                  <h3 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[34px] sm:text-[42px] md:text-[53.1px] leading-[1.14] tracking-[-0.02em]">
                    <span className="block">
                      {renderMaliWords("Panel autogestionable")}
                    </span>
                    <span className="block">
                      {renderMaliWords("en 10 segundos")}
                    </span>
                  </h3>

                  <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[18px] md:text-[20.2px] leading-[1.4] md:leading-[25.23px] tracking-[-0.03em]">
                    Cambia precios, actualiza fotos y marca productos como
                    agotados desde el celular. Sin depender de nadie: tu
                    catálogo y tu agenda al día, en segundos.
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("cobros-locales")}
                      className="mindmarket-pill-btn bg-[#f5e211] min-h-[58px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px]"
                    >
                      <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                        Ver Panel Móvil
                      </span>
                      <span className="pill-circle bg-white rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                        <img
                          alt=""
                          src={imgArrowRight}
                          className="pill-arrow size-[21.25px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Character & Folder/Sheet/Plane2 Decor */}
              <div className="md:col-span-5 relative flex items-center justify-center">
                <div className="parallax-decor hidden md:block absolute -top-14 left-0 w-[135px] lg:w-[180px]">
                  <img alt="" src={imgFolder} className="w-full h-auto" />
                </div>
                <div className="parallax-decor hidden md:block absolute -top-20 right-10 w-[115px] lg:w-[145px] -rotate-[10deg]">
                  <img alt="" src={imgPlane2} className="w-full h-auto" />
                </div>
                <div className="parallax-decor hidden md:block absolute bottom-4 left-2 w-[120px] lg:w-[155px]">
                  <img alt="" src={imgSheet} className="w-full h-auto" />
                </div>
                <div className="parallax-character w-[82%] sm:w-[70%] md:w-full max-w-[580px]">
                  <img
                    alt="Panel autogestionable Webify"
                    src={imgChar10}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                ROW 3: "Cobro local sin fricción"
               --------------------------------------------------------------- */}
            <div
              id="cobros-locales"
              className="w-[92%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10"
            >
              {/* Left Companion Characters & Music Notes */}
              <div className="md:col-span-4 relative flex flex-col items-center justify-center order-2 md:order-1">
                <div className="parallax-decor hidden md:block absolute -top-12 left-4 w-[95px] lg:w-[120px]">
                  <img alt="" src={imgMusicNote1} className="w-full h-auto" />
                </div>
                <div className="parallax-character w-[78%] sm:w-[65%] md:w-full max-w-[440px]">
                  <img
                    alt="Pagos locales Webify"
                    src={imgChar11}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="parallax-character hidden md:block -mt-12 -ml-16 w-[85%] max-w-[400px]">
                  <img alt="" src={imgChar2} className="w-full h-auto block" />
                </div>
              </div>

              {/* Center Feature Card 3 */}
              <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                <div className="timeline-feature-card relative w-full md:max-w-[573.75px] rounded-[14px] md:rounded-[10px] bg-white p-[28px] sm:p-[36px] md:p-[53px] shadow-[0_2px_0_1px_#074679,0_16px_40px_rgba(44,46,42,0.06)] flex flex-col gap-[22px] md:gap-[26.6px]">
                  <h3 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[34px] sm:text-[42px] md:text-[53.1px] leading-[1.14] tracking-[-0.02em]">
                    <span className="block">
                      {renderMaliWords("Cobro local")}
                    </span>
                    <span className="block">
                      {renderMaliWords("sin fricción")}
                    </span>
                  </h3>

                  <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[18px] md:text-[20.2px] leading-[1.4] md:leading-[25.23px] tracking-[-0.03em]">
                    Recibe pagos por Nequi, Bre-B o Daviplata. Conecta una
                    pasarela 24/7 con Wompi, PSE y Addi para que tus clientes
                    paguen como prefieren, sin complicaciones.
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("planes")}
                      className="mindmarket-pill-btn bg-[#074679] min-h-[58px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px]"
                    >
                      <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-white px-[10.6px] whitespace-nowrap">
                        Ver planes
                      </span>
                      <span className="pill-circle bg-white rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                        <img
                          alt=""
                          src={imgArrowRight}
                          className="pill-arrow size-[21.25px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Companion Character & Music/Trumpet Decor */}
              <div className="hidden md:flex md:col-span-3 relative flex-col items-center justify-center order-3">
                <div className="parallax-decor absolute -top-16 left-2 w-[110px]">
                  <img alt="" src={imgMusicNote2} className="w-full h-auto" />
                </div>
                <div className="parallax-decor absolute -top-6 right-6 w-[115px]">
                  <img alt="" src={imgMusicNote3} className="w-full h-auto" />
                </div>
                <div className="parallax-character w-full max-w-[460px]">
                  <img alt="" src={imgChar8} className="w-full h-auto block" />
                </div>
                <div className="parallax-decor mt-4 w-[160px]">
                  <img alt="" src={imgTrumpetShape} className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                ROW 4: "Una web con carácter propio"
               --------------------------------------------------------------- */}
            <div
              id="rubros"
              className="w-[92%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10"
            >
              {/* Left Companion Characters & Joystick/Soccer Decor */}
              <div className="md:col-span-5 relative flex flex-col items-center justify-center order-2 md:order-1">
                <div className="parallax-decor hidden md:block absolute -top-10 left-0 w-[130px]">
                  <img alt="" src={imgGamerShape} className="w-full h-auto" />
                </div>
                <div className="parallax-decor hidden md:block absolute -top-8 right-8 w-[115px]">
                  <img alt="" src={imgJoystick} className="w-full h-auto" />
                </div>
                <div className="parallax-character w-[82%] sm:w-[70%] md:w-[88%] max-w-[500px]">
                  <img
                    alt="Diseño web con carácter propio"
                    src={imgChar12}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="parallax-character hidden md:block -mt-10 w-[95%] max-w-[560px]">
                  <img alt="" src={imgChar4} className="w-full h-auto block" />
                </div>
              </div>

              {/* Right Feature Card 4 */}
              <div className="md:col-span-7 flex flex-col items-end gap-8 order-1 md:order-2">
                <div className="timeline-feature-card relative w-full md:max-w-[692.5px] rounded-[14px] md:rounded-[10px] bg-white p-[28px] sm:p-[36px] md:p-[53px] shadow-[0_2px_0_1px_#ebc1ff,0_16px_40px_rgba(44,46,42,0.06)] flex flex-col gap-[22px] md:gap-[26.6px]">
                  <h3 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[34px] sm:text-[42px] md:text-[53.1px] leading-[1.14] tracking-[-0.02em]">
                    <span className="block">
                      {renderMaliWords("Una web con")}
                    </span>
                    <span className="block">
                      {renderMaliWords("carácter propio")}
                    </span>
                  </h3>

                  <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[18px] md:text-[20.2px] leading-[1.4] md:leading-[25.23px] tracking-[-0.03em]">
                    Diseñamos a medida para estudios de uñas, spas, barberías y
                    restaurantes en Colombia. Tu identidad, tus servicios y tus
                    platos; sin plantillas de IA. De Instagram a tu web y de ahí
                    a tu WhatsApp.
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("a-tu-medida")}
                      className="mindmarket-pill-btn bg-[#ebc1ff] min-h-[58px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px]"
                    >
                      <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                        Ver rubros
                      </span>
                      <span className="pill-circle bg-white rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                        <img
                          alt=""
                          src={imgArrowRight}
                          className="pill-arrow size-[21.25px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Companion Character & Soccer Vectors below Card 4 on Desktop */}
                <div className="hidden md:flex items-center justify-between w-full max-w-[692.5px] relative">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={imgJoystickShape}
                      className="parallax-decor w-[140px] h-auto"
                    />
                    <img
                      alt=""
                      src={imgSoccerShape2}
                      className="parallax-decor w-[110px] h-auto"
                    />
                    <img
                      alt=""
                      src={imgSoccerShape3}
                      className="parallax-decor w-[100px] h-auto"
                    />
                    <img
                      alt=""
                      src={imgSoccerShape4}
                      className="parallax-decor w-[150px] h-auto"
                    />
                  </div>
                  <div className="parallax-character w-[360px]">
                    <img
                      alt=""
                      src={imgChar3}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              TIMELINE END SCENE: CLOUDS, RUNNER, CYCLIST, EXPLORER & GREEN HILLS
             ----------------------------------------------------------------- */}
          <div className=" pointer-events-none absolute bottom-0 left-0 right-0 h-[280px] sm:h-[380px] md:h-[580px] lg:h-[720px] z-[12]">
            {/* Floating Clouds */}
            <img
              alt=""
              src={imgCloud1}
              className="parallax-decor absolute top-0 right-[28%] w-[32%] max-w-[580px]"
            />
            <img
              alt=""
              src={imgCloud2}
              className="parallax-decor absolute top-[18%] left-[4%] w-[12%] max-w-[190px]"
            />
            <img
              alt=""
              src={imgCloud3}
              className="parallax-decor hidden md:block absolute top-[28%] -left-[6%] w-[18%] max-w-[320px]"
            />
            <img
              alt=""
              src={imgCloud4}
              className="parallax-decor absolute top-[40%] right-[14%] w-[10%] max-w-[150px]"
            />
            <img
              alt=""
              src={imgCloud5}
              className="parallax-decor absolute top-[45%] left-[14%] w-[7%] max-w-[96px]"
            />

            {/* Back Green Hills */}
            <img
              alt=""
              src={imgHillsBack}
              className="absolute bottom-[-8%] left-0 w-full h-auto object-cover"
            />

            {/* 3 End Characters: Basketball Runner (Left), Cyclist (Center), Binoculars Explorer (Right) */}
            <div className="parallax-character absolute bottom-[12%] left-[-3%] w-[38%] max-w-[560px]">
              <img alt="" src={imgEndRunner} className="w-full h-auto block" />
            </div>
            <div className="parallax-character absolute bottom-[10%] left-[25%] w-[44%] max-w-[680px]">
              <img alt="" src={imgEndCyclist} className="w-full h-auto block" />
            </div>
            <div className="parallax-character absolute bottom-[8%] right-[-4%] w-[46%] max-w-[740px]">
              <img
                alt=""
                src={imgEndExplorer}
                className="w-full h-auto block"
              />
            </div>

            {/* Middle & Front Green Hills */}
            <img
              alt=""
              src={imgHillsMiddle}
              className="absolute bottom-[-3%] left-0 w-full h-auto object-cover"
            />
            <img
              alt=""
              src={imgHillsFront}
              className="absolute bottom-[-1%] left-0 w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          BLOCK 3: DELUXE CALLOUT INDIGO ("Tu web, a tu medida")
         ===================================================================== */}
      <section
        id="a-tu-medida"
        className="card-stack-block relative z-[14] w-full bg-[#626cd4] rounded-b-[36px] md:rounded-b-[50px] -mt-[24px] md:-mt-[40px] pt-[90px] md:pt-[150px] pb-[80px] md:pb-[140px] px-4 md:px-12 lg:px-[100px] overflow-x-clip"
      >
        <div className="card-stack-overlay absolute inset-0 rounded-b-[36px] md:rounded-b-[50px] bg-[#2c2e2a] opacity-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1640px] mx-auto flex flex-col items-center">
          {/* Character Illustration on Left/Background */}
          <div className="parallax-character md:absolute md:-top-[60px] md:left-[-4%] lg:left-0 w-[78%] sm:w-[60%] md:w-[44%] max-w-[680px] mb-6 md:mb-0 pointer-events-none z-[1]">
            <img
              alt="Ilustración personaje Webify"
              src={imgCalloutChar}
              className="w-full h-auto block"
            />
          </div>

          {/* Headline & Copy */}
          <div className="relative z-[3] flex flex-col items-center gap-[32px] md:gap-[64px] w-full">
            <h2 className="mali-heading-reveal font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[52px] sm:text-[76px] md:text-[124px] lg:text-[160px] xl:text-[186.2px] leading-[1.02] md:leading-[0.95] tracking-[-0.02em] text-center">
              <span className="block">{renderMaliWords("Tu web,")}</span>
              <span className="block">{renderMaliWords("a tu medida")}</span>
            </h2>

            <div className="flex flex-col items-center gap-[24px] max-w-[595px]">
              <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[20px] sm:text-[24px] md:text-[29.8px] leading-[1.25] md:leading-[35.7px] tracking-[-0.04em] text-center">
                Dale a tu negocio una web con carácter propio. Tus clientes
                eligen y tú recibes el pedido o la cita lista en tu WhatsApp.
                Diseñada para ti, sin plantillas de IA.
              </p>

              <button
                type="button"
                onClick={() => openQuoteWhatsApp()}
                className="mindmarket-pill-btn bg-white min-h-[60px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px] shadow-[0_8px_24px_rgba(44,46,42,0.1)]"
              >
                <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                  Cotizar mi web
                </span>
                <span className="pill-circle bg-[#626cd4] rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                  <img
                    alt=""
                    src={imgArrowRight}
                    className="pill-arrow size-[21.25px]"
                  />
                </span>
              </button>
            </div>

            {/* 3 Bottom Feature Badges */}
            <div className="w-full pt-8 md:pt-[110px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
              <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] md:text-[18.1px] tracking-[-0.72px]">
                Diseño con carácter propio
              </p>
              <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] md:text-[18.1px] tracking-[-0.72px]">
                Control desde tu celular
              </p>
              <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[17px] md:text-[18.1px] tracking-[-0.72px]">
                Pedidos y citas a WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BLOCK 4: STICKY CARD STACK PLANS SECTION
          ("Elige el plan para tu negocio y empieza hoy")
         ===================================================================== */}
      <section
        id="planes"
        className="relative z-[15] w-full bg-[#f5f1e4] rounded-[36px] md:rounded-[50px] py-[80px] md:py-[136px] px-0 md:px-10 lg:px-[100px] xl:px-[138px]"
      >
        <div className="max-w-[1642px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Sticky Column: Headline + Lilac Wavy Underline + Copy */}
          <div className="w-[92%] md:w-full mx-auto lg:col-span-7 lg:sticky lg:top-[110px] flex flex-col gap-[36px] md:gap-[72px] lg:gap-[160px] self-start">
            <div className="mali-heading-reveal relative max-w-[744px]">
              <h2 className="font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[44px] sm:text-[58px] md:text-[72px] xl:text-[80.8px] leading-[1.04] md:leading-[0.96] tracking-[-0.02em]">
                <span className="block">
                  {renderMaliWords("Elige el plan")}
                </span>
                <span className="relative inline-block">
                  {renderMaliWords("para tu negocio")}
                  {/* Lilac Wavy Underline Mask */}
                  <span
                    aria-hidden="true"
                    className="block h-[14px] md:h-[20px] w-[160px] md:w-[260px] bg-[#ebc1ff] mt-1 ml-auto mr-6"
                    style={{
                      maskImage: `url("${imgWaveLilac}")`,
                      WebkitMaskImage: `url("${imgWaveLilac}")`,
                      maskSize: "100% 100%",
                      WebkitMaskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  />
                </span>
                <span className="block">
                  {renderMaliWords("y empieza hoy")}
                </span>
              </h2>
            </div>

            <div className="max-w-[680px]">
              <p className="font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[21px] sm:text-[24px] md:text-[28px] xl:text-[30px] leading-[1.35] md:leading-[40px] tracking-[0.04em]">
                Diseño a medida para negocios en Colombia. Empieza con el abono
                del 50% y elige las funciones que necesitas: WhatsApp, panel
                móvil o cobros 24/7.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Sticky Card Stack (Webify Go, Webify Pro, Webify Max) */}
          <div className="w-[92%] md:w-full mx-auto lg:col-span-5 flex flex-col gap-[120px] md:gap-[160px] pb-[40px]">
            {/* 01 / Webify Go — sticky top: 110px, z-index: 10 */}
            <article
              onClick={() => openQuoteWhatsApp("Webify Go", "$300.000")}
              style={{ position: "sticky", top: "110px", zIndex: 10 }}
              className="plan-stack-card sticky top-[110px] z-[10] w-full bg-white text-[#074679] rounded-[36px] md:rounded-[50px] p-[28px] sm:p-[34px] min-h-[430px] md:min-h-[520px] shadow-[0_18px_48px_rgba(7,70,121,0.09)] border border-[#074679]/10 cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Header Row (Remains visible when next sticky card stacks at +35px) */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-['Inter:Extra_Bold'] font-inter font-extrabold text-[#074679] text-[28px] sm:text-[34px] md:text-[40px] leading-none tracking-[-0.8px]">
                    Webify Go
                  </h3>
                  <div className="bg-[#074679] rounded-full size-[48px] md:size-[63.75px] flex items-center justify-center shrink-0">
                    <img
                      alt=""
                      src={imgIconGo}
                      className="size-[48px] md:size-[63.75px]"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 md:mt-6">
                  <p className="font-['Inter:Regular'] font-inter font-normal text-[#074679] text-[56px] sm:text-[68px] md:text-[80.8px] leading-[1.05] tracking-[-0.06em]">
                    $300.000
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 md:mt-8 font-['Inter:Medium'] font-inter font-medium text-[#074679] text-[21px] sm:text-[24px] md:text-[28px] leading-[1.4] md:leading-[40px] tracking-[-0.8px] space-y-1">
                  <p>Ideal para uñas, barberías y carta fija.</p>
                  <p>Hasta 15 ítems.</p>
                  <p>Pedido o cita a WhatsApp.</p>
                  <p>Cobro con Nequi y Bre-B.</p>
                </div>
              </div>
            </article>

            {/* 02 / Webify Pro — sticky top: 145px, z-index: 20 */}
            <article
              onClick={() => openQuoteWhatsApp("Webify Pro", "$650.000")}
              style={{ position: "sticky", top: "145px", zIndex: 20 }}
              className="plan-stack-card sticky top-[145px] z-[20] w-full bg-[#626cd4] text-white rounded-[36px] md:rounded-[50px] p-[28px] sm:p-[34px] min-h-[430px] md:min-h-[520px] shadow-[0_-10px_35px_rgba(44,46,42,0.14),0_20px_50px_rgba(98,108,212,0.28)] cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-['Inter:Extra_Bold'] font-inter font-extrabold text-white text-[28px] sm:text-[34px] md:text-[40px] leading-none tracking-[-0.8px]">
                    Webify Pro
                  </h3>
                  <div className="bg-white rounded-full size-[48px] md:size-[63.75px] flex items-center justify-center shrink-0">
                    <img
                      alt=""
                      src={imgIconPro}
                      className="size-[48px] md:size-[63.75px]"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 md:mt-6">
                  <p className="font-['Inter:Regular'] font-inter font-normal text-white text-[56px] sm:text-[68px] md:text-[80.8px] leading-[1.05] tracking-[-0.06em]">
                    $650.000
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 md:mt-8 font-['Inter:Medium'] font-inter font-medium text-white text-[21px] sm:text-[24px] md:text-[28px] leading-[1.4] md:leading-[40px] tracking-[-0.8px] space-y-1">
                  <p>Panel Autogestionable desde el celular.</p>
                  <p>Hasta 50 ítems con filtros.</p>
                  <p>Adiciones o elección de especialistas.</p>
                  <p>Envío calculado por barrio.</p>
                </div>
              </div>
            </article>

            {/* 03 / Webify Max — sticky top: 180px, z-index: 30 */}
            <article
              onClick={() => openQuoteWhatsApp("Webify Max", "$1.100.000")}
              style={{ position: "sticky", top: "180px", zIndex: 30 }}
              className="plan-stack-card sticky top-[180px] z-[30] w-full bg-[#ff705d] text-white rounded-[36px] md:rounded-[50px] p-[28px] sm:p-[34px] min-h-[430px] md:min-h-[520px] shadow-[0_-10px_35px_rgba(44,46,42,0.16),0_20px_50px_rgba(255,112,93,0.3)] cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-['Inter:Extra_Bold'] font-inter font-extrabold text-white text-[28px] sm:text-[34px] md:text-[40px] leading-none tracking-[-0.8px]">
                    Webify Max
                  </h3>
                  <div className="bg-white rounded-full size-[48px] md:size-[63.75px] flex items-center justify-center shrink-0">
                    <img
                      alt=""
                      src={imgIconMax}
                      className="size-[48px] md:size-[63.75px]"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 md:mt-6">
                  <p className="font-['Inter:Regular'] font-inter font-normal text-white text-[56px] sm:text-[68px] md:text-[80.8px] leading-[1.05] tracking-[-0.06em]">
                    $1.100.000
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 md:mt-8 font-['Inter:Medium'] font-inter font-medium text-white text-[21px] sm:text-[24px] md:text-[28px] leading-[1.4] md:leading-[40px] tracking-[-0.8px] space-y-1">
                  <p>Todo lo de Pro + pasarela</p>
                  <p>Wompi / Bold / MercadoPago</p>
                  <p>(PSE, Nequi y Addi). Multi-sede,</p>
                  <p>inventario automático y</p>
                  <p>SEO en Google Maps.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BLOCK 5: YELLOW FOOTER ("Hablemos de tu web")
         ===================================================================== */}
      <footer
        id="contacto"
        className="relative z-[20] w-full bg-[#f5e211] rounded-t-[36px] md:rounded-[50px] pt-[72px] md:pt-[136px] pb-[38px] px-5 sm:px-8 md:px-12 lg:px-[100px] xl:px-[138px] flex flex-col justify-between gap-[80px] md:gap-[180px]"
      >
        {/* Top Row: CTA Copy + Navigation Columns */}
        <div className="max-w-[1642px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Copy & "Cotizar mi web" Button */}
          <div className="lg:col-span-6 flex flex-col items-start gap-[26px]">
            <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[20px] sm:text-[22px] md:text-[25px] leading-[1.5] md:leading-[40px] tracking-[-0.8px] max-w-[680px]">
              ¿Tu negocio está en Instagram? Dale una web con identidad propia.
              Cuéntanos qué ofreces y diseñamos tu catálogo o agenda para que
              tus clientes elijan y te escriban a WhatsApp.
            </p>

            <button
              type="button"
              onClick={() => openQuoteWhatsApp()}
              className="mindmarket-pill-btn bg-white min-h-[60px] md:min-h-[63.75px] p-[11.6px] rounded-[10px] inline-flex items-center gap-[8.5px] shadow-[0_8px_24px_rgba(44,46,42,0.08)]"
            >
              <span className="font-['Inter:Medium'] font-inter font-medium text-[17px] md:text-[18.1px] text-black px-[10.6px] whitespace-nowrap">
                Cotizar mi web
              </span>
              <span className="pill-circle bg-[#f5e211] rounded-full size-[42.5px] flex items-center justify-center shrink-0">
                <img
                  alt=""
                  src={imgArrowRight}
                  className="pill-arrow size-[21.25px]"
                />
              </span>
            </button>
          </div>

          {/* Right Navigation Lists */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:justify-items-end">
            <ul className="flex flex-col gap-[8px] font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[20px] md:text-[25px] leading-[1.5] md:leading-[40px] tracking-[1.5px] md:tracking-[2px]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("como-funciona")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("panel-movil")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Panel Móvil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("rubros")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Rubros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("cobros-locales")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Cobros locales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("planes")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Planes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openQuoteWhatsApp()}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  className="hover:opacity-70 transition-opacity text-left"
                >
                  Sobre Webify
                </button>
              </li>
            </ul>

            <ul className="flex flex-col gap-[8px] font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[20px] md:text-[25px] leading-[1.5] md:leading-[44px] tracking-[1.5px] md:tracking-[2px]">
              <li>Contacto</li>
              <li>Ideas para tu web</li>
              <li>Política de privacidad</li>
              <li>Preferencias de cookies</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Giant "Hablemos de tu web" + Colombia Info + Copyright */}
        <div className="max-w-[1642px] w-full mx-auto flex flex-col gap-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Giant Mali Headline */}
            <div className="lg:col-span-7 mali-heading-reveal">
              <h2 className="font-['Mali:Medium'] font-mali font-medium text-[#2c2e2a] text-[56px] sm:text-[84px] md:text-[128px] xl:text-[186.2px] leading-[1.02] md:leading-[0.98] tracking-[-0.02em]">
                <span className="block">{renderMaliWords("Hablemos")}</span>
                <span className="relative inline-block">
                  {renderMaliWords("de tu web")}
                  {/* Indigo Wavy Underline Mask */}
                  <span
                    aria-hidden="true"
                    className="block h-[24px] md:h-[46px] w-[72%] max-w-[669px] bg-[#626cd4] mt-1"
                    style={{
                      maskImage: `url("${imgWaveIndigo}")`,
                      WebkitMaskImage: `url("${imgWaveIndigo}")`,
                      maskSize: "100% 100%",
                      WebkitMaskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  />
                </span>
              </h2>
            </div>

            {/* Colombia & Connection Copy */}
            <div className="lg:col-span-5 flex flex-col gap-[20px] font-['Inter:Medium'] font-inter font-medium text-[19px] sm:text-[22px] md:text-[25px] leading-[1.4] md:leading-[35px]">
              <div>
                <p className="text-[#2c2e2a]">Colombia</p>
                <p className="text-[#2c2e2a]/60">
                  Diseño web para negocios locales. Estudios de uñas, spas,
                  barberías y restaurantes.
                </p>
              </div>

              <div>
                <p className="text-[#2c2e2a]">Tu negocio, conectado</p>
                <p className="text-[#2c2e2a]/60">
                  De Instagram a tu página web. De tu catálogo o agenda al
                  WhatsApp de tu negocio.
                </p>
              </div>

              <p className="text-[#2c2e2a]">Webify.co</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#2c2e2a]/10">
            <p className="font-['Inter:Medium'] font-inter font-medium text-[#2c2e2a] text-[15px] md:text-[17px] leading-[25.5px]">
              © 2026 Webify. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
