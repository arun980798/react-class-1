import { useState } from 'react'
import Nav from "./component/Nav"
import Footer from "./component/Footer"
import Section from './component/Section'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Nav/>
  <Section/>
 <Footer/>
  </>
  )
}

export default App
