import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Store home page scroll position
let homeScrollPosition = 0;

export const useScrollRestoration = () => {
  const { pathname } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    // Save scroll position when leaving home page
    if (previousPath.current === "/" && pathname !== "/") {
      homeScrollPosition = window.scrollY;
    }

    // Restore or scroll to top based on destination
    if (pathname === "/") {
      // Returning to home - restore previous position
      if (previousPath.current !== null && previousPath.current !== "/") {
        window.scrollTo(0, homeScrollPosition);
      }
    } else {
      // Any other page - scroll to top
      window.scrollTo(0, 0);
    }

    previousPath.current = pathname;
  }, [pathname]);
};
