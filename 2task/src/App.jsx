import { useState } from 'react'
import Landingpage from './component/landingpage/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <div className="bg-black">
  <Landingpage/>
  </div>
   </>
  )
}

export default App
