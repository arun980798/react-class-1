import { useState } from 'react'
import { Route,Routes, } from 'react-router-dom'
import Hom from './pages/Hom'
import About from './pages/About'
import Arun from './pages/Arun'
import Me from './pages/Me'
import You from './pages/You'





function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
 

    <Route path='/' element={<Hom/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Arun' element={<Arun/>}/>
    <Route path='/Me' element={<Me/>}/>
    <Route path='/You' element={<You/>}/>

   </Routes>
  <About/>

   </>
  )
}

export default App
