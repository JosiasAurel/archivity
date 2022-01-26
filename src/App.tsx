import { useState } from 'react';
import './styles/App.css';
import { ConnectWallet } from "@3rdweb/react";

function App() {

  return (
    <div className="App">
      <h1>Hello World from Archivity</h1>
      <div>
        <ConnectWallet />
      </div>
    </div>
  )
}

export default App;
