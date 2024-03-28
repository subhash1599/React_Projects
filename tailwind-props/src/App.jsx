import './App.css'

import Header from './Components/Header'

import Footer from './Components/Footer'

import Card from './Components/Card'
function App(props) {
  

  return (
    <>
      <Header/>
      <div className='flex'>
      <Card src="https://randomuser.me/api/portraits/men/51.jpg" name="John" designation="Junior Developer"/>      
      <Card src="https://randomuser.me/api/portraits/men/33.jpg" name="Miachel" designation="Manager"/>     
      <Card src="https://randomuser.me/api/portraits/men/45.jpg" name="Jordan" designation="Intern"/>
      </div>     
      <Footer/>

    </>
  )
}

export default App
