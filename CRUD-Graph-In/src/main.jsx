import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactFlow, { ReactFlowProvider } from 'reactflow';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactFlowProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReactFlowProvider>

)
