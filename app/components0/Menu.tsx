import Link from "next/link"
import { MdFeedback } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";

interface UserInfo {
  firstName: string;
  lastName: string;
  profile?: {
    photoUrl: string | null;
  };
}

const Menu = () => {

  return (

    <nav className="fixed top-10 left-0 px-2  shadow-md z-10 bg-slate-900  
    border-2 border-slate-300  overflow-y-auto">
        <div className="flex flex-row  " >
                <div className=" overflow-y-auto ">
                <ul className="flex flex-col gap-1  p-1 " >
               
                 <Link href={{pathname:'/Post'}}>
                 <li className="text-md  hover:underline" >
                 <p className="flex flex-row gap-2"> <RiListIndefinite size={20} />My Posts</p></li></Link>
              
                 <Link href={{pathname:'/Group'}}>
                 <li className="text-md hover:underline" >
                <p className="flex flex-row gap-2"> <FaPeopleGroup size={20} />Group</p></li></Link>
              
                 <Link href={{pathname:'/Class'}}>
                 <li className="text-md hover:underline" >
                <p className="flex flex-row gap-2"> <SiGoogleclassroom size={20} />Class</p></li></Link>

                <Link href={{pathname:'/bootCamp/create'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <FaSchool size={20} />BootCamp</p></li></Link>
              
                 <Link href={{pathname:'/academy/create'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <IoSchool size={20} />Academy</p></li></Link>
               
                 <Link href={{pathname:'/Feedback'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <MdFeedback size={20} />Feedback</p></li></Link>
                
                 <Link href={{pathname:'/Contact'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <MdContactPhone size={20} />Contact</p></li></Link>
                
                 <Link href={{pathname:'/Settings'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <BiSupport size={20} /> Support</p></li></Link>

                 <Link href={{pathname:'/About'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <FcAbout size={20} />About Us</p></li></Link>
            
                 <Link href={{pathname:'/Terms'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <MdOutlinePrivacyTip size={20} /> Terms</p></li></Link>
              
                 <Link href={{pathname:'/Privacy'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <SiGnuprivacyguard size={20} /> Privacy</p></li></Link>
               
                 <Link href={{pathname:'/Help'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <FaHandsHelping size={20} /> Help</p></li></Link>
  
            </ul>
            </div>        
       </div> 
    </nav>
  )
}

export default Menu