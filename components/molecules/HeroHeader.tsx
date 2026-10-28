import AvailabilityStatus from "../atoms/AvailabilityStatus";
import BrandLogo from "../atoms/BrandLogo";

export default function HeroHeader() {
  return (
    <header className="topbar">
      <BrandLogo />
      <AvailabilityStatus />
    </header>
  );
}