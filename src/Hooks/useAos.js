import { useEffect } from 'react';
import Aos from 'aos';

export function useAos() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 50,
    });
  }, []);
}
