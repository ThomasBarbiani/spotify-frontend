
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
  children: React.ReactNode;
  className?: string
}

const Box: React.FC<SidebarProps> = ({ 
  children,
  className
}) => {
  return (
    <div
      className={twMerge(`
        bg-[#121212]
        rounded-lg
        h-fit
        w-full
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;