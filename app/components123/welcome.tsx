'use client'
import React from 'react'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import Menu from './menu';
import { FiX } from 'react-icons/fi';
import Image from 'next/image';

const Welcome = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  
  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };

  return (
    <div className=" sm:bg-[url('/photos1.jpeg')]  max-sm:bg-[url('/photos35.jpeg')] 
    bg-cover bg-center h-[500px]  sm:h-screen  w-full ">


          <div className='flex justify-between text-white text-lg font-bold p-2'>
           <button className='hover:underline rounded-sm w-auto hidden
            max-sm:px-2 h-8 border-2 max-sm:text-sm sm:px-5'>
             IKYS
           </button>

         

         
            <div>
              <Image src={'/image3.jpeg'} width={500} height={800}  alt='projects' 
              className='w-20 h-12 rounded-lg' />
            </div>

          
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
           h-auto  '>MoreInfo
           </button></Link>

           <Link href={{pathname:'/contact'}}>
           <button  className='max-sm:hidden hover:underline  rounded-sm w-auto bg-
           h-auto '>Contact Us
           </button></Link>

           



           <div onClick={closeMenu}> {MenuVisible && (<Menu /> )}</div>


           <button onClick={handleMenuClick}  
            className='bg-black hover:underline border-2 border-white rounded-sm   w-auto sm:hidden  h-8 '>
              <span onClick={handleMenuClick} >
              {MenuVisible ? ( <FiX size={32} className='pb-1'/>  ) : ( 
              <IoMenu size={32} className='pb-1'/>  )}
              </span>
           </button>


         
           <div className='max-lg:hidden rounded-lg border-2 border-black'>
              <Image src={'/image1.jpeg'} width={500} height={800}  alt='projects' 
              className='w-20 h-12 rounded-lg max-lg:hidden' />
            </div>


        </div>

      <div className='flex pb-48 justify-center  text-slate-50 max-sm:pt-40 items-center h-full w-full p-2'>
        <div className='flex flex-col'>

          <button className=' font-bold  sm:text-3xl  font-serif'>
          <span className=' px-1 rounded'>Welcome</span></button>

          <button className='sm:text-2xl  font-bold  font-serif'>
          <span className=' px-1 rounded'>To The  Ikys Multi Project Ltd</span></button>

          <button className='sm:text-2xl  font-bold  font-serif'>
           <span className=' px-1 rounded'>Building Planning &  Construction Management</span> </button>
          
          </div>
      </div>


    </div>
  )
}

export default Welcome
