import React from 'react'
import { useState } from 'react'
const CourseContent = () => {
  const [drop, setDrop] = useState("50px");
  const ClickHandle = () => {
    if(drop==="50px"){
      setDrop("200px");
    }
    else{
      setDrop('50px');
    }
  }
  return (
    <div className='flex w-auto rounded-xl mt-4 text-white flex-col items-start justify-center bg-[#373A41] mb-10'>
      <div className='mb-4 text-xl' >
        Course Content
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[${drop}] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" onClick={()=>ClickHandle()} className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      <div className='ml-4'>
      <div className='flex mb-2'>
                        <img src="tick.png" className='w-[20px] h-[20px]' alt="" />
                        <p className='ml-4'>Lorem ipsum dolor, sit .</p>
        </div> 
        <div className='flex mb-2'>
                        <img src="tick.png" className='w-[20px] h-[20px]' alt="" />
                        <p className='ml-4'>Lorem ipsum dolor, sit .</p>
        </div> 
        <div className='flex mb-2'>
                        <img src="tick.png" className='w-[20px] h-[20px]' alt="" />
                        <p className='ml-4'>Lorem ipsum dolor, sit .</p>
        </div> 
        <div className='flex mb-2'>
                        <img src="tick.png" className='w-[20px] h-[20px]' alt="" />
                        <p className='ml-4'>Lorem ipsum dolor, sit .</p>
        </div> 

      </div>
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[50px] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[50px] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[50px] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[50px] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      </div>
      <div className={`border-[2px] bg-[#2D2E35] h-[50px] overflow-hidden mb-8`}>
      <div className=' flex justify-between w-[400px] rounded-xl border-white p-2 '>
        <h3 className='ml-[46px] text-xl'>
            Introduction to C++
        </h3>
        <img src="drop.png" className='w-[20px] h-[20px] cursor-pointer my-auto' alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default CourseContent
