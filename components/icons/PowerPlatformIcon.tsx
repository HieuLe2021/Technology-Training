import React from 'react';

export const PowerPlatformIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path 
      d="M497.5 14.5c-20-20-52.3-20-72.3 0L14.5 425.2c-20 20-20 52.3 0 72.3s52.3 20 72.3 0L425.2 86.8v149.3l-60.1 60.1 92.2 92.2 40.1-40.1V86.8c0-20-10.4-52.2-22.4-72.3z" 
      fill="#c773e0" 
    />
    <path 
      d="m425.2 86.8 72.3-72.3c-20-20-52.3-20-72.3 0L14.5 425.2c-20 20-20 52.3 0 72.3s52.3 20 72.3 0l120.6-120.6v-149l60.1 60.1-236 236-40-40.1V86.8c0-20 10.5-52.3 22.4-72.3z" 
      fill="#592f80" 
    />
  </svg>
);