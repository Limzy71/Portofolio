"use client";

import { useState, useEffect, useCallback } from "react";

const SPLASH_DURATION = 3200;

export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  const skipSplash = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, skipSplash };
}
