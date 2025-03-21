import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      normalizeWheel: true,
    });

    lenis.scrollTo(0, { immediate: true }); // Forces scroll to top on route change

    return () => {
      lenis.destroy(); // Cleanup Lenis instance
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
