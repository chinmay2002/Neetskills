import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between text-white '>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
            <div className='flex justify-evenly'>
                <div className='flex border-2  rounded-xl ml-2 bg-'>
                <img src="search.png" alt="" className='h-[35px] rounded-xl w-[35px]'/>
                <input placeholder='search' type="search" className='w-[300px] placeholder:p-2 bg-transparent' />
                </div>
                <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-24">
                    Log in
                </button> 
                </div>
                <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">
                    Sign up
                </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
