import React from 'react'
import Sec4card from './Sec4card'

const Sect4 = () => {
  return (
    <div className='flex gap-5  px-5 '>
      <div className=" w-[50%] rounded-sm ">
        <img className=' w-[100%] '
          src="https://images.unsplash.com/photo-1766068969152-3e67775d0758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>


      <div className="right w-[50%] flex flex-col justify-between   rounded-sm ">
        <Sec4card/>
        <Sec4card/>
      </div>


    </div>
  )
}

export default Sect4
