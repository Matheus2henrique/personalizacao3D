import { useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Box3, Vector3 } from "three";

function applyRotationFix(scene) {
  const box = new Box3().setFromObject(scene);
  const size = box.getSize(new Vector3());

  if (size.y >= size.x && size.y >= size.z) return;

  if (size.x > size.z) {
    scene.rotation.x = -Math.PI / 2;
  } else {
    scene.rotation.z = Math.PI / 2;
  }

  scene.updateMatrixWorld(true);

  const newBox = new Box3().setFromObject(scene);
  const newSize = newBox.getSize(new Vector3());
  const center = newBox.getCenter(new Vector3());

  scene.position.x = -center.x;
  scene.position.y = -center.y;
  scene.position.z = -center.z;
}

export default function Mannequin() {
  const { scene } = useGLTF("/store_mannequin.glb");
  const applied = useRef(false);

  const clone = useMemo(() => {
    const s = scene.clone();

    if (!applied.current) {
      applyRotationFix(s);
      applied.current = true;
    }

    s.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.depthWrite = false;
        child.material.renderOrder = 0;
        child.material.needsUpdate = true;
      }
    });

    return s;
  }, [scene]);

  return (
    <primitive
      object={clone}
      scale={2}
      position={[0, -2, 0]}
    />
  );
}

useGLTF.preload("/store_mannequin.glb");
