import React, { useState, useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges
} from 'reactflow';

const initialNodes = [];
const initialEdges = [];

let id = 0;

const getId = () => `${id++}`;

const MyFlow = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [isCreatingEdge, setIsCreatingEdge] = useState(false);
  const [sourceNodeId, setSourceNodeId] = useState(null);


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const handleConnect = (params) => {
    if (isCreatingEdge) {
      const { source, target } = params;
      addEdge({ id: getId(), source, target }, edges);
      setIsCreatingEdge(false);
      setSourceNodeId(null);
    } else {
      setIsCreatingEdge(true);
      setSourceNodeId(params.source);
    }
  };
  
  const handleButtonClick = () => {
    const newNode = {
      id: getId(),
      type: 'input',
      position: { x: 100 * (id + 1), y: 100 * (id + 1) },
      data: { label: `Node ${id}` },
      style: {
        backgroundColor: '#f5f5f5',
        border: '1px solid #cccccc',
        padding: '10px',
        borderRadius: '4px',
      },
      
    };
    setNodes((prevNodes) => prevNodes.concat(newNode));
  };

  
  return (
    <div className="h-screen">
      <button onClick={handleButtonClick}>Add Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: '#ddd', strokeWidth: 2 }}
        // Add other React Flow props here
      >
        <Controls />
        <Background />
        {/* Your custom node components here */}
      </ReactFlow>
    </div>
  );
};

export default MyFlow;
