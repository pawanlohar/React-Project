import React from 'react'
import Typed from 'react-typed'

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] font-bold mx-auto text-center'>
            <div className='text-xl md:text-4xl '>Learn with us</div>
            <div className='text-white text-3xl md:text-[70px] md:mt-5'>Grow with us</div>
            <div className='text-2xl md:text-[40px] text-white md:mt-[40px]'>
                Learn  
                 <Typed className='pl-2' strings={[' Web Development','Digital Marketing','Ethical Hacking']}
                 typeSpeed={100}
                 loop={true}
                 backSpeed={100}/>
                </div>
                <button className='bg-black text-white p-2 rounded md:mt-7 mt-3'> Get Started</button>
        </div>

    </div>
  )
}

export default Banner