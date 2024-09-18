import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Marble(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/marble.glb");
  const { actions, names } = useAnimations(animations, group);

  const texture = useTexture("./webart-marble-tower.jpg");

  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action.play();
      action.setLoop(THREE.LoopRepeat);
    }
  }, [actions, names]);

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh name='BALL' castShadow receiveShadow geometry={nodes.BALL.geometry} material={material} />
      </group>
    </group>
  );
}

useGLTF.preload("/marble.glb");
