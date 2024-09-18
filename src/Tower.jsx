import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Marble } from "./Marble";
import * as THREE from "three";

export function Tower(props) {
  const { nodes, materials } = useGLTF("/marble-tower.glb");
  const texture = useTexture("./webart-marble-tower.png");
  texture.flipY = false;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.towers.geometry} material={material} />

        <Marble position={[-2.3, -6.485, 1.75]} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble-tower.glb");
