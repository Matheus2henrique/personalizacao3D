import { useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function GlbClothing({
  modelPath,
  color,
  scale = 1.8,
  position = [0, -2.2, 0],
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef(null);
  const opacityRef = useRef(0);

  const clone = useMemo(() => {
    const s = scene.clone();
    s.traverse((child) => {
      if (child.isMesh && child.material) {
        if (!child.material.color) return;
        child.material = child.material.clone();
        child.material.color.set(color);
        child.material.needsUpdate = true;
        child.material.transparent = true;
        child.material.opacity = 0;
        child.material.depthWrite = false;
        child.material.renderOrder = 1;
      }
    });
    return s;
  }, [scene, color]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (opacityRef.current < 1) {
      opacityRef.current = Math.min(opacityRef.current + 0.04, 1);
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material && child.material.color) {
          child.material.opacity = opacityRef.current;
          child.material.renderOrder = 1;
          child.material.depthWrite = opacityRef.current > 0.99;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
    </group>
  );
}
