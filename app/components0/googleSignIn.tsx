import React, { useEffect } from 'react';
import {  signIn, useSession } from 'next-auth/react';
import { setAuthenticated } from '../app/authenticateSlice';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const GoogleSignIn: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user && (session.user as User).id) {
      Cookies.set('accessToken', "fbeae2838c3783ad69b03b656af22fbeae2838c3783ad69b03b656af2",{ path: '/', expires: 7 });
      Cookies.set('userId', (session.user as User).id, { path: '/', expires: 7 });

      dispatch(setAuthenticated(true));
      
    }
  }, [session]);

  const handleSignInWithGoogle = async () => {
    try {
      await signIn('google');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className='font-bold'>
      <div className='flex justify-center mt-3'>
        <div className='flex flex-col'>
          <div className='border-2 border-blue-950 h-auto w-auto lg:px-5 p-2'>
            <h1 className='flex justify-center text-sm max-sm:text-sm'>or continue with </h1>

            <div className='flex flex-row justify-between'>
              <div className='flex justify-center mb-3 mt-3 text-2xl'>
                <button
                  onClick={handleSignInWithGoogle}
                  type='button'
                  className='flex flex-row bg-white h-9 w-64 pt-2 hover:bg-cyan-200
                   border-2
                  border-blue-950 pb-1 text-center pl-3'>
                  <FaGoogle size={20} className='mr-1  text-red-700' />
                  <span className='text-green-700 text-sm   font-bold'>
                  <span className='text-yellow-700 mx-1'>Continue</span> 
                  <span className='text-red-700 mx-1'>With</span> 
                  <span className='text-blue-700 mx-1'>Your</span> 
                  <span className='text-lime-700 mx-1'>Google</span> 
                  
                  </span>
                </button>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default GoogleSignIn;
