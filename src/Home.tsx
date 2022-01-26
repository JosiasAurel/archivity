import React from "react";
// import home page styles
import "./styles/home.css";
import Logo from "./assets/ARCH.png";
import { Text, Button, Link } from "@nextui-org/react";
import Header from "./components/Header";
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";

const HomePage: React.FC = (): JSX.Element => {
    const { chainId, provider, address } = useWeb3();

    return (
        <div className="homePage">
            <Header />
            <div className="hero-container">
                <img src={Logo} alt="ARCH LOGO" />
                <Text h1 size={60} weight="bold">
                    Your Record of Activities Stored On-Chain 🔥
                </Text>
                {address ?
                    <Link href="/app">
                        <Button>Go To Dashboard</Button>
                    </Link>
                    : <ConnectWallet />}
            </div>
        </div>
    );
};

export default HomePage;
