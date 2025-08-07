"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const LoadingAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000); // Start fading out after 2 seconds

    return () => {
      clearTimeout(fadeOutTimer);
    };
  }, []);
  
  // Hide component completely after fade out animation
  if (isFadingOut && !isMounted) return null;


  return (
    <div
      className={cn(
        "fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
        !isMounted && "opacity-100",
        isFadingOut && "opacity-0 pointer-events-none"
      )}
      onTransitionEnd={() => {
        if (isFadingOut) setIsMounted(false)
      }}
    >
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold">
          <span className="animate-fade-in" style={{ animationDelay: '0.2s' }}>Hello,</span>
          <span className="animate-fade-in" style={{ animationDelay: '0.8s' }}> World.</span>
        </h1>
        <p 
          className="font-body text-lg md:text-xl text-primary mt-2 animate-fade-in-up" 
          style={{ animationDelay: '1.4s' }}
        >
          Welcome to my portfolio.
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
