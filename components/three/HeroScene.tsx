"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";

function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        color="#d4b36a"
        transparent
        opacity={0.55}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useFrame((state) => {
    pointer.current.x = THREE.MathUtils.lerp(pointer.current.x, state.pointer.x, 0.06);
    pointer.current.y = THREE.MathUtils.lerp(pointer.current.y, state.pointer.y, 0.06);
    if (typeof window !== "undefined") {
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      scroll.current = THREE.MathUtils.lerp(scroll.current, window.scrollY / max, 0.05);
    }
    if (group.current && !reduced) {
      group.current.rotation.y += 0.004;
      group.current.rotation.x = pointer.current.y * 0.28;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.14;
    }
    if (ringA.current && !reduced) ringA.current.rotation.z += 0.004;
    if (ringB.current && !reduced) ringB.current.rotation.x -= 0.003;
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointer.current.x * 0.9,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      0.15 + pointer.current.y * 0.35 - scroll.current * 1.4,
      0.04
    );
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 6.2 + scroll.current * 1.8, 0.04);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          color="#1b1c24"
          metalness={0.92}
          roughness={0.16}
          emissive="#5a4320"
          emissiveIntensity={0.55}
        />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#d4b36a" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.48, 0]} />
        <meshBasicMaterial color="#7ebfb8" transparent opacity={0.92} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[2.35, 0.018, 12, 120]} />
        <meshBasicMaterial color="#d4b36a" transparent opacity={0.7} />
      </mesh>
      <mesh ref={ringB} rotation={[0.3, Math.PI / 3, 0.4]}>
        <torusGeometry args={[2.8, 0.01, 12, 140]} />
        <meshBasicMaterial color="#7ebfb8" transparent opacity={0.45} />
      </mesh>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.5} floatIntensity={reduced ? 0 : 0.6}>
        <mesh position={[2.3, 0.7, -0.4]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#9aa7c2" metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={reduced ? 0 : 1.1} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.5}>
        <mesh position={[-2.1, -0.8, 0.6]}>
          <dodecahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#d4b36a" metalness={0.6} roughness={0.3} emissive="#d4b36a" emissiveIntensity={0.15} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const count = reduced ? 0 : mobile ? 90 : 280;

  return (
    <>
      <fog attach="fog" args={["#050507", 10, 20]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 4]} intensity={26} color="#d4b36a" distance={16} />
      <pointLight position={[-5, -2, 2]} intensity={14} color="#7ebfb8" distance={14} />
      <directionalLight position={[2, 6, 4]} intensity={0.8} />
      <group position={mobile ? [0, 0.85, 0] : [2.05, 0.1, 0]}>
        <Core reduced={reduced} />
      </group>
      {count ? <Particles count={count} /> : null}
    </>
  );
}