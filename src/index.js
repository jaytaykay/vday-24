import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas shadows>
        <App />
      </Canvas>
      <div id="ui-overlay"></div>
    </div>
  </React.StrictMode>
);
