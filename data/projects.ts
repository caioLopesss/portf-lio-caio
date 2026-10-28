export type Project = {
  name: string;
  description: string;
  url: string;
  category: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Ayrton Senna",
    description: "Criei o vídeo com IA e pensei no encerramento com a assinatura do Senna; o carro interativo completa a homenagem.",
    url: "https://senna-six-omega.vercel.app/",
    category: "TRIBUTO INTERATIVO",
  },
  {
    name: "Mundo dos Dragões",
    description: "Modelo 3D de um dragão e um hero interativo que convida a explorar a experiência.",
    url: "https://dragon2-sigma.vercel.app/",
    category: "EXPERIÊNCIA INTERATIVA",
  },
  {
    name: "Sigma Imóveis",
    description: "Plataforma imobiliária para São João del-Rei, com busca, catálogo de imóveis e apresentação dos bairros da cidade.",
    url: "https://imobiliaria-seven-zeta.vercel.app/",
    category: "PLATAFORMA IMOBILIÁRIA",
  },
];