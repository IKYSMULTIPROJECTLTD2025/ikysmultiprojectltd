'use client'
import React from 'react'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import Menu from './menu';

const Navbar = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  
  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };

  return (
    <div className="relative bg-blue-950 border-2 border-white h-[50px] w-full ">


          <div className='flex justify-between text-white text-lg font-bold p-2'>
          <Link href={{pathname:'/'}}>
           <button className='hover:underline rounded-sm w-auto 
            max-sm:px-2 h-8 border-2 max-sm:text-sm sm:px-5'>
            IKYS</button></Link>
          
           <Link href={{pathname:'/services'}}>
           <button className='max-sm:hidden  hover:underline  rounded-sm w-auto 
           h-auto '>Services
           </button></Link>

        
           <Link href={{pathname:'/projects'}}>
           <button  className='max-sm:hidden hover:underline  rounded-sm w-auto bg-
           h-auto '>Projects
           </button></Link>

           <Link href={{pathname:'/moreInfo'}}>
           <button  className='max-sm:hidden hover:underline   rounded-sm w-auto bg-
           h-auto  '>More Info
           </button></Link>

           <Link href={{pathname:'/contact'}}>
           <button  className='max-sm:hidden hover:underline  rounded-sm w-auto bg-
           h-auto '>Contact Us
           </button></Link>

           <div onClick={closeMenu}> {MenuVisible && (<Menu /> )}</div>

           <button onClick={handleMenuClick}  className='bg-black hover:underline
            border-2 border-white rounded-sm w-auto sm:hidden  h-8 '>
              <span onClick={handleMenuClick} >
                {MenuVisible ? ( <FiX size={32} className='pb-1'/>  ) : ( 
                <IoMenu size={32} className='pb-1'/>  )}
              </span>
           </button>
          
        </div>
    </div>
  )
}

export default Navbar
