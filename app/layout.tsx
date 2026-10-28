import type { Metadata } from "next";
import "./globals.css";
import "../styles/hero-sequence.css";
import "../styles/portfolio-footer.css";
import "../styles/projects.css";
import "../styles/professional-contributions.css";
import "../styles/story-section.css";
import "../styles/tech-stack.css";

export const metadata: Metadata = {
  title: "Portfólio Caio",
  description: "Portfolio interativo com narrativa controlada pelo scroll.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
