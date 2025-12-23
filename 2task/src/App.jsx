import { useState } from 'react'
import Landingpage from './component/landingpage/Landingpage'
import Sec2 from './component/middlepage/Sec2'
import Sec3 from './component/sec3/Sec3'
import Sect4 from './component/sec4/Sect4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black overflow-hidden">
        <Landingpage />
        <Sec2/>
        <Sec3/>
        <Sect4/>
        
      
    
      </div>
    </>
  )
}

export default App
