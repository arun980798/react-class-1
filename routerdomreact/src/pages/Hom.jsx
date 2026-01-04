import React from 'react'
import { Link } from 'react-router-dom'

const Hom = () => {
  return (
    <div>
 <Link to='/'>home</Link>
 <Link to='/About'>about</Link>
 <Link to='/Arun'>Arun</Link>
 <Link to='/Me'>Me</Link>
  <Link to='/You'>You</Link>

    </div>
  )
}

export default Hom
