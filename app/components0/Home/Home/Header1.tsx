import React, { useEffect, useState, useRef } from 'react';
import { getPosts } from '../../../utils/account/posts/posts';
import { FaUserCircle } from 'react-icons/fa'; // React icon for user placeholder
import FollowUser from './media/followers';
import LikePost from './media/likes';
import SharingPost from './media/share';
import { MdMessage } from "react-icons/md";
import { BiRepost } from "react-icons/bi";


interface User {
  id: string;
  firstName: string;
  lastName: string;
  followerCount: number;
  followingCount: number;
  profile: {
    photoUrl?: string;
  };
}

interface PostData {
  id: string;
  title: string;
  description: string;
  type: 'VIDEO' | 'IMAGE' | 'TEXT';
  contentUrl?: string;
  thumbnailUrl:string;
  user: User;
  createdAt: string;
}

const Header1 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      if (typeof data === 'string') {
        setError(data); // Handle error string returned by the utility
      } else {
        setPosts(data as PostData[]);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const toggleReadMore = (id: string) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMouseEnter = (postId: string) => {
    const videoElement = videoRefs.current.get(postId);
    if (videoElement) videoElement.play();
  };

  const handleMouseLeave = (postId: string) => {
    const videoElement = videoRefs.current.get(postId);
    if (videoElement) videoElement.pause();
  };

  const getVideoDuration = (postId: string): string | null => {
    const videoElement = videoRefs.current.get(postId);
    if (videoElement) {
      const duration = videoElement.duration;
      if (!isNaN(duration)) {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    }
    return null;
  };


  if (loading)
    return <p className="text-center min-h-screen h-[740px] w-full bg-white text-lg font-bold">Loading...</p>;
  if (error)
    return <p className="text-center min-h-screen h-[740px] bg-white w-full text-red-500">{error}</p>;

  return (
    <div className="flex min-h-screen h-[740px]  bg-lime-100 overflow-y-auto max-md:p-2 md:p-5 flex-col items-center w-full font-bold">
      <div className="flex flex-wrap justify-center rounded-lg bg-lime-100 max-md:gap-2 md:gap-5 w-full overflow-y-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col border-2 border-gray-500 bg-green-50 rounded-lg max-sm:p-2 p-4 shadow-md w-full"
          >
            {/* User Info */}
            <div className='flex justify-between'>
            <div className="flex items-center mb-4">
              {post.user.profile.photoUrl ? (
                <img
                  src={post.user.profile.photoUrl}
                  alt={`${post.user.firstName} ${post.user.lastName}`}
                  className="w-12 h-12 rounded-full border-2 border-gray-500 "
                />
              ) : (
                <FaUserCircle className="w-12 h-12 text-gray-500" />
              )}
              <div className="ml-4">
                <p className="text-lg hover:underline hover:text-blue-900 font-bold">
                  {post.user.firstName} {post.user.lastName}
                </p>
                <p className="text-sm text-gray-600">
                  Followers: {post.user.followerCount} | Following: {post.user.followingCount}
                </p>
              </div>
            </div>

            <p className="text-lg font-bold">
              <div><FollowUser userId={post.user.id ? post.user.id.toString():''}/></div>
            </p>
            </div>

            <h2 className="text-lg font-sans font-bold">{post.title}</h2>
            
            <p className="whitespace-pre-wrap text-sm font-sans text-gray-900 mb-4">
              {expandedPosts[post.id] || post.description.length <= 150
                ? post.description
                : `${post.description.slice(0, 150)}...`}
              {post.description.length > 150 && (
                <span
                  onClick={() => toggleReadMore(post.id)}
                  className="text-blue-500 cursor-pointer ml-2"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </span>
              )}
            </p>

            {post.type === 'IMAGE' && post.contentUrl && (
              <img
                src={post.contentUrl}
                alt={post.title}
                className="mt-3 rounded-lg max-h-screen h-auto w-full"
              />
            )}

            {post.type === 'VIDEO' && post.contentUrl && (
              <video
                controls
                className="mt-3 rounded-lg max-h-screen h-auto w-full"
              >
                <source src={post.contentUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
             )}

            {post  && (
             <div className='w-full rounded-lg h-auto p-1 border-2 border-gray-500 mt-2'> 

              <div className='flex justify-between  '>

              <button className='flex flex-row  '>
               <LikePost postId={post.user.id.toString()} />
              </button> 

          
              <button className='flex flex-row'>
                    <MdMessage  size={30} className='text-lime-700'/>
                    <p className='text-xs mt-1'>Comments</p>
              </button>
             
            
             <button className='flex flex-row'>
                   <BiRepost  size={30} className='text-lime-700'/>
                   <p className='text-xs mt-1 ml-1 font-bold'>Repost</p>
             </button>
            
              <button >
                    <SharingPost 
                     postUrl={`http://localhost:3000/post/${post.id}`}
                    />
              </button>

              </div>
             
             </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Header1;
