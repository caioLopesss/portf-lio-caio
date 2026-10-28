"use client";

import { useEffect, useRef, useState } from "react";
import FrameCounter from "../atoms/FrameCounter";
import HeroHeader from "../molecules/HeroHeader";
import ScrollCue from "../molecules/ScrollCue";
import { drawCover, FRAME_COUNT, getFramePath } from "../../lib/scroll-frames";

export default function HeroSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const tickingRef = useRef(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.src = getFramePath(index);
      image.onload = () => {
        if (!cancelled && index === currentFrameRef.current && canvasRef.current) {
          drawCover(canvasRef.current, image);
        }
      };
      return image;
    });
    framesRef.current = frames;

    const render = () => {
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const exactFrame = progress * (FRAME_COUNT - 1);
      const frameIndex = Math.floor(exactFrame);
      const blend = exactFrame - frameIndex;
      if (frameIndex !== currentFrameRef.current) setCurrentFrame(frameIndex);
      currentFrameRef.current = frameIndex;

      const frame = frames[frameIndex];
      const nextFrame = frames[Math.min(frameIndex + 1, FRAME_COUNT - 1)];
      if (frame?.complete) drawCover(canvas, frame, nextFrame, blend);
      tickingRef.current = false;
    };

    const requestRender = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(render);
    };

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    requestRender();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
    };
  }, []);

  return (
    <section id="inicio" ref={sectionRef} className="sequence" aria-label="Introdução animada do portfolio">
      <div className="sticky-stage">
        <canvas ref={canvasRef} aria-hidden="true" />
        <div className="shade" />
        <HeroHeader />
        <ScrollCue />
        <FrameCounter currentFrame={currentFrame} totalFrames={FRAME_COUNT} />
      </div>
    </section>
  );
}