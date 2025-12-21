import React from 'react'

const Sec3 = () => {
  return (
    <div className=' flex p-5 gap-4 '>
      <div className="left w-[50%] rounded-sm p-8 flex flex-col justify-around bg-gray-800">
         <p className='text-3xl uppercase '>about</p>
         <h1 className=' text-5xl uppercase'>where fashion meets freedom </h1>
         <div className="ptext flex  gap-5 ">
          <p className=' w-[40%]'>Lorem ipsum dolor, sit amet conse sint dolor alias fugiat perspiciatis illum similique provident doloribus, voluptas quos! Vero sunt nesciunt voluptatum nobis harum.</p>
          <p   className='w-[40%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique exercitationem hi itaque necessitats necessitatibus quasi itaque nemo.</p>
         </div>


         </div>
      <div className="right w-[50%] rounded-sm ">
        <img className=' w-[100%] '
         src="https://images.unsplash.com/photo-1766068969152-3e67775d0758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      
    </div>
  )
}

export default Sec3
