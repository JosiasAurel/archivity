
import React from "react";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThirdwebProvider } from "@3rdweb/react";
import "../styles/global.css";

// mumbai testnet chain ID
const supportedChains: Array<number> = [80001];
// metamask
const connectors = {
    injected: {},
};
const ArchivityApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <NextUIProvider>
            <ThirdwebProvider
                connectors={connectors}
                supportedChainIds={supportedChains}
            >
                <Component {...pageProps} />
            </ThirdwebProvider>
        </NextUIProvider>
    )
}

export default ArchivityApp;