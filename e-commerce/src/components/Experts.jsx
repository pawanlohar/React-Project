import React from 'react'

function Experts() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto    md:grid grid-cols-2 p-3'>
        <div className=' col-span-1 md:w-[90%] text-center'>
          <img src="img\laptop.jpg"  className='inline'/>
        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
          <h1 className='text-[green] font-bold my-2'>Learn From Experts</h1>
          <p className='my-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel ad architecto tempora, et, voluptates vitae necessitatibus
            temporibus molestiae minima nisi qui dolorum doloremque in laudantium
             maiores accusantium voluptatem culpa? Molestiae.</p>
             <button className= ' w-[30%] bg-black text-white p-2 rounded'> Get Started</button>
        </div>
      </div>

    </>
  )
}

export default Experts