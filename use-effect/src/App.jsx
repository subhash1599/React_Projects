import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))

  },[resourceType])


  return (
   <>
   
   <div>

    <button onClick={()=>setResourceType("posts")}>Posts </button>
    <button onClick={()=>setResourceType("users")}>Users</button>
    <button onClick={()=>setResourceType("comments")}>Comments</button>
   
   </div>
   {items.map(item=>{
    return <pre>{JSON.stringify(item)}</pre>

   })}
   
   
   </>
  )
}

export default App
