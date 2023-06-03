import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"


function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className='bg-[#2699fb] p-4'>
                <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
                    <div className='text-3xl font-bold text-white'>
                        E-Commerce
                    </div>

                    {
                        toggle ?
                            <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                            :
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                    }
                    {/* <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                    <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' /> */}
                    <ul className='hidden md:flex text-white text-bold gap-14'>
                        <li>Home</li>
                        <li>Company</li>
                        <li>Resource</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    {/* responsive menu  */}
                    <ul className={`duration-300 md:hidden w-full h-screen text-white text-bold  fixed bg-black  top-[68px] 
                          ${toggle? 'left-[0]' : 'left-[-100%]'}
                        `}>
                        <li className='p-2'>Home</li>
                        <li className='p-2'>Company</li>
                        <li className='p-2'>Resource</li>
                        <li className='p-2'>About</li>
                        <li className='p-2'>Contact</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Header;