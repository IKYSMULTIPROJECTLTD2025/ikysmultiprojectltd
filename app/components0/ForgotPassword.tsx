'use client'
import React, { useState, useEffect } from 'react';
import { forgotPassword, ForgotPasswordData } from '../utils/account/auth/resetPassword'; 
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { setEmail } from "../app/registerOtp";
import { setUser } from "../app/userSlice";
import Cookies from 'js-cookie';


const ForgotPassword = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setUserEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const userId =  Cookies.get('userId');
    const token = Cookies.get('accessToken');
    const isAuthenticated = Cookies.get('isAuthenticated');

    if (isAuthenticated === 'true' && userId && token) {
      router.push('/');
    } 
  
}, []);

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    try {
      if (loading) return;
  
      if (!agreeTerms) {
        setError('Please agree to the terms and conditions.');
        return;
      }
  
      if (!email) {
        setError('Email is required.');
        return;
      }

      if (!isEmailValid(email)) {
        setError('Please enter a valid email address.');
        return;
      }
  
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      if (newPassword) {
        const hasNumber = /\d/.test(newPassword);
        const hasUppercase = /[A-Z]/.test(newPassword);
        const hasLowercase = /[a-z]/.test(newPassword);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
        const hasMinLength = newPassword.length >= 8;
        
        if (!(hasNumber && hasUppercase && hasLowercase && hasSpecialCharacter && hasMinLength)) {
          setError('Password must be at least 8 characters, one number, one uppercase letter, one lowercase letter, and one special character.');
        } else {
          setError(null);
        }
      }
 
      setLoading(true);
  
      if (email) {
        const forgotPasswordData: ForgotPasswordData = {
          email,
          newPassword: newPassword,
          confirmNewPassword: confirmPassword,
        };
  
        const passwordUpdateResponse = await forgotPassword(forgotPasswordData);
  
        if (passwordUpdateResponse.success) {

        const registeredUserData = passwordUpdateResponse.data;

          dispatch(setUser(registeredUserData as any));
          dispatch(setEmail(email));
          setSuccess('please verify your Email');
          router.push('/Sign_In/Forgot_Password/verify');
          setError(null);
        } else {
          setError(passwordUpdateResponse.error || 'Failed to reset password');
          setSuccess(null);
        }
      } else {
        setError('Invalid OTP. Please enter a valid OTP.');
        setSuccess(null);
      }
    } catch (error) {
      console.error(error);
      setError(' invalid otp or was expired. Please try again.');
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };
  
  
  const isSubmitDisabled =
    loading || !agreeTerms || !email || !newPassword || !confirmPassword ;


  return (
    <div className='h-screen bg-lime-500 font-bold'>
      <div>
        <h1 className='flex justify-center text-xl text-slate-950 pt-16'>
          Reset Password
        </h1>
      </div>

      <div className='flex justify-center'>
        <input
          type='email'
          className='h-7 p-2 mt-5 border-2 border-slate-950 lg:w-1/3 
          max-lg:w-2/4 max-sm:w-full focus:outline max-sm:m-2 bg-white text-sm'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>

      <div className='flex justify-center'>
        <input
          type='password'
          className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 max-sm:m-2 p-2 
          mt-5 border-2 border-slate-950 focus:outline bg-white text-sm'
          placeholder='Enter new password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className='flex justify-center'>
        <input
          type='password'
          className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 max-sm:m-2 p-2 mt-5 
          border-2 border-slate-950 focus:outline bg-white text-sm'
          placeholder='Confirm new password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className='flex justify-center mt-3'>
        <input
          type='checkbox'
          className='mr-2 w-4 h-4 mt-1'
          checked={agreeTerms}
          onChange={() => setAgreeTerms(!agreeTerms)}
        />
         <Link href={{pathname:'/Terms'}}>
        <p className='text-sm text-indigo-950'>I agree with terms and conditions</p>
        </Link>
     </div>

      <div className='flex justify-center'>
        <button
          type='submit'
          className={`text-slate-50 bg-slate-950 lg:w-1/4 max-lg:w-2/5 
          max-sm:w-5/6 h-7 text-sm hover:bg-blue-950 rounded-xl mt-2 ${
            isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleSubmit}
        >
          {loading ? 'Resetting Password...' : 'Update'}
        </button>
      </div>

       {error && (
        <div className='flex justify-center text-red-500 text-sm m-2'>
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className='flex justify-center text-green-500 text-sm m-2'>
          <p>{success}</p>
        </div>
      )}

    </div>
  );
};

export default ForgotPassword;
