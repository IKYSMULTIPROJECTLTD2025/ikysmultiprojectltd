import React from 'react'
import Link from 'next/link'

const Team = () => {
  return (
    <div>


    <div className="w-full h-auto    text-white  
    bg-gradient-to-b from-fuchsia-500 to-violet-500 ">
    <div> 
   
         <div className='p-5'> <button className='bg-gradient-to-b from-orange-900
           to-green-900 w-full  text-lg max-sm:text-md  h-12 rounded-full '>  Our Chief Executive Officer
          </button></div>

          <div className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <div className='relative bg-gradient-to-b from-orange-950 to-green-950
           w-full px-5 pt-2 min-h-96  rounded-xl max-sm:w-full  '>

             <div className='flex  flex-row'>
            
            <p className='text-2xl  font-bold text-white'>About Our CEO </p>
             </div>
            
             <p className='text-sm'>
             Our CEO, Imrana Yusuf Saleh, is a highly skilled and accomplished professional 
             architect with a proven track record of success. With extensive real-world 
             experience, he has led the design and construction of a diverse range of residential, 
             industrial, and commercial projects across Nigeria. As a certified and qualified architect,
             Imrana  combines technical expertise  with innovative solutions to deliver exceptional 
             results.</p>

             <a href="mailto:ikysmultiprojectltd@gmail.com" >
            <p className='absolute bottom-[55px]'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>ikysmultiprojectltd@gmail.com</button>
             </p></a>
             
             <a href="tel:+2348137338938"> 
            <p className='absolute bottom-1'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>+234 813 733 8938</button>
             </p></a>
           
          </div>

          <div className='relative bg-gradient-to-b from-cyan-950 to-green-950
           w-full px-5 pt-2 min-h-96 rounded-xl  max-sm:w-full'>
                        
             <div className='flex flex-row'>

            <p className='text-2xl  font-bold text-white'>About the Company</p>
             </div>
             
             <p className='text-sm'>
             IKYS MULTI PROJECT LTD is a leading construction company specializing in a 
             broad spectrum of services, encompassing building planning, construction management,
             and more.the company offers a wide range of specialized 
             services designed to meet the unique needs of clients across various sectors.
             Below is a detailed overview of the services we provide</p>


             <a href="mailto:ikysmultiprojectltd@gmail.com" >
            <p className='absolute bottom-[55px]'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>ikysmultiprojectltd@gmail.com</button>
             </p></a>
             
             <a href="tel:+2348137338938"> 
            <p className='absolute bottom-1'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>+234 813 733 8938</button>
             </p></a>
             
            
          </div>

          <div className='relative bg-gradient-to-b from-pink-900 to-green-900 w-full
           min-h-96 px-5 pt-2 rounded-xl max-sm:w-full'>
                        
             <div className='flex flex-row'>

            <p className='text-2xl  font-bold text-white'>Company portfolio  </p>
             </div>

            <p className='text-sm '>
             At IKYS MULTI PROJECT LTD, we have successfully completed a 
             wide range of projects and continue to work on diverse initiatives,These including residential, 
             industrial, factory, and commercial developments. 
             To explore our portfolio and learn more about our completed projects,
             visit our Projects  section <Link href={{pathname:'/projects'}} 
             className='text-blue-950 font-bold px-1'>Here</Link>
             We invite you to discover  the scope and quality of our work.</p>
             



             <a href="mailto:ikysmultiprojectltd@gmail.com" >
            <p className='absolute bottom-[55px]'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>ikysmultiprojectltd@gmail.com</button>
             </p></a>
             
             <a href="tel:+2348137338938"> 
            <p className='absolute bottom-1'>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-1 '>+234 813 733 8938</button>
             </p></a>
            
             
          </div>
          </div>
    
    </div>
    </div>  
    </div>
  )
}

export default Team
