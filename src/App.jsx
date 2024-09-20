import React, { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ToneMappingMode } from "postprocessing";
import { Perf } from "r3f-perf";
import { EffectComposer, ToneMapping, Bloom } from "@react-three/postprocessing";
import { Tower } from "./Tower";
import { Preloader } from "./Preloader";

const Scene = () => {
  const { viewport } = useThree();

  const viewportRatio = viewport.width / viewport.height;
  const scaleDimension = viewport.width < viewport.height ? viewport.width : viewport.height;
  const scaleFactor = viewportRatio < 0.65 ? scaleDimension / 5.5 : scaleDimension / 10;

  return (
    <>
      <Tower scale={scaleFactor} position={[scaleFactor * 1.2, scaleFactor * 2.6, 0]} />
      <pointLight position={[-2, 5, 6]} intensity={1516} decay={1.8} distance={10} />
    </>
  );
};

const App = () => {
  const [isPerfMonitorEnabled, setIsPerfMonitorEnabled] = useState(false);

  return (
    <>
      <button className='perf-monitor-toggle-btn' onClick={() => setIsPerfMonitorEnabled(prevState => !prevState)}></button>

      <Canvas dpr={[1, 2]} orthographic camera={{ zoom: 220, position: [-2, 2, 9], rotation: [0, 0, 0] }}>
        {isPerfMonitorEnabled && <Perf position='top-left' />}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 2000}
          minAzimuthAngle={-Math.PI / 6}
        />
        <Suspense fallback={<Preloader />}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <ToneMapping mode={ToneMappingMode.NEUTRAL} />
          <Bloom mipmapBlur intensity={0.3} luminanceThreshold={0.3} levels={3} luminanceSmoothing={0.4} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
