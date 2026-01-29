import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Store home page scroll position
let homeScrollPosition = 0;

export const useScrollRestoration = () => {
  const { pathname } = useLocation();
  const previousPath = useRef<string | null>(null);

  // Use useLayoutEffect to scroll before browser paint
  useLayoutEffect(() => {
    // Save scroll position when leaving home page
    if (previousPath.current === "/" && pathname !== "/") {
      homeScrollPosition = window.scrollY;
    }

    // Restore or scroll to top based on destination
    if (pathname === "/") {
      // Returning to home - restore previous position
      if (previousPath.current !== null && previousPath.current !== "/") {
        setTimeout(() => window.scrollTo(0, homeScrollPosition), 0);
      }
    } else {
      // Any other page - scroll to top immediately
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    previousPath.current = pathname;
  }, [pathname]);
};
