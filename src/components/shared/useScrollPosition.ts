import { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

function useScrollPosition(delay = 5) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {setScrollPosition(window.pageYOffset);};
    const debouncedHandleScroll = debounce(handleScroll, delay);

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [delay]);

  return scrollPosition;
}

export default useScrollPosition;
