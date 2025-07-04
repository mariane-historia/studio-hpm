import React from "react";

interface FolderDivProps {
  fill?: string;
  className?: string;
}

const FolderDiv: React.FC<FolderDivProps> = ({
  fill = "#111",
  className = "",
}) => (
  <svg
    viewBox="0 0 1442 1026"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`w-full h-auto ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill={fill}
      d="M1441 1011c0 2.20-2.17 12-14 14H2a5 5 0 0 1-5-5V146.741c0-33.137 26.863-60 60-60h625.168a60 60 0 0 0 46.774-22.42l32.859-40.9A60.001 60.001 0 0 1 812.575 1H1381c33.14 0 60 26.863 60 60v950Z"
    />
  </svg>
);


export default FolderDiv;
