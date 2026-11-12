"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const assetPathPrefix = "/figma";
const imgImage = `${assetPathPrefix}/a184e.png`;
const imgImage1 = `${assetPathPrefix}/1db26.png`;
const imgImage2 = `${assetPathPrefix}/18283.png`;
const imgImage3 = `${assetPathPrefix}/21eda.png`;
const imgImage4 = `${assetPathPrefix}/0f547.png`;
const imgImage5 = `${assetPathPrefix}/aba56.png`;
const imgImage6 = `${assetPathPrefix}/3e449.png`;
const imgImage7 = `${assetPathPrefix}/588be.png`;
const imgImage8 = `${assetPathPrefix}/a5001.png`;
const imgImage9 = `${assetPathPrefix}/28534.png`;
const imgImage10 = `${assetPathPrefix}/5e76c.png`;
const imgImage11 = `${assetPathPrefix}/d866f.png`;
const imgImage12 = `${assetPathPrefix}/610b2.png`;
const imgSvg = `${assetPathPrefix}/6b7ac.svg`;
const imgBackground = `${assetPathPrefix}/4a430.svg`;
const imgSvg1 = `${assetPathPrefix}/761bc.svg`;
const imgHeroBackgroundIllustrationSvg = `${assetPathPrefix}/07a8f.svg`;
const imgClipPathGroup = `${assetPathPrefix}/e99cb.svg`;
const imgCHomepageTimeline = `${assetPathPrefix}/e1f21.svg`;
const imgClipPathGroup1 = `${assetPathPrefix}/c980e.svg`;
const imgFolderSvg = `${assetPathPrefix}/9c440.svg`;
const imgFolderShapeSvg = `${assetPathPrefix}/7a44a.svg`;
const imgPlane2Svg = `${assetPathPrefix}/a2993.svg`;
const imgSheetSvg = `${assetPathPrefix}/a02d7.svg`;
const imgComposerShape2Svg = `${assetPathPrefix}/50295.svg`;
const imgClipPathGroup2 = `${assetPathPrefix}/a3898.svg`;
const imgClipPathGroup3 = `${assetPathPrefix}/b8ac4.svg`;
const imgTrumperShapeSvg = `${assetPathPrefix}/df022.svg`;
const imgGamerShapeSvg = `${assetPathPrefix}/d5997.svg`;
const imgJoystickShapeSvg = `${assetPathPrefix}/fffa8.svg`;
const imgSoccerCircleSvg = `${assetPathPrefix}/0b181.svg`;
const imgSoccerShape1Svg = `${assetPathPrefix}/54f06.svg`;
const imgSoccerShape2Svg = `${assetPathPrefix}/5abbb.svg`;
const imgSoccerShape3Svg = `${assetPathPrefix}/a52bc.svg`;
const imgSoccerShape4Svg = `${assetPathPrefix}/79eb7.svg`;
const imgSoccerTraceSvg = `${assetPathPrefix}/5d506.svg`;
const imgSoccerCircle2Svg = `${assetPathPrefix}/57ddb.svg`;
const imgTimelineEndCloud1Svg = `${assetPathPrefix}/56d85.svg`;
const imgTimelineEndCloud2Svg = `${assetPathPrefix}/03e69.svg`;
const imgTimelineEndCloud3Svg = `${assetPathPrefix}/b98c3.svg`;
const imgTimelineEndCloud4Svg = `${assetPathPrefix}/52d06.svg`;
const imgTimelineEndCloud5Svg = `${assetPathPrefix}/08e6f.svg`;
const imgTimelineEndGreenBackSvg = `${assetPathPrefix}/0dca5.svg`;
const imgTimelineEndGreenMiddleSvg = `${assetPathPrefix}/f9f03.svg`;
const imgTimelineEndGreenFrontSvg = `${assetPathPrefix}/99a38.svg`;
const imgClockShapeSvg = `${assetPathPrefix}/fb7d6.svg`;
const imgPlane1Svg = `${assetPathPrefix}/891ca.svg`;
const imgPlaneTraceSvg = `${assetPathPrefix}/d9a65.svg`;
const imgComposerShapeSvg = `${assetPathPrefix}/22db9.svg`;
const imgClipPathGroup4 = `${assetPathPrefix}/39ac6.svg`;
const imgBackground1 = `${assetPathPrefix}/db1c6.svg`;
const imgSvg2 = `${assetPathPrefix}/ca2ba.svg`;
const imgSvg3 = `${assetPathPrefix}/62e87.svg`;
const imgSvg4 = `${assetPathPrefix}/b2ff8.svg`;
const imgSvg5 = `${assetPathPrefix}/046de.svg`;
const imgSvg6 = `${assetPathPrefix}/725c8.svg`;
const imgBackground2 = `${assetPathPrefix}/d530d.svg`;
const imgLayer1 = `${assetPathPrefix}/0d4e4.svg`;

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 13069.056;

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
  const lenisRef = useRef<Lenis | null>(null);
  const [canvasScale, setCanvasScale] = useState<number>(1);
  const [scaleReady, setScaleReady] = useState<boolean>(false);

  useEffect(() => {
    const updateScale = () => {
      const vw = document.documentElement.clientWidth || window.innerWidth;
      const nextScale = vw / DESIGN_WIDTH;
      setCanvasScale(nextScale);
      setScaleReady(true);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (!scaleReady) return;

    gsap.registerPlugin(ScrollTrigger);

    const docTop = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;
    const docBottom = (el: HTMLElement) =>
      el.getBoundingClientRect().bottom + window.scrollY;

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
      // 1. Card Stack Scale Effect on Major Rounded Blocks (scale: 0.96 as next section overlaps)
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
              start: () => Math.max(0, docBottom(block) - window.innerHeight),
              end: () => Math.max(1, docBottom(block)),
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
              opacity: 0.18,
              ease: "none",
              scrollTrigger: {
                trigger: block,
                start: () => Math.max(0, docBottom(block) - window.innerHeight),
                end: () => Math.max(1, docBottom(block)),
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      // Next section subtle upward overlap as it enters
      const overlapSections = gsap.utils.toArray<HTMLElement>(".card-stack-overlap");
      overlapSections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 42 },
          {
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: () => Math.max(0, docTop(section) - window.innerHeight),
              end: () => Math.max(1, docTop(section) - window.innerHeight * 0.35),
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 2. Multi-layer Parallax & Continuous Float on Central Hero Illustration
      const heroStage = document.querySelector<HTMLElement>(".hero-central-stage");
      if (heroStage) {
        gsap.fromTo(
          ".hero-central-characters",
          { yPercent: 0 },
          {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: heroStage,
              start: 0,
              end: () => Math.max(1, docBottom(heroStage)),
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          }
        );

        gsap.fromTo(
          ".hero-central-bg-clouds",
          { yPercent: 0 },
          {
            yPercent: -22,
            ease: "none",
            scrollTrigger: {
              trigger: heroStage,
              start: 0,
              end: () => Math.max(1, docBottom(heroStage)),
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );

        gsap.fromTo(
          ".hero-central-blob",
          { yPercent: 0 },
          {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: heroStage,
              start: 0,
              end: () => Math.max(1, docBottom(heroStage)),
              scrub: 0.9,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Continuous organic float on the central hero characters and clouds
      gsap.to(".hero-central-float", {
        y: -14,
        rotation: -0.8,
        duration: 3.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".hero-clouds-float", {
        y: 9,
        x: 6,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // 3. Multi-layer Parallax & Continuous Float on Secondary Illustrations and Decorative Vectors
      const secondaryChars = gsap.utils.toArray<HTMLElement>(".parallax-character");
      secondaryChars.forEach((el, idx) => {
        const shift = idx % 2 === 0 ? 36 : 52;
        gsap.fromTo(
          el,
          { y: shift },
          {
            y: -shift,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: () => Math.max(0, docTop(el) - window.innerHeight),
              end: () => Math.max(1, docBottom(el)),
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          }
        );

        const innerImg = el.querySelector("img");
        if (innerImg) {
          gsap.to(innerImg, {
            y: idx % 2 === 0 ? -10 : 10,
            duration: 2.7 + (idx % 4) * 0.35,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      });

      const decorVectors = gsap.utils.toArray<HTMLElement>(".parallax-decor");
      decorVectors.forEach((el, idx) => {
        const speed = idx % 2 === 0 ? -16 : -11;
        gsap.fromTo(
          el,
          { yPercent: 10 },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: () => Math.max(0, docTop(el) - window.innerHeight),
              end: () => Math.max(1, docBottom(el)),
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Pricing plan cards stack scale when next card approaches
      const planCards = gsap.utils.toArray<HTMLElement>(".plan-stack-card");
      planCards.forEach((card, index) => {
        if (index < planCards.length - 1) {
          const nextCard = planCards[index + 1];
          gsap.to(card, {
            scale: 0.96,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: () => Math.max(0, docTop(nextCard) - window.innerHeight * 0.8),
              end: () => Math.max(1, docTop(nextCard) - window.innerHeight * 0.3),
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        }
      });

      // Timeline feature cards & Pricing plan cards organic entrance via IntersectionObserver
      const entranceCards = gsap.utils.toArray<HTMLElement>(
        ".timeline-feature-card, .plan-stack-card"
      );
      if (typeof IntersectionObserver !== "undefined" && entranceCards.length) {
        const cardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const card = entry.target as HTMLElement;
              if (entry.isIntersecting) {
                gsap.fromTo(
                  card,
                  { y: 42, opacity: 0.85 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    overwrite: "auto",
                  }
                );
              }
            });
          },
          { threshold: 0.08 }
        );
        entranceCards.forEach((c) => cardObserver.observe(c));
        observers.push(cardObserver);
      }

      // 4. Organic Mali Headlines Word-by-Word Reveal (elastic bounce back.out(1.4))
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
  }, [scaleReady, canvasScale]);

  const scrollToY = (designY: number) => {
    const targetY = designY * canvasScale;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetY, { duration: 1.25 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const openQuoteWhatsApp = (planName?: string, price?: string) => {
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
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden bg-[#f5f1e4] select-none md:select-auto"
      style={{ height: `${DESIGN_HEIGHT * canvasScale}px` }}
    >
      {/* Fixed Floating Top Navigation Bar scaled to viewport */}
      <div
        className="fixed left-0 top-0 z-50 pointer-events-none"
        style={{
          width: `${DESIGN_WIDTH}px`,
          transform: `scale(${canvasScale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="absolute content-stretch flex gap-[20px] items-start left-[242.33px] right-[242.33px] top-[17px] pointer-events-auto"
          data-node-id="2:802"
          data-name="Nav"
        >
          <div
            className="bg-white content-stretch flex flex-[1_0_0] h-[68px] items-center justify-between min-w-px pl-[17px] pr-[10.63px] relative rounded-[10px] shadow-[0_8px_30px_rgba(44,46,42,0.08)]"
            data-node-id="2:803"
            data-name="Background"
          >
            <button
              type="button"
              onClick={() => scrollToY(0)}
              className="content-stretch flex items-center relative shrink-0 text-left cursor-pointer"
              data-node-id="2:804"
              data-name="Link"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="2:815"
                data-name="Container"
              >
                <div
                  className="h-[20.34px] relative shrink-0 w-[136px]"
                  data-node-id="2:816"
                  data-name="SVG"
                >
                  <p
                    className="[word-break:break-word] absolute font-['Mali:Regular'] font-mali leading-[normal] left-0 not-italic text-[#2c2e2a] text-[35px] top-[-12px] whitespace-nowrap"
                    data-node-id="5:2"
                  >
                    Webify
                  </p>
                </div>
              </div>
            </button>
            <div
              className="content-stretch flex gap-[4.2px] h-full items-start relative shrink-0"
              data-node-id="2:818"
              data-name="List - Main items (in desktop bar menu)"
            >
              <div
                className="content-stretch flex h-full items-center relative shrink-0"
                data-node-id="2:819"
                data-name="Item"
              >
                <button
                  type="button"
                  onClick={() => scrollToY(2400)}
                  className="mindmarket-nav-item content-stretch flex items-center justify-center min-h-[46.75px] pb-[12.1px] pt-[12.07px] px-[17px] relative rounded-[50px] shrink-0"
                  data-node-id="2:820"
                  data-name="Link"
                >
                  <div
                    className="absolute inset-[4.67px_11.89px_4.68px_10.35px] flex items-center justify-center"
                    data-node-id="2:821"
                  >
                    <div
                      className="nav-pill-bg bg-[#f5f1e4] opacity-0 relative rounded-[50px] size-full"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="h-[22.58px] relative shrink-0 w-[123px]"
                    data-node-id="2:822"
                    data-name="Container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[18.1px] top-[10.5px] tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:823"
                    >
                      <p className="leading-[22.58px]">Cómo funciona</p>
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="content-stretch flex h-full items-center relative shrink-0"
                data-node-id="2:824"
                data-name="Item"
              >
                <button
                  type="button"
                  onClick={() => scrollToY(6000)}
                  className="mindmarket-nav-item content-stretch flex gap-[8.5px] items-center justify-center min-h-[46.75px] pb-[10.63px] pt-[10.62px] px-[17px] relative rounded-[50px] shrink-0"
                  data-node-id="2:825"
                  data-name="Link"
                >
                  <div
                    className="absolute inset-[4.67px_17.67px_4.68px_15.87px] flex items-center justify-center"
                    data-node-id="2:826"
                  >
                    <div
                      className="nav-pill-bg bg-[#f5f1e4] opacity-0 relative rounded-[50px] size-full"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="h-[22.58px] relative shrink-0 w-[58px]"
                    data-node-id="2:827"
                    data-name="Container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[18.1px] top-[10.5px] tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:828"
                    >
                      <p className="leading-[22.58px]">Rubros</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pb-[7.14px] pt-[8.36px] relative shrink-0"
                    data-node-id="2:829"
                    data-name="Container"
                  >
                    <div
                      className="nav-chevron relative shrink-0 size-[10px]"
                      data-node-id="2:830"
                      data-name="SVG"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgSvg5}
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="content-stretch flex h-full items-center relative shrink-0"
                data-node-id="2:832"
                data-name="Item"
              >
                <button
                  type="button"
                  onClick={() => scrollToY(3300)}
                  className="mindmarket-nav-item content-stretch flex gap-[8.51px] items-center justify-center min-h-[46.75px] pb-[10.63px] pt-[10.62px] px-[17px] relative rounded-[50px] shrink-0"
                  data-node-id="2:833"
                  data-name="Link"
                >
                  <div
                    className="absolute inset-[4.67px_13.15px_4.68px_11.37px] flex items-center justify-center"
                    data-node-id="2:834"
                  >
                    <div
                      className="nav-pill-bg bg-[#f5f1e4] opacity-0 relative rounded-[50px] size-full"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="h-[22.58px] relative shrink-0 w-[92px]"
                    data-node-id="2:835"
                    data-name="Container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[18.1px] top-[10.5px] tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:836"
                    >
                      <p className="leading-[22.58px]">Panel Móvil</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pb-[7.14px] pt-[8.36px] relative shrink-0"
                    data-node-id="2:837"
                    data-name="Container"
                  >
                    <div
                      className="nav-chevron relative shrink-0 size-[10px]"
                      data-node-id="2:838"
                      data-name="SVG"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgSvg5}
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="content-stretch flex h-full items-center relative shrink-0"
                data-node-id="2:840"
                data-name="Item"
              >
                <button
                  type="button"
                  onClick={() => scrollToY(9403)}
                  className="mindmarket-nav-item content-stretch flex gap-[8.49px] items-center justify-center min-h-[46.75px] pb-[10.63px] pt-[10.62px] px-[17px] relative rounded-[50px] shrink-0"
                  data-node-id="2:841"
                  data-name="Link"
                >
                  <div
                    className="absolute inset-[4.67px_14.63px_4.68px_11.98px] flex items-center justify-center"
                    data-node-id="2:842"
                  >
                    <div
                      className="nav-pill-bg bg-[#f5f1e4] opacity-0 relative rounded-[50px] size-full"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="h-[22.58px] relative shrink-0 w-[54px]"
                    data-node-id="2:843"
                    data-name="Container"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[18.1px] top-[10.5px] tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:844"
                    >
                      <p className="leading-[22.58px]">Planes</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pb-[7.14px] pt-[8.36px] relative shrink-0"
                    data-node-id="2:845"
                    data-name="Container"
                  >
                    <div
                      className="nav-chevron relative shrink-0 size-[10px]"
                      data-node-id="2:846"
                      data-name="SVG"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgSvg5}
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="content-stretch flex flex-col h-full items-start justify-center pl-[17px] relative shrink-0"
                data-node-id="2:853"
                data-name="Item:margin"
              >
                <div
                  className="content-stretch flex flex-[1_0_0] items-center min-h-px relative"
                  data-node-id="2:854"
                  data-name="Item"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="2:855"
                    data-name="Container"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToY(11869)}
                      className="mindmarket-pill-btn content-stretch flex items-center justify-center relative shrink-0 size-[42.5px]"
                      data-node-id="2:856"
                      data-name="Button"
                    >
                      <div
                        className="pill-circle absolute bg-[#626cd4] inset-0 rounded-[42.5px]"
                        data-node-id="2:857"
                        data-name="Background"
                      />
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 size-[22px]"
                        data-node-id="2:858"
                        data-name="Container"
                      >
                        <div
                          className="relative shrink-0 size-[22px]"
                          data-node-id="2:859"
                          data-name="SVG"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgSvg6}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
            data-node-id="2:861"
            data-name="Container"
          >
            <div
              className="h-[68px] min-h-[68px] relative shrink-0 w-[223px]"
              data-node-id="2:862"
              data-name="c-button-quote"
            >
              <button
                type="button"
                onClick={() => openQuoteWhatsApp()}
                className="mindmarket-pill-btn absolute border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.5px] items-center left-0 min-h-[68px] px-[11.625px] py-[14px] rounded-[10px] top-0 shadow-[0_8px_30px_rgba(44,46,42,0.08)]"
                data-node-id="2:865"
                data-name="Link"
              >
                <div
                  className="absolute bg-white h-[66px] left-0 rounded-[10px] top-0 w-[221px]"
                  data-node-id="2:866"
                  data-name="Background"
                />
                <div
                  className="relative shrink-0"
                  data-node-id="2:867"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                      data-node-id="2:868"
                    >
                      <p className="leading-[27px]">Cotizar mi web</p>
                    </div>
                  </div>
                </div>
                <div
                  className="pill-circle bg-[#626cd4] relative rounded-[42.5px] shrink-0 size-[40px]"
                  data-node-id="5:13"
                  data-name="Background"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="5:14"
                      data-name="Container"
                    >
                      <div
                        className="pill-arrow relative shrink-0 size-[21.25px]"
                        data-node-id="5:15"
                        data-name="SVG"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgSvg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 1920px Figma Coordinate Stage scaled proportionally */}
      <div
        className="bg-white content-stretch flex flex-col items-start absolute top-0 left-0"
        data-node-id="2:2"
        data-name="Html → Body"
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${canvasScale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="bg-[#f5f1e4] content-stretch flex flex-col items-start relative shrink-0 w-full"
          data-node-id="2:3"
          data-name="Main"
        >
          <div
            className="h-[13069.056px] relative shrink-0 w-full"
            data-node-id="2:4"
            data-name="Container"
          >
            {/* BLOCK 1: HERO INDIGO */}
            <div
              className="card-stack-block absolute content-stretch flex flex-col items-start left-0 min-h-[1200px] right-0 top-0"
              data-node-id="2:5"
              data-name="Container"
            >
              <div
                className="absolute bg-[#626cd4] content-stretch flex flex-col h-[2400px] items-start left-0 top-0 w-[1920px]"
                data-node-id="2:6"
                data-name="Background"
              >
                <div
                  className="card-stack-overlay absolute bg-[#2c2e2a] h-[2400px] left-0 opacity-0 top-0 w-[1920px] pointer-events-none"
                  data-node-id="2:7"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex items-center justify-center min-h-[1200px] pb-[491.42px] pt-[267.01px] px-[20px] relative shrink-0 w-full"
                  data-node-id="2:8"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[1503.22px]"
                    data-node-id="2:9"
                    data-name="Container"
                  >
                    <div
                      className="mali-heading-reveal content-stretch flex flex-col items-center pb-[0.88px] relative shrink-0 w-full"
                      data-node-id="2:10"
                      data-name="Heading 1"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[186.2px] text-center tracking-[-3.724px] w-[1503.22px]"
                        data-node-id="2:11"
                      >
                        <p className="leading-[176.93px] mb-0">
                          {renderMaliWords("Diseño web")}
                        </p>
                        <p className="leading-[176.93px]">
                          {renderMaliWords("hecho a medida")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-center pb-[0.69px] relative shrink-0 w-full"
                      data-node-id="2:12"
                      data-name="Heading 2"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[29.8px] text-center tracking-[-1.785px] w-[1503.22px]"
                        data-node-id="2:13"
                      >
                        <p className="leading-[35.7px]">
                          De Instagram a tu WhatsApp, sin plantillas de IA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#626cd4] content-stretch flex flex-col items-start opacity-0 pointer-events-none relative shrink-0 w-full"
                data-node-id="2:14"
                data-name="Background"
              >
                <div
                  className="content-stretch flex items-center justify-center min-h-[1200px] pb-[491.42px] pt-[267.01px] px-[20px] relative shrink-0 w-full"
                  data-node-id="2:15"
                  data-name="Container"
                />
              </div>
            </div>

            {/* BLOCK 3: DELUXE CALLOUT INDIGO ("Tu web, a tu medida") */}
            <div
              className="card-stack-block card-stack-overlap absolute bg-[#626cd4] content-stretch flex flex-col items-start left-0 pb-[170px] pt-[168.96px] px-[138.75px] right-0 rounded-bl-[50px] rounded-br-[50px] top-[8112.66px]"
              data-node-id="2:22"
              data-name="c-deluxe-callout"
            >
              {/* Subtle top extension so there is zero gap behind timeline green hills */}
              <div className="absolute left-0 right-0 -top-[45px] h-[50px] bg-[#626cd4] pointer-events-none" />
              <div className="card-stack-overlay absolute inset-0 rounded-bl-[50px] rounded-br-[50px] bg-[#2c2e2a] opacity-0 pointer-events-none" />

              <div
                className="content-stretch flex flex-col gap-[84px] items-start relative shrink-0 w-full z-[4]"
                data-node-id="2:23"
                data-name="Container"
              >
                <div
                  className="mali-heading-reveal content-stretch flex flex-col items-center pb-[0.88px] relative shrink-0 w-full"
                  data-node-id="2:24"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[186.2px] text-center tracking-[-3.724px] whitespace-nowrap"
                    data-node-id="2:25"
                  >
                    <p className="leading-[176.93px] mb-0">
                      {renderMaliWords("Tu web,")}
                    </p>
                    <p className="leading-[176.93px]">
                      {renderMaliWords("a tu medida")}
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[25.5px] items-center relative shrink-0 w-full"
                  data-node-id="2:26"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-center max-w-[595px] pb-[0.72px] pl-[46.59px] pr-[46.61px] relative shrink-0"
                    data-node-id="2:27"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[29.8px] text-center tracking-[-1.785px] w-[595px]"
                      data-node-id="2:28"
                    >
                      <p className="leading-[35.7px] mb-0">
                        Dale a tu negocio una web con carácter propio.
                      </p>
                      <p className="leading-[35.7px] mb-0">
                        Tus clientes eligen y tú recibes el pedido
                      </p>
                      <p className="leading-[35.7px] mb-0">
                        o la cita lista en tu WhatsApp.
                      </p>
                      <p className="leading-[35.7px]">
                        Diseñada para ti, sin plantillas de IA.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openQuoteWhatsApp()}
                    className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.49px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                    data-node-id="2:29"
                    data-name="Link"
                  >
                    <div
                      className="absolute bg-white h-[63.75px] left-0 rounded-[10px] top-0 w-[223.49px]"
                      data-node-id="2:30"
                      data-name="Background"
                    />
                    <div
                      className="relative shrink-0"
                      data-node-id="2:31"
                      data-name="Container"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                        <div
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                          data-node-id="2:32"
                        >
                          <p className="leading-[27px]">Cotizar mi web</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="pill-circle bg-[#626cd4] relative rounded-[42.5px] shrink-0 size-[42.5px]"
                      data-node-id="2:33"
                      data-name="Background"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="2:34"
                          data-name="Container"
                        >
                          <div
                            className="pill-arrow relative shrink-0 size-[21.25px]"
                            data-node-id="2:35"
                            data-name="SVG"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgSvg}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div
                  className="h-[193.58px] relative shrink-0 w-full"
                  data-node-id="2:37"
                  data-name="Container"
                >
                  <div
                    className="absolute content-stretch flex flex-col items-center left-0 pb-[0.58px] right-[1108.34px] top-[170px]"
                    data-node-id="2:38"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[18.1px] text-center tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:39"
                    >
                      <p className="leading-[22.58px]">
                        Diseño con carácter propio
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex flex-col items-center left-[554.16px] pb-[0.58px] right-[554.17px] top-[170px]"
                    data-node-id="2:40"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[18.1px] text-center tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:41"
                    >
                      <p className="leading-[22.58px]">
                        Control desde tu celular
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex flex-col items-center left-[1108.33px] pb-[0.58px] right-0 top-[170px]"
                    data-node-id="2:42"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[18.1px] text-center tracking-[-0.722px] whitespace-nowrap"
                      data-node-id="2:43"
                    >
                      <p className="leading-[22.58px]">
                        Pedidos y citas a WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col inset-[-1200px_44%_-0.03px_0] items-start pointer-events-none z-[2]"
                data-node-id="2:44"
                data-name="Container"
              >
                <div
                  className="h-[1200px] relative shrink-0 w-full"
                  data-node-id="2:45"
                  data-name="Container"
                >
                  <div
                    className="parallax-character absolute bottom-[-852.97px] content-stretch flex flex-col items-start left-0 pt-[852.97px]"
                    data-node-id="2:46"
                    data-name="c-rive"
                  >
                    <div
                      className="aspect-[1979/1570] w-[1075.19px] content-stretch flex flex-col items-start justify-center relative shrink-0"
                      data-node-id="2:47"
                      data-name="Container"
                    >
                      <div
                        className="h-[852.97px] relative shrink-0 w-full"
                        data-node-id="2:48"
                        data-name="image"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt="Ilustración personaje Webify"
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: CREAM SECTION + CENTRAL HERO ILLUSTRATION + TIMELINE */}
            <div
              className="card-stack-block card-stack-overlap absolute bg-[#f5f1e4] content-stretch flex flex-col isolate items-start left-0 right-0 rounded-tl-[50px] rounded-tr-[50px] top-[1200px] z-[10]"
              data-node-id="2:393"
              data-name="Background"
            >
              <div
                className="content-stretch flex flex-col items-start mb-[-91.19px] pb-[456.81px] pl-[138.75px] pr-[1037.5px] pt-[137.625px] relative shrink-0 w-full z-[2]"
                data-node-id="2:394"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[38.25px] items-start max-w-[743.75px] relative shrink-0 w-full z-[3]"
                  data-node-id="2:395"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full"
                    data-node-id="2:396"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[29.8px] tracking-[-1.785px] w-full"
                      data-node-id="2:397"
                    >
                      <p className="leading-[35.7px]">
                        En Webify diseñamos páginas con carácter propio para
                        estudios de uñas, spas, barberías y restaurantes en
                        Colombia. Tus clientes eligen servicios o platos y tú
                        recibes el pedido o la cita lista en tu WhatsApp.
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="2:398"
                    data-name="Container"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToY(9403)}
                      className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.49px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                      data-node-id="2:399"
                      data-name="Link"
                    >
                      <div
                        className="absolute bg-white h-[63.75px] left-0 rounded-[10px] top-0 w-[330.49px]"
                        data-node-id="2:400"
                        data-name="Background"
                      />
                      <div
                        className="relative shrink-0"
                        data-node-id="2:401"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                            data-node-id="2:402"
                          >
                            <p className="leading-[27px]">
                              Ver planes desde $150.000
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pill-circle bg-[#626cd4] relative rounded-[42.5px] shrink-0 size-[42.5px]"
                        data-node-id="2:403"
                        data-name="Background"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="2:404"
                            data-name="Container"
                          >
                            <div
                              className="pill-arrow relative shrink-0 size-[21.25px]"
                              data-node-id="2:405"
                              data-name="SVG"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgSvg}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* CENTRAL OVERLAPPING HERO ILLUSTRATION (Bridging Hero Indigo & Cream Section) */}
                <div
                  className="hero-central-stage absolute content-stretch flex flex-col inset-[-1200px_0_0_0] items-start pointer-events-none"
                  data-node-id="2:407"
                  data-name="Container"
                >
                  <div
                    className="h-[1200px] relative shrink-0 w-full"
                    data-node-id="2:408"
                    data-name="Container"
                  >
                    <div
                      className="-translate-x-1/2 absolute bottom-[-238.53px] flex h-[717.58px] items-center justify-center left-1/2 w-[979.88px]"
                      data-node-id="2:409"
                    >
                      <div className="flex-none scale-90">
                        <div
                          className="content-stretch flex flex-col items-start pt-[19.2px] relative"
                          data-name="Container"
                        >
                          <div
                            className="hero-central-blob absolute bottom-[-231.19px] h-[608.5px] right-[141.53px] w-[849.222px]"
                            data-node-id="2:410"
                            data-name="SVG"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgSvg1}
                            />
                          </div>
                          <div
                            className="hero-central-blob absolute bottom-[-231.19px] h-[608.5px] right-[141.53px] w-[849.222px]"
                            data-node-id="2:412"
                            data-name="SVG"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgSvg1}
                            />
                          </div>
                          <div
                            className="hero-central-bg-clouds absolute content-stretch flex flex-col h-[569.144px] items-center justify-center left-[21.77px] max-w-[1920px] overflow-clip top-0 w-[1023.422px]"
                            data-node-id="2:414"
                            data-name="hero-background-illustration.svg"
                          >
                            <div
                              className="hero-clouds-float h-[569.144px] relative shrink-0 w-[1023.406px]"
                              data-node-id="2:415"
                              data-name="hero-background-illustration.svg"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgHeroBackgroundIllustrationSvg}
                              />
                            </div>
                          </div>
                          <div
                            className="hero-central-characters aspect-[1430/1022] w-[1088.76px] content-stretch flex flex-col items-start justify-center relative shrink-0"
                            data-node-id="2:424"
                            data-name="c-rive"
                          >
                            <div
                              className="hero-central-float h-[778.111px] relative shrink-0 w-full"
                              data-node-id="2:425"
                              data-name="image"
                            >
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img
                                  alt="Ilustración central Webify"
                                  className="absolute left-0 max-w-none size-full top-0"
                                  src={imgImage1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TIMELINE STAGE INSIDE CREAM SECTION */}
              <div
                className="h-[6125.84px] overflow-clip relative shrink-0 w-full z-[1]"
                data-node-id="2:426"
                data-name="Container"
              >
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[33.02%_84.5%_65.23%_9%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:427"
                  data-name="music-note-1.svg"
                >
                  <div
                    className="h-[107.129px] overflow-clip relative shrink-0 w-[124.8px]"
                    data-node-id="2:428"
                    data-name="music-note-1.svg"
                  >
                    <div
                      className="absolute inset-[0_0.28%_0_0.61%]"
                      data-node-id="2:429"
                      data-name="Clip path group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgClipPathGroup}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute aspect-[1944.199951171875/6151.5] left-[-38.39px] right-[-38.39px] top-0 pointer-events-none"
                  data-node-id="2:441"
                  data-name="c-homepage-timeline"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgCHomepageTimeline}
                  />
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col items-start justify-center left-[-38.39px] size-[556.8px] top-[2174.67px]"
                  data-node-id="2:446"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:447"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage2}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[829.7px] items-start justify-center right-0 top-[3246.69px] w-[652.8px]"
                  data-node-id="2:448"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:449"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage3}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[871.95px] items-start justify-center left-[-67.19px] top-[3859.28px] w-[1084.8px]"
                  data-node-id="2:450"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:451"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage4}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[5.98%_77%_90.78%_13%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:452"
                  data-name="clock.svg"
                >
                  <div
                    className="h-[198.61px] overflow-clip relative shrink-0 w-[191.99px]"
                    data-node-id="2:453"
                    data-name="clock.svg"
                  >
                    <div
                      className="absolute inset-[0.2%_0_0.28%_0]"
                      data-node-id="2:454"
                      data-name="Clip path group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgClipPathGroup1}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[21.61%_48%_75.23%_40%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:467"
                  data-name="folder.svg"
                >
                  <div
                    className="h-[193.48px] relative shrink-0 w-[230.376px]"
                    data-node-id="2:468"
                    data-name="folder.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgFolderSvg}
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[15%_56%_73.16%_19%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:473"
                  data-name="folder-shape.svg"
                >
                  <div
                    className="h-[725.55px] relative shrink-0 w-[479.996px]"
                    data-node-id="2:474"
                    data-name="folder-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgFolderShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute flex inset-[19.45%_43.5%_78.42%_47.67%] items-center justify-center max-w-[1920px]"
                  data-node-id="2:479"
                >
                  <div className="-rotate-[10deg] flex-none">
                    <div
                      className="content-stretch flex flex-col items-center justify-center overflow-clip relative size-full"
                      data-name="plane-2.svg"
                    >
                      <div
                        className="h-[105.27px] relative shrink-0 w-[153.59px]"
                        data-node-id="2:480"
                        data-name="plane-2.svg"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgPlane2Svg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[19.02%_58%_78.52%_32%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:484"
                  data-name="sheet.svg"
                >
                  <div
                    className="h-[150.53px] relative shrink-0 w-[191.993px]"
                    data-node-id="2:485"
                    data-name="sheet.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSheetSvg}
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[26%_9%_50.92%_53%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:489"
                  data-name="composer-shape-2.svg"
                >
                  <div
                    className="h-[1413.73px] relative shrink-0 w-[729.59px]"
                    data-node-id="2:490"
                    data-name="composer-shape-2.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgComposerShape2Svg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[36.43%_45%_60.89%_48%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:493"
                  data-name="music-note-2.svg"
                >
                  <div
                    className="h-[163.937px] overflow-clip relative shrink-0 w-[134.39px]"
                    data-node-id="2:494"
                    data-name="music-note-2.svg"
                  >
                    <div
                      className="absolute inset-[0_0.45%_0.08%_0.49%]"
                      data-node-id="2:495"
                      data-name="Clip path group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgClipPathGroup2}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[39.06%_40.7%_58.33%_52%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:503"
                  data-name="music-note-3.svg"
                >
                  <div
                    className="h-[159.78px] overflow-clip relative shrink-0 w-[140.142px]"
                    data-node-id="2:504"
                    data-name="music-note-3.svg"
                  >
                    <div
                      className="absolute inset-[0_0.14%_0.51%_0]"
                      data-node-id="2:505"
                      data-name="Clip path group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgClipPathGroup3}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[42%_60%_57.09%_28%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:513"
                  data-name="trumper-shape.svg"
                >
                  <div
                    className="h-[55.875px] relative shrink-0 w-[230.39px]"
                    data-node-id="2:514"
                    data-name="trumper-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgTrumperShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[47%_86%_45.99%_4%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:516"
                  data-name="gamer-shape.svg"
                >
                  <div
                    className="h-[429.52px] relative shrink-0 w-[191.997px]"
                    data-node-id="2:517"
                    data-name="gamer-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGamerShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[55%_36%_41.67%_53%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:520"
                  data-name="joystick-shape.svg"
                >
                  <div
                    className="h-[204.05px] relative shrink-0 w-[211.178px]"
                    data-node-id="2:521"
                    data-name="joystick-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgJoystickShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[63.06%_18%_36%_79%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:525"
                  data-name="soccer-circle.svg"
                >
                  <div
                    className="relative shrink-0 size-[57.59px]"
                    data-node-id="2:526"
                    data-name="soccer-circle.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerCircleSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[60%_33%_38.85%_65.5%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:530"
                  data-name="soccer-shape-1.svg"
                >
                  <div
                    className="h-[70.59px] relative shrink-0 w-[28.793px]"
                    data-node-id="2:531"
                    data-name="soccer-shape-1.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerShape1Svg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[62.63%_44%_35.05%_48%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:533"
                  data-name="soccer-shape-2.svg"
                >
                  <div
                    className="h-[142.06px] relative shrink-0 w-[153.578px]"
                    data-node-id="2:534"
                    data-name="soccer-shape-2.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerShape2Svg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[66.5%_41%_30.98%_52%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:536"
                  data-name="soccer-shape-3.svg"
                >
                  <div
                    className="h-[154.11px] relative shrink-0 w-[134.39px]"
                    data-node-id="2:537"
                    data-name="soccer-shape-3.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerShape3Svg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[76%_62%_21.63%_26%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:539"
                  data-name="soccer-shape-4.svg"
                >
                  <div
                    className="h-[145.17px] relative shrink-0 w-[230.378px]"
                    data-node-id="2:540"
                    data-name="soccer-shape-4.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerShape4Svg}
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[69%_49%_25.04%_33%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:542"
                  data-name="soccer-trace.svg"
                >
                  <div
                    className="h-[365.02px] relative shrink-0 w-[345.586px]"
                    data-node-id="2:543"
                    data-name="soccer-trace.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerTraceSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[68.04%_80%_31.2%_19%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:546"
                  data-name="soccer-circle-2.svg"
                >
                  <div
                    className="h-[46.41px] relative shrink-0 w-[19.183px]"
                    data-node-id="2:547"
                    data-name="soccer-circle-2.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSoccerCircle2Svg}
                    />
                  </div>
                </div>

                {/* TIMELINE END CLOUDS, RUNNERS/CYCLIST & GREEN HILLS */}
                <div
                  className="absolute bottom-[-1.01px] h-[1152px] left-0 right-0"
                  data-node-id="2:549"
                  data-name="Container"
                >
                  <div
                    className="parallax-decor absolute content-stretch flex flex-col items-center justify-center max-w-[1920px] overflow-clip right-[584px] top-0 w-[633.59px]"
                    data-node-id="2:550"
                    data-name="timeline_end_cloud_1.svg"
                  >
                    <div
                      className="h-[127.45px] relative shrink-0 w-[633.574px]"
                      data-node-id="2:551"
                      data-name="timeline_end_cloud_1.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndCloud1Svg}
                      />
                    </div>
                  </div>
                  <div
                    className="parallax-decor absolute content-stretch flex flex-col h-[45.08px] items-center justify-center left-[45.59px] max-w-[1920px] overflow-clip top-[230.39px] w-[192px]"
                    data-node-id="2:553"
                    data-name="timeline_end_cloud_2.svg"
                  >
                    <div
                      className="h-[45.08px] relative shrink-0 w-[191.979px]"
                      data-node-id="2:554"
                      data-name="timeline_end_cloud_2.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndCloud2Svg}
                      />
                    </div>
                  </div>
                  <div
                    className="parallax-decor absolute content-stretch flex flex-col h-[69.67px] items-center justify-center left-[-215.19px] max-w-[1920px] overflow-clip top-[345.59px] w-[345.59px]"
                    data-node-id="2:556"
                    data-name="timeline_end_cloud_3.svg"
                  >
                    <div
                      className="h-[69.67px] relative shrink-0 w-[345.563px]"
                      data-node-id="2:557"
                      data-name="timeline_end_cloud_3.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndCloud3Svg}
                      />
                    </div>
                  </div>
                  <div
                    className="parallax-decor absolute content-stretch flex flex-col h-[35.5px] items-center justify-center max-w-[1920px] overflow-clip right-[261.61px] top-[529.9px] w-[153.59px]"
                    data-node-id="2:559"
                    data-name="timeline_end_cloud_4.svg"
                  >
                    <div
                      className="h-[35.5px] relative shrink-0 w-[153.538px]"
                      data-node-id="2:560"
                      data-name="timeline_end_cloud_4.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndCloud4Svg}
                      />
                    </div>
                  </div>
                  <div
                    className="parallax-decor absolute content-stretch flex flex-col h-[30.22px] items-center justify-center left-[241.59px] max-w-[1920px] overflow-clip top-[564.47px] w-[96px]"
                    data-node-id="2:562"
                    data-name="timeline_end_cloud_5.svg"
                  >
                    <div
                      className="h-[30.22px] relative shrink-0 w-[95.993px]"
                      data-node-id="2:563"
                      data-name="timeline_end_cloud_5.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndCloud5Svg}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[-295.18px] content-stretch flex flex-col h-[548.56px] items-center justify-center left-0 overflow-clip w-[1920px]"
                    data-node-id="2:565"
                    data-name="timeline-end-green-back.svg"
                  >
                    <div
                      className="h-[548.56px] relative shrink-0 w-[1919.96px]"
                      data-node-id="2:566"
                      data-name="timeline-end-green-back.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndGreenBackSvg}
                      />
                    </div>
                  </div>
                  <div
                    className="parallax-character absolute bottom-[23.03px] content-stretch flex flex-col h-[925.97px] items-start justify-center right-[-163.19px] w-[1152px]"
                    data-node-id="2:568"
                    data-name="Container"
                  >
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="2:569"
                      data-name="image"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgImage5}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="parallax-character absolute bottom-[57.6px] content-stretch flex flex-col h-[975.58px] items-start justify-center left-[422.39px] w-[1036.8px]"
                    data-node-id="2:570"
                    data-name="Container"
                  >
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="2:571"
                      data-name="image"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgImage6}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="parallax-character absolute bottom-[115.19px] content-stretch flex flex-col items-start justify-center left-[-96px] size-[844.8px]"
                    data-node-id="2:572"
                    data-name="Container"
                  >
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="2:573"
                      data-name="image"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgImage7}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[-90px] content-stretch flex flex-col items-center justify-center left-0 overflow-clip w-[1920px]"
                    data-node-id="2:574"
                    data-name="timeline-end-green-middle.svg"
                  >
                    <div
                      className="h-[273.016px] relative shrink-0 w-[1920px]"
                      data-node-id="2:575"
                      data-name="timeline-end-green-middle.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndGreenMiddleSvg}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip top-[790.11px] w-[1920px]"
                    data-node-id="2:577"
                    data-name="timeline-end-green-front.svg"
                  >
                    <div
                      className="h-[361.89px] relative shrink-0 w-[1919.922px]"
                      data-node-id="2:578"
                      data-name="timeline-end-green-front.svg"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgTimelineEndGreenFrontSvg}
                      />
                    </div>
                  </div>
                </div>

                {/* FEATURE CARD 1: Catálogo y agenda a WhatsApp */}
                <div
                  className="timeline-feature-card absolute bottom-[84.64%] content-stretch flex flex-col items-start max-w-[800px] right-[138.75px] top-[9.04%] w-[692.5px] z-[5]"
                  data-node-id="2:625"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="2:626"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-[#ff705d] inset-[1px_1px_1.05px_1px] rounded-[10px]"
                      data-node-id="2:627"
                      data-name="Background"
                    />
                    <div
                      className="absolute bg-white inset-[0_0_0.05px_0] rounded-[10px]"
                      data-node-id="2:628"
                      data-name="Background"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[26.6px] items-start pb-[53.13px] pt-[52.13px] px-[53.125px] relative shrink-0 w-full"
                      data-node-id="2:629"
                      data-name="Container"
                    >
                      <div
                        className="mali-heading-reveal content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:630"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[53.1px] tracking-[-1.062px] w-full"
                          data-node-id="2:631"
                        >
                          <p className="leading-[61px] mb-0">
                            {renderMaliWords("Catálogo y agenda")}
                          </p>
                          <p className="leading-[61px]">
                            {renderMaliWords("a WhatsApp")}
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:632"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[20.2px] tracking-[-0.807px] w-full"
                          data-node-id="2:633"
                        >
                          <p className="leading-[25.23px]">
                            Tus clientes eligen platos o servicios, agregan
                            adiciones y salsas o seleccionan especialista. El
                            domicilio se calcula por barrio y tú recibes el
                            pedido o la cita lista en tu WhatsApp.
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:634"
                        data-name="Container"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToY(3300)}
                          className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.5px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                          data-node-id="2:635"
                          data-name="Link"
                        >
                          <div
                            className="absolute bg-[#ff705d] h-[63.75px] left-0 rounded-[10px] top-0 w-[224.5px]"
                            data-node-id="2:636"
                            data-name="Background"
                          />
                          <div
                            className="relative shrink-0"
                            data-node-id="2:637"
                            data-name="Container"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                              <div
                                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                                data-node-id="2:638"
                              >
                                <p className="leading-[27px]">Cómo funciona</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pill-circle bg-white relative rounded-[42.5px] shrink-0 size-[42.5px]"
                            data-node-id="2:639"
                            data-name="Background"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:640"
                                data-name="Container"
                              >
                                <div
                                  className="pill-arrow relative shrink-0 size-[21.25px]"
                                  data-node-id="2:641"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE CARD 2: Panel autogestionable en 10 segundos */}
                <div
                  className="timeline-feature-card absolute bottom-[69.73%] content-stretch flex flex-col items-start left-[138.75px] max-w-[800px] top-[23.54%] w-[692.5px] z-[5]"
                  data-node-id="2:643"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="2:644"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-[#f5e211] inset-[1px_1px_0.82px_1px] rounded-[10px]"
                      data-node-id="2:645"
                      data-name="Background"
                    />
                    <div
                      className="absolute bg-white inset-[0_0_-0.18px_0] rounded-[10px]"
                      data-node-id="2:646"
                      data-name="Background"
                    />
                    <div
                      className="h-[422.21px] relative shrink-0 w-full"
                      data-node-id="2:647"
                      data-name="Container"
                    >
                      <div
                        className="mali-heading-reveal absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[52.13px]"
                        data-node-id="2:648"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[53.1px] tracking-[-1.062px] w-[586.25px]"
                          data-node-id="2:649"
                        >
                          <p className="leading-[61px] mb-0">
                            {renderMaliWords("Panel autogestionable")}
                          </p>
                          <p className="leading-[61px]">
                            {renderMaliWords("en 10 segundos")}
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[200.73px]"
                        data-node-id="2:650"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[20.2px] tracking-[-0.807px] w-[586.25px]"
                          data-node-id="2:651"
                        >
                          <p className="leading-[25.23px]">
                            Cambia precios, actualiza fotos y marca productos
                            como agotados desde el celular. Sin depender de
                            nadie: tu catálogo y tu agenda al día, en segundos.
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[303.33px]"
                        data-node-id="2:652"
                        data-name="Container"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToY(4600)}
                          className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.5px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                          data-node-id="2:653"
                          data-name="Link"
                        >
                          <div
                            className="absolute bg-[#f5e211] h-[63.75px] left-0 rounded-[10px] top-0 w-[226.5px]"
                            data-node-id="2:654"
                            data-name="Background"
                          />
                          <div
                            className="relative shrink-0"
                            data-node-id="2:655"
                            data-name="Container"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                              <div
                                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                                data-node-id="2:656"
                              >
                                <p className="leading-[27px]">
                                  Ver Panel Móvil
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pill-circle bg-white relative rounded-[42.5px] shrink-0 size-[42.5px]"
                            data-node-id="2:657"
                            data-name="Background"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:658"
                                data-name="Container"
                              >
                                <div
                                  className="pill-arrow relative shrink-0 size-[21.25px]"
                                  data-node-id="2:659"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE CARD 3: Cobro local sin fricción */}
                <div
                  className="timeline-feature-card absolute bottom-[46.82%] content-stretch flex flex-col items-start left-[673.13px] max-w-[800px] top-[45.04%] w-[573.75px] z-[5]"
                  data-node-id="2:661"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="2:662"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-[#074679] inset-[1px_1px_1.52px_1px] rounded-[10px]"
                      data-node-id="2:663"
                      data-name="Background"
                    />
                    <div
                      className="absolute bg-white inset-[0_0_0.52px_0] rounded-[10px]"
                      data-node-id="2:664"
                      data-name="Background"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[26.6px] items-start pb-[53.12px] pt-[52.175px] px-[53.125px] relative shrink-0 w-full"
                      data-node-id="2:665"
                      data-name="Container"
                    >
                      <div
                        className="mali-heading-reveal content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:666"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[53.1px] tracking-[-1.062px] w-full"
                          data-node-id="2:667"
                        >
                          <p className="leading-[61px] mb-0">
                            {renderMaliWords("Cobro local")}
                          </p>
                          <p className="leading-[61px]">
                            {renderMaliWords("sin fricción")}
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:668"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[20.2px] tracking-[-0.807px] w-full"
                          data-node-id="2:669"
                        >
                          <p className="leading-[25.23px]">
                            Recibe pagos por Nequi, Bre-B o Daviplata. Conecta
                            una pasarela 24/7 con Wompi, PSE y Addi para que tus
                            clientes paguen como prefieren, sin complicaciones.
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:670"
                        data-name="Container"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToY(9403)}
                          className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.5px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                          data-node-id="2:671"
                          data-name="Link"
                        >
                          <div
                            className="absolute bg-[#074679] h-[63.75px] left-0 rounded-[10px] top-0 w-[185.5px]"
                            data-node-id="2:672"
                            data-name="Background"
                          />
                          <div
                            className="relative shrink-0"
                            data-node-id="2:673"
                            data-name="Container"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                              <div
                                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-white whitespace-nowrap"
                                data-node-id="2:674"
                              >
                                <p className="leading-[27px]">Ver planes</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pill-circle bg-white relative rounded-[42.5px] shrink-0 size-[42.5px]"
                            data-node-id="2:675"
                            data-name="Background"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:676"
                                data-name="Container"
                              >
                                <div
                                  className="pill-arrow relative shrink-0 size-[21.25px]"
                                  data-node-id="2:677"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE CARD 4: Una web con carácter propio */}
                <div
                  className="timeline-feature-card absolute bottom-[25.23%] content-stretch flex flex-col items-start max-w-[800px] right-[138.75px] top-[68.04%] w-[692.5px] z-[5]"
                  data-node-id="2:679"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="2:680"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-[#ebc1ff] inset-[1px_1px_0.82px_1px] rounded-[10px]"
                      data-node-id="2:681"
                      data-name="Background"
                    />
                    <div
                      className="absolute bg-white inset-[0_0_-0.18px_0] rounded-[10px]"
                      data-node-id="2:682"
                      data-name="Background"
                    />
                    <div
                      className="h-[422.21px] relative shrink-0 w-full"
                      data-node-id="2:683"
                      data-name="Container"
                    >
                      <div
                        className="mali-heading-reveal absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[52.13px]"
                        data-node-id="2:684"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[53.1px] tracking-[-1.062px] w-[586.25px]"
                          data-node-id="2:685"
                        >
                          <p className="leading-[61px] mb-0">
                            {renderMaliWords("Una web con")}
                          </p>
                          <p className="leading-[61px]">
                            {renderMaliWords("carácter propio")}
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[200.73px]"
                        data-node-id="2:686"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[20.2px] tracking-[-0.807px] w-[586.25px]"
                          data-node-id="2:687"
                        >
                          <p className="leading-[25.23px]">
                            Diseñamos a medida para estudios de uñas, spas,
                            barberías y restaurantes en Colombia. Tu identidad,
                            tus servicios y tus platos; sin plantillas de IA. De
                            Instagram a tu web y de ahí a tu WhatsApp.
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col items-start left-[53.13px] right-[53.12px] top-[303.33px]"
                        data-node-id="2:688"
                        data-name="Container"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToY(8112)}
                          className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.5px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                          data-node-id="2:689"
                          data-name="Link"
                        >
                          <div
                            className="absolute bg-[#ebc1ff] h-[63.75px] left-0 rounded-[10px] top-0 w-[184.5px]"
                            data-node-id="2:690"
                            data-name="Background"
                          />
                          <div
                            className="relative shrink-0"
                            data-node-id="2:691"
                            data-name="Container"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                              <div
                                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                                data-node-id="2:692"
                              >
                                <p className="leading-[27px]">Ver rubros</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pill-circle bg-white relative rounded-[42.5px] shrink-0 size-[42.5px]"
                            data-node-id="2:693"
                            data-name="Background"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:694"
                                data-name="Container"
                              >
                                <div
                                  className="pill-arrow relative shrink-0 size-[21.25px]"
                                  data-node-id="2:695"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ADDITIONAL TIMELINE CHARACTERS & VECTORS */}
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[883.95px] items-start justify-center right-[-96px] top-[1960.27px] w-[768px]"
                  data-node-id="2:697"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:698"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage8}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[1011.34px] items-start justify-center left-[-61.44px] top-[612.58px] w-[825.59px]"
                  data-node-id="2:699"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:700"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage9}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[890.22px] items-start justify-center right-[96px] top-[1163.91px] w-[864px]"
                  data-node-id="2:701"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:702"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage10}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col h-[508.55px] items-start justify-center left-[268.8px] top-[2046.03px] w-[556.8px]"
                  data-node-id="2:703"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:704"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage11}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-character absolute content-stretch flex flex-col items-start justify-center left-[192px] size-[643.19px] top-[2738.25px]"
                  data-node-id="2:705"
                  data-name="Container"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="2:706"
                    data-name="image"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgImage12}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[2%_62%_88.53%_8%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:707"
                  data-name="clock-shape.svg"
                >
                  <div
                    className="h-[580.31px] relative shrink-0 w-[575.987px]"
                    data-node-id="2:708"
                    data-name="clock-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgClockShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute flex inset-[11.83%_61.87%_85.5%_30.91%] items-center justify-center max-w-[1920px]"
                  data-node-id="2:714"
                >
                  <div className="flex-none rotate-[10deg]">
                    <div
                      className="content-stretch flex flex-col items-center justify-center overflow-clip relative size-full"
                      data-name="plane-1.svg"
                    >
                      <div
                        className="h-[145.45px] relative shrink-0 w-[115.183px]"
                        data-node-id="2:715"
                        data-name="plane-1.svg"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgPlane1Svg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[9%_55%_81.91%_22%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:720"
                  data-name="plane-trace.svg"
                >
                  <div
                    className="h-[556.609px] relative shrink-0 w-[441.59px]"
                    data-node-id="2:721"
                    data-name="plane-trace.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgPlaneTraceSvg}
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col inset-[23.06%_9%_53.86%_53%] items-center justify-center max-w-[1920px] overflow-clip pointer-events-none"
                  data-node-id="2:724"
                  data-name="composer-shape.svg"
                >
                  <div
                    className="h-[1413.73px] relative shrink-0 w-[729.59px]"
                    data-node-id="2:725"
                    data-name="composer-shape.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgComposerShapeSvg}
                    />
                  </div>
                </div>
                <div
                  className="parallax-decor absolute content-stretch flex flex-col inset-[52.56%_53%_44.7%_40%] items-center justify-center max-w-[1920px] overflow-clip"
                  data-node-id="2:729"
                  data-name="joystick.svg"
                >
                  <div
                    className="h-[167.55px] overflow-clip relative shrink-0 w-[134.389px]"
                    data-node-id="2:730"
                    data-name="joystick.svg"
                  >
                    <div
                      className="absolute inset-[0_0.53%_0_0]"
                      data-node-id="2:731"
                      data-name="Clip path group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgClipPathGroup4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 4: PLANS SECTION ("Elige el plan para tu negocio y empieza hoy") */}
            <div
              id="planes"
              className="card-stack-block card-stack-overlap absolute bg-[#f5f1e4] content-stretch flex flex-col items-start left-0 pb-[170px] pt-[136px] px-[138.75px] right-0 rounded-[50px] top-[9403.05px] z-[15]"
              data-node-id="2:748"
              data-name="Background"
            >
              <div className="card-stack-overlay absolute inset-0 rounded-[50px] bg-[#2c2e2a] opacity-0 pointer-events-none" />
              <div
                className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[2160px] relative shrink-0 w-full z-[2]"
                data-node-id="2:749"
                data-name="Container"
              >
                <div
                  className="col-[1/span_8] content-stretch flex flex-col items-start justify-self-stretch pb-[1560px] relative row-1 self-start shrink-0"
                  data-node-id="2:750"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col gap-[278.445px] items-start min-h-[600px] relative shrink-0 w-full"
                    data-node-id="2:751"
                    data-name="Container"
                  >
                    <div
                      className="mali-heading-reveal h-[265px] max-w-[743.75px] relative shrink-0 w-[743.75px]"
                      data-node-id="2:752"
                      data-name="Heading 2"
                    >
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[80.8px] top-[38.5px] tracking-[-1.616px] w-[743.75px]"
                        data-node-id="2:753"
                      >
                        <p className="leading-[76.71px]">
                          {renderMaliWords("Elige el plan")}
                        </p>
                      </div>
                      <div
                        className="absolute h-[77px] left-0 top-[88px] w-[743.75px]"
                        data-node-id="2:754"
                        data-name="Strong"
                      >
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[80.8px] top-[38.5px] tracking-[-1.616px] w-[743.75px]"
                          data-node-id="2:755"
                        >
                          <p className="leading-[76.71px]">
                            {renderMaliWords("para tu negocio")}
                          </p>
                        </div>
                        <div
                          className="absolute h-[20px] left-[273px] top-[76px] w-[260.45px]"
                          data-node-id="2:756"
                          data-name="Mask Group"
                        >
                          <div
                            className="absolute bg-[#ebc1ff] h-[20px] left-0 top-0 w-[260.45px]"
                            data-node-id="2:760"
                            style={{
                              maskImage: `url("${imgBackground1}")`,
                              WebkitMaskImage: `url("${imgBackground1}")`,
                              maskSize: "260.45px 20px",
                              WebkitMaskSize: "260.45px 20px",
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                            }}
                            data-name="Background"
                          />
                        </div>
                      </div>
                      <div
                        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[80.8px] top-[214.5px] tracking-[-1.616px] w-[743.75px]"
                        data-node-id="2:761"
                      >
                        <p className="leading-[76.71px]">
                          {renderMaliWords("y empieza hoy")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="2:762"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium h-[349px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[30px] tracking-[2px] w-[869px]"
                        data-node-id="2:763"
                      >
                        <p className="leading-[40px] mb-0">
                          Diseño a medida para negocios en Colombia.
                        </p>
                        <p className="leading-[40px] mb-0">
                          Empieza con el abono del 50% y elige las funciones
                        </p>
                        <p className="leading-[40px]">
                          que necesitas: WhatsApp, panel móvil o cobros 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-[10/span_5] h-[2160px] justify-self-stretch relative row-1 shrink-0"
                  data-node-id="2:764"
                  data-name="Margin"
                >
                  <div
                    className="absolute content-stretch flex flex-col gap-[59.5px] items-start left-0 pt-[399.5px] right-0 top-0"
                    data-node-id="2:765"
                    data-name="Container"
                  >
                    {/* PLAN CARD 01: Webify Go */}
                    <div
                      onClick={() => openQuoteWhatsApp("Webify Go", "$300.000")}
                      className="plan-stack-card content-stretch flex flex-col items-start relative shrink-0 w-[573.75px] cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                      data-node-id="2:766"
                      data-name="Container:css-transform"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:767"
                        data-name="Container"
                      >
                        <div
                          className="bg-white h-[550px] min-h-[550px] relative rounded-[50px] shrink-0 w-full shadow-[0_14px_40px_rgba(7,70,121,0.06)]"
                          data-node-id="2:768"
                          data-name="01 / Webify Go"
                        >
                          <div
                            className="absolute content-stretch flex items-start justify-end left-[34px] right-[34px] top-[34px]"
                            data-node-id="2:769"
                            data-name="Container"
                          >
                            <div
                              className="bg-[#074679] content-stretch flex items-center justify-center relative rounded-[63.75px] shrink-0 size-[63.75px]"
                              data-node-id="2:770"
                              data-name="Background"
                            >
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:771"
                                data-name="Container"
                              >
                                <div
                                  className="relative shrink-0 size-[63.75px]"
                                  data-node-id="2:772"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg2}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col h-[100px] items-start left-[34px] right-[34px] top-[117px]"
                            data-node-id="2:774"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#074679] text-[80.8px] tracking-[-4.848px] w-full"
                              data-node-id="2:775"
                            >
                              <p className="leading-[96px]">$300.000</p>
                            </div>
                          </div>
                          <div
                            className="absolute h-[285px] left-[34px] right-[34px] top-[232px]"
                            data-node-id="2:776"
                            data-name="Container"
                          >
                            <div
                              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-[0.5px] not-italic text-[#074679] text-[28px] top-[71.95px] tracking-[-0.807px] w-[505.75px]"
                              data-node-id="2:777"
                            >
                              <p className="leading-[40px] mb-0">
                                Ideal para uñas, barberías y carta fija.
                              </p>
                              <p className="leading-[40px] mb-0">
                                Hasta 15 ítems.
                              </p>
                              <p className="leading-[40px] mb-0">
                                Pedido o cita a WhatsApp.
                              </p>
                              <p className="leading-[40px]">
                                Cobro con Nequi y Bre-B.
                              </p>
                            </div>
                          </div>
                          <div
                            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Extra_Bold'] font-inter font-extrabold justify-center leading-[0] left-[34px] not-italic text-[#074679] text-[40px] top-[62px] tracking-[-0.807px] w-[400px]"
                            data-node-id="5:7"
                          >
                            <p className="leading-[36px]">Webify Go</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PLAN CARD 02: Webify Pro */}
                    <div
                      onClick={() => openQuoteWhatsApp("Webify Pro", "$650.000")}
                      className="plan-stack-card content-stretch flex flex-col items-start relative shrink-0 w-[573.75px] cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                      data-node-id="2:778"
                      data-name="Container:css-transform"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:779"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#626cd4] h-[550.76px] min-h-[550px] relative rounded-[50px] shrink-0 w-full shadow-[0_14px_40px_rgba(98,108,212,0.18)]"
                          data-node-id="2:780"
                          data-name="02 / Webify Pro"
                        >
                          <div
                            className="absolute content-stretch flex items-start justify-end left-[34px] right-[34px] top-[34px]"
                            data-node-id="2:781"
                            data-name="Container"
                          >
                            <div
                              className="bg-white content-stretch flex items-center justify-center relative rounded-[63.75px] shrink-0 size-[63.75px]"
                              data-node-id="2:782"
                              data-name="Background"
                            >
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:783"
                                data-name="Container"
                              >
                                <div
                                  className="relative shrink-0 size-[63.75px]"
                                  data-node-id="2:784"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg3}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col h-[100px] items-start left-[34px] right-[34px] top-[117px]"
                            data-node-id="2:786"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[80.8px] text-white tracking-[-4.848px] w-full"
                              data-node-id="2:787"
                            >
                              <p className="leading-[96px]">$650.000</p>
                            </div>
                          </div>
                          <div
                            className="absolute h-[285px] left-[34px] right-[34px] top-[232px]"
                            data-node-id="2:788"
                            data-name="Container"
                          >
                            <div
                              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-[-0.5px] not-italic text-[28px] text-white top-[80.19px] tracking-[-0.807px] w-[505.75px]"
                              data-node-id="2:789"
                            >
                              <p className="leading-[40px] mb-0">
                                Panel Autogestionable desde el celular.
                              </p>
                              <p className="leading-[40px] mb-0">
                                Hasta 50 ítems con filtros.
                              </p>
                              <p className="leading-[40px] mb-0">
                                Adiciones o elección de especialistas.
                              </p>
                              <p className="leading-[40px]">
                                Envío calculado por barrio.
                              </p>
                            </div>
                          </div>
                          <div
                            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Extra_Bold'] font-inter font-extrabold justify-center leading-[0] left-[34px] not-italic text-[40px] text-white top-[62px] tracking-[-0.807px] w-[400px]"
                            data-node-id="5:8"
                          >
                            <p className="leading-[36px]">Webify Pro</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PLAN CARD 03: Webify Max */}
                    <div
                      onClick={() =>
                        openQuoteWhatsApp("Webify Max", "$1.100.000")
                      }
                      className="plan-stack-card content-stretch flex flex-col items-start relative shrink-0 w-[573.75px] cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                      data-node-id="2:790"
                      data-name="Container:css-transform"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="2:791"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#ff705d] h-[550.76px] min-h-[550px] relative rounded-[50px] shrink-0 w-full shadow-[0_14px_40px_rgba(255,112,93,0.18)]"
                          data-node-id="2:792"
                          data-name="03 / Webify Max"
                        >
                          <div
                            className="absolute content-stretch flex items-start justify-end left-[34px] right-[34px] top-[34px]"
                            data-node-id="2:793"
                            data-name="Container"
                          >
                            <div
                              className="bg-white content-stretch flex items-center justify-center relative rounded-[63.75px] shrink-0 size-[63.75px]"
                              data-node-id="2:794"
                              data-name="Background"
                            >
                              <div
                                className="content-stretch flex flex-col items-start relative shrink-0"
                                data-node-id="2:795"
                                data-name="Container"
                              >
                                <div
                                  className="relative shrink-0 size-[63.75px]"
                                  data-node-id="2:796"
                                  data-name="SVG"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgSvg4}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col h-[100px] items-start left-[34px] right-[34px] top-[117px]"
                            data-node-id="2:798"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[80.8px] text-white tracking-[-4.848px] w-full"
                              data-node-id="2:799"
                            >
                              <p className="leading-[96px]">$1.100.000</p>
                            </div>
                          </div>
                          <div
                            className="absolute h-[285px] left-[34px] right-[34px] top-[232px]"
                            data-node-id="2:800"
                            data-name="Container"
                          >
                            <div
                              className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-0 not-italic text-[28px] text-white top-[114px] tracking-[-0.807px] w-[505.75px]"
                              data-node-id="2:801"
                            >
                              <p className="leading-[40px] mb-0">
                                Todo lo de Pro + pasarela
                              </p>
                              <p className="leading-[40px] mb-0">
                                Wompi / Bold / MercadoPago
                              </p>
                              <p className="leading-[40px] mb-0">
                                (PSE, Nequi y Addi). Multi-sede,
                              </p>
                              <p className="leading-[40px] mb-0">
                                inventario automático y
                              </p>
                              <p className="leading-[40px]">
                                SEO en Google Maps.
                              </p>
                            </div>
                          </div>
                          <div
                            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Extra_Bold'] font-inter font-extrabold justify-center leading-[0] left-[34px] not-italic text-[40px] text-white top-[62px] tracking-[-0.807px] w-[400px]"
                            data-node-id="5:9"
                          >
                            <p className="leading-[36px]">Webify Max</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 5: YELLOW FOOTER ("Hablemos de tu web") */}
            <div
              className="card-stack-overlap absolute bg-[#f5e211] content-stretch flex flex-col gap-[335.49px] items-start left-0 min-h-[1200px] overflow-clip pb-[38.25px] pt-[136px] right-0 rounded-[50px] top-[11869.05px] z-[20]"
              data-node-id="2:320"
              data-name="Footer"
            >
              <div
                className="content-stretch flex flex-col items-start px-[138.75px] relative shrink-0 w-full"
                data-node-id="2:321"
                data-name="Container"
              >
                <div
                  className="gap-x-[20px] gap-y-[85px] grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[217.42px] relative shrink-0 w-full"
                  data-node-id="2:322"
                  data-name="Container"
                >
                  <div
                    className="col-[1/span_4] content-stretch flex flex-col gap-[25.51px] items-start relative row-1 self-start shrink-0 w-[455px]"
                    data-node-id="2:323"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start max-w-[450px] relative shrink-0 w-[450px]"
                      data-node-id="2:324"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[-0.807px] w-[859px]"
                        data-node-id="2:325"
                      >
                        <p className="leading-[40px] mb-0">
                          ¿Tu negocio está en Instagram? Dale una web
                        </p>
                        <p className="leading-[40px] mb-0">
                          con identidad propia. Cuéntanos qué ofreces
                        </p>
                        <p className="leading-[40px] mb-0">
                          y diseñamos tu catálogo o agenda para que
                        </p>
                        <p className="leading-[40px]">
                          tus clientes elijan y te escriban a WhatsApp.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openQuoteWhatsApp()}
                      className="mindmarket-pill-btn border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8.49px] items-center min-h-[63.75px] p-[11.625px] relative rounded-[10px] shrink-0"
                      data-node-id="2:326"
                      data-name="Link"
                    >
                      <div
                        className="absolute bg-white h-[63.75px] left-0 rounded-[10px] top-0 w-[223.49px]"
                        data-node-id="2:327"
                        data-name="Background"
                      />
                      <div
                        className="relative shrink-0"
                        data-node-id="2:328"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10.625px] relative size-full">
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-black whitespace-nowrap"
                            data-node-id="2:329"
                          >
                            <p className="leading-[30px]">Cotizar mi web</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pill-circle bg-[#f5e211] relative rounded-[42.5px] shrink-0 size-[42.5px]"
                        data-node-id="2:330"
                        data-name="Background"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="2:331"
                            data-name="Container"
                          >
                            <div
                              className="pill-arrow relative shrink-0 size-[21.25px]"
                              data-node-id="2:332"
                              data-name="SVG"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgSvg}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div
                    className="col-[10/span_4] content-stretch flex flex-col items-start pb-[0.67px] relative row-1 self-start shrink-0 w-[455px]"
                    data-node-id="2:334"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[20px] h-[501px] items-end justify-center relative shrink-0 w-[674px]"
                      data-node-id="2:335"
                      data-name="Nav"
                    >
                      <div
                        className="content-stretch flex flex-col gap-[5.4px] h-[501px] items-start relative shrink-0 w-[252px]"
                        data-node-id="2:336"
                        data-name="List"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToY(2400)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:337"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:338"
                          >
                            <p className="leading-[40px]">Cómo funciona</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollToY(3300)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:339"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:340"
                          >
                            <p className="leading-[40px]">Panel Móvil</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollToY(6000)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:341"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:342"
                          >
                            <p className="leading-[40px]">Rubros</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollToY(4600)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:343"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:344"
                          >
                            <p className="leading-[40px]">Cobros locales</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollToY(9403)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:345"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:346"
                          >
                            <p className="leading-[40px]">Planes</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => openQuoteWhatsApp()}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:347"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:348"
                          >
                            <p className="leading-[40px]">WhatsApp</p>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollToY(0)}
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
                          data-node-id="2:349"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] w-full"
                            data-node-id="2:350"
                          >
                            <p className="leading-[40px]">Sobre Webify</p>
                          </div>
                        </button>
                      </div>
                      <div
                        className="h-[501px] relative shrink-0 w-[336px]"
                        data-node-id="2:351"
                        data-name="List"
                      >
                        <div
                          className="absolute content-stretch flex flex-col items-start left-[-2.5px] right-[3px] top-[39.95px]"
                          data-node-id="2:352"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] whitespace-nowrap"
                            data-node-id="2:353"
                          >
                            <p className="leading-[50px]">Ideas para tu web</p>
                          </div>
                        </div>
                        <div
                          className="absolute content-stretch flex flex-col items-start left-[0.5px] right-0 top-[-0.05px]"
                          data-node-id="2:354"
                          data-name="Item"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] whitespace-nowrap"
                            data-node-id="2:355"
                          >
                            <p className="leading-[40px]">Contacto</p>
                          </div>
                        </div>
                        <div
                          className="absolute content-stretch flex flex-col items-start left-0 right-[0.5px] top-[95.63px]"
                          data-node-id="2:358"
                          data-name="Item"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-[335.5px]"
                            data-node-id="2:356"
                            data-name="Item"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] tracking-[2px] whitespace-nowrap"
                              data-node-id="2:357"
                            >
                              <p className="leading-[50px]">
                                Política de privacidad
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] left-[-2.5px] not-italic text-[#2c2e2a] text-[25px] top-[170.95px] tracking-[2px] whitespace-nowrap"
                          data-node-id="2:359"
                        >
                          <p className="leading-[50px]">
                            Preferencias de cookies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start px-[138.75px] relative shrink-0 w-full"
                data-node-id="2:360"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[59.5px] items-start relative shrink-0 w-full"
                  data-node-id="2:361"
                  data-name="Container"
                >
                  <div
                    className="gap-x-[20px] gap-y-[59.5px] grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[353.84px] pt-[34px] relative shrink-0 w-full"
                    data-node-id="2:362"
                    data-name="Container"
                  >
                    <div
                      className="col-[1/span_7] content-stretch flex flex-col items-start relative row-1 self-start shrink-0 w-[950px]"
                      data-node-id="2:363"
                      data-name="Container"
                    >
                      <div
                        className="mali-heading-reveal content-stretch flex flex-col gap-[0.92px] items-start relative shrink-0 w-[950px]"
                        data-node-id="2:364"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[186.2px] tracking-[-3.724px] w-[950px]"
                          data-node-id="2:365"
                        >
                          <p className="leading-[190px]">
                            {renderMaliWords("Hablemos")}
                          </p>
                        </div>
                        <div
                          className="h-[180px] relative shrink-0 w-[930px]"
                          data-node-id="2:366"
                          data-name="Mispelled"
                        >
                          <div
                            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Mali:Medium'] font-mali font-medium justify-center leading-[0] left-0 not-italic text-[#2c2e2a] text-[186.2px] top-[87.5px] tracking-[-3.724px] w-[930px]"
                            data-node-id="2:367"
                          >
                            <p className="leading-[176.93px]">
                              {renderMaliWords("de tu web")}
                            </p>
                          </div>
                          <div
                            className="absolute h-[46px] left-[14.89px] top-[160.92px] w-[669.61px]"
                            data-node-id="2:368"
                            data-name="Mask Group"
                          >
                            <div
                              className="absolute bg-[#626cd4] h-[46px] left-0 top-0 w-[669.61px]"
                              data-node-id="2:372"
                              style={{
                                maskImage: `url("${imgBackground}")`,
                                WebkitMaskImage: `url("${imgBackground}")`,
                                maskSize: "669.61px 46px",
                                WebkitMaskSize: "669.61px 46px",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                              }}
                              data-name="Background"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-[10/span_4] content-stretch flex flex-col items-start justify-self-stretch pb-[73.87px] relative row-1 self-start shrink-0"
                      data-node-id="2:373"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col gap-[17.1px] items-start relative shrink-0 w-full"
                        data-node-id="2:374"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-inter font-medium items-start leading-[0] not-italic pb-[0.655px] relative shrink-0 text-[25px] w-full whitespace-nowrap"
                          data-node-id="2:375"
                          data-name="Paragraph"
                        >
                          <div
                            className="flex flex-col justify-center mb-[-0.795px] relative shrink-0 text-[#2c2e2a]"
                            data-node-id="2:376"
                          >
                            <p className="leading-[35px]">Colombia</p>
                          </div>
                          <div
                            className="flex flex-col justify-center relative shrink-0 text-[rgba(44,46,42,0.6)]"
                            data-node-id="2:377"
                          >
                            <p className="leading-[35px] mb-0">
                              Diseño web para negocios locales.
                            </p>
                            <p className="leading-[35px] mb-0">
                              Estudios de uñas, spas, barberías
                            </p>
                            <p className="leading-[35px]">y restaurantes.</p>
                          </div>
                        </div>
                        <div
                          className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-inter font-medium items-start leading-[0] not-italic pb-[0.655px] relative shrink-0 text-[25px] w-full whitespace-nowrap"
                          data-node-id="2:378"
                          data-name="Paragraph"
                        >
                          <div
                            className="flex flex-col justify-center mb-[-0.795px] relative shrink-0 text-[#2c2e2a]"
                            data-node-id="2:379"
                          >
                            <p className="leading-[35px]">
                              Tu negocio, conectado
                            </p>
                          </div>
                          <div
                            className="flex flex-col justify-center relative shrink-0 text-[rgba(44,46,42,0.6)]"
                            data-node-id="2:380"
                          >
                            <p className="leading-[35px] mb-0">
                              De Instagram a tu página web.
                            </p>
                            <p className="leading-[35px] mb-0">
                              De tu catálogo o agenda
                            </p>
                            <p className="leading-[35px]">
                              al WhatsApp de tu negocio.
                            </p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-node-id="2:381"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[25px] w-full"
                            data-node-id="2:382"
                          >
                            <p className="leading-[35px]">Webify.co</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(14,minmax(0,1fr))] grid-rows-[25.50px] relative shrink-0 w-full"
                    data-node-id="2:383"
                    data-name="Container"
                  >
                    <div
                      className="col-[1/span_7] content-stretch flex flex-col items-start relative row-1 self-start shrink-0 w-[811.25px]"
                      data-node-id="2:384"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2e2a] text-[17px] whitespace-nowrap"
                        data-node-id="2:385"
                      >
                        <p className="leading-[25.5px]">
                          © 2026 Webify. Todos los derechos reservados.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-[10/span_3] content-stretch flex flex-col items-start justify-self-stretch pb-[2px] relative row-1 self-start shrink-0"
                      data-node-id="2:386"
                      data-name="Container"
                    >
                      <div
                        className="h-[23.5px] relative shrink-0 w-full"
                        data-node-id="2:387"
                        data-name="Link"
                      />
                    </div>
                    <div
                      className="col-[13/span_2] content-center flex flex-wrap h-[25.5px] items-center justify-end justify-self-stretch pb-px relative row-1 shrink-0"
                      data-node-id="2:389"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="2:390"
                        data-name="List"
                      >
                        <div
                          className="h-[26px] relative shrink-0 w-[82px]"
                          data-node-id="2:391"
                          data-name="Item"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Preloader Mask Node from Figma (height=0 mask) */}
        <div
          className="absolute h-[1250px] left-0 top-0 w-[1920px] pointer-events-none opacity-0"
          data-node-id="2:870"
          data-name="Mask Group"
        >
          <div
            className="absolute bg-[#f5f1e4] content-stretch flex h-[1250px] items-center justify-center left-[94px] pb-[478.43px] pt-[434.47px] top-[54px] w-[1920px]"
            data-node-id="2:873"
            style={{ maskImage: `url("${imgBackground2}")` }}
            data-name="Background"
          >
            <div
              className="content-stretch flex flex-col items-start pb-[43.97px] relative shrink-0"
              data-node-id="2:874"
              data-name="Container"
            >
              <div
                className="h-[293.13px] overflow-clip relative shrink-0 w-[340px]"
                data-node-id="2:875"
                data-name="SVG"
              >
                <div
                  className="absolute inset-[289.83%_4.98%_-283.06%_4.79%]"
                  data-node-id="2:876"
                  data-name="Layer_1"
                >
                  <div className="absolute inset-[0_-5.3%_-5.95%_-5.3%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgLayer1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
