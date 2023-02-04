import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA } from '../Analytics/GoogleAnalytic';

export function usePageViewGA() {
  const location = useLocation();

  // initialize GA
  useEffect(() => {
    GA.init();
  }, []);

  // page view event
  useEffect(() => {
    const currentPath = location.pathname + location.search;
    GA.sendPageView(currentPath);
  }, [location]);
}
