"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const serviceNames = ['welcome to "drishhya"', "grahveda", "suite-X", "digital mVAS"];

const ServiceFlipText = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % serviceNames.length);
      setKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex ml-2 sm:ml-4 md:ml-6 h-6 sm:h-7 md:h-8 items-center min-w-0 overflow-hidden"
      style={{ perspective: "500px" }}
    >
      <span key={key} className="service-flip-text text-sm sm:text-base md:text-xl lg:text-2xl font-cormorant font-semibold whitespace-nowrap">
        {serviceNames[index]}
      </span>
    </div>
  );
};

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About Us",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as { __lenis?: { scrollTo: (el: HTMLElement, options: { offset: number; duration: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -64, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black text-white px-6 md:px-12 h-16 flex items-center justify-between">
      {/* Logo + rotating service names */}
      <div className="flex items-center h-full py-2 min-w-0 flex-1 pr-3">
        <div className="flex shrink-0 items-center cursor-pointer" onClick={() => navigateTo("home")}>
          <Image src="/forte-logo.png" alt="Forte Digital" width={160} height={48} className="object-contain h-14 sm:h-20 md:h-24 w-auto" />
        </div>
        <ServiceFlipText />
      </div>

      {/* Desktop Icons */}
      <ul className="hidden md:flex items-center gap-2">
        {navItems.map(({ id, label, icon }) => (
          <li key={id}>
            <button
              onClick={() => navigateTo(id)}
              title={label}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              {icon}
              <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-start gap-4 px-6 py-6 text-sm font-medium md:hidden">
          {navItems.map(({ id, label, icon }) => (
            <li key={id}>
              <button onClick={() => navigateTo(id)} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                {icon}
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
