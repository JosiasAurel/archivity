import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import { useWeb3 } from "@3rdweb/hooks";

const sampleProjects: Array<Project> = [
  {
    name: "Hello",
    cid: "ghjztre",
    description: "Building something cool..."
  },
  {
    name: "Word",
    cid: "ghjure",
    description: "Learning English"
  },
  {
    name: "Life",
    cid: "h4ez4u6",
    description: "Learning about myself"
  }
];

function App() {
  const { provider, chainId, address } = useWeb3();

  return (
    <div className="App">
      <Header />
      <div>
        {sampleProjects.map((project: Project) => (
          <Project
            key={project.cid}
            name={project.name}
            cid={project.cid}
            description={project.description}
          />
        )
        )}
      </div>
    </div>
  );
}

export default App;
