import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-20 '>
      <div className="left text-[20px] font-bold">DYSE</div>
      <div className="right flex   gap-10">
         <a href="">compay </a>
      <a href="" className =""  >home</a>
      <a href="" className =""  >about</a>
      <a href="" className =""  >gallery</a>
      <a href="" className =""  >contact</a>
      <a href="" className ="bg-orange-500  rounded-sm "  >login & sing up</a>


      </div>
     

    </div>
  )
}

export default Navbar
