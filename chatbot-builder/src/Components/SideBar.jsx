import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-1/4 h-full p-4 bg-gray-200">
      <div
        className="bg-green-500 text-white p-2 rounded cursor-pointer"
        onDragStart={(event) => onDragStart(event, "customNode")}
        draggable
      >
        Message
      </div>
    </aside>
  );
};

export default Sidebar;
