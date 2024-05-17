import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Components/SideBar";
import Settings from "./Components/Settings";
import CustomNode from "./Components/CustomNode";
import SavedFlows from "./Components/SavedFlows";
import "./App.css";

const nodeTypes = {
  customNode: CustomNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [savedFlows, setSavedFlows] = useState([]);
  const [viewMode, setViewMode] = useState("flow");

  useEffect(() => {
    const flows = JSON.parse(localStorage.getItem("savedFlows")) || [];
    setSavedFlows(flows);
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode = {
        id: getId(),
        type,
        position,
        data: { text: "Text Message" },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const updateNodeText = (id, text) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = { ...node.data, text };
        }
        return node;
      })
    );
    setSelectedNode(null);
  };

  const saveFlow = () => {
    if (edges.length === 0) {
      alert("Error: Cannot Save Flow.");
      return;
    }

    const emptyHandles = nodes.some(
      (node) =>
        !edges.some(
          (edge) => edge.source === node.id || edge.target === node.id
        )
    );

    if (emptyHandles) {
      alert("Error: There are nodes with empty handles.");
      return;
    }

    const flow = {
      id: `flow_${Date.now()}`,
      nodes,
      edges,
    };

    const updatedFlows = [...savedFlows, flow];
    setSavedFlows(updatedFlows);
    localStorage.setItem("savedFlows", JSON.stringify(updatedFlows));

    alert("Flow saved successfully");
  };

  const loadFlow = (flow) => {
    setNodes(flow.nodes);
    setEdges(flow.edges);
    setViewMode("flow");
  };

  const clearGraphPanel = () => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
    setViewMode("flow");
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/4 h-full">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            style={{ width: "100%", height: "100%" }}
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      {selectedNode ? (
        <Settings selectedNode={selectedNode} updateNodeText={updateNodeText} />
      ) : viewMode === "savedFlows" ? (
        <SavedFlows savedFlows={savedFlows} loadFlow={loadFlow} />
      ) : (
        <Sidebar />
      )}
      <div className="w-1/4 h-full p-4 bg-gray-200">
        <button
          onClick={saveFlow}
          className="w-full px-4 py-2 mb-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Flow
        </button>
        <button
          onClick={() => setViewMode("savedFlows")}
          className="w-full px-4 py-2 mb-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Saved Flows
        </button>

        <button
          onClick={clearGraphPanel}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-neutral-700 border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default App;
