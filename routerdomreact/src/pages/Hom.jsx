import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Hom = () => {
  return (
    <div className=' bg-black text-4xl   w-screen  text-white flex gap-10  '>
      
      <NavLink to='/About'>about</NavLink>
      <NavLink to='/Arun'>Arun</NavLink>
      <NavLink to='/Me'>Me</NavLink>
      <NavLink to='/You'>You</NavLink>

    </div>
  )
}

export default Hom
