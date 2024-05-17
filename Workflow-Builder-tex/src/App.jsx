import React, { useState } from 'react';
import ReactFlow, { addEdge, Controls } from 'reactflow';
import 'reactflow/dist/style.css'

const App = () => {
  const [elements, setElements] = useState([]);

  // Function to handle adding a node
  const addNode = (type, position) => {
    const newNode = {
      id: Date.now().toString(),
      type: 'default',
      position,
      data: { label: type },
    };
    console.log("Adding node:", newNode);
    setElements((prevElements) => [...prevElements, newNode]);
  };

  // Function to handle moving a node
  const onNodeDragStop = (event, node) => {
    const updatedNode = {
      ...node,
      position: { x: event.x, y: event.y },
    };
    setElements((prevElements) =>
      prevElements.map((element) => (element.id === node.id ? updatedNode : element))
    );
  };

  // Function to handle connecting nodes
  const onConnect = (params) => {
    setElements((prevElements) => addEdge(params, prevElements));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow relative">
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onNodeDragStop={onNodeDragStop}
          snapToGrid={true}
          snapGrid={[15, 15]}
          style={{ width: '100%', height: '100%' }}
        >
          <Controls />
        </ReactFlow>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        <button onClick={() => addNode('Start', { x: 50, y: 50 })} className="btn">Add Start</button>
        <button onClick={() => addNode('Filter Data', { x: 150, y: 50 })} className="btn">Add Filter Data</button>
        <button onClick={() => addNode('Wait', { x: 250, y: 50 })} className="btn">Add Wait</button>
        <button onClick={() => addNode('Convert Format', { x: 350, y: 50 })} className="btn">Add Convert Format</button>
        <button onClick={() => addNode('Send Post Request', { x: 450, y: 50 })} className="btn">Add Send Post Request</button>
        <button onClick={() => addNode('End', { x: 550, y: 50 })} className="btn">Add End</button>
      </div>
    </div>
  );
};

export default App;
