
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Tooltip as NextUITooltip } from "@nextui-org/react";
import { TooltipProps } from '@nextui-org/react';

const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  content, 
  delay,
  closeDelay,
  offset,
  placement
}) => {

  const defaultDelay = 220;
  const defaultCloseDelay = 0;
  const defaultOffset = 15;

  return (
    <NextUITooltip
      content={content}
      delay={delay !== undefined ? delay : defaultDelay} 
      closeDelay={closeDelay !== undefined ? closeDelay : defaultCloseDelay} 
      offset={offset !== undefined ? offset : defaultOffset} 
      placement={placement}
      className={twMerge(`
        rounded
        text-white
        bg-[#2A2A2A]
        font-medium
        border
        border-transparent 
      `,
        className
      )}
    >    
      {children}
    </NextUITooltip>
  );
};

export default Tooltip;