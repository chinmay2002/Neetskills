import React from 'react'
import Navbar from "./Navbar"
const Hero = () => {
    return (
        <div>
            <div className='py-6  z-50 bg-[#2D2E35]  w-full '>
                <Navbar />
            </div>
            <div className=' w-full bg-[#2D2E35] flex items-center justify-center h-[500px]'>
                <div className='w-[1000px] flex justify-between items-center bg-[#2D2E35]'>
                    <div >
                        <div className=' w-auto h-auto'>
                            <h3 className='text-white text-[16px]'>course</h3>
                            <h1 className='text-white text-[49px]'>Introduction to c++</h1>
                            <p className='text-white text-[29px] w-[480px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint .</p>
                        </div>
                        <div>
                            <button className="bg-[#A145CD] text-white font-bold py-2 px-4 rounded-3xl text-[20px] mt-8">
                                Get started for free
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="laptop.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
