import React from 'react'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Coursedes from './components/Coursedes'
import StudentReviews from './components/StudentReviews'
import Reqiurements from './components/Reqiurements'
import CourseContent from './components/CourseContent'
import NavBar2 from './components/Navbar-2'
const App = () => {
  return (
    <div className='flex w-screen  bg-[#373A41] h-[2000px]' >
      <div>
        <NavBar2/>
      </div>
      <div className='w-screen h-auto bg-[#373A41]'>
      <div>
        <Hero/>
      </div>
      <div className='flex w-[1100] justify-evenly ml-20 bg-[#373A41] h-[1400px] '>
      <div className='bg-[#373A41] w-[500px]'>
      <div className='flex flex-col justify-center h-auto items-start p-4'>
        <Courses/>
        <CourseContent/>
        <Reqiurements/>
      </div> 
      </div>
      <div className='bg-[#373A41] w-[500px]'>
      <div className='flex flex-col justify-center h-auto items-start p-4'>
        <Coursedes/>
        <StudentReviews/>
      </div> 
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default App
