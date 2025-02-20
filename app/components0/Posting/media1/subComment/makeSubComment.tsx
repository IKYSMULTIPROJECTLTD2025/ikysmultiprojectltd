'use client'
import React, { useState} from 'react'
import { FaMessage } from "react-icons/fa6";
import { postSubCommentBanner } from '@/app/utils/commentBanner';
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const SubComments = (commentId:any) => {

  const router = useRouter();

  const [commentContent, setCommentContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);

  const handleCommentClick = ()=>{
    setCommentVisible(!commentVisible);

 };      const  closeComment = ()=> {
       setCommentVisible(false);  
      };

  const handleCommentSubmit = async () => {
    try {

      const token = Cookies.get('accessToken');
      if (!token) {
        router.push('/Sign_In');
        return;
      }

      if (!commentContent.trim()) {
        setError('Comment cannot be empty');
        return;
      }
      setError('');
      setLoading(true);
      await postSubCommentBanner(commentContent, commentId);
      setSuccess(true);
      setLoading(false);
      setCommentVisible(false);  
    } catch (error) {
      setError('Failed to submit comment');
      setLoading(false);
      setCommentContent('');
    } finally{
      setLoading(false);
    }
  };
     return (
           <div className=''>

                 <button className=" hover:bg-green-200 w-auto h-8  px-5  border
                  border-blue-950" onClick={handleCommentClick}> Reply</button>

                 <div >
                 {commentVisible && 
           
                ( <div className='fixed md:top-40 md:left-10 max-md:top-20  max-md:left-5 
                flex justify-center text-sm bg-slate-300 border-2 border-black p-2 flex-col'>
                <div className='flex flex-row text-slate-950 sm:text-lg text-sm mb-3
                 gap-2'>
                  <FaRegWindowClose size={24} onClick={closeComment}/>
                  <h1>Make Your Reply</h1>
                </div>
                <div>
                  <textarea
                    className='w-64 h-32  max-sm:w-64 p-2 border-2 border-black'
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                  />
                </div>
                <div className='flex justify-center'>
                  <button
                    className='flex justify-center w-28 h-7 bg-black hover:bg-green-900
                     text-white font-bold pt-1 rounded-sm'
                    onClick={handleCommentSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>

                  {error && <p className="text-green-800 mt-3 flex justify-center"> submitted successfully!</p>}
                  {success && <p className="text-green-800 mt-3 flex justify-center"> submitted successfully!</p>}
                  {loading && <p className="text-blue-800 mt-3 flex justify-center">Submitting...</p>}
             
              </div> 
                 )
              
               }
               </div>

           </div>
  )
}

export default SubComments

