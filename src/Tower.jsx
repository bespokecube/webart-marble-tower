import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Marble } from "./Marble";
import * as THREE from "three";

export function Tower(props) {
  const { nodes, materials } = useGLTF("/marble-tower.glb");
  const texture = useTexture("./webart-marble-tower.jpg");
  texture.flipY = false;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Cube027.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_1.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_2.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_3.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_4.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_5.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_6.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_7.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_8.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_9.geometry} material={material} />

        <Marble position={[-2.3, -6.485, 1.75]} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble-tower.glb");
