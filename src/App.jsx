import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Tower } from "./Tower";

const Scene = () => {
  const { viewport } = useThree();

  const scaleDimension = viewport.width < viewport.height ? viewport.width : viewport.height;
  const scaleFactor = scaleDimension / 10;

  return (
    <>
      <Tower scale={scaleFactor} position={[scaleFactor, scaleFactor * 3, 0]} />
      <ambientLight intensity={4.5} color={"#ffffff"} />
    </>
  );
};

const App = () => {
  return (
    <Canvas dpr={[1, 2]} orthographic camera={{ zoom: 220, position: [-2, 2, 9], rotation: [0, 0, 0] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default App;
