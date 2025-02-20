import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import LikeComment from './likeComment';
import SubComments from './subComment/makeSubComment';
import SubCommentList from './subComment/seeSubComments';

interface CommentBanner {
  id: number;
  userId: number;
  content: string;
  User: {
    firstName: string;
    lastName: string;
    profile: {
      photoUrl: string;
    };
  };
  createdAt: string;
}

interface Props {
  productId: string;
}

const API_BASE_URL = 'http://localhost:3500';

const CommentListBanner1: React.FC<Props> = ({ productId }) => {
  const [comments, setComments] = useState<CommentBanner[]>([]);
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [commentVisible, setCommentVisible] = useState(false);

  const handleCommentClick = ()=>{
    setCommentVisible(!commentVisible);

 }; 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_BASE_URL}/comments/banner/${productId}`);
        if (!response.ok) {
          throw new Error(`Error fetching comments: ${response.statusText}`);
        }

        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error: any) {
        console.error('Error fetching comments:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [productId]);

  const toggleExpandedComment = (commentId: number) => {
    if (expandedComments.includes(commentId)) {
      setExpandedComments(expandedComments.filter(id => id !== commentId));
    } else {
      setExpandedComments([...expandedComments, commentId]);
    }
  };

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (comments.length === 0) {
    return (
      <div>
        No comments available!
        <p>Be the first one to make a comment here.</p>
      </div>
    );
  }

  return (
    <div className="mt-3 text-sm">
      <h2 className="text-sm font-bold mb-2">Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="mb-2">
          <div className="flex items-center mb-2">
            {comment.User.profile.photoUrl ? (
              <img
                src={comment.User.profile.photoUrl}
                alt={`${comment.User.firstName}`}
                className="w-8 h-8 rounded-full mr-2"
              />
            ) : (
              <FaRegUserCircle className="w-8 h-8 rounded-full mr-2 text-gray-900" />
            )}
            <div>
              <p className="font-bold text-lg">
                {comment.User.firstName || 'User'} {comment.User.lastName || ''}
              </p>
              <p className="text-gray-600 text-sm">
                {formatDistanceToNow(new Date(comment.createdAt))} ago
              </p>
            </div>
          </div>
          <div className="whitespace-pre-line">
            {comment.content.length > 100 ? (
              <>
                {expandedComments.includes(comment.id)
                  ? comment.content
                  : `${comment.content.slice(0, 100)}...`}
                <button
                  className="text-blue-500 hover:underline ml-2"
                  onClick={() => toggleExpandedComment(comment.id)}
                >
                  {expandedComments.includes(comment.id) ? 'Read less' : 'Read more'}
                </button>
              </>
            ) : (
              comment.content
            )}
          </div>

          <div className='flex justify-between '>
          <button className='flex flex-row bg-blue-50 border h-8 border-black rounded-sm 
          mt-1 p-1 '>
          <LikeComment commentId={comment.id.toString()} />
          </button>
          
            <div><SubComments commentId={comment.id.toString()}/></div>
         
            <button className=' w-auto h-8  px-5 border border-blue-950 '
            onClick={handleCommentClick}> {commentVisible ? ( <p>Hide Replies</p>  ) : (
            <p>See Replies</p>  )}</button>

         </div>

          {commentVisible &&  
           (  <span className='max-sm:overflow-x-auto max-sm:overflow-y-auto  bg-slate-200 
           ml-20 h-34  w-full  p-2'> <div className='flex justify-between flex-row text-lg 
           max-sm:text-sm   max-sm:overflow-y-auto max-sm:overflow-x-auto'>
           <SubCommentList commentId={comment.id.toString()}/>
           </div> </span>  )  }


        </div>
      ))}
    </div>
  );
};

export default CommentListBanner1;
