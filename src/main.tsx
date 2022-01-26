import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import HomePage from "./Home";
import { NextUIProvider } from "@nextui-org/react";
import { ThirdwebProvider } from "@3rdweb/react";

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
        <HomePage />
      </React.StrictMode>
    </ThirdwebProvider>
  </NextUIProvider>,
  document.getElementById("root")
);
