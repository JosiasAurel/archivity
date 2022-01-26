
import React from "react";
// import home page styles
import "./styles/home.css";
import HomeBg from "./assets/homebg.jpg";
import Logo from "./assets/ARCH.png";
import { Text } from "@nextui-org/react";

const HomePage: React.FC = (): JSX.Element => {
    return (
        <div className="homePage">
            <div className="hero-container">
                <img src={Logo} alt="ARCH LOGO" />
                <Text h1 size={60} weight="bold">
                    Your Record of Activities Stored On-Chain 🔥
                </Text>
            </div>
        </div>
    )
}

export default HomePage;