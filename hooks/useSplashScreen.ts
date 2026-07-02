"use client";

import { useState, useEffect, useCallback } from "react";

const SPLASH_DURATION = 4200;

export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const skipSplash = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, skipSplash };
}
