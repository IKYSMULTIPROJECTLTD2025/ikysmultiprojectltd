import React, { useEffect, useState, useRef } from 'react';
import { getPosts } from '../../../utils/account/posts/posts';

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
  thumbnailUrl: string;
  user: User;
  createdAt: string;
}

const Header3 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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

  return (
    <div className="flex min-h-screen h-[740px] bg-lime-100 overflow-y-auto max-md:p-2 md:p-5 flex-col items-center w-full font-bold">
      <div className="flex flex-wrap justify-center rounded-lg bg-lime-100 max-md:gap-2 md:gap-5 w-full overflow-y-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col border-2 border-gray-500 bg-green-50 rounded-lg max-sm:p-2 p-4 shadow-md w-full"
          >
            <h2 className="text-lg font-sans font-bold">{post.title}</h2>

            {post.type === 'VIDEO' && post.contentUrl && (
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter(post.id)}
                onMouseLeave={() => handleMouseLeave(post.id)}
              >
                {/* Thumbnail */}
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="rounded-lg w-full h-auto"
                />
                {/* Video duration */}
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {getVideoDuration(post.id) || '0:00'}
                </div>
                {/* Video element (hidden by default) */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current.set(post.id, el);
                  }}
                  src={post.contentUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  controls
                  muted
                />
              </div>
            )}

            {post.type === 'IMAGE' && post.contentUrl && (
              <img
                src={post.contentUrl}
                alt={post.title}
                className="mt-3 rounded-lg max-h-screen h-auto w-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header3;
