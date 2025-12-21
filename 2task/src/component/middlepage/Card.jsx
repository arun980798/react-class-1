import React from 'react'

const Card = () => {
  return (
    <div className='bg-gray-800 p-5 flex rounded-sm flex-col  gap-2 items-start justify-start  '>
      <h1>independency </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae facere possimus optio vitae
      </p>
      <button className='px-4 py-2 text-sm font-medium text-gray-700 
         bg-gray-700 rounded-lg 
         hover:bg-gray-950 
         active:bg-gray-400 
         focus:outline-none focus:ring-2 focus:ring-gray-400
         transition duration-200 '>lerarn more </button>
      
      
    </div>
  )
}

export default Card
