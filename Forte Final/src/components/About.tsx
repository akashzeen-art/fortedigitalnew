"use client"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import Slider from "./Slider";
import SectionHeading from "./SectionHeading";

const About = () => {
  const bioText = `We are a new-age digital growth company operating at the intersection of content, technology, and monetization. Our ecosystem spans across OTT entertainment, astrology platforms, mobile value-added services (MVAS), and performance marketing—enabling us to build, scale, and monetize digital experiences at scale. At our core, we turn digital experiences into sustainable, high-growth businesses.`;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate the title
    gsap.from(".title span", {
      y: "100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate the bio (word by word)
    gsap.from(".bio p span", {
      y: "100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 35%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="p-4 lg:p-10">
      {/* heading */}
      <div className="mt-10 w-full">
        <h2 className="w-full">
          <SectionHeading
            as="span"
            className="inline-block -translate-y-5 mr-12 md:mr-20 lg:mr-[400px]"
            revealClassName="title"
            size="large"
          >
            WHO WE ARE
          </SectionHeading>
          <span className="bio hidden md:inline">
            {bioText.split(" ").map((word, idx) => (
              <p key={idx} className="inline-block mr-2 overflow-hidden">
                <span className="block">{word}</span>
              </p>
            ))}
          </span>
        </h2>
        <div className="text-base mt-4 md:hidden w-full">
          <span className="bio">
            {bioText.split(" ").map((word, idx) => (
              <p key={idx} className="inline-block mr-2 overflow-hidden">
                <span className="block">{word}</span>
              </p>
            ))}
          </span>
        </div>
      </div>
      {/* img-slider  */}
      <Slider />

    </div>
  );
};

export default About;
