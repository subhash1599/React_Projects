import React from "react";

const SavedFlows = ({ savedFlows, loadFlow }) => {
  return (
    <aside className="w-1/4 h-full p-4 bg-gray-200 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Saved Flows</h2>
      {savedFlows.length === 0 ? (
        <p>No saved flows.</p>
      ) : (
        <ul>
          {savedFlows.map((flow) => (
            <li key={flow.id} className="mb-2">
              <button
                onClick={() => loadFlow(flow)}
                className="w-full px-4 py-2 text-left text-sm font-medium text-black bg-gray-300 border border-transparent rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {flow.id}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default SavedFlows;
