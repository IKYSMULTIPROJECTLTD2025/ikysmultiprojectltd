import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../utils/account/posts/posts';
import { FaUserCircle } from 'react-icons/fa'; // React icon for user placeholder

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
  user: User;
  createdAt: string;
}

const Header4 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading)
    return <p className="text-center h-screen w-full bg-white text-lg font-bold">Loading...</p>;
  if (error)
    return <p className="text-center h-screen bg-white w-full text-red-500">{error}</p>;

  return (
    <div className="flex h-[1400px] bg-white overflow-y-auto max-md:p-2 md:p-5 flex-col items-center w-full font-bold">
      <div className="flex flex-wrap justify-center max-md:gap-2 md:gap-5 w-full overflow-y-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col border-2 border-gray-500 rounded-lg p-4 shadow-md w-full"
          >
            {/* User Info */}
            <div className="flex items-center mb-4">
              {post.user.profile.photoUrl ? (
                <img
                  src={post.user.profile.photoUrl}
                  alt={`${post.user.firstName} ${post.user.lastName}`}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
              ) : (
                <FaUserCircle className="w-12 h-12 text-gray-500" />
              )}
              <div className="ml-4">
                <p className="text-lg font-bold">
                  {post.user.firstName} {post.user.lastName}
                </p>
                <p className="text-sm text-gray-600">
                  Followers: {post.user.followerCount} | Following: {post.user.followingCount}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <h2 className="text-lg font-sans font-bold">{post.title}</h2>
            <p className="whitespace-pre-wrap text-sm font-sans text-gray-900 mb-4">{post.description}</p>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header4;
