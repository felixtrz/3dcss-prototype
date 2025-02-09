/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Environment, PerspectiveCamera } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";

import { Canvas } from "@react-three/fiber";
import { PanelUI } from "./panel";
import ReactDOM from "react-dom/client";
import { Root } from "@react-three/uikit";

const xrStore = createXRStore({});

const App = () => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <color args={[0x808080]} attach={"background"}></color>
        <PerspectiveCamera makeDefault position={[0, 1.6, 0.5]} fov={75} />
        <Environment preset="warehouse" />
        <object3D position={[0, 1, -0.5]}>
          <Root
            pixelSize={0.002}
            anchorY="bottom"
            flexDirection="column"
            alignItems="center"
          >
            <PanelUI />
          </Root>
        </object3D>
        <XR store={xrStore}></XR>
      </Canvas>
      <div
        style={{
          position: "fixed",
          display: "flex",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <button
          onClick={() => xrStore.enterAR()}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "20px",
          }}
        >
          Enter XR
        </button>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
