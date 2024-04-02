// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Switch } from '@headlessui/react'
// import './App.css'

// function App() {
 
//   const [task, setTask] = useState([])
//   const [input, setInputValue] = useState('')

 
//   const addTask=()=>{

//       if(input.trim()){
//         const newTask={text:input,completed:false}

//       setTask([...task,newTask])
//       setInputValue('')
//       }
      
//   }

//   const statusCompleted=(index)=>{
//     const updatedTask=[...task]
//     updatedTask[index].completed=!updatedTask[index].completed
//     setTask(updatedTask)
//   }

//   const removeTask=(index)=>{
//     const updatedTask=[...task]
//     updatedTask.splice(index,1)
//     setTask(updatedTask)
//   }

//   return (
//     <>
//     <main className='bg-mybg h-screen w-full'>
//     <h1 className=''>To Do List </h1>
//     {/* {currentdate.toDateString()} */}
//      {/* <h3 className='text-textc'>TO DO LIST APP</h3> */}
//       <div className='flex justify-center pt-32'>
      
//       <label htmlFor="addTask"></label>
//       <input value={input} onChange={(event)=>{setInputValue(event.target.value)}} type="text" placeholder='enter your task' />
//       </div>
//       {/* To Display the tasks */}
//       <div className=' justify-center'>
//       <ul>
//         {task.map((tasks,index)=>(
//           <li key={index}>
           
//             <p>Task   Status</p>
//             {tasks.text}
//             <br />
//             <p>Status</p>
//             <label htmlFor="checkBox">Completed</label>
           
//             <input type="checkbox" checked={task.completed} onChange={()=>{statusCompleted(index)}} />
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <button className=' text-white' onClick={()=>removeTask(index)}>Remove</button>
//           </li>



//         ))}
//       </ul>
//       </div>
//       <div className='flex justify-center pt-11'>
//       <button  onClick={()=> addTask(input)}>Add Task</button>
//       </div>
//       </main>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Switch } from '@headlessui/react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = { text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-8 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-8 sm:text-4xl md:text-3xl lg:text-2xl">To Do List</h1>

      <div className="flex items-center w-full justify-between rounded-md bg-white shadow-sm px-4 py-4 sm:flex-wrap sm:justify-center">
        <input
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 w-full mr-4 sm:w-3/4 md:w-2/3 lg:w-1/2"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Enter your task here"
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out sm:w-1/2 md:w-1/3 lg:w-1/4"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {tasks.length > 0 && (
        <ul className="mt-8 w-full max-w-md rounded-md shadow-sm bg-white overflow-y-auto">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gray-100 ${
                task.completed ? 'line-through opacity-75 text-decoration-dashed' : ''
              }`}
            >
              <span className="text-lg leading-relaxed sm:text-base md:text-lg">{task.text}</span>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                  className="toggle focus:outline-none bg-gray-300 rounded-full z-10" // Custom switch style with z-index for layering
                />
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ease-in-out"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
