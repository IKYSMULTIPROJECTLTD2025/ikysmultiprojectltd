import { useState, useEffect } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { like, getLikes } from '@/app/utils/account/posts/likes';
import { BiDislike, BiSolidDislike} from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
  postId: string;
}

const LikePost: React.FC<LikeButtonProps> = ({ postId }) => {

  const router = useRouter();

  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [disliked, setDisLiked] = useState<boolean>(false);

  useEffect(() => {

    const localStorageLiked = Cookies.get(`liked_${postId}`);
    if (localStorageLiked === 'true') { 
      setLiked(true);
    }

    const fetchLikeCount = async () => {

      try {
        setLoading(true);
        const count = await getLikes(postId);
        setLikeCount(count);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching like count:', error);
        setLoading(false);
      }
    };

    fetchLikeCount();
  }, [postId]);

  useEffect(() => {

    const localStorageLiked = Cookies.get(`liked_${postId}`);
    if (localStorageLiked === 'false') { 
      setDisLiked(true);
    }

    const fetchLikeCount = async () => {
      try {
        setLoading(true);
        const count = await getLikes(postId);
        setLikeCount(count);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching like count:', error);
        setLoading(false);
      }
    };
    

    fetchLikeCount();
  }, [postId]);

  const handleLikeClick = async () => {
    try {

      const token = Cookies.get('accessToken');
      if (!token) {
        router.push('/Sign_In');
        return;
      }

      setLoading(true);
          await like(postId);
         Cookies.set(`liked_${postId}`, 'true', { expires: 1, path: '/' });
          setLikeCount((prevCount) => prevCount + 1); 
          setLiked(true);
         
        
    } catch (error) {
      console.error('Error liking image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisLikeClick = async () => {
    try {

      const token = Cookies.get('accessToken');
      if (!token) {
        router.push('/Sign_In');
        return;
      }

      setLoading(true);
          await like(postId);
          Cookies.set(`liked_${postId}`, 'false', { expires: 360, path: '/' });
          setLikeCount((prevCount) => prevCount - 1); 
          setDisLiked(true);
        
    } catch (error) {
      console.error('Error liking image:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='flex flex-row '>
    <button  className='flex flex-row ' >
      {liked ? (
        <FaHeart onClick={handleDisLikeClick} size={30} className="text-lime-700" />
      ) : (
        <FaRegHeart  onClick={handleLikeClick} size={30} className="text-lime-700" />
      )}
      <span className='ml-1 text-xs mt-1 max-sm:hidden'>likes</span>
      <span className='ml-1 text-xs mt-1'>{likeCount}</span>
    </button>
    </div>
  );
};

export default LikePost;
