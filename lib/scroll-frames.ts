export const FRAME_COUNT = 30;

export function getFramePath(index: number) {
  return `/frames-jpg/frame_${String(index + 1).padStart(3, "0")}.jpg`;
}

export function drawCover(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  nextImage?: HTMLImageElement,
  blend = 0,
) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvasWidth = Math.round(width * pixelRatio);
  const canvasHeight = Math.round(height * pixelRatio);
  if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const paint = (source: HTMLImageElement, opacity: number) => {
    const scale = Math.max(width / source.naturalWidth, height / source.naturalHeight);
    const drawWidth = source.naturalWidth * scale;
    const drawHeight = source.naturalHeight * scale;
    context.globalAlpha = opacity;
    context.drawImage(source, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
  };

  paint(image, 1);
  if (nextImage?.complete && blend > 0) paint(nextImage, blend);
  context.globalAlpha = 1;
}