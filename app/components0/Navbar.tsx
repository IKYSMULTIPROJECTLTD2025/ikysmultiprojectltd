'use client'
import   Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState,useEffect } from "react";
import Menu from "./Menu";
import { FaSearch } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { setAuthenticated } from "../app/authenticateSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "../utils/account/auth/logout";
import { RootState } from "@/app/app/store";
import { getCurrentUser } from "../utils/account/auth/userToken";
import Cookies from 'js-cookie';
import {  signOut, useSession } from 'next-auth/react';

interface UserInfo {
  firstName?: string;
  lastName?: string;
  profile?: {
    photoUrl: string | null;
  };
}

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null
}

const Navbar = () => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const isAuthenticated = useSelector((state: RootState) => state.authenticate.isAuthenticated);

  const [MenuVisible, setMenuVisible] = useState(false);
   const [SearchVisible, setSearchVisible] = useState(false);
   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(() => {
    if (session && session.user && (session.user as User).id) {
      Cookies.set('accessToken', "fbeae2838c3783ad69b03b656af22fbeae2838c3783ad69b03b656af2",{ path: '/', expires: 30 });
      Cookies.set('userId', (session.user as User).id, { path: '/', expires: 30 });
      dispatch(setAuthenticated(true));
    }
  }, [session]);

  const handleMenuClick = ()=>{
     setMenuVisible(!MenuVisible);

  };      const  closeMenu = ()=> {
        setMenuVisible(false);  
       };

        const handleSearch = ()=>{
    setSearchVisible(!SearchVisible);

  };  const  closeSearch = ()=> {
      setMenuVisible(false);   };

    const handleLogout = async () => {
      try {
        await logout();
        dispatch(setAuthenticated(false));
        router.push('/Sign_In'); 
      } catch (error:any) {
        console.error('Error during logout:', error.message);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await signOut();
        Cookies.remove('userId', { path: '/' }); 
        Cookies.remove('accessToken', { path: '/' }); 
        dispatch(setAuthenticated(false));
        router.push('/Sign_In'); 
      } catch (error:any) {
        console.error('Error during logout:', error.message);
      }
    };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userData = await getCurrentUser();
        setUserInfo(userData);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setErrorMessage('Failed to fetch user information. Please try again.');
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <div className=" w-full  " >
    
      <div className="bg-slate-900 pb-0.5 max-sm:py-1 border-2 border-purple-200 overflow-x-auto ">
        <div className=" flex justify-normal  ">
       
          <div className=" text-white mt-2 px-1   "> 
            <button 
             onClick={handleMenuClick} className="text-xl  font-bold"> 
               {MenuVisible ? (
             <FiX size={20}/>  ) : (
             <FiMenu size={20} />  )}
            
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
           
               (<Menu /> )
               
               }
               </div>
            </div>

              <Link href={{pathname:'/'}} >             
            <FaHome className='text-xl text-white  mr-2 mt-2'/>
            </Link>

            <Link href={{pathname: '/'}} className="flex-1">
             <h1 className="text-xl text-yellow-500 flex-1  max-sm:text-lg mt-1
              ">INFOBEATLIVE</h1>
            </Link>
  
               
            <div className="flex flex-row mr-2  ">

            {userInfo ? (
          <div className="flex items-center justify-center">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl hidden font-bold">{userInfo.firstName} {userInfo.lastName}</h1>
            {userInfo.profile?.photoUrl && (
              <img className="relative rounded-full w-7 h-7 mr-1 " src={userInfo.profile?.photoUrl} alt="Profile Image" />
            )}
          </div>  </div> ) : (  
            <p className="text-center hidden text-red-500">{errorMessage}</p>)}
            
{/*                 
            <button  onClick={handleSearch}  className='text-sm text-white 
            lg:hidden mr-5 '>

                {SearchVisible ? (
             <FiX />  ) : (
             <FaSearch />  )}
            
            </button> */}

            {status == 'authenticated' && (
             <button type="button" className="bg-gray-950 h-7 max-sm:h-7 px-4  text-sm
             rounded-sm text-slate-50 mt-1 -mr-1 hover:bg-slate-800 border
             border-slate-300 flex-1 "
             onClick={handleSignOut} >
             Logout
             </button>)}

          
            {isAuthenticated ? (
            <> 
            {status !== 'authenticated' && ( 
            <button type="button" className="bg-gray-950 h-7 max-sm:h-7 px-4  text-sm
            rounded-sm text-slate-50 mt-1 -mr-1 hover:bg-slate-800 border
            border-slate-300 flex-1 "
            onClick={handleLogout} >
            Logout
            </button>)}
            </>
            ):(
            <>
         {status !== 'authenticated' && (
          <Link href={{ pathname: '/Sign_Up' }}>
            <button type="button" className="bg-gray-950 h-7 max-sm:h-7 px-4  rounded-sm
             text-slate-50 mr-1 mt-1 hover:bg-slate-800 border max-lg:hidden 
             border-slate-300 text-sm ">
              SignUp
            </button>
          </Link>)}

          {status !== 'authenticated' && (
          <Link href={{ pathname: '/Sign_In' }}>
            <button type="button" className="bg-gray-950 h-7 max-sm:h-7  px-4 rounded-sm
             text-slate-50 mt-1 -mr-1 hover:bg-slate-800 border text-sm 
              border-slate-300 flex-1 ">
              SignIn
            </button>
          </Link>)}
          </>

          )}
         
      </div>     
     </div>                
    </div>  
    
  </div>
    
  )
}

export default Navbar


