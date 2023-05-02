import { ScrollControls, Scroll, Environment, Sparkles, OrbitControls } from "@react-three/drei";
import { Laptop } from "./components/Laptop";
import baffle from "baffle";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./utils/angle";

function App() {

  useEffect(() => {
    const target = baffle('.title')
    target.set({
      characters: '█▓▒░J█▓▒░O█▓▒░S█▓▒░H█▓▒░U█▓▒░A█▓▒░',
      speed: 100
    })
    target.start()
    target.reveal(1000, 1000)
  })

  const orbitControlRef = useRef(null)
  useFrame((state) => {
    const { x, y } = state.mouse
    console.log(x, y)
    // when camera moves all the way left, rotate camera to the right by 45 degrees
    orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(20));
    // orbitControlRef.current.setPolarAngle(y * angleToRadians(5));
    orbitControlRef.current.setPolarAngle(angleToRadians(80)+ y * angleToRadians(5));
    orbitControlRef.current.update()
  })

  useEffect(() => {
    if (!!orbitControlRef.current) {
      console.log(orbitControlRef.current)
    }
  })

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} />
      <Environment
        background={false} // dont keep the environment in the background
        files={['./models/environment/px.png', './models/environment/nx.png', './models/environment/py.png', './models/environment/ny.png', './models/environment/pz.png', './models/environment/nz.png']}
      />


      <ScrollControls pages={5} damping={0.1}>
        {/* put the laptop here so it stays while you scroll */}
        <Laptop scale={2} />
        <Sparkles
          speed={1.5}
          count={200}
          scale={5}
          noise={[1, 1, 1]}
        />

        <Scroll>
          {/* Canvas elements here will scroll */}
        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          {/* DOM contents here will scroll along */}
          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `40vh`, left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>JOSHUA</h1>

          <div class="arrow-container" style={{position: 'absolute', top: `90vh`, left: '50%'}}>
            <i class="arrow down"></i>
          </div>

          <div className='row' style={{ position: 'absolute', top: `132vh` }}>
            <h2>A Sophomore Computer Science student.</h2>
            <p style={{ maxWidth: '400px' }}>Front-end developer. <br /> Machine learning enthusiast.<br /> Unreal Engine engineer.<br /> Bass acapella singer.<br /> Avid Gamer.</p>
            <a href={"https://docs.google.com/document/d/1ftkXOYaxm1ECV2ZQ-pm0cU0H1Wn2UfyV06Llt3iWLKs/edit?usp=sharing"} target="_blank" rel="noopener noreferrer">
              <button>View Resume</button>
            </a>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh` }}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
              <h2 style={{ maxWidth: "440px" }}>My Projects</h2>
              <h3 style={{ maxWidth: "440px" }}>HungryBees</h3>
              <p style={{ maxWidth: '440px' }}>A mobile application built in Java. <br /> Form or join groupbuy orders at your convenience</p>
              <a href={"https://tinyurl.com/hungrybees"} target="_blank" rel="noopener noreferrer">
                <button>Read more</button>
              </a>
              <h3 style={{ maxWidth: "440px" }}>Project GSFI</h3>
              <p style={{ maxWidth: '440px' }}>A linear regression model built in pandas on a dataset of 108 countries. <br /> Visit the Flask website to predict existing or new country's food security index</p>
              <a href={"https://clickbeat.live/"} target="_blank" rel="noopener noreferrer">
                <button>Read more</button>
              </a>
              <h3 style={{ maxWidth: "440px" }}>Web Developer at SPORES Singapore</h3>
              <p style={{ maxWidth: '440px' }}>Developed an innovative Telegram bot and web app to support the Singapore government's initiative to revitalize Orchard Road and attract a younger audience <br/>
              The app bridges the physical and digital worlds, creating an immersive experience for visitors and encouraging more foot traffic to the area</p>
            </div>
          </div>

          <div className='row' style={{ position: 'absolute', top: `360vh` }}>
            <h2 style={{ maxWidth: "440px" }}>Credits</h2>
            <p style={{ maxWidth: '440px' }}>"CyberPunk Laptop" (https://skfb.ly/6SvyM) by Blue Odym is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
            <p style={{ maxWidth: '440px' }}>"Shanghai Bund" (https://polyhaven.com/a/shanghai_bund) by Greg Zaal on PolyHaven</p>
          </div>
          <div style={{position: 'absolute',
            top: '430vh',
            left: '50%',
            transform: `translate(-50%,-50%)`,
            backgroundColor: 'rgba(0,0,0, 0.7)', // change background color and opacity as needed
            borderRadius: '10px',
            padding: '10px 20px', // adjust padding as needed
          }}>
            <h2 >I'd love to hear from you.</h2>
          </div>
          <a href={"https://www.linkedin.com/in/jaytaykay/"} target="_blank" rel="noopener noreferrer">
            <button style={{ position: 'absolute', top: `480vh`, left: '55%', scale: '200%', transform: `translate(-50%,-50%)` }}>Reach out</button>
          </a>
        </Scroll>
      </ScrollControls>

      <OrbitControls enablePan={false} enableZoom={false} ref={orbitControlRef} />
    </>
  );
}

export default App;
