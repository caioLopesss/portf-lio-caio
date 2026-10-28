export type TechStackItem = {
  name: string;
  mark: string;
  type: string;
  detail: string;
};

export const TECH_STACK: TechStackItem[] = [
  { name: "React", mark: "R", type: "FRONT-END", detail: "Interfaces dinâmicas e componentes reutilizáveis." },
  { name: "Next.js", mark: "N", type: "FRONT-END", detail: "Aplicações web rápidas e escaláveis." },
  { name: "TypeScript", mark: "TS", type: "LINGUAGEM", detail: "Código mais seguro e fácil de manter." },
  { name: "JavaScript", mark: "JS", type: "LINGUAGEM", detail: "A base das experiências interativas na web." },
  { name: "Node.js", mark: "ND", type: "BACK-END", detail: "Serviços e integrações no servidor." },
  { name: "React Native", mark: "RN", type: "MOBILE", detail: "Aplicativos para dispositivos móveis." },
  { name: "Strapi", mark: "S", type: "CMS", detail: "Conteúdo gerenciável e APIs sob medida." },
  { name: "PostgreSQL", mark: "PG", type: "DADOS", detail: "Dados estruturados com consistência." },
  { name: "MongoDB", mark: "M", type: "DADOS", detail: "Modelagem flexível para aplicações." },
  { name: "Tailwind CSS", mark: "TW", type: "ESTILO", detail: "Interfaces responsivas com precisão." },
];