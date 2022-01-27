import React from "react";

import { Card, Link, Text } from "@nextui-org/react";


const Project: React.FC<Project> = ({ name, cid, description }): JSX.Element => {

    // string[]
    const colors: Array<any> = ['primary', 'secondary', 'success', 'warning', 'error'];
    const emojis: Array<string> = ["🐠", "🐟", "🐳", "🦄", "👊", "👾", "👽", "🎃", "🥳", "🤡", "🧠", "🍉", "🍎", "🍐", "🍊", "🍋", "🍌", "🍡", "🚀"];
    return (
        <Link href={`app/${cid}`} >
            <Card style={{
                width: "200px",
                height: "200px"
            }} clickable color={colors[Math.floor(Math.random() * colors.length)]}>
                <Card.Header>
                    <Text css={{ color: "white" }} weight="bold">
                        {name}
                    </Text>
                </Card.Header>
                <Text css={{ overflow: "hidden", textAlign: "center" }} size={40} weight="bold">
                    {emojis[Math.floor(Math.random() * emojis.length)]}
                </Text>
                <Card.Footer>
                    <Text css={{ wordWrap: "break-word", color: "white" }}>
                        {description}
                    </Text>
                </Card.Footer>
            </Card>
        </Link >
    )
}

export default Project;