import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скрол до початку сторінки
  }, [pathname]);

  return null;
};

export default ScrollToTop;
