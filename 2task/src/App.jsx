import { useState } from 'react'
import Landingpage from './component/landingpage/Landingpage'
import Sec2 from './component/middlepage/Sec2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black overflow-hidden">
        <Landingpage />
        <Sec2/>
      
    
      </div>
    </>
  )
}

export default App
