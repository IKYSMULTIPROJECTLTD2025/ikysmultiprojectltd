import React from 'react'

const Contact = () => {

  return (
    <div>
       <div className="bg-green-600 max-sm:h-auto pt-5  bg-cover bg-center sm:min-h-screen w-full">
         <div className=' h-auto overflow-y-auto  '>
         

    <div className='flex flex-col  text-black pt-5 
     '>
       <div className='flex justify-center text-xl max-sm:text-lg max-md:text-lg 
       font-bold
       '> Contact us here</div>
      
       <div>

       <div className='flex justify-center mt-1 '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-5  text-sm
        focus:outline p-1
        bg-green-00 font-bold
       '>write your name here</label>
      </div>

       
      <div className='flex justify-center '>
      <input type='text'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8   text-lg
        focus:outline p-1 rounded
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm 
        focus:outline p-1 
        bg-lime-00 font-bold
       '>write your email here </label>
      </div>
     
      <div className='flex justify-center'>
      <input type="text"
       
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8   text-sm
        focus:outline p-1 rounded
        bg-lime-00  font-bold
        border border-black' />
      </div>

      
      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm 
        focus:outline p-1 
        bg-lime-00 font-bold
       '>topic/reason</label>
      </div>
     
      <div className='flex mt-2 justify-center'>
      <input type="text"
       placeholder=''
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8   text-sm
        focus:outline p-1 rounded
        bg-lime-00  font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm
        focus:outline p-1 
         font-bold
       '>write your statements here</label>
      </div>

      <div className='flex justify-center'>
      <textarea
       id="text"
       name="message"
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-40   text-sm
        focus:outline  p-1 text-black rounded
        bg-lime-00 font-bold 
        border border-black' />
      </div>
     
       </div>

      
      <div className='flex justify-center'>
      <a href="mailto:ikysmultiprojectltd@gmail.com" >
       <button type='submit' className=' rounded
        bg-slate-950 w-80 max-sm:w-4/5 opacity-50 cursor-not-allowed
          text-white  h-7 mt-5 
        hover:bg-slate-800 mb-20'>contact us</button></a>

         </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Contact