import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.render(
  <NextUIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>,
  document.getElementById('root')
);
