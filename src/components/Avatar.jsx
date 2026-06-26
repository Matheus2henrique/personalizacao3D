import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Mannequin from "./Mannequin";

export default function Avatar({ shirt }) {
  return (
    <div className="viewer">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Mannequin shirt={shirt} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}