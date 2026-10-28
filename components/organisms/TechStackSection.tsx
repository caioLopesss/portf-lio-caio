"use client";

import { useEffect, useRef, useState } from "react";
import { TECH_STACK } from "../../data/tech-stack";
import TechNavigation from "../molecules/TechNavigation";
import TechWheelItem from "../molecules/TechWheelItem";

export default function TechStackSection() {
  const stackPausedRef = useRef(false);
  const stackPausedUntilRef = useRef(0);
  const [selectedTech, setSelectedTech] = useState(0);

  const selectTech = (index: number) => {
    stackPausedUntilRef.current = Date.now() + 12000;
    setSelectedTech(index);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!stackPausedRef.current && Date.now() >= stackPausedUntilRef.current) {
        setSelectedTech((current) => (current + 1) % TECH_STACK.length);
      }
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="stack-section" aria-labelledby="stack-title">
      <div className="stack-atmosphere" aria-hidden="true" />
      <div className="stack-content">
        <p className="stack-kicker">02 / ARSENAL DIGITAL</p>
        <h2 id="stack-title">Minha <span>stack.</span></h2>
        <p className="stack-intro">As ferramentas que uso para construir experiências digitais.</p>

        <div className="stack-stage">
          <div className="weapon-wheel" role="group" aria-label="Selecionar tecnologia na roda">
            <div className="wheel-rim" aria-hidden="true" />
            {TECH_STACK.map((tech, index) => {
              const angle = -90 + index * 360 / TECH_STACK.length;
              const radians = angle * Math.PI / 180;
              return (
                <TechWheelItem
                  key={tech.name}
                  tech={tech}
                  selected={index === selectedTech}
                  position={{ left: `${50 + Math.cos(radians) * 38}%`, top: `${50 + Math.sin(radians) * 38}%` }}
                  onSelect={() => selectTech(index)}
                />
              );
            })}
            <div className="wheel-center" aria-live="polite">
              <span className="wheel-center-label">EQUIPADO</span>
              <strong>{TECH_STACK[selectedTech].mark}</strong>
            </div>
          </div>

          <div
            className="stack-side"
            onMouseEnter={() => { stackPausedRef.current = true; }}
            onMouseLeave={() => { stackPausedRef.current = false; }}
            onFocusCapture={() => { stackPausedRef.current = true; }}
            onBlurCapture={() => { stackPausedRef.current = false; }}
          >
            <TechNavigation
              selectedIndex={selectedTech}
              itemCount={TECH_STACK.length}
              onPrevious={() => selectTech((selectedTech - 1 + TECH_STACK.length) % TECH_STACK.length)}
              onNext={() => selectTech((selectedTech + 1) % TECH_STACK.length)}
            />
            <div className="stack-copy" key={selectedTech}>
              <span className="stack-copy-type">{TECH_STACK[selectedTech].type}</span>
              <h3>{TECH_STACK[selectedTech].name}</h3>
              <p>{TECH_STACK[selectedTech].detail}</p>
            </div>
            <p className="stack-extra">Também uso Express.js, APIs REST, HTML, CSS, Shadcn UI, Git, GitHub Actions, Figma, Postman, Vercel e Azure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}