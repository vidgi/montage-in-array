import "./App.css";

import { Suspense, useRef } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import {
  Image,
  Environment,
  Loader,
  FirstPersonControls,
  PointerLockControls,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import soundHorn from "./sound-horn.jpeg";

function App() {
  const videos = [
    "OFfiljkfmx8",
    "0Szr5Dcwn4Y",
    "sBXtJGLhSk8",
    "Ysf6pcyeBsY",
    "au6T5QEoZ4k",
    "zuXOiV6U7tk",
    "xUAgawZAi5g",
    "coXTMUhWFmY",
    "FzjOp-qIQOQ",
    "AQ8-YXveL2o",
    "YO2R3SxhPeA",
    "lhfs1CzzUPM",
    "_95Rt3uYf7M",
    "Vu0nRz_bQ0Y",
    "u24e43iW9KE",
    "k3MD7TaCXLA",
    "cQZDH4NWmaU",
    "GQmgPnnf18Y",
    "ZAn3JdtSrnY",
    "q-XH92Wie0U",
    "8EnSTG8G1t8",
    "fYEAflCO4Eo",
    "EIFlhzdILMc",
    "BLmqr4iKpUs",
    "TbJE-KVZvTA",
    "53I6fcFXqxo",
    "ncBPcx4RdbE",
    "f9X1C7pTu-M",
    "eVOWYeZm9v8",
    "CrFcxR4Y6C0",
    "_bhJzXTf6KE",
    "tl9SRsPbWLM",
    "OTHHeIAYfuU",
    "BjC0KUxiMhc",
    "GtBmZYqZZjU",
    "nnYTNRADQQ4",
    "EWcTp1r_Nls",
    "-5Ae-LhMIG0",
    "AcukstLwNPw",
    "D5qUpJo_Gac",
    "XDpoBc8t6gE",
    "qRLReDmuIf8",
    "BqnG_Ei35JE",
    "6C5sB6AqJkM",
    "XDN2wbm6zi8",
    "wtZskz4zo24",
    "sn3cHUtNZKo",
    "cFElidiwxYU",
    "-d3xu4sToI8",
    "PPZZmfcLxFI",
    "ATNJAYcIL04",
    "VHqEXaOzxbA",
    "LluBWyXztvQ",
    "xUEg2mXJx0M",
    "-Js_-DtskxM",
    "t5p5uCgY-tY",
    "hVyjLwKnOCk",
    "uIjU0do0PqU",
    "2KkMyDSrBVI",
    "pIz2K3ArrWk",
  ];
  return (
    <div className="App">
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Suspense fallback={null}>
          <group transform position={[20, 0, -20]}>
            {/* <YoutubeThumbnail link = {videos[0]}/> */}

            {/* <YouTubeEmbed position={[-5, -20, 51]} link={videos[0]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, -10, 51]} link={videos[1]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 0, 51]} link={videos[2]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 10, 51]} link={videos[3]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 20, 51]} link={videos[4]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[6, -20, 40]} link={videos[5]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, -10, 40]} link={videos[6]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 0, 40]} link={videos[7]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 10, 40]} link={videos[8]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 20, 40]} link={videos[9]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[10, -20, 25]} link={videos[10]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[10, -10, 25]} link={videos[11]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[10, 0, 25]} link={videos[12]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[10, 10, 25]} link={videos[13]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[10, 20, 25]} link={videos[14]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} /> */}

            <YouTubeEmbed position={[6, -20, 10]} link={videos[15]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, -10, 10]} link={videos[16]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 0, 10]} link={videos[17]} rotation={[0.5, -60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 10, 10]} link={videos[18]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[6, 20, 10]} link={videos[19]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-5, -20, -1]} link={videos[20]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, -10, -1]} link={videos[21]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 0, -1]} link={videos[22]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 10, -1]} link={videos[23]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-5, 20, -1]} link={videos[24]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-20, -20, -5]} link={videos[25]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, -10, -5]} link={videos[26]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 0, -5]} link={videos[27]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 10, -5]} link={videos[28]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 20, -5]} link={videos[29]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-35, -20, -1]} link={videos[30]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, -10, -1]} link={videos[31]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 0, -1]} link={videos[32]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 10, -1]} link={videos[33]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 20, -1]} link={videos[34]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />

            {/* <YouTubeEmbed position={[-46, -20, 10]} link={videos[35]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, -10, 10]} link={videos[36]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 0, 10]} link={videos[37]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 10, 10]} link={videos[38]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 20, 10]} link={videos[39]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} /> */}

            {/* <YouTubeEmbed position={[-50, -20, 25]} link={videos[40]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-50, -10, 25]} link={videos[41]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-50, 0, 25]} link={videos[42]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-50, 10, 25]} link={videos[43]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-50, 20, 25]} link={videos[44]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-46, -20, 40]} link={videos[45]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, -10, 40]} link={videos[46]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 0, 40]} link={videos[47]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 10, 40]} link={videos[48]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-46, 20, 40]} link={videos[49]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-35, -20, 51]} link={videos[50]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, -10, 51]} link={videos[51]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 0, 51]} link={videos[52]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 10, 51]} link={videos[53]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-35, 20, 51]} link={videos[54]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />

            <YouTubeEmbed position={[-20, -20, 55]} link={videos[55]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, -10, 55]} link={videos[56]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 0, 55]} link={videos[57]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 10, 55]} link={videos[58]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <YouTubeEmbed position={[-20, 20, 55]} link={videos[59]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} /> */}
          </group>
        </Suspense>
        <ambientLight />
        {/* <PointerLockControls /> */}
        <OrbitControls
        // minDistance={20}
        // maxDistance={20}
        // autoRotate="false"
        // autoRotateSpeed={0.4}
        />
        {/* <FirstPersonControls movementSpeed={20} lookSpeed={0} /> */}

        {/* <PerspectiveCamera position={[-20, 0, -20]} /> */}
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;

function YouTubeEmbed(props) {
  return (
    <Html transform position={props.position} rotation={props.rotation}>
      {/* <p>{props.link}</p> */}
      <img unselectable="on" src={soundHorn} alt="thumbnail" width="650" height="400" />
      {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* 1280 / 5, 853 */}
    </Html>
  );
}

// function YoutubeThumbnail(props) {
//   const ref = useRef()
//   return (<Image ref = {ref} url={"https://img.youtube.com/vi/OFfiljkfmx8/0.jpg"} />);
// }
