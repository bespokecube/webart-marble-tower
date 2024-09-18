import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Marble(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/marble.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action.play();
      action.setLoop(THREE.LoopRepeat);
    }
  }, [actions, names]);

  const metalMaterial = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.6,
    color: 0x999999,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh name='BALL' geometry={nodes.BALL.geometry} material={metalMaterial} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble.glb");
