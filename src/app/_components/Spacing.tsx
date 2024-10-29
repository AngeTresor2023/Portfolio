import { cn } from '@/lib/utils';
import React from 'react'
export type SpacingProps = {size?: "sm" | "md"| "lg";
    
};
const Spacing = ({size = "md"}: SpacingProps) => {
  return <div className={cn({
    "h-4 lg:h-8": size === "sm",
    "h-8 lg:h-12": size === "md",
    "h-24 lg:h-32": size === "lg",
  })}/>;
}

export default Spacing