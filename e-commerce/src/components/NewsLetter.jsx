import React from 'react'

function NewsLetter() {
    return (
        <div className="w-full bg-[#2699fb] p-4">
            <div className="max-w-[1240px] mx-auto  md:flex justify-between py-[40px]">
                <div className="m-2" >
                    <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to Learn latest I.T Skills ?</h1>
                    <span className="text-white">Sign up aur newsletter and stay up to date</span>
                </div>
                <div className="m-2">
                     <input type="text" className=" text mb-2 p-2 mr-2 rounded text-grey" placeholder="Email" />
                     <button className='bg-black text-white p-2 rounded'>Notify Me</button>
                     <br/>
                     <br/>
                     <p className="text-white">We care bout  the protectionof your data. Read our <br/><a href="" className="text-black"> privacy policy </a></p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;