import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Marble } from "./Marble";
import * as THREE from "three";
import { Flag } from "./Flag";

export function Tower(props) {
  const { nodes } = useGLTF("/marble-tower.glb");
  const texture = useTexture("./webart-marble-tower.png");
  texture.flipY = false;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.towers.geometry} material={material} />
        <Marble position={[-2.3, -6.485, 1.75]} />
        <Flag position={[-1.83, 1.15, 0.3]} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble-tower.glb");
