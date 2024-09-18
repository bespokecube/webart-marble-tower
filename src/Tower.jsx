import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Marble } from "./Marble";

export function Tower(props) {
  const { nodes, materials } = useGLTF("/marble-tower.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Cube027.geometry} material={materials._ROOF} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_1.geometry} material={materials._METAL} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_2.geometry} material={materials._METAL_DARK} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_3.geometry} material={materials._WALLS} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_4.geometry} material={materials._WALLS_ACCENT_DARK} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_5.geometry} material={materials._BRICK} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_6.geometry} material={materials._CHECKER} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_7.geometry} material={materials._SIDE} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_8.geometry} material={materials._POT} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_9.geometry} material={materials._CACTUS} />

        <Marble position={[-2.3, -6.485, 1.75]} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble-tower.glb");
