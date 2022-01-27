import React, { useState } from "react";
import "./styles/App.css";
import "./styles/global.css";
import Header from "./components/Header";
import Project from "./components/Project";
import { useWeb3 } from "@3rdweb/hooks";
import { Button, Modal, Text, Input, Textarea, Spacer } from "@nextui-org/react";
import { publishContent } from "./utils/ipfs";

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

function App(): JSX.Element {
  const { provider, chainId, address } = useWeb3();

  // visibility of modal to create a new project log
  const [newProjectModal, setNewProjectModal] = useState<boolean>(false);

  // properties for new project creation
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function addProject() {
    const cid = await publishContent(JSON.stringify({ name, description })) as unknown as string;
    console.log(cid);
    sampleProjects.push({ name, description, cid });
  }

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
      <Modal closeButton blur open={newProjectModal} onClose={() => setNewProjectModal(false)}>
        <Modal.Header>
          <Text weight="bold" size={30}>
            New Project Log
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={e => {
            e.preventDefault();
            addProject();
          }} className="flex-col">
            <Input value={name} onChange={e => setName(e.target.value)} clearable placeholder="Project Name" type="text" />
            <Spacer />
            <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Project Description" />
            <Spacer />
            <Button>
              Create Project Log
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <Button style={{
        position: "fixed",
        bottom: "1em",
        right: "1em"
      }} onClick={_ => setNewProjectModal(!newProjectModal)}>
        New Log
      </Button>
    </div>
  );
}

export default App;
