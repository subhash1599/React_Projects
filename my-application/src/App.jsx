import './App.css'
import LoginPage from './Components/LoginPage'
import Strawberry from './Components/Strawberry'
import {Route,Routes,Link} from 'react-router-dom'

function App() {
 

  return (
   <>
  <nav>
    <ul className='flex'>
      {/* <li>
        <Link to="/">LoginPage</Link>
      </li> */}
    <li>
      <Link to="/Strawberry">Strawberry</Link>
    </li>
    </ul>
  </nav>
  <Routes>
    <Route/>
    <Route path="/" element={<LoginPage/>}/>
    
    <Route path="/Strawberry" element={<Strawberry/>}/>

  
  </Routes>
  {/* <LoginPage/> */}
  
   </>
  )
}

export default App
