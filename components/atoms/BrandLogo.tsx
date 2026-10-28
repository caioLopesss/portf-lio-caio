export default function BrandLogo() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir para o início">
      <img
        className="brand-logo"
        src="/caio-lopes-gta.png"
        alt="Caio Lopes — Full Stack Dev"
        width={1696}
        height={960}
        fetchPriority="high"
      />
    </a>
  );
}