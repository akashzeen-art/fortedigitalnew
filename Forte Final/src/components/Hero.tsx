"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const images = [
  "/imgs/img-10.png",
  "/imgs/img-11.png",
  "/imgs/img-14.png",
  "/imgs/img-16.png",
  "/imgs/img-18.png",
  "/imgs/img-20.png",
  "/imgs/img-25.png",
  "/imgs/img-28.png",
  "/imgs/img-30.png",
  "/imgs/img-31.png",
  "/imgs/img-36.png",
  "/imgs/img-38.png",
  "/imgs/img-40.png",
  "/imgs/img-41.png",
  "/imgs/img-43.png",
  "/imgs/img-44.png",
  "/imgs/img-45.png",
  "/imgs/img-46.png",
  "/imgs/img-47.png",
  "/imgs/img-48.png",
  "/imgs/img-49.png",
  "/imgs/img-50.png",
  "/imgs/img-51.png",
  "/imgs/img-52.png",
  "/imgs/img-53.png",
  "/imgs/img-54.png",
  "/imgs/img-55.png",
  "/imgs/img-56.png",
  "/imgs/img-57.png",
  "/imgs/img-58.png",
  "/imgs/img-59.png",
  "/imgs/img-60.png",
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageIndex = useRef(0);
  const pRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters =
      containerRef.current.querySelectorAll<HTMLSpanElement>(".letter");

    const tl = gsap.timeline();

    letters.forEach((letterEl, index) => {
      const finalChar = letterEl.getAttribute("data-char") || "";

      tl.to(
        letterEl,
        {
          delay: 4.8,
          duration: 0.4,
          onStart: () => {
            let scrambleCount = 0;
            const interval = setInterval(() => {
              letterEl.textContent = chars.charAt(
                Math.floor(Math.random() * chars.length)
              );
              scrambleCount++;
              if (scrambleCount > 6) {
                clearInterval(interval);
                letterEl.textContent = finalChar;
              }
            }, 40);
          },
        },
        index * 0.08 + 0.5
      );
    });

    // after last letter animates -> reveal paragraphs
    tl.to(
      pRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      },
      "+=0.5"
    );
  }, []);

  // mouse + touch trail effect
  useEffect(() => {
    if (!containerRef.current) return;

    let lastX = 0,
      lastY = 0;
    const threshold = window.innerWidth < 768 ? 30 : 80;

    const spawnImage = (clientX: number, clientY: number) => {
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance < threshold) return;

      const dirX = dx / distance || 0;
      const dirY = dy / distance || 0;

      lastX = clientX;
      lastY = clientY;

      const rotation = dirX > 0 ? 12 : -12;
      const src = images[imageIndex.current % images.length];
      imageIndex.current++;

      const img = document.createElement("img");
      img.src = src;

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();

      Object.assign(img.style, {
        position: "absolute",
        left: `${clientX - rect.left}px`,
        top: `${clientY - rect.top}px`,
        width: window.innerWidth < 768 ? "100px" : "160px",
        height: "auto",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        opacity: "0",
        objectFit: "cover",
        willChange: "transform, opacity",
        zIndex: "3",
        filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.25))",
      });

      container.appendChild(img);

      gsap.fromTo(
        img,
        {
          scale: 0.6,
          opacity: 0,
          borderRadius: "50%",
          x: `-=${dirX * 60}`,
          y: `-=${dirY * 60}`,
        },
        {
          scale: 1,
          opacity: 1,
          borderRadius: 0,
          duration: 1.4,
          rotate: rotation,
          ease: "power3.out",
          x: `+=${dirX * 120}`,
          y: `+=${dirY * 120}`,
        }
      );

      gsap.to(img, {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        delay: 0.8,
        ease: "power2.out",
        onComplete: () => img.remove(),
      });
    };

    const handleMouseMove = (e: MouseEvent) => spawnImage(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      spawnImage(touch.clientX, touch.clientY);
    };
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      lastX = touch.clientX;
      lastY = touch.clientY - 1;
      spawnImage(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const container = containerRef.current;
    container?.addEventListener("touchmove", handleTouchMove, { passive: true });
    container?.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("touchmove", handleTouchMove);
      container?.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-container relative z-[999] bg-black h-[90vh] sm:h-[92vh] sm:max-h-none md:h-screen md:max-h-none text-white flex flex-col items-center justify-center gap-0 sm:gap-1 md:gap-8 overflow-hidden px-3 py-4 sm:py-6 md:py-0 touch-pan-y md:[touch-action:none]"
    >
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
        <source src="https://vz-d9579dc9-1fa.b-cdn.net/f367912d-82b9-4fa5-a0b2-fe3e7aed42b0/play_480p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none" />
      {/* First block */}
      <div className="relative z-[4] md:ml-[-10%] lg:ml-[-30%] text-center md:text-left flex flex-col-reverse md:flex-row gap-1 md:gap-5 items-center -my-0.5 sm:my-0">
        <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-aboreto whitespace-nowrap origin-center" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.25), 0 2px 4px rgba(0,0,0,0.5)" }}>
          {"FORTE".split("").map((char, ci) => (
            <span key={ci} data-char={char} className="letter inline-block will-change-transform">&nbsp;</span>
          ))}
        </h1>
        <p ref={(el) => { if (el && !pRefs.current.includes(el)) { pRefs.current.push(el); } }} className="hero-text underline opacity-0 translate-y-6">{/* powering telecom monetization */}</p>
      </div>

      {/* Second block */}
      <h1 className="relative z-[4] text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-aboreto whitespace-nowrap origin-center -my-0.5 sm:my-0" style={{ color: "rgba(255,255,255,0.5)", textShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)" }}>
        {"DIGITAL".split("").map((char, ci) => (
          <span key={ci} data-char={char} className="letter inline-block will-change-transform">&nbsp;</span>
        ))}
      </h1>

      {/* Third block */}
      <div className="relative z-[4] md:ml-[15%] lg:ml-[40%] flex flex-col-reverse md:flex-row items-center gap-1 md:gap-5 -my-0.5 sm:my-0">
        <p ref={(el) => { if (el && !pRefs.current.includes(el)) { pRefs.current.push(el); } }} className="hero-text underline opacity-0 translate-y-6">{/* AI-driven digital experiences */}</p>
        <h1 className="text-[2.2rem] sm:text-6xl md:text-8xl lg:text-9xl font-aboreto whitespace-nowrap origin-center" style={{ color: "rgba(255,255,255,0.88)", textShadow: "0 0 30px rgba(255,255,255,0.55), 0 0 60px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.5)" }}>
          {"Solutions".split("").map((char, ci) => (
            <span key={ci} data-char={char} className="letter inline-block will-change-transform">&nbsp;</span>
          ))}
        </h1>
      </div>


    </div>
  );
};

export default Hero;
