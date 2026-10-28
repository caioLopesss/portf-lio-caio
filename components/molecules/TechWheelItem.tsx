import type { CSSProperties } from "react";
import type { TechStackItem } from "../../data/tech-stack";

type TechWheelItemProps = {
  tech: TechStackItem;
  selected: boolean;
  position: CSSProperties;
  onSelect: () => void;
};

export default function TechWheelItem({ tech, selected, position, onSelect }: TechWheelItemProps) {
  return (
    <button
      type="button"
      className={`wheel-slot${selected ? " is-selected" : ""}`}
      style={position}
      onClick={onSelect}
      aria-label={`Selecionar ${tech.name}`}
      aria-pressed={selected}
    >
      <span className="wheel-mark" aria-hidden="true">{tech.mark}</span>
      <span className="wheel-name">{tech.name}</span>
    </button>
  );
}