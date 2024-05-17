import React, { useEffect, useState } from "react";

const Settings = ({ selectedNode, updateNodeText }) => {
  const [text, setText] = useState(selectedNode?.data.text || "");

  useEffect(() => {
    if (selectedNode) {
      setText(selectedNode.data.text);
    }
  }, [selectedNode]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNodeText(selectedNode.id, text);
  };

  if (!selectedNode) {
    return null;
  }

  return (
    <aside className="w-1/4 h-full p-4 bg-gray-200">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Edit Text
        </label>
        <textarea
          value={text}
          onChange={handleChange}
          className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </aside>
  );
};

export default Settings;
