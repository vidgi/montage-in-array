import "./App.css";

import { Suspense } from "react";

import { Canvas } from "react-three-fiber";
import { Loader, Html, OrbitControls } from "@react-three/drei";
import vishu from "./vishu_small.jpeg";
import gradient from "./gradient-image.png";
import bayou from "./bayou.jpg";

import { Leva, useControls } from "leva";

function App() {
  const config = useControls({
    //montage: { value: 1, min: 1, max: 5, step: 1 },
    image: {
      options: {
        "1: Vishu": vishu,
        "2: Bayou": bayou,
        "3: Gradient": gradient,
      },
    },
  });
  return (
    <div className="App">
      <Leva titleBar={false} />
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Suspense fallback={null}>
          {/* <group transform position={[20, 0, -20]}> */}

          <MontageImage position={[0, 0, 0]} image={config.image} rotation={[0, -60 * (Math.PI / 180), 0]} />
          <MontageImage position={[5, 0, 10]} image={config.image} rotation={[0, -40 * (Math.PI / 180), 0]} />
          <MontageImage position={[17, 0, 15]} image={config.image} rotation={[-20 * (Math.PI / 180), -20 * (Math.PI / 180), 0]} />

          {/* <MontageImage position={[0, 10, 10]} image={gradient} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
          <MontageImage position={[0, 20, 10]} image={gradient} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} /> */}
        </Suspense>
        <ambientLight />
        <OrbitControls
        // minDistance={20}
        // maxDistance={20}
        // autoRotate="false"
        // autoRotateSpeed={0.4}
        />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;

function MontageImage(props) {
  return (
    <Html transform position={props.position} rotation={props.rotation}>
      <img unselectable="on" src={props.image} alt="thumbnail" width="650" height="400" />
    </Html>
  );
}
