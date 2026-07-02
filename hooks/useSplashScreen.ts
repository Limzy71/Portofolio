"use client";

import { useState, useEffect, useCallback } from "react";

const SPLASH_DURATION = 3000;
const STORAGE_KEY = "splash-seen";

export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(STORAGE_KEY);
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const skipSplash = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  return { isVisible, skipSplash };
}
