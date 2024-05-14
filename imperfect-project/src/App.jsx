import "./App.css";
import sample1 from './assets/s12.jpeg'
import sample2 from './assets/s13.jpg'
import sample3 from './assets/s14.jpg'
import {Router, Route,Routes } from "react-router-dom";
import Hello from './Components/Hello'
function App() {
  const images=[sample1,sample2,sample3]
  return (
    <>
    <Router>
    <Routes>
    <main>
      <h1 className="w-screen bg-gray-800 text-white text-3xl text-center font-sedan">
        Imperfect Things
      </h1>
      <Route path='/hello' element={<Hello/>}/>
      </main>
      </Routes>
      </Router>
    </>
    
  );
}

export default App;
