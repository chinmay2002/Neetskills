import React from 'react'

const StudentReviews = () => {
    return (
        <div className='w-[385px] h-[300px] flex  flex-col justify-center items-start p-5 bg-[#2D2E35] text-white rounded-xl mt-8'>
            <div className='mb-8'>
                <h3 className='mb-2'>Students Reviews</h3>
                <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sed autem iure blanditiis deserunt? Cumque pariatur, atque nisi laudantium quaerat sint officiis repellat vitae quam minus non molestiae reiciendis quidem. Repellat vel ea esse.</p>
            </div>
            <div className='w-[200px] '>
            <div className='flex mt-2 '>
             <img src="image.png" alt="" className='mr-2'/>
                    <div>
                        <h2>Rahul Mehta</h2>
                        <h3>C++ professor</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentReviews
