import React from "react";
import "../styles/header.css";
import Logo from "../assets/ARCH.png";
import { ConnectWallet } from "@3rdweb/react";
import { Text } from "@nextui-org/react";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className="header">
            <img src={Logo} alt="ARCH LOGO" />
            <Text size={20} weight="bold">
                ARCHIVITY
            </Text>
            <ConnectWallet />
        </header>
    )
}

export default Header;