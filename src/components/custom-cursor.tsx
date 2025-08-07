"use client";
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
       if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        setIsHovering(false);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "hidden md:block pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full bg-primary/20 transition-[width,height] duration-300 ease-out",
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
        }}
      />
       <div
        className={cn(
          "hidden md:block pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full bg-primary transition-transform duration-200 ease-out",
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
        }}
      />
    </>
  );
};

export default CustomCursor;
