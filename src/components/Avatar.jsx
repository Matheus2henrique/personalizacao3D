import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import Mannequin from "./Mannequin";
import Shirt from "./Shirt";
import { modelConfig } from "../clothingData";

Object.values(modelConfig).forEach((cfg) => useGLTF.preload(cfg.path));

export default function Avatar({ shirt, color }) {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState({ shirt, color });
  const [transitionKey, setTransitionKey] = useState(0);
  const prev = useRef({ shirt, color });

  useEffect(() => {
    const p = prev.current;
    if (shirt !== p.shirt || color !== p.color) {
      prev.current = { shirt, color };
      setVisible(false);

      const timer = setTimeout(() => {
        setCurrent({ shirt, color });
        setTransitionKey((k) => k + 1);
        setVisible(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [shirt, color]);

  return (
    <div className="viewer">
      <Canvas camera={{ position: [0, 1, 3.8], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 6, 5]} intensity={2.5} />
        <directionalLight position={[-4, 3, -4]} intensity={0.6} />
        <hemisphereLight args={["#ddeeff", "#222233", 0.5]} />

        <Suspense fallback={null}>
          <Mannequin />
          {visible && (
            <Shirt
              key={transitionKey}
              type={current.shirt}
              color={current.color}
            />
          )}
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2.5}
          maxDistance={7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
