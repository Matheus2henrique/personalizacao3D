import { useGLTF } from "@react-three/drei";

export default function Mannequin({ shirt }) {
  const { scene } = useGLTF("/store_mannequin.glb");

  // muda cor conforme roupa
  const colors = {
    polo: "#0050b4",
    regata: "#28a745",
    camiseta: "#ff6b00",
    social: "#f2f2f2",
  };

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(colors[shirt]);
    }
  });

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -2, 0]}
    />
  );
}

useGLTF.preload("/store_mannequin.glb");