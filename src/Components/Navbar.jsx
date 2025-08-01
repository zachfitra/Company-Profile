import React from 'react'

import { useState } from 'react'


const Navbar = () => {
    const [show, setShow]= useState(false) ;
 const handleClick = () =>{
    setShow(!show);
   
    
 }

 let menuActive = show ?"left-0" : "-left-full";

  return (
    <div className="navbar fixed w-full transition-all py-7">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-2xl font-bold">Nadisa Skincare</h1> 
                </div>
            <ul className={`flex lg:gap-12 md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0
                md:text-black md:flex-row md:shadow-none md:p-0 md:m-0 md:transition-none 
                gap-8 fixed ${menuActive} top-1/2 flex-col px-8 py-6 rounded shadow-lg
                shadow-slate-300 bg-sky-400 font-bold text-white  transition-all`}>
                        <li className='flex items-center gap-2 '>
                            <i className="ri-home-2-line md:hidden block "></i>
                            <a href="#" className="font-medium opacity-75 ">Home</a>
                        </li>
                         <li className='flex items-center gap-2'>
                             <i className="ri-information-line md:hidden block "></i>
                            <a href="#" className= "font-medium opacity-75" >About Us</a>
                        </li>
                         <li className='flex items-center gap-2'>
                            <i class="ri-service-line md:hidden block"></i>
                            <a href="#" className= "font-medium opacity-75">Services</a>
                        </li>
                         <li className='flex items-center gap-2'>
                             <i class="ri-customer-service-2-line md:hidden block"></i>
                            <a href="#" className= "font-medium opacity-75"  >Contact</a>
                        </li>
                        
                    </ul>
                    <div className="social flex items-center gap-2">
                        <a href="#" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all ">Social Media</a>
                        <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                    </div>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar