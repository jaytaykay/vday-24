import { Html, OrbitControls, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./utils/angle";
import { isMobile } from "./utils/mobile";
import "./App.css";
import { Loader } from "./components/Loader";
import { MinecraftBee } from "./components/MinecraftBee";
import { CursorEffects } from "./components/CursorEffects";

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState([2, 0, 2]);
  const [yesButtonSize, setYesButtonSize] = useState(16);
  const [numNoClicks, setNumNoClicks] = useState(0);

  useEffect(() => {
    isMobile(setIsMobileDevice);
  }, []);

  const onNoClick = () => {
    const randomX = Math.random() * 4 - 1;
    const randomY = Math.random() * 3 - 1;

    console.log(randomX, randomY);

    setNoButtonPosition([randomX, randomY, 2]);
    setYesButtonSize(yesButtonSize + 8);
    setNumNoClicks(numNoClicks + 1);
  };
  const onYesClick = () => {
    setIsAccepted(true);
  };

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
      {!isMobileDevice && (
        <Html>
          <CursorEffects />
        </Html>
      )}
      <color attach="background" args={["#ff8ad4"]} />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
      />

      <Sparkles speed={1} count={5000} scale={10} />
      {/* Asking panel */}
      {!isAccepted && (
        <>
          {/* Panel */}
          <Html position={[-1, 0, 1]} className="noPointerEvents">
            <div className="bg-purple-300 p-8 text-center rounded-lg max-w-md mx-auto my-8 translate-x-0.5 min-w-max">
              <h1 className="text-4xl font-bold text-white mb-4">HI NATALIE</h1>
              <p className="text-xl text-white mb-8">
                Will you be my Valentine? 😊
              </p>
              <p>Number of 😭: {numNoClicks}</p>
            </div>
          </Html>
          {/* Yes button */}
          <Html position={[-2, 0, 2]}>
            <button
              className="bg-red-500 text-white font-bold py-4 px-8 rounded hover:bg-red-700 transition duration-300 text-3xl"
              style={{
                fontSize: yesButtonSize,
                transform: "scale(2)",
              }}
              onClick={() => onYesClick()}
            >
              Yes
            </button>
          </Html>
          {/* NO button */}
          <Html position={noButtonPosition}>
            <button
              className="bg-gray-500 text-white font-bold py-4 px-8 rounded hover:bg-gray-700 transition duration-300 text-3xl"
              style={{
                transform: "scale(2)",
              }}
              onClick={() => onNoClick()}
            >
              No
            </button>
          </Html>
        </>
      )}
      {/* after accept */}
      {isAccepted && (
        <Html position={[-1, 0, 2]}>
          <div className="bg-purple-300 p-8 text-center rounded-lg max-w-md mx-auto my-8 min-w-max">
            <h1 className="text-4xl font-bold text-white mb-4">
              Thank you!! See you in Edinburgh in May 💖
            </h1>
            <p>😊😊😊😊😊😊</p>
          </div>
        </Html>
      )}

      <Suspense fallback={<Loader />}>
        <MinecraftBee
          scale={15}
          position={[-2, -2, 0]}
          rotation={[0, (-3 * Math.PI) / 8, 0]}
          isHappy={isAccepted}
        />
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
