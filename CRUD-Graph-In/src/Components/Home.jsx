import React, { useState } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";




// const nodess = [
//   {
//     id: '1',
//     data:{label:'Start'},
//     position: { x: 0, y: 10 },
//     type:'input'
//   },
//   {
//     id: '2',
//     data:{label:'SC1'},
//     position: { x: 0, y: 100 },
//   },

// ];



function Home() {
  const [nodes,setNodes]=useState([ { id: '1', data: { label: 'Start' }, position: { x: 0, y: 10 }, type: 'input' },
  { id: '2', data: { label: 'SC1' }, position: { x: 0, y: 100 } }])
  const [edges,setEdges]=useState([]);
  const [counter,setCounter]=useState(2);
  const initialEdges=[

    {
  
      id:'1-2', source:'1',target:'2'
  
    }
  ]

  const handleAddNode=()=>{
    const newNodeId = `dynamic-${counter + 1}`;
    const nodeName = prompt("Enter node name:");
    const newNode = {
      id: String(newNodeId),
      data: { label: nodeName },
      position: { x: 100, y: 100 }, 
    };

    const newEdge = {
      id: `1-${newNodeId}`,
      source: '1',
      target: newNodeId,
    };

    setNodes([...nodes, newNode]);
    setEdges([...edges, newEdge]);

    setCounter(counter + 1);


  }  

 

  



  return (
    <>
      <main>
        <div>
        <button onClick={handleAddNode}>Add Node</button>
        </div>
        
        
        <div className="h-screen w-screen">
          <ReactFlow elements={nodes.concat(edges)} >
            <Background />
            <Controls />
          </ReactFlow>
        
        
        
        </div>
      </main>
    </>
  );
}

export default Home;
