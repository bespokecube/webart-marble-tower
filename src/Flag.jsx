import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Flag(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/flag.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action.play();
      action.setLoop(THREE.LoopRepeat);
    }
  }, [actions, names]);

  const material = new THREE.MeshBasicMaterial({
    color: 0xd66f8d,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='FLAG001'
          geometry={nodes.FLAG001.geometry}
          morphTargetDictionary={nodes.FLAG001.morphTargetDictionary}
          morphTargetInfluences={nodes.FLAG001.morphTargetInfluences}
          material={material}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/flag.glb");
