'use client';
import React, { useState } from 'react';
import { createPost } from '../utils/account/posts/posts'; 
import { FaTrash } from 'react-icons/fa6';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'VIDEO' | 'IMAGE' | 'TEXT'>('TEXT');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0); // Progress bar value
  const [estimatedTime, setEstimatedTime] = useState<string>(''); // Estimated time for completion

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Generate a preview URL for the selected file
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(fileUrl);
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setEstimatedTime('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setProgress(0);
    setMessage('');
    setEstimatedTime('');
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('type', type);
  
    if (file) {
      formData.append('file', file);
    }
  
    const startTime = Date.now(); // Start time for upload
  
    try {
      const response = await createPost(formData, (progressEvent) => {
        const { loaded, total } = progressEvent;
        if (total) {
          const percentage = Math.round((loaded / total) * 100);
          setProgress(percentage);
  
          // Calculate elapsed time
          const elapsedTime = (Date.now() - startTime) / 1000; // Elapsed time in seconds
          const uploadSpeed = loaded / elapsedTime; // Upload speed in bytes/second
  
          // Avoid divide-by-zero issues
          if (uploadSpeed > 0) {
            const remainingTime = (total - loaded) / uploadSpeed; // Remaining time in seconds
  
            // Format remaining time into minutes and seconds
            const minutes = Math.floor(remainingTime / 60);
            const seconds = Math.round(remainingTime % 60);
            setEstimatedTime(`${minutes} min ${seconds} sec`);
          }
        }
      });
  
      if (typeof response === 'string') {
        setMessage(`Error: ${response}`);
      } else if (response && response.message) {
        if (response.post) {
          setMessage('Post created successfully!');
          setTitle('');
          setDescription('');
          setType('TEXT');
          setFile(null);
          setPreviewUrl(null);
          setProgress(100); // Mark as fully uploaded
          setEstimatedTime('');
        } else {
          setMessage(`Error: ${response.message}`);
        }
      }
    } catch (error) {
      setMessage('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-lime-500 py-10 border-2 border-red-950'>
      {loading ? (
        <div className="flex pt-40 flex-col items-center">
          <h1 className="text-xl text-white font-bold mb-4">Uploading...</h1>
          <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-900 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="mt-2 text-white text-lg">{progress}%</p>
          {estimatedTime && <p className="mt-2 text-white text-sm">Time remaining: {estimatedTime}</p>}
        </div>
      ) : (
        <>
            <div>
            <h1 className='flex justify-center md:text-xl text-lg text-slate-950 font-family-bold font-bold mb-'>
              Upload or Write Your Post Here
            </h1>
          </div>
 
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Write your title here'
                className='lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full h-10 mt-5 text-lg m-2 focus:outline p-1 font-bold rounded-md bg-white text-left border-2 border-slate-950'
                required
              />
            </div>
  
            <div className='flex justify-center'>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Write your post here'
                className='lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full h-64 mt-5 text-sm p-1 font-bold mx-2 rounded-md bg-white text-left border-2 border-slate-950'
                required
              />
            </div>
  
            <div className='flex justify-center'>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value as 'VIDEO' | 'IMAGE' | 'TEXT');
                  setFile(null); // Reset file selection on type change
                  setPreviewUrl(null); // Reset preview
                }}
                className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5 max-sm:w-3/5 h-8 text-slate-950 bg-white border-2 border-slate-950 rounded p-1 mt-5'
              >
                <option value='TEXT'>Text</option>
                <option value='IMAGE'>Image</option>
                <option value='VIDEO'>Video</option>
              </select>
            </div>
  
            {type !== 'TEXT' && (
              <div className='flex justify-center'>
                <input
                  type='file'
                  accept={type === 'VIDEO' ? 'video/*' : 'image/*'}
                  onChange={handleFileChange}
                  className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5 max-sm:w-3/5 h-10 text-slate-950 bg-white border-2 border-slate-950 rounded p-1 mt-5'
                />
              </div>
            )}
  
            {previewUrl && (
              <div className='flex justify-center mt-5'>
                {type === 'IMAGE' && <img src={previewUrl} alt='Preview' className='lg:w-96 max-lg:w-1/3 max-md:w-2/5 max-sm:w-3/5 rounded' />}
                {type === 'VIDEO' && (
                  <video controls className='lg:w-96 max-lg:w-1/3 max-md:w-2/5 max-sm:w-3/5 rounded'>
                    <source src={previewUrl} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                )}
                <button
                  type='button'
                  onClick={handleDeleteFile}
                  className='absolute mt-1 text-red-700 hover:text-red-600'
                >
                  <FaTrash size={32} />
                </button>
              </div>
            )}
  
            <div className='flex justify-center'>
              <button
                type='submit'
                className='lg:w-2/5 max-lg:w-2/3 max-md:w-2/5 h-7 text-slate-50 bg-black mb-2 hover:bg-red-950 rounded max-sm:w-4/5 mt-6 text-sm'
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Your Post'}
              </button>
            </div>
  
            {message && (
              <div className='flex justify-center mt-1'>
                <p className='text-white font-bold'>{message}</p>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default Post;
