import React, { useEffect, useState } from 'react';
import { getSubCommentsVideo } from '@/app/utils/commentVideo';
import { FaRegUserCircle } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';
import LikeSubComment from './likeSubComment';
import ThirdComments from '../thirdComments/makeSubComment';
import ThirdCommentList from '../thirdComments/seeSubComments';

interface Comment {
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
  commentId: string;
}

const SubCommentList: React.FC<Props> = ({ commentId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [commentVisible, setCommentVisible] = useState(false);

  const handleCommentClick = ()=>{
    setCommentVisible(!commentVisible);

 };  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getSubCommentsVideo(commentId);
        console.log('Comments data:', commentsData);
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [commentId]);

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
      <div>No Reply Available!
        <p>Be the first to reply here.</p>
      </div>
    ); 
  }

  return (
    <div className="mt-3 text-sm">
      <h2 className="text-sm font-bold mb-2">Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="mb-4">
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
              expandedComments.includes(comment.id) ? (
                <>
                  {comment.content}
                  <button
                    className="text-blue-500 hover:underline ml-2"
                    onClick={() => toggleExpandedComment(comment.id)}
                  >
                    Read less
                  </button>
                </>
              ) : (
                <>
                  {comment.content.slice(0, 100)}...
                  <button
                    className="text-blue-500 hover:underline ml-2"
                    onClick={() => toggleExpandedComment(comment.id)}
                  >
                    Read more
                  </button>
                </>
              )
            ) : (
              comment.content
            )}
          </div>

          <div className='flex justify-between '>
          <button className='flex flex-row bg-blue-50 border h-8 border-black rounded-sm 
          mt-1 p-1 '>
          <LikeSubComment subCommentId={comment.id.toString()} />
          </button>

          <div><ThirdComments subCommentId={comment.id.toString()}/></div>

          <button className=' w-auto h-8  px-5
          border border-blue-950'>Reply</button>

            <button className=' w-auto h-8  px-5 border border-blue-950 '
            onClick={handleCommentClick}> {commentVisible ? ( <p>Hide Replies</p>  ) : (
            <p>See Replies</p>  )}</button>

         </div>

           {commentVisible && ( <span className='max-sm:overflow-x-auto max-sm:overflow-y-auto 
            bg-slate-200 ml-20 h-34  w-full  p-2'> <div className='flex justify-between 
            flex-row text-lg max-sm:text-sm   max-sm:overflow-y-auto max-sm:overflow-x-auto'>
           <ThirdCommentList subCommentId={comment.id.toString()}/>
           </div> </span>  )  }

        </div>
      ))}
    </div>
  );
};

export default SubCommentList;
