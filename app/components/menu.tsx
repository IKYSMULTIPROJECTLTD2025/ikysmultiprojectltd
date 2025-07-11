import Link from "next/link"
import { MdContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const Menu = () => {

  return (

    <nav className="absolute top-12 right-0 px-2  shadow-md z-10 bg-slate-900  
    border-2 border-slate-300  overflow-y-auto">
        <div className="flex flex-row  " >
                <div className=" overflow-y-auto ">
                <ul className="flex flex-col gap-1 text-white  p-1 " >
               
                 <Link href={{pathname:'/services'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <GrServices size={20} />Services</p></li></Link>
                
                 <Link href={{pathname:'/projects'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <GrProjects size={20} />Projects</p></li></Link>
               
                 <Link href={{pathname:'/moreInfo'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <FaInfoCircle size={20} />MoreInfo</p></li></Link>

                 <Link href={{pathname:'/contact'}}>
                 <li className="text-md hover:underline" >
                 <p className="flex flex-row gap-2"> <MdContactPhone size={20} />Contact Us</p></li></Link>
            
            </ul>
            </div>        
       </div> 
    </nav>
  )
}

export default Menu