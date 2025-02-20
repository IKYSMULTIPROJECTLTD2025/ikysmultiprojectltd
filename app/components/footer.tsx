import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
    <div className='w-full h-auto  bg-gradient-to-b from-blue-600  to-green-700 '>
        <div> 
          <div className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black gap-4
           w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-500 font-normal'>

          <div className=' flex flex-col gap-1  flex-wrap'>
          <div className='flex flex-row'>
               <p className='text-lg text-white'>Follow us on social media</p>
             </div>

             
             <a 
             href="https://www.facebook.com/profile.php?id=100064043647503" 
             target="_blank" rel="noopener noreferrer">
             <span className='flex flex-row justify-center text-sm mt-1 '>
              <BsFacebook size={20} className=' text-white mx-2' /> 
              <p>Follow us on facebook</p></span></a>

             
              <a href="https://www.tiktok.com/@arc_ikys001?_r=1&_d=e2be7ah698cmki&sec_uid=MS4wLjABAAAAUZpIH8sePUuKLihfvwbuHZ2ZmRAih1_Oo4_O53GQE5eoJBP1BeHtZDQFLLZPPaBt&share_author_id=7111413465508955141&sharer_language=en&source=h5_m&u_code=e2be7l59d33d51&timestamp=1739831247&user_id=7111413465508955141&sec_user_id=MS4wLjABAAAAUZpIH8sePUuKLihfvwbuHZ2ZmRAih1_Oo4_O53GQE5eoJBP1BeHtZDQFLLZPPaBt&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7458933835179394821&share_link_id=e86fe894-8f9c-4710-99e0-f0c71da43f6d&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1" 
              target="_blank" rel="noopener noreferrer">
             <span className='flex flex-row justify-center text-sm mt-1 ml-1'>
             <AiFillTikTok size={20} className=' text-white mx-2' /> 
             <p>Follow us on our tiktok</p></span></a>

             
             
             <a 
             href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=imran-khan-yusuf-b54981350"
             target="_blank"  rel="noopener noreferrer">
             <span className='flex justify-center text-sm mt-1 mr-2'>
             <FaLinkedin size={20} className=' text-white mx-2' /> 
             <p>Follow us on linkedIn</p></span></a>

          </div>
          </div>

          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black
           w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-600 font-normal'>
          <div className='flex flex-col'>
             <p className='flex justify-center text-lg text-white'>Registered Office</p>
             <p className='flex justify-center text-sm mt-2'>NO. 00, KANO STATE,</p>
             <p className='flex justify-center text-sm mt-2'>NIGERIA , KANO ,</p>
             <p className='flex justify-center text-sm mt-2'>KANO STATE, NIGERIA</p>
            </div>
          </div>

          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black gap-4
             w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-600 font-normal'>
             <div className=' flex flex-col gap-1  flex-wrap'>
             <div className='flex flex-row'>
            <p className='flex justify-center ml-[55px] text-lg text-white'>Contact Us</p>
             </div>
             <a href="mailto:ikysmultiprojectltd@gmail.com" >
             <span className='flex justify-center text-sm mt-1 '>ikysmultiprojectltd@gmail.com</span>
             </a>
             <a href="tel:+2348137338938"> 
             <span className='flex justify-center text-sm mt-1 '>+234 813 733 8938</span>
             </a>
             <a href="tel:+2348137338938"> 
             <span className='flex justify-center text-sm mt-1 '>+234 703 505 5162</span>
             </a>
             </div>
          </div>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
