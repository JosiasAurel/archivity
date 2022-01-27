import React from "react";
import styles from "../styles/header.module.css";
import { ConnectWallet } from "@3rdweb/react";
import { Text } from "@nextui-org/react";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img src="/ARCH.png" alt="ARCH LOGO" />
      <Text size={20} weight="bold">
        ARCHIVITY
      </Text>
      <ConnectWallet />
    </header>
  );
};

export default Header;
