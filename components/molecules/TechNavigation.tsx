type TechNavigationProps = {
  selectedIndex: number;
  itemCount: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function TechNavigation({ selectedIndex, itemCount, onPrevious, onNext }: TechNavigationProps) {
  return (
    <div className="stack-toolbar">
      <span>TECNOLOGIAS <b>{String(selectedIndex + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}</b></span>
      <div className="stack-arrows" aria-label="Navegar pelas tecnologias">
        <button type="button" onClick={onPrevious} aria-label="Tecnologia anterior">←</button>
        <button type="button" onClick={onNext} aria-label="Próxima tecnologia">→</button>
      </div>
    </div>
  );
}