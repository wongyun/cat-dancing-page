import { useState, useEffect, useCallback } from 'react';

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState('bounce');
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const toggleAnimation = useCallback(() => {
    setIsAnimating(!isAnimating);
  }, [isAnimating]);

  const changeAnimationType = useCallback((type) => {
    setAnimationType(type);
    setIsAutoMode(false);
  }, []);

  const toggleAutoMode = useCallback(() => {
    setIsAutoMode(!isAutoMode);
    if (!isAutoMode) {
      setIsAnimating(true);
    }
  }, [isAutoMode]);

  const changeAnimationSpeed = useCallback((speed) => {
    setAnimationSpeed(speed);
  }, []);

  const stopAllAnimations = useCallback(() => {
    setIsAnimating(false);
    setIsAutoMode(false);
  }, []);

  useEffect(() => {
    if (isAnimating && isAutoMode) {
      const interval = setInterval(() => {
        const animations = ['bounce', 'wiggle', 'spin', 'dance'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        setAnimationType(randomAnimation);
      }, 3000 / animationSpeed);

      return () => clearInterval(interval);
    }
  }, [isAnimating, isAutoMode, animationSpeed]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      switch (event.key) {
        case ' ':
          event.preventDefault();
          toggleAnimation();
          break;
        case '1':
          changeAnimationType('bounce');
          break;
        case '2':
          changeAnimationType('wiggle');
          break;
        case '3':
          changeAnimationType('spin');
          break;
        case '4':
          changeAnimationType('dance');
          break;
        case 'a':
        case 'A':
          toggleAutoMode();
          break;
        case 'Escape':
          stopAllAnimations();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [toggleAnimation, changeAnimationType, toggleAutoMode, stopAllAnimations]);

  return {
    isAnimating,
    animationType,
    isAutoMode,
    animationSpeed,
    toggleAnimation,
    changeAnimationType,
    toggleAutoMode,
    changeAnimationSpeed,
    stopAllAnimations
  };
};