type FrameCounterProps = {
  currentFrame: number;
  totalFrames: number;
};

export default function FrameCounter({ currentFrame, totalFrames }: FrameCounterProps) {
  return (
    <div className="counter" aria-live="polite">
      {String(currentFrame + 1).padStart(2, "0")} / {totalFrames}
    </div>
  );
}