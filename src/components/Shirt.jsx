import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import GlbClothing from "./GlbClothing";
import { modelConfig } from "../clothingData";

function makeMat(color) {
  return <meshStandardMaterial color={color} roughness={0.6} renderOrder={1} />;
}

function Torso({ color }) {
  return (
    <mesh position={[0, 0.15, 0]}>
      <cylinderGeometry args={[0.55, 0.45, 1.5, 24]} />
      {makeMat(color)}
    </mesh>
  );
}

function CollarSocial({ color }) {
  return (
    <group position={[0, 0.88, 0]}>
      <mesh position={[0.08, -0.02, -0.08]} rotation={[0.2, 0, -0.2]}>
        <boxGeometry args={[0.12, 0.08, 0.04]} />
        {makeMat(color)}
      </mesh>
      <mesh position={[-0.08, -0.02, -0.08]} rotation={[0.2, 0, 0.2]}>
        <boxGeometry args={[0.12, 0.08, 0.04]} />
        {makeMat(color)}
      </mesh>
    </group>
  );
}

function Sleeve({ side, length, color }) {
  const x = side === "left" ? -0.55 : 0.55;
  const rotZ = side === "left" ? 0.3 : -0.3;
  return (
    <mesh position={[x, 0.55, 0]} rotation={[0, 0, rotZ]}>
      <cylinderGeometry args={[0.13, 0.1, length, 12]} />
      {makeMat(color)}
    </mesh>
  );
}

function renderProcedural(type, color) {
  switch (type) {
    case "regata":
      return (
        <group>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.4, 0.45, 1.3, 24]} />
            {makeMat(color)}
          </mesh>
          <mesh position={[-0.3, 0.6, 0]}>
            <boxGeometry args={[0.08, 0.3, 0.08]} />
            {makeMat(color)}
          </mesh>
          <mesh position={[0.3, 0.6, 0]}>
            <boxGeometry args={[0.08, 0.3, 0.08]} />
            {makeMat(color)}
          </mesh>
        </group>
      );

    case "social":
      return (
        <group>
          <Torso color={color} />
          <Sleeve side="left" length={0.55} color={color} />
          <Sleeve side="right" length={0.55} color={color} />
          <CollarSocial color={color} />
        </group>
      );

    default:
      return <Torso color={color} />;
  }
}

export default function Shirt({ type, color }) {
  const groupRef = useRef(null);
  const opacityRef = useRef(0);

  const cfg = modelConfig[type];

  useFrame(() => {
    if (!groupRef.current) return;
    if (cfg) return;

    if (opacityRef.current < 1) {
      opacityRef.current = Math.min(opacityRef.current + 0.04, 1);
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = opacityRef.current;
          child.material.depthWrite = opacityRef.current > 0.99;
        }
      });
    }
  });

  if (cfg) {
    return (
      <GlbClothing
        modelPath={cfg.path}
        color={color}
        scale={cfg.scale}
        position={cfg.position}
        rotation={cfg.rotation}
      />
    );
  }

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {renderProcedural(type, color)}
    </group>
  );
}
