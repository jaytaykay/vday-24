import {
  Environment,
  Html,
  OrbitControls,
  Sparkles,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./utils/angle";
import { isMobile } from "./utils/mobile";
import "./App.css";
import { Loader } from "./components/Loader";
import HelloKitty from "./components/Hello_kitty";
import { SphereGeometry } from "three";

function App() {
  useEffect(() => {
    isMobile(setIsMobileDevice);
  }, []);

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState([2, 0, 0]);
  const [yesButtonSize, setYesButtonSize] = useState(16);

  const onNoClick = () => {
    // Define the outer bounds for the spawn area
    const outerBound = 3; // Adjust this value to set the outer boundary for the button spawn area

    // Function to generate a random value outside the central rectangle
    const generateRandom = () => {
      const negative = Math.random() * -outerBound;
      const positive = Math.random() * outerBound;
      // 50% chance to choose between negative and positive range
      return Math.random() < 0.5 ? negative : positive;
    };

    // Generate random X and Y outside of -2 to 2 range
    let randomX = generateRandom();
    let randomY = generateRandom();

    // Ensure X and Y are outside the -2 to 2 range
    while (randomX > -2 && randomX < 2) {
      randomX = generateRandom();
    }
    while (randomY > -2 && randomY < 2) {
      randomY = generateRandom();
    }

    // Z can remain the same as it doesn't need to avoid a specific range
    const randomZ = Math.random() * 4 - 2;

    setNoButtonPosition([randomX, randomY, randomZ]);
    setYesButtonSize(yesButtonSize + 8);
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
      <color attach="background" args={["#ff8ad4"]} />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
      />

      <Sparkles
        speed={1}
        count={5000}
        scale={10}
        geometry={new SphereGeometry(2, 2, 2)}
      />
      {/* Asking panel */}
      {!isAccepted && (
        <>
          {/* Panel */}
          <Html position={[-1, 0, 1]} className="noPointerEvents">
            <div className="bg-purple-300 p-8 text-center rounded-lg max-w-md mx-auto my-8 translate-x-0.5">
              <h1 className="text-4xl font-bold text-white mb-4">HI NATALIE</h1>
              <p className="text-xl text-white mb-8">
                Will you be my Valentine? 😊
              </p>
            </div>
          </Html>
          {/* Yes button */}
          <Html position={[-2, 0, 0]}>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              style={{
                fontSize: yesButtonSize,
              }}
              onClick={() => onYesClick()}
            >
              Yes
            </button>
          </Html>
          {/* NO button */}
          <Html position={noButtonPosition}>
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
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
          <div className="bg-purple-300 p-8 text-center rounded-lg max-w-md mx-auto my-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Thank you!! See you in Paris
            </h1>
            <p>😊😊😊😊😊😊</p>
          </div>
        </Html>
      )}

      <Suspense fallback={<Loader />}>
        <HelloKitty scale={3} position={[0, -3, 0]} />
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
