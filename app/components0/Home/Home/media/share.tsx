import React, { useState } from 'react';
import { BiSolidCopyAlt } from "react-icons/bi";

interface PostSharingProps {
  postUrl: string;
}

const SharingPost: React.FC<PostSharingProps> = ({ postUrl }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(postUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Show success message for 2 seconds
    }).catch((error) => {
      console.error("Failed to copy text: ", error);
    });
  };

  return (
    <div>
    <div className="w-auto flex-row gap-1 rounded-lg">
      <button onClick={handleCopy} className="flex flex-row gap-1">
          <BiSolidCopyAlt size={30} className="text-lime-700" />
          <p className="text-xs mt-1 font-bold">Copy</p>
      </button>
      </div>
         {copySuccess && ( <p className="  text-green-600 text-xs mt-2">Copied to clipboard!</p> )}
    </div>
  );
};

export default SharingPost;