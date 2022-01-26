import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import HomePage from "./Home";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { ThirdwebProvider } from "@3rdweb/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const supportedChains: Array<number> = [80001];

const connectors = {
  injected: {},
};


ReactDOM.render(
  <NextUIProvider>
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChains}
    >
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path="/app" element={<App />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThirdwebProvider>
  </NextUIProvider>,
  document.getElementById("root")
);
