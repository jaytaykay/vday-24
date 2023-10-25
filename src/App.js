import {
  ScrollControls,
  Scroll,
  Environment,
  Sparkles,
  OrbitControls,
} from "@react-three/drei";
// import { Laptop } from "./components/Laptop";
import baffle from "baffle";
import { useEffect, useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./utils/angle";
import { isMobile } from "./utils/mobile";
import "./App.css";
import Card from "./components/Card";
import { projects } from "./projectCopy";
import { Laptop } from "./components/Laptop";
import {Loader} from "./components/Loader";

function App() {
  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: "█▓▒░J█▓▒░O█▓▒░S█▓▒░H█▓▒░U█▓▒░A█▓▒░",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);

    isMobile(setIsMobileDevice);
  }, []);

  // remove loading screen
  useEffect(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  }, []);

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const orbitControlRef = useRef(null);
  useFrame((state) => {
    if (!isMobileDevice && orbitControlRef.current) {
      const { x, y } = state.mouse;
      // when camera moves all the way left, rotate camera to the right by 45 degrees
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(20));
      // when camera moves all the way up, rotate camera down by 5 degrees. default angle is 80 degrees
      orbitControlRef.current.setPolarAngle(
        angleToRadians(80) + y * angleToRadians(5)
      );
      orbitControlRef.current.update();
    }
  });

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
      />
      <Environment
        background={false} // dont keep the environment in the background
        files={[
          "./models/environment/px.png",
          "./models/environment/nx.png",
          "./models/environment/py.png",
          "./models/environment/ny.png",
          "./models/environment/pz.png",
          "./models/environment/nz.png",
        ]}
      />
      <Suspense fallback={<Loader />}>
        <ScrollControls pages={5} damping={0.1}>
          {/* put the laptop here so it stays while you scroll */}

          <Laptop scale={2} />
          <Sparkles speed={1.5} count={200} scale={5} noise={[1, 1, 1]} />

          <Scroll>{/* Canvas elements here will scroll */}</Scroll>
          <Scroll html style={{ width: "100%" }}>
            {/* DOM contents here will scroll along */}
            <h1 className="title main-title">JOSHUA</h1>

            <div className="arrow-container">
              <i className="arrow down"></i>
            </div>

            <div className="row row-1 ">
              <h2>A Sophomore Computer Science student.</h2>
              <p>
                Front-end developer. <br /> Machine learning enthusiast.
                <br /> Unreal Engine engineer.
                <br /> Bass acapella singer.
                <br /> Avid Gamer.
              </p>
              <a
                href={
                  "https://docs.google.com/document/d/1ftkXOYaxm1ECV2ZQ-pm0cU0H1Wn2UfyV06Llt3iWLKs/edit?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Resume</button>
              </a>
            </div>

            <div className="row row-2 col col-1">
              <h2>My Projects</h2>
              <h3>HungryBees</h3>
              <p>
                A mobile application built in Java. <br /> Form or join groupbuy
                orders at your convenience
              </p>
              <a
                href={"https://tinyurl.com/hungrybees"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Read more</button>
              </a>
              <h3>Project GSFI</h3>
              <p>
                A linear regression model built in pandas on a dataset of 108
                countries. <br /> Visit the Flask website to predict existing or
                new country's food security index
              </p>
              <a
                href={"https://clickbeat.live/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Read more</button>
              </a>
              <h3>Web Developer at SPORES Singapore</h3>
              <p>
                Developed an innovative Telegram bot and web app to support the
                Singapore government's initiative to revitalize Orchard Road and
                attract a younger audience <br />
                The app bridges the physical and digital worlds, creating an
                immersive experience for visitors and encouraging more foot
                traffic to the area
              </p>
            </div>

            <div className="row row-3">
              <h2>Credits</h2>
              <p>
                "CyberPunk Laptop" (https://skfb.ly/6SvyM) by Blue Odym is
                licensed under Creative Commons Attribution
                (http://creativecommons.org/licenses/by/4.0/).
              </p>
              <p>
                "Shanghai Bund" (https://polyhaven.com/a/shanghai_bund) by Greg
                Zaal on PolyHaven
              </p>
            </div>

            <div className="row row-4">
              <h2>I'd love to hear from you.</h2>
            </div>

            <a
              href={"https://www.linkedin.com/in/jaytaykay/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="reach-out-btn">Reach out</button>
            </a>
          </Scroll>
        </ScrollControls>
      </Suspense>

      {!isMobileDevice && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          ref={orbitControlRef}
        />
      )}
    </>
  );
}

export default App;
