/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cyberpunk_laptop.glb --transform
Author: Blue Lantern (https://sketchfab.com/genoris2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cyberpunk-laptop-8330c89e8431451db3aa9d15c5836ddf
Title: CyberPunk Laptop
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Laptop(props) {
  const { nodes, materials } = useGLTF(
    "./models/laptop/cyberpunk_laptop-transformed.glb"
  );

  const laptop = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power3.inOut" },
    });

    // .to(<object id>, {<parameter>, <value to set it to>} )
    tl.current
      // bio
      .to(laptop.current.rotation, { duration: 4, y: -Math.PI }, 1)
      .to(laptop.current.position, { duration: 4, x: 1 }, 1)
      // projects
      .to(laptop.current.rotation, { y: 0 }, 6)
      .to(laptop.current.position, { x: -1, z: 4 }, 6)
      // credit
      .to(laptop.current.rotation, { y: 0 }, 14)
      .to(laptop.current.rotation, { x: 1 }, 14)
      .to(laptop.current.position, { x: 0, z: 2 }, 14)

      .to(laptop.current.rotation, { y: 0 }, 18)
      .to(laptop.current.rotation, { x: 0 }, 18)
      .to(laptop.current.position, { x: 0 }, 18);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={laptop}
      castShadow
      position={[0, -1, 0]}
    >
      <group position={[0, 0.1, -0.73]} rotation={[-1.74, 0, 0]}>
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["Material.012"] /** border */}
        >
          <meshPhysicalMaterial
            color="#000000"
            metalness={1}
            roughness={0.3}
            reflectivity={0.5}
            iridescence={0.2}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100, 1000]}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.008"] /** screen outline */}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["Material.027"]}
        />
        {/* <mesh geometry={nodes.Object_23.geometry} material={materials['Material.018']} /> handle */}
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Material.019"] /** screen display */}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials["Material.020"] /** left side graphs */}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials["Material.021"] /** top left graph */}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials["Material.028"] /** corners */}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials["Material.021"] /** top left circuit board */}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Material.034"] /** right side plug */}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials["Material.032"] /** right side wires */}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials["Material.033"] /** thumbdrive info */}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials["Material.004"] /** antennae */}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials["Material.006"] /** yellow wire */}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials["Material.005"] /** red wire */}
        />
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials["Material.013"] /** antennae drive */}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.017"] /**main body */}
      >
        <meshPhysicalMaterial
          color="#000000"
          metalness={1}
          roughness={0.3}
          reflectivity={0.5}
          iridescence={0.2}
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 1000]}
        />
      </mesh>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["Material.025"] /**keyboard */}
      >
        <meshPhysicalMaterial
          color="#000000"
          metalness={1}
          roughness={0.3}
          reflectivity={0.5}
          iridescence={0.2}
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 1000]}
        />
      </mesh>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["Material.028"] /** corners bottom */}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Material.027"] /** vent */}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["Material.029"] /** graph bottom */}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["Material.031"] /** screw thing */}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.009"]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials["Material.013"] /** screws bottom */}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["Material.038"]}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials["Material.036"]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.039"]}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials["Material.027"]}
      />
    </group>
  );
}

useGLTF.preload("./models/laptop/cyberpunk_laptop-transformed.glb");
