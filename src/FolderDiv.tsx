import React from "react";

interface FolderDivProps {
  className?: string;
  bgImage?: string; 
  patternId?: string; 
}

const FolderDiv: React.FC<FolderDivProps> = ({
  className = "",
  bgImage,
  patternId = "folder-bg", // default id, can be overridden
}) => (
  <svg
    viewBox="0 0 1442 1026"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <pattern
        id={patternId}
        patternUnits="userSpaceOnUse"
        width="1442"
        height="1026"
      >
        {bgImage && (
          <image
            href={bgImage}
            x="0"
            y="0"
            width="1442"
            height="1026"
            preserveAspectRatio="xMidYMid slice"
          />
        )}
      </pattern>
    </defs>
    <path
      fill={`url(#${patternId})`}
      stroke="#fff"
      strokeWidth={0.5}
      d="M1441 1011c0 2.20-2.17 12-14 14H2a5 5 0 0 1-5-5V146.741c0-33.137 26.863-60 60-60h625.168a60 60 0 0 0 46.774-22.42l32.859-40.9A60.001 60.001 0 0 1 812.575 1H1381c33.14 0 60 26.863 60 60v950Z"
    />
  </svg>
);

export default FolderDiv;
