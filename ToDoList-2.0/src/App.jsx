import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTaskId, setEditingTaskId] = useState("");

  const addTask = () => {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Math.random(),
      text: inputValue.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const startEditing = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setInputValue(taskToEdit.text);
  };

  const saveTask = (taskId, newText, isCompleted) => {
    if (!newText.trim()) return;

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText.trim(), completed: isCompleted } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId("");
    setInputValue("");
  };

  const toggleComplete = (taskId, completed) => {
    saveTask(taskId, tasks.find((task) => task.id === taskId).text, completed);
  };

  const cancelEditing = () => {
    setEditingTaskId("");
    setInputValue("");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>
        <div className="flex items-center">
          <input
            className="flex-1 py-3 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter a task"
          />
          <button
            className="py-3 px-6 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 focus:outline-none"
            onClick={addTask}
            disabled={!inputValue.trim()}
          >
            Add Task
          </button>
        </div>
        <ul className="mt-6">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between py-4 border-b border-gray-200">
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onBlur={() => saveTask(task.id, inputValue, task.completed)}
                    className="flex-1 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                  <div className="flex">
                    <button
                      onClick={() => saveTask(task.id, inputValue, task.completed)}
                      className="py-2 px-6 bg-green-500 text-white rounded-lg ml-4 hover:bg-green-600 focus:outline-none"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="py-2 px-6 bg-red-500 text-white rounded-lg ml-4 hover:bg-red-600 focus:outline-none"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>{task.text}</span>
                  <div className="flex">
                    <button
                      onClick={() => startEditing(task.id)}
                      className="py-2 px-6 bg-blue-500 text-white rounded-lg ml-4 hover:bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTask(task.id)}
                      className="py-2 px-6 bg-red-500 text-white rounded-lg ml-4 hover:bg-red-600 focus:outline-none"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => toggleComplete(task.id, !task.completed)}
                      className={`py-2 px-6 rounded-lg ml-4 focus:outline-none ${task.completed ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                    >
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
