export const modelConfig = {
  polo: {
    path: "/white_polo.glb",
    scale: 1.8,
    position: [-0.4, -2.2, 0.23],
    rotation: [0, Math.PI, 0],
  },
  camiseta: {
    path: "/blusa.glb",
    scale: 1.3,
    position: [0, -2.2, 0],
    rotation: [0, 0, 0],
  },
  regata: {
    path: "/blusa.glb",
    scale: 1.0,
    position: [0, -3.2, 0],
    rotation: [0, 0, 0],
  },
};

export const clothingData = {
  polo: {
    label: "Polo",
    colors: [
      { name: "Azul", value: "#1a56db" },
      { name: "Preto", value: "#111827" },
      { name: "Branco", value: "#f8fafc" },
    ],
  },
  regata: {
    label: "Regata",
    colors: [
      { name: "Verde", value: "#059669" },
      { name: "Vermelho", value: "#dc2626" },
      { name: "Cinza", value: "#6b7280" },
    ],
  },
  camiseta: {
    label: "Camiseta",
    colors: [
      { name: "Vermelho", value: "#dc2626" },
      { name: "Navio", value: "#1e293b" },
      { name: "Branco", value: "#f8fafc" },
    ],
  },
  social: {
    label: "Social",
    colors: [
      { name: "Branco", value: "#f8fafc" },
      { name: "Azul Claro", value: "#60a5fa" },
      { name: "Preto", value: "#111827" },
    ],
  },
};

export function getDefaultColor(type) {
  return clothingData[type]?.colors[0]?.value || "#ffffff";
}

export const clothingTypes = Object.keys(clothingData);
