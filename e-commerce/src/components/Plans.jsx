import React from 'react'

function Plans() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl my-4 p-4 bg-gray-100  h-[450px] rounded hover:scale-105 duration-500">
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src="img\single.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
        <div className="shadow-xl my-4 p-4  h-[450px]  bg-gray-200 rounded hover:scale-105 duration-500">
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="img\double.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
        <div className="shadow-xl my-4 p-4 bg-gray-100 h-[450px] rounded hover:scale-105 duration-500">
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src="img\triple.png" alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Plans;