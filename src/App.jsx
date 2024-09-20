import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { ToneMappingMode, BlendFunction } from "postprocessing";
import { Noise, EffectComposer, ToneMapping, TiltShift2, Bloom } from "@react-three/postprocessing";
import { Tower } from "./Tower";

const Scene = () => {
  const { viewport } = useThree();

  const viewportRatio = viewport.width / viewport.height;
  const scaleDimension = viewport.width < viewport.height ? viewport.width : viewport.height;
  const scaleFactor = viewportRatio < 0.65 ? scaleDimension / 5.5 : scaleDimension / 10;

  return (
    <>
      <Tower scale={scaleFactor} position={[scaleFactor * 1.2, scaleFactor * 2.6, 0]} />
      <pointLight position={[-2, 5, 6]} intensity={1516} decay={1.8} distance={10} castShadow shadow-bias={0} />
    </>
  );
};

const App = () => {
  return (
    <Canvas dpr={[1, 2]} orthographic camera={{ zoom: 220, position: [-2, 2, 9], rotation: [0, 0, 0] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.3}
        minPolarAngle={Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 2000}
        minAzimuthAngle={-Math.PI / 6}
      />
      <Scene />
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.NEUTRAL} />
        <Bloom mipmapBlur intensity={0.3} luminanceThreshold={0.3} levels={3} luminanceSmoothing={0.4} />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
